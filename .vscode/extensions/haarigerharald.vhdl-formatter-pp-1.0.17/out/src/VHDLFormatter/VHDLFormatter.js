"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAsserts = exports.ApplyNoNewLineAfter = exports.beautify3 = exports.beautifySemicolonBlock = exports.beautifyVariableInitialiseBlock = exports.beautifyPackageIsNewBlock = exports.beautifyComponentBlock = exports.beautifyCaseBlock = exports.AlignSign = exports.AlignSigns = exports.beautifyPortGenericBlock = exports.FormattedLineToString = exports.CodeBlock = exports.FormattedLine = exports.beautify = exports.BeautifierSettings = exports.signAlignSettings = exports.SetNewLinesAfterSymbols = exports.NewLineSettings = void 0;
var isTesting = false;
var ILEscape = "@_@";
var ILCommentPrefix = ILEscape + "comments";
var ILIndentedReturnPrefix = ILEscape;
var ILQuote = "⨵";
var ILSingleQuote = "⦼";
var ILBackslash = "⨸";
var ILSemicolon = "⨴";
var FormatMode;
(function (FormatMode) {
    FormatMode[FormatMode["Default"] = 0] = "Default";
    FormatMode[FormatMode["EndsWithSemicolon"] = 1] = "EndsWithSemicolon";
    FormatMode[FormatMode["CaseWhen"] = 2] = "CaseWhen";
    FormatMode[FormatMode["IfElse"] = 3] = "IfElse";
    FormatMode[FormatMode["PortGeneric"] = 4] = "PortGeneric";
})(FormatMode || (FormatMode = {}));
var Mode = FormatMode.Default;
var NewLineSettings = /** @class */ (function () {
    function NewLineSettings() {
        this.newLineAfter = [];
        this.noNewLineAfter = [];
    }
    NewLineSettings.prototype.newLineAfterPush = function (keyword) {
        this.newLineAfter.push(keyword);
    };
    NewLineSettings.prototype.noNewLineAfterPush = function (keyword) {
        this.noNewLineAfter.push(keyword);
    };
    NewLineSettings.prototype.push = function (keyword, addNewLine) {
        var str = addNewLine.toLowerCase();
        if (str == "none") {
            return;
        }
        else if (!str.startsWith("no")) {
            this.newLineAfterPush(keyword);
        }
        else {
            this.noNewLineAfterPush(keyword);
        }
    };
    return NewLineSettings;
}());
exports.NewLineSettings = NewLineSettings;
function ConstructNewLineSettings(dict) {
    var settings = new NewLineSettings();
    for (var key in dict) {
        settings.push(key, dict[key]);
    }
    return settings;
}
String.prototype.regexCount = function (pattern) {
    if (pattern.flags.indexOf("g") < 0) {
        pattern = new RegExp(pattern.source, pattern.flags + "g");
    }
    return (this.match(pattern) || []).length;
};
String.prototype.count = function (text) {
    return this.split(text).length - 1;
};
String.prototype.regexStartsWith = function (pattern) {
    var searchResult = this.search(pattern);
    return searchResult == 0;
};
String.prototype.regexIndexOf = function (pattern, startIndex) {
    startIndex = startIndex || 0;
    var searchResult = this.substr(startIndex).search(pattern);
    return (-1 === searchResult) ? -1 : searchResult + startIndex;
};
String.prototype.regexLastIndexOf = function (pattern, startIndex) {
    pattern = (pattern.global) ? pattern :
        new RegExp(pattern.source, 'g' + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : ''));
    if (typeof (startIndex) === 'undefined') {
        startIndex = this.length;
    }
    else if (startIndex < 0) {
        startIndex = 0;
    }
    var stringToWorkWith = this.substring(0, startIndex + 1);
    var lastIndexOf = -1;
    var nextStop = 0;
    var result;
    while ((result = pattern.exec(stringToWorkWith)) != null) {
        lastIndexOf = result.index;
        pattern.lastIndex = ++nextStop;
    }
    return lastIndexOf;
};
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};
String.prototype.convertToRegexBlockWords = function () {
    var result = new RegExp("(" + this + ")([^\\w]|$)");
    return result;
};
Array.prototype.convertToRegexBlockWords = function () {
    var wordsStr = this.join("|");
    var result = new RegExp("(" + wordsStr + ")([^\\w]|$)");
    return result;
};
function EscapeComments(arr) {
    var comments = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i];
        var commentStartIndex = line.indexOf("--");
        if (commentStartIndex >= 0) {
            comments.push(line.substr(commentStartIndex));
            arr[i] = line.substr(0, commentStartIndex) + ILCommentPrefix + count;
            count++;
        }
    }
    var isInComment = false;
    var commentRegex = new RegExp("(?<=" + ILCommentPrefix + "[\\d]+).");
    for (var i = 0; i < arr.length; i++) {
        var commentStartIndex = 0;
        var hasComment = true;
        var commentEndInlineIndex = 0;
        while (hasComment) {
            var line = arr[i];
            if (!isInComment) {
                commentStartIndex = line.indexOf("/*");
                var commentEndIndex = line.indexOf("*/", commentStartIndex);
                if (commentStartIndex >= 0) {
                    if (commentEndIndex >= 0) {
                        commentEndInlineIndex = commentEndIndex + 2;
                        isInComment = false;
                        comments.push(line.substring(commentStartIndex, commentEndInlineIndex));
                        arr[i] = line.substr(0, commentStartIndex) + ILCommentPrefix + count + line.substr(commentEndInlineIndex);
                        count++;
                        hasComment = true;
                        if (commentStartIndex + 2 == line.length) {
                            hasComment = false;
                        }
                    }
                    else {
                        isInComment = true;
                        comments.push(line.substr(commentStartIndex));
                        arr[i] = line.substr(0, commentStartIndex) + ILCommentPrefix + count;
                        count++;
                        hasComment = false;
                    }
                }
                else {
                    hasComment = false;
                }
                continue;
            }
            if (isInComment) {
                var lastCommentEndIndex = line.regexLastIndexOf(commentRegex, line.length);
                if (commentStartIndex == 0) {
                    var commentEndIndex = line.indexOf("*/", lastCommentEndIndex);
                }
                else {
                    var commentEndIndex = line.indexOf("*/", commentStartIndex);
                }
                if (commentEndIndex >= 0) {
                    isInComment = false;
                    comments.push(line.substr(0, commentEndIndex + 2));
                    arr[i] = ILCommentPrefix + count + line.substr(commentEndIndex + 2);
                    count++;
                    hasComment = true;
                }
                else {
                    comments.push(line);
                    arr[i] = ILCommentPrefix + count;
                    count++;
                    hasComment = false;
                }
            }
        }
    }
    return comments;
}
function ToLowerCases(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
}
function ToUpperCases(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
}
function ToCamelCases(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0) + arr[i].slice(1).toLowerCase();
    }
}
function ReplaceKeyWords(text, keywords) {
    for (var k = 0; k < keywords.length; k++) {
        text = text.replace(new RegExp("([^a-zA-Z0-9_@]|^)" + keywords[k] + "([^a-zA-Z0-9_]|$)", 'gi'), "$1" + keywords[k] + "$2");
    }
    return text;
}
function SetKeywordCase(input, keywordcase, keywords) {
    var inputcase = keywordcase.toLowerCase();
    switch (inputcase) {
        case "lowercase":
            ToLowerCases(keywords);
            break;
        case "defaultcase":
            ToCamelCases(keywords);
            break;
        case "uppercase":
            ToUpperCases(keywords);
    }
    input = ReplaceKeyWords(input, keywords);
    return input;
}
function SetNewLinesAfterSymbols(text, newLineSettings) {
    if (newLineSettings == null) {
        return text;
    }
    if (newLineSettings.newLineAfter != null) {
        newLineSettings.newLineAfter.forEach(function (symbol) {
            var upper = symbol.toUpperCase();
            var rexString = "(" + upper + ")[ ]?([^ \r\n@])";
            var regex = null;
            if (upper.regexStartsWith(/\w/)) {
                regex = new RegExp("\\b" + rexString, "g");
            }
            else {
                regex = new RegExp(rexString, "g");
            }
            text = text.replace(regex, '$1\r\n$2');
            if (upper == "PORT") {
                text = text.replace(/\bPORT\b\s+MAP/, "PORT MAP");
            }
        });
    }
    if (newLineSettings.noNewLineAfter != null) {
        newLineSettings.noNewLineAfter.forEach(function (symbol) {
            var rexString = "(" + symbol.toUpperCase() + ")[ \r\n]+([^@])";
            var regex = null;
            if (symbol.regexStartsWith(/\w/)) {
                regex = new RegExp("\\b" + rexString, "g");
                text = text.replace(regex, '$1 $2');
            }
            else {
                regex = new RegExp(rexString, "g");
            }
            text = text.replace(regex, '$1 $2');
        });
    }
    return text;
}
exports.SetNewLinesAfterSymbols = SetNewLinesAfterSymbols;
var signAlignSettings = /** @class */ (function () {
    function signAlignSettings(isRegional, isAll, mode, keyWords, alignComments) {
        if (alignComments === void 0) { alignComments = false; }
        this.isRegional = isRegional;
        this.isAll = isAll;
        this.mode = mode;
        this.keyWords = keyWords;
        this.alignComments = alignComments;
    }
    return signAlignSettings;
}());
exports.signAlignSettings = signAlignSettings;
var BeautifierSettings = /** @class */ (function () {
    function BeautifierSettings(removeComments, removeReport, checkAlias, signAlignSettings, keywordCase, typeNameCase, indentation, newLineSettings, endOfLine, addNewLine) {
        this.RemoveComments = removeComments;
        this.RemoveAsserts = removeReport;
        this.CheckAlias = checkAlias;
        this.SignAlignSettings = signAlignSettings;
        this.KeywordCase = keywordCase;
        this.TypeNameCase = typeNameCase;
        this.Indentation = indentation;
        this.NewLineSettings = newLineSettings;
        this.EndOfLine = endOfLine;
        this.AddNewLine = addNewLine;
    }
    return BeautifierSettings;
}());
exports.BeautifierSettings = BeautifierSettings;
var KeyWords = ["ABS", "ACCESS", "AFTER", "ALIAS", "ALL", "AND", "ARCHITECTURE", "ARRAY", "ASSERT", "ATTRIBUTE", "BEGIN", "BLOCK", "BODY", "BUFFER", "BUS", "CASE", "COMPONENT", "CONFIGURATION", "CONSTANT", "CONTEXT", "COVER", "DISCONNECT", "DOWNTO", "DEFAULT", "ELSE", "ELSIF", "END", "ENTITY", "EXIT", "FAIRNESS", "FILE", "FOR", "FORCE", "FUNCTION", "GENERATE", "GENERIC", "GROUP", "GUARDED", "IF", "IMPURE", "IN", "INERTIAL", "INOUT", "IS", "LABEL", "LIBRARY", "LINKAGE", "LITERAL", "LOOP", "MAP", "MOD", "NAND", "NEW", "NEXT", "NOR", "NOT", "NULL", "OF", "ON", "OPEN", "OR", "OTHERS", "OUT", "PACKAGE", "PORT", "POSTPONED", "PROCEDURE", "PROCESS", "PROPERTY", "PROTECTED", "PURE", "RANGE", "RECORD", "REGISTER", "REJECT", "RELEASE", "REM", "REPORT", "RESTRICT", "RESTRICT_GUARANTEE", "RETURN", "ROL", "ROR", "SELECT", "SEQUENCE", "SEVERITY", "SHARED", "SIGNAL", "SLA", "SLL", "SRA", "SRL", "STRONG", "SUBTYPE", "THEN", "TO", "TRANSPORT", "TYPE", "UNAFFECTED", "UNITS", "UNTIL", "USE", "VARIABLE", "VMODE", "VPROP", "VUNIT", "WAIT", "WHEN", "WHILE", "WITH", "XNOR", "XOR"];
var TypeNames = ["BOOLEAN", "BIT", "CHARACTER", "INTEGER", "TIME", "NATURAL", "POSITIVE", "STD_LOGIC", "STD_LOGIC_VECTOR", "STD_ULOGIC", "STD_ULOGIC_VECTOR", "STRING"];
function beautify(input, settings) {
    input = input.replace(/\r\n/g, "\n");
    input = input.replace(/\n/g, "\r\n");
    var arr = input.split("\r\n");
    var comments = EscapeComments(arr);
    var backslashes = escapeText(arr, "\\\\[^\\\\]+\\\\", ILBackslash);
    var quotes = escapeText(arr, '"([^"]+)"', ILQuote);
    var singleQuotes = escapeText(arr, "'[^']'", ILSingleQuote);
    RemoveLeadingWhitespaces(arr);
    input = arr.join("\r\n");
    if (settings.RemoveComments) {
        input = input.replace(/\r\n[ \t]*@_@comments[0-9]+[ \t]*\r\n/g, '\r\n');
        input = input.replace(/@_@comments[0-9]+/g, '');
        comments = [];
    }
    input = SetKeywordCase(input, "uppercase", KeyWords);
    input = SetKeywordCase(input, "uppercase", TypeNames);
    input = RemoveExtraNewLines(input);
    input = input.replace(/[\t ]+/g, ' ');
    input = input.replace(/\([\t ]+/g, '\(');
    input = input.replace(/[ ]+;/g, ';');
    input = input.replace(/:[ ]*(PROCESS|ENTITY)/gi, ':$1');
    arr = input.split("\r\n");
    if (settings.RemoveAsserts) {
        RemoveAsserts(arr); //RemoveAsserts must be after EscapeQuotes
    }
    ReserveSemicolonInKeywords(arr);
    input = arr.join("\r\n");
    input = input.replace(/\b(PORT|GENERIC)\b\s+MAP/g, '$1 MAP');
    input = input.replace(/\b(PORT|PROCESS|GENERIC)\b[\s]*\(/g, '$1 (');
    var newLineSettings = settings.NewLineSettings;
    if (newLineSettings != null) {
        input = SetNewLinesAfterSymbols(input, newLineSettings);
        arr = input.split("\r\n");
        ApplyNoNewLineAfter(arr, newLineSettings.noNewLineAfter);
        input = arr.join("\r\n");
    }
    input = input.replace(/([a-zA-Z0-9\); ])\);(@_@comments[0-9]+)?@_@end/g, '$1\r\n);$2@_@end');
    input = input.replace(/[ ]?([&=:\-\+|\*]|[<>]+)[ ]?/g, ' $1 ');
    input = input.replace(/(\d+\.?\d*[eE]) +([+-]) +(\d+)/g, '$1$2$3'); // fix exponential notation format broken by previous step
    input = input.replace(/[ ]?([,])[ ]?/g, '$1 ');
    input = input.replace(/[ ]?(['"])(THEN)/g, '$1 $2');
    input = input.replace(/[ ]?(\?)?[ ]?(<|:|>|\/)?[ ]+(=)?[ ]?/g, ' $1$2$3 ');
    input = input.replace(/(IF)[ ]?([\(\)])/g, '$1 $2');
    input = input.replace(/([\(\)])[ ]?(THEN)/gi, '$1 $2');
    input = input.replace(/(^|[\(\)])[ ]?(AND|OR|XOR|XNOR)[ ]*([\(])/g, '$1 $2 $3');
    input = input.replace(/ ([\-\*\/=+<>])[ ]*([\-\*\/=+<>]) /g, " $1$2 ");
    //input = input.replace(/\r\n[ \t]+--\r\n/g, "\r\n");
    input = input.replace(/[ ]+/g, ' ');
    input = input.replace(/[ \t]+\r\n/g, "\r\n");
    input = input.replace(/\r\n\r\n(?:\r\n)+/g, '\r\n\r\n');
    input = input.replace(/[\r\n\s]+$/g, '');
    input = input.replace(/[ \t]+\)/g, ')');
    input = input.replace(/\s*\)\s+RETURN\s+([\w]+;)/g, '\r\n) RETURN $1'); //function(..)\r\nreturn type; -> function(..\r\n)return type;
    input = input.replace(/\)\s*(@_@\w+)\r\n\s*RETURN\s+([\w]+;)/g, ') $1\r\n' + ILIndentedReturnPrefix + 'RETURN $2'); //function(..)\r\nreturn type; -> function(..\r\n)return type;
    var keywordAndSignRegex = new RegExp("(\\b" + KeyWords.join("\\b|\\b") + "\\b) +([\\-+]) +([\\(\\w])", "g");
    input = input.replace(keywordAndSignRegex, "$1 $2$3"); // `WHEN - 2` -> `WHEN -2`
    input = input.replace(/([,|>=<]) +([+\-]) +([\(\w])/g, '$1 $2$3'); // `1, - 2)` -> `1, -2)`
    input = input.replace(/(\() +([+\-]) +([\(\w])/g, '$1$2$3'); // `( - 2)` -> `(-2)`
    input = input.replace(/(\*) +([+\-]) +([\(\w])/g, '$1 $2$3'); // `* - 2` -> `* -2`
    input = input.replace(/(\|) ([-=])/g, '$1$2'); // `| ->` -> `|->`
    input = input.replace(/\)RETURN/g, ') RETURN'); // `)return` -> `) return`
    input = input.replace(/(FUNCTION )(\w+)\s+\(/g, '$1$2(');
    arr = input.split("\r\n");
    var result = [];
    var block = new CodeBlock(arr);
    beautify3(block, result, settings, 0);
    var alignSettings = settings.SignAlignSettings;
    if (alignSettings != null && alignSettings.isAll) {
        AlignSigns(result, 0, result.length - 1, alignSettings.mode, alignSettings.alignComments);
    }
    arr = FormattedLineToString(result, settings.Indentation);
    input = arr.join("\r\n");
    input = input.replace(/@_@RETURN/g, "RETURN");
    input = SetKeywordCase(input, settings.KeywordCase, KeyWords);
    input = SetKeywordCase(input, settings.TypeNameCase, TypeNames);
    input = replaceEscapedWords(input, quotes, ILQuote);
    input = replaceEscapedWords(input, singleQuotes, ILSingleQuote);
    input = replaceEscapedComments(input, comments, ILCommentPrefix);
    input = replaceEscapedWords(input, backslashes, ILBackslash);
    input = input.replace(new RegExp(ILSemicolon, "g"), ";");
    input = input.replace(/@_@[a-z]+/g, "");
    var escapedTexts = new RegExp("[" + ILBackslash + ILQuote + ILSingleQuote + "]", "g");
    input = input.replace(escapedTexts, "");
    input = input.replace(/\r\n/g, settings.EndOfLine);
    if (settings.AddNewLine && !input.endsWith(settings.EndOfLine)) {
        input += settings.EndOfLine;
    }
    return input;
}
exports.beautify = beautify;
function replaceEscapedWords(input, arr, prefix) {
    for (var i = 0; i < arr.length; i++) {
        var text = arr[i];
        var regex = new RegExp("(" + prefix + "){" + text.length + "}");
        input = input.replace(regex, text);
    }
    return input;
}
function replaceEscapedComments(input, arr, prefix) {
    for (var i = 0; i < arr.length; i++) {
        input = input.replace(prefix + i, arr[i]);
    }
    return input;
}
function RemoveLeadingWhitespaces(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/^\s+/, "");
    }
}
var FormattedLine = /** @class */ (function () {
    function FormattedLine(line, indent) {
        this.Line = line;
        this.Indent = indent;
    }
    return FormattedLine;
}());
exports.FormattedLine = FormattedLine;
var CodeBlock = /** @class */ (function () {
    function CodeBlock(lines, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = lines.length - 1; }
        this.lines = lines;
        this.start = start;
        this.end = end;
        this.parent = null;
        this.cursor = start;
    }
    CodeBlock.prototype._notifySplit = function (atLine) {
        if (this.start > atLine)
            this.start++;
        if (this.end >= atLine)
            this.end++;
        if (this.cursor >= atLine)
            this.cursor++;
        if (this.parent)
            this.parent._notifySplit(atLine);
    };
    CodeBlock.prototype.splitLine = function (atLine, firstText, secondText) {
        this.lines[atLine] = firstText;
        this.lines.splice(atLine + 1, 0, secondText);
        this._notifySplit(atLine);
    };
    CodeBlock.prototype.subBlock = function (start, end) {
        var newBlock = new CodeBlock(this.lines, start, end);
        newBlock.parent = this;
        return newBlock;
    };
    return CodeBlock;
}());
exports.CodeBlock = CodeBlock;
function FormattedLineToString(arr, indentation) {
    var result = [];
    if (arr == null) {
        return result;
    }
    if (indentation == null) {
        indentation = "";
    }
    arr.forEach(function (i) {
        if (i instanceof FormattedLine) {
            if (i.Line.length > 0) {
                result.push((Array(i.Indent + 1).join(indentation)) + i.Line);
            }
            else {
                result.push("");
            }
        }
        else {
            result = result.concat(FormattedLineToString(i, indentation));
        }
    });
    return result;
}
exports.FormattedLineToString = FormattedLineToString;
function GetCloseparentheseEndIndex(block) {
    var openParentheseCount = 0;
    var closeParentheseCount = 0;
    var startIndex = block.cursor;
    for (; block.cursor <= block.end; block.cursor++) {
        var input = block.lines[block.cursor];
        openParentheseCount += input.count("(");
        closeParentheseCount += input.count(")");
        if (openParentheseCount > 0
            && openParentheseCount <= closeParentheseCount) {
            return;
        }
    }
    block.cursor = startIndex;
}
function beautifyPortGenericBlock(block, result, settings, indent, mode) {
    var startIndex = block.cursor;
    var firstLine = block.lines[startIndex];
    var regex = new RegExp("[\\w\\s:]*(" + mode + ")([\\s]|$)");
    if (!firstLine.regexStartsWith(regex)) {
        return;
    }
    var firstLineHasParenthese = firstLine.indexOf("(") >= 0;
    var secondLineHasParenthese = startIndex + 1 <= block.end && block.lines[startIndex + 1].startsWith("(");
    var hasParenthese = firstLineHasParenthese || secondLineHasParenthese;
    var blockBodyStartIndex = startIndex + (secondLineHasParenthese ? 1 : 0);
    if (hasParenthese) {
        GetCloseparentheseEndIndex(block);
    }
    var endIndex = block.cursor;
    var bodyBlock = block.subBlock(blockBodyStartIndex, endIndex);
    if (endIndex != startIndex && firstLineHasParenthese) {
        block.lines[startIndex] = block.lines[startIndex].replace(/\b(PORT|GENERIC|PROCEDURE)\b([\w ]+)\(([\w\(\) ]+)/, '$1$2(\r\n$3');
        var newInputs = block.lines[startIndex].split("\r\n");
        if (newInputs.length == 2) {
            bodyBlock.splitLine(startIndex, newInputs[0], newInputs[1]);
        }
    }
    else if (endIndex > startIndex + 1 && secondLineHasParenthese) {
        block.lines[startIndex + 1] = block.lines[startIndex + 1].replace(/\(([\w\(\) ]+)/, '(\r\n$1');
        var newInputs = block.lines[startIndex + 1].split("\r\n");
        if (newInputs.length == 2) {
            bodyBlock.splitLine(startIndex + 1, newInputs[0], newInputs[1]);
        }
    }
    if (firstLineHasParenthese && block.lines[startIndex].indexOf("MAP") > 0) {
        block.lines[startIndex] = block.lines[startIndex].replace(/([^\w])(MAP)\s+\(/g, '$1$2(');
    }
    result.push(new FormattedLine(block.lines[startIndex], indent));
    if (secondLineHasParenthese) {
        var secondLineIndent = indent;
        if (endIndex == startIndex + 1) {
            secondLineIndent++;
        }
        result.push(new FormattedLine(block.lines[startIndex + 1], secondLineIndent));
    }
    beautify3(bodyBlock.subBlock(bodyBlock.start + 1, bodyBlock.end), result, settings, indent + 1);
    if (block.lines[block.cursor].startsWith(")")) {
        result[block.cursor].Indent--;
        bodyBlock.end--;
    }
    var alignSettings = settings.SignAlignSettings;
    if (alignSettings != null) {
        if (alignSettings.isRegional && !alignSettings.isAll
            && alignSettings.keyWords != null
            && alignSettings.keyWords.indexOf(mode) >= 0) {
            AlignSigns(result, bodyBlock.start + 1, bodyBlock.end, alignSettings.mode, alignSettings.alignComments);
        }
    }
}
exports.beautifyPortGenericBlock = beautifyPortGenericBlock;
function AlignSigns(result, startIndex, endIndex, mode, alignComments) {
    if (alignComments === void 0) { alignComments = false; }
    AlignSign_(result, startIndex, endIndex, ":", mode);
    AlignSign_(result, startIndex, endIndex, ":=", mode);
    AlignSign_(result, startIndex, endIndex, "<=", mode);
    AlignSign_(result, startIndex, endIndex, "=>", mode);
    AlignSign_(result, startIndex, endIndex, "<=", mode); // Another pass to align when a => b <= c
    AlignSign_(result, startIndex, endIndex, "direction", mode);
    if (alignComments) {
        AlignSign_(result, startIndex, endIndex, "@_@comments", mode);
    }
}
exports.AlignSigns = AlignSigns;
function indexOfGroup(regex, input, group) {
    var match = regex.exec(input);
    if (match == null) {
        return -1;
    }
    var index = match.index;
    for (var i = 1; i < group; i++) {
        index += match[i].length;
    }
    return index;
}
function AlignSign_(result, startIndex, endIndex, symbol, mode) {
    var maxSymbolIndex = -1;
    var symbolIndices = {};
    var startLine = startIndex;
    var labelAndKeywords = [
        "([\\w\\s]*:(\\s)*PROCESS)",
        "([\\w\\s]*:(\\s)*POSTPONED PROCESS)",
        "([\\w\\s]*:\\s*$)",
        "([\\w\\s]*:.*\\s+GENERATE)"
    ];
    var labelAndKeywordsStr = labelAndKeywords.join("|");
    var labelAndKeywordsRegex = new RegExp("(" + labelAndKeywordsStr + ")([^\\w]|$)");
    var prevIndent = 0;
    for (var i = startIndex; i <= endIndex; i++) {
        var line = result[i].Line;
        var indent = result[i].Indent;
        if (symbol == ":" && line.regexStartsWith(labelAndKeywordsRegex)) {
            continue;
        }
        var regex = void 0;
        if (symbol == "direction") {
            regex = new RegExp("(:\\s*)(IN|OUT|INOUT|BUFFER)(\\s+)(\\w)");
        }
        else {
            regex = new RegExp("([\\s\\w\\\\\\(\\)',\\.]|^)" + symbol + "([\\s\\w\\\\\\(\\)',\\.]|$)");
        }
        var colonIndex = void 0;
        if (symbol == "direction") {
            colonIndex = indexOfGroup(regex, line, 4);
        }
        else {
            colonIndex = line.regexIndexOf(regex);
        }
        if (indent != prevIndent && mode == "local") {
            if (startLine < i - 1) // if cannot find the symbol, a block of symbols ends
             {
                AlignSign(result, startLine, i - 1, symbol, maxSymbolIndex, symbolIndices);
            }
            maxSymbolIndex = -1;
            symbolIndices = {};
            startLine = i;
            if (colonIndex > 0) {
                maxSymbolIndex = Math.max(maxSymbolIndex, colonIndex);
                symbolIndices[i] = colonIndex;
            }
        }
        else if (colonIndex > 0) {
            maxSymbolIndex = Math.max(maxSymbolIndex, colonIndex);
            symbolIndices[i] = colonIndex;
        }
        else if ((mode != "local" && !line.startsWith(ILCommentPrefix) && line.length != 0)
            || (mode == "local")) {
            if (startLine < i - 1) // if cannot find the symbol, a block of symbols ends
             {
                AlignSign(result, startLine, i - 1, symbol, maxSymbolIndex, symbolIndices);
            }
            maxSymbolIndex = -1;
            symbolIndices = {};
            startLine = i;
        }
        prevIndent = indent;
    }
    if (startLine < endIndex) // if cannot find the symbol, a block of symbols ends
     {
        AlignSign(result, startLine, endIndex, symbol, maxSymbolIndex, symbolIndices);
    }
}
function AlignSign(result, startIndex, endIndex, symbol, maxSymbolIndex, symbolIndices) {
    if (maxSymbolIndex === void 0) { maxSymbolIndex = -1; }
    if (symbolIndices === void 0) { symbolIndices = {}; }
    if (maxSymbolIndex < 0) {
        return;
    }
    for (var lineIndex in symbolIndices) {
        var symbolIndex = symbolIndices[lineIndex];
        if (symbolIndex == maxSymbolIndex) {
            continue;
        }
        var line = result[lineIndex].Line;
        result[lineIndex].Line = line.substring(0, symbolIndex)
            + (Array(maxSymbolIndex - symbolIndex + 1).join(" "))
            + line.substring(symbolIndex);
    }
}
exports.AlignSign = AlignSign;
function beautifyCaseBlock(block, result, settings, indent) {
    if (!block.lines[block.cursor].regexStartsWith(/(.+:\s*)?(CASE)([\s]|$)/)) {
        return;
    }
    result.push(new FormattedLine(block.lines[block.cursor], indent));
    block.cursor++;
    beautify3(block, result, settings, indent + 2);
    result[block.cursor].Indent = indent;
}
exports.beautifyCaseBlock = beautifyCaseBlock;
function getSemicolonBlockEndIndex(block, settings) {
    var endIndex = block.cursor;
    var openBracketsCount = 0;
    var closeBracketsCount = 0;
    for (; block.cursor <= block.end; block.cursor++) {
        var input = block.lines[block.cursor];
        var indexOfSemicolon = input.indexOf(";");
        var splitIndex = indexOfSemicolon < 0 ? input.length : indexOfSemicolon + 1;
        var stringBeforeSemicolon = input.substring(0, splitIndex);
        var stringAfterSemicolon = input.substring(splitIndex);
        stringAfterSemicolon = stringAfterSemicolon.replace(new RegExp(ILCommentPrefix + "[0-9]+"), "");
        openBracketsCount += stringBeforeSemicolon.count("(");
        closeBracketsCount += stringBeforeSemicolon.count(")");
        if (indexOfSemicolon < 0) {
            continue;
        }
        if (openBracketsCount == closeBracketsCount) {
            endIndex = block.cursor;
            if (stringAfterSemicolon.trim().length > 0 && settings.NewLineSettings.newLineAfter.indexOf(";") >= 0) {
                block.splitLine(block.cursor, stringBeforeSemicolon, stringAfterSemicolon);
            }
            break;
        }
    }
    block.cursor = endIndex;
}
function beautifyComponentBlock(block, result, settings, indent) {
    var startIndex = block.cursor;
    for (; block.cursor <= block.end; block.cursor++) {
        if (block.lines[block.cursor].regexStartsWith(/END(\s|$)/)) {
            break;
        }
    }
    result.push(new FormattedLine(block.lines[startIndex], indent));
    if (block.cursor != startIndex) {
        beautify3(block.subBlock(startIndex + 1, block.cursor), result, settings, indent + 1);
    }
}
exports.beautifyComponentBlock = beautifyComponentBlock;
function beautifyPackageIsNewBlock(block, result, settings, indent) {
    var startIndex = block.cursor;
    for (; block.cursor <= block.end; block.cursor++) {
        if (block.lines[block.cursor].regexIndexOf(/;(\s|$)/) >= 0) {
            break;
        }
    }
    result.push(new FormattedLine(block.lines[startIndex], indent));
    if (block.cursor != startIndex) {
        beautify3(block.subBlock(startIndex + 1, block.cursor), result, settings, indent + 1);
    }
}
exports.beautifyPackageIsNewBlock = beautifyPackageIsNewBlock;
function beautifyVariableInitialiseBlock(block, result, settings, indent) {
    var startIndex = block.cursor;
    for (; block.cursor <= block.end; block.cursor++) {
        if (block.lines[block.cursor].regexIndexOf(/;(\s|$)/) >= 0) {
            break;
        }
    }
    result.push(new FormattedLine(block.lines[startIndex], indent));
    if (block.cursor != startIndex) {
        beautify3(block.subBlock(startIndex + 1, block.cursor), result, settings, indent + 1);
    }
}
exports.beautifyVariableInitialiseBlock = beautifyVariableInitialiseBlock;
function beautifySemicolonBlock(block, result, settings, indent) {
    var startIndex = block.cursor;
    getSemicolonBlockEndIndex(block, settings);
    result.push(new FormattedLine(block.lines[startIndex], indent));
    if (block.cursor != startIndex) {
        beautify3(block.subBlock(startIndex + 1, block.cursor), result, settings, indent + 1);
        alignSignalAssignmentBlock(settings, block.lines, startIndex, block.cursor, result);
    }
}
exports.beautifySemicolonBlock = beautifySemicolonBlock;
function alignSignalAssignmentBlock(settings, inputs, startIndex, endIndex, result) {
    if (settings.Indentation.replace(/ +/g, "").length == 0) {
        var reg = new RegExp("^([\\w\\\\\\(\\)\\+\\-'(?:,\\s*)\\.]+[\\s]*(?:<=|:=)(?!\\s\\($|\\($)\\s*)");
        var match = reg.exec(inputs[startIndex]);
        if (match != null) {
            var length = match[0].length;
            var prefixLength = length - settings.Indentation.length;
            var prefix = new Array(prefixLength + 1).join(" ");
            for (var i = startIndex + 1; i <= endIndex; i++) {
                var fl = result[i];
                fl.Line = prefix + fl.Line;
            }
        }
    }
}
function beautify3(block, result, settings, indent) {
    var regexOneLineBlockKeyWords = new RegExp(/(PROCEDURE)[^\w](?!.+[^\w]IS([^\w]|$))/); //match PROCEDURE..; but not PROCEDURE .. IS;
    var regexFunctionMultiLineBlockKeyWords = new RegExp(/(FUNCTION|IMPURE FUNCTION)[^\w](?=.+[^\w]IS([^\w]|$))/); //match FUNCTION .. IS; but not FUNCTION
    var blockMidKeyWords = ["BEGIN"];
    var blockStartsKeyWords = [
        "IF",
        "CASE",
        "ARCHITECTURE",
        "PROCEDURE",
        "PACKAGE",
        "(([\\w\\s]*:)?(\\s)*PROCESS)",
        "(([\\w\\s]*:)?(\\s)*POSTPONED PROCESS)",
        "(.*\\s*PROTECTED)",
        "(COMPONENT)",
        "(ENTITY(?!.+;))",
        "FOR",
        "WHILE",
        "LOOP",
        "(CONTEXT[\\w\\s\\\\]+IS)",
        "(CONFIGURATION(?!.+;))",
        "BLOCK",
        "UNITS",
        "\\w+\\s+\\w+\\s+IS\\s+RECORD"
    ];
    var blockEndsKeyWords = ["END", ".*\\)\\s*RETURN\\s+[\\w]+;"];
    var indentedEndsKeyWords = [ILIndentedReturnPrefix + "RETURN\\s+\\w+;"];
    var blockEndsWithSemicolon = [
        "(WITH\\s+[\\w\\s\\\\]+SELECT)",
        "([\\w\\\\\\\(\\)\\+\\-'\\.(?:,\\s*)]+[\\s]*<=(?!.*\\s(THEN|GENERATE)(\\s|$)))",
        "([\\w\\\\\\(\\)\\+\\-'\\.(?:,\\s*)]+[\\s]*:=)",
        "FOR\\s+[\\w\\s,]+:\\s*\\w+\\s+USE",
        "REPORT"
    ];
    var newLineAfterKeyWordsStr = blockStartsKeyWords.join("|");
    var regexBlockMidKeyWords = blockMidKeyWords.convertToRegexBlockWords();
    var regexBlockStartsKeywords = new RegExp("([\\w]+\\s*:\\s*)?(" + newLineAfterKeyWordsStr + ")([^\\w]|$)");
    var regexBlockEndsKeyWords = blockEndsKeyWords.convertToRegexBlockWords();
    var regexBlockIndentedEndsKeyWords = indentedEndsKeyWords.convertToRegexBlockWords();
    var regexblockEndsWithSemicolon = blockEndsWithSemicolon.convertToRegexBlockWords();
    var regexMidKeyWhen = "WHEN".convertToRegexBlockWords();
    var regexMidKeyElse = "ELSE|ELSIF".convertToRegexBlockWords();
    for (; block.cursor <= block.end; block.cursor++) {
        if (indent < 0) {
            indent = 0;
        }
        var input = block.lines[block.cursor].trim();
        if (input.regexStartsWith(regexBlockIndentedEndsKeyWords)) {
            result.push(new FormattedLine(input, indent));
            return;
        }
        if (input.regexStartsWith(/COMPONENT\s/)) {
            var modeCache = Mode;
            Mode = FormatMode.EndsWithSemicolon;
            beautifyComponentBlock(block, result, settings, indent);
            Mode = modeCache;
            continue;
        }
        if (input.regexStartsWith(/PACKAGE[\s\w]+IS\s+NEW/)) {
            var modeCache = Mode;
            Mode = FormatMode.EndsWithSemicolon;
            beautifyPackageIsNewBlock(block, result, settings, indent);
            Mode = modeCache;
            continue;
        }
        if (input.regexStartsWith(/\w+\s+\w+\s*:.+:\s*=\s*\(([^;]|$)/)) { // 'variable symbol: type [:= initial_value];'
            var modeCache = Mode;
            Mode = FormatMode.EndsWithSemicolon;
            var endsWithBracket = input.regexIndexOf(/:\s*=\s*\(/) > 0;
            var startIndex = block.cursor;
            beautifySemicolonBlock(block, result, settings, indent);
            if (endsWithBracket && startIndex != block.cursor) {
                var fl = result[block.cursor];
                if (fl.Line.regexStartsWith(/\);$/)) {
                    fl.Indent--;
                }
            }
            Mode = modeCache;
            continue;
        }
        if (input.regexIndexOf(/:=(\s*@_@comments\d+\s*)?$/) > 0) {
            var modeCache = Mode;
            Mode = FormatMode.EndsWithSemicolon;
            beautifySemicolonBlock(block, result, settings, indent);
            Mode = modeCache;
            continue;
        }
        if (input.regexStartsWith(/\w+\s*:\s*(ENTITY|COMPONENT)/)) {
            var modeCache = Mode;
            Mode = FormatMode.EndsWithSemicolon;
            beautifySemicolonBlock(block, result, settings, indent);
            Mode = modeCache;
            continue;
        }
        if (Mode != FormatMode.EndsWithSemicolon && input.regexStartsWith(regexblockEndsWithSemicolon)) {
            var modeCache = Mode;
            Mode = FormatMode.EndsWithSemicolon;
            beautifySemicolonBlock(block, result, settings, indent);
            Mode = modeCache;
            continue;
        }
        if (input.regexStartsWith(/(.+:\s*)?(CASE)([\s]|$)/)) {
            var modeCache = Mode;
            Mode = FormatMode.CaseWhen;
            beautifyCaseBlock(block, result, settings, indent);
            Mode = modeCache;
            continue;
        }
        if (input.regexStartsWith(/[\w\s:]*(:=)([\s]|$)/)) {
            beautifyPortGenericBlock(block, result, settings, indent, ":=");
            continue;
        }
        if (input.regexStartsWith(/[\w\s:]*\bPORT\b([\s]|$)/)) {
            var preCursor = block.cursor;
            beautifyPortGenericBlock(block, result, settings, indent, "PORT");
            var preLine = preCursor - 1;
            if (preLine >= 0) {
                var preL = block.lines[preLine];
                if (preL.regexIndexOf(/:\s+(COMPONENT|ENTITY)/) >= 0) {
                    indent--;
                }
            }
            continue;
        }
        if (input.regexStartsWith(/TYPE\s+\w+\s+IS\s+\(/)) {
            beautifyPortGenericBlock(block, result, settings, indent, "IS");
            continue;
        }
        if (input.regexStartsWith(/[\w\s:]*GENERIC([\s]|$)/)) {
            beautifyPortGenericBlock(block, result, settings, indent, "GENERIC");
            continue;
        }
        if (input.regexStartsWith(/[\w\s:]*PROCEDURE[\s\w]+\($/)) {
            beautifyPortGenericBlock(block, result, settings, indent, "PROCEDURE");
            if (block.lines[block.cursor].regexStartsWith(/.*\)[\s]*IS/)) {
                block.cursor++;
                beautify3(block, result, settings, indent + 1);
            }
            continue;
        }
        if (input.regexStartsWith(/FUNCTION[^\w]/)
            && input.regexIndexOf(/[^\w]RETURN[^\w]/) < 0) {
            beautifyPortGenericBlock(block, result, settings, indent, "FUNCTION");
            if (!block.lines[block.cursor].regexStartsWith(regexBlockEndsKeyWords)) {
                block.cursor++;
                beautify3(block, result, settings, indent + 1);
            }
            else {
                result[block.cursor].Indent++;
            }
            continue;
        }
        if (input.regexStartsWith(/IMPURE FUNCTION[^\w]/)
            && input.regexIndexOf(/[^\w]RETURN[^\w]/) < 0) {
            beautifyPortGenericBlock(block, result, settings, indent, "IMPURE FUNCTION");
            if (!block.lines[block.cursor].regexStartsWith(regexBlockEndsKeyWords)) {
                if (block.lines[block.cursor].regexStartsWith(regexBlockIndentedEndsKeyWords)) {
                    result[block.cursor].Indent++;
                }
                else {
                    block.cursor++;
                    beautify3(block, result, settings, indent + 1);
                }
            }
            else {
                result[block.cursor].Indent++;
            }
            continue;
        }
        result.push(new FormattedLine(input, indent));
        if (indent > 0
            && (input.regexStartsWith(regexBlockMidKeyWords)
                || (Mode != FormatMode.EndsWithSemicolon && input.regexStartsWith(regexMidKeyElse))
                || (Mode == FormatMode.CaseWhen && input.regexStartsWith(regexMidKeyWhen)))) {
            result[block.cursor].Indent--;
        }
        else if (indent > 0
            && (input.regexStartsWith(regexBlockEndsKeyWords))) {
            result[block.cursor].Indent--;
            return;
        }
        if (input.regexStartsWith(regexOneLineBlockKeyWords)) {
            continue;
        }
        if (input.regexStartsWith(regexFunctionMultiLineBlockKeyWords)
            || input.regexStartsWith(regexBlockStartsKeywords)) {
            block.cursor++;
            beautify3(block, result, settings, indent + 1);
        }
    }
    block.cursor--;
}
exports.beautify3 = beautify3;
function ReserveSemicolonInKeywords(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].match(/FUNCTION|PROCEDURE/) != null) {
            arr[i] = arr[i].replace(/;/g, ILSemicolon);
        }
    }
}
function ApplyNoNewLineAfter(arr, noNewLineAfter) {
    if (noNewLineAfter == null) {
        return;
    }
    var _loop_1 = function (i) {
        noNewLineAfter.forEach(function (n) {
            var regex = new RegExp("(" + n.toUpperCase + ")[ a-z0-9]+[a-z0-9]+");
            if (arr[i].regexIndexOf(regex) >= 0) {
                arr[i] += "@_@singleline";
            }
        });
    };
    for (var i = 0; i < arr.length; i++) {
        _loop_1(i);
    }
}
exports.ApplyNoNewLineAfter = ApplyNoNewLineAfter;
function RemoveAsserts(arr) {
    var need_semi = false;
    var inAssert = false;
    var n = 0;
    for (var i = 0; i < arr.length; i++) {
        var has_semi = arr[i].indexOf(";") >= 0;
        if (need_semi) {
            arr[i] = '';
        }
        n = arr[i].indexOf("ASSERT ");
        if (n >= 0) {
            inAssert = true;
            arr[i] = '';
        }
        if (!has_semi) {
            if (inAssert) {
                need_semi = true;
            }
        }
        else {
            need_semi = false;
        }
    }
}
exports.RemoveAsserts = RemoveAsserts;
function escapeText(arr, regex, escapedChar) {
    var quotes = [];
    var regexEpr = new RegExp(regex, "g");
    for (var i = 0; i < arr.length; i++) {
        var matches = arr[i].match(regexEpr);
        if (matches != null) {
            for (var j = 0; j < matches.length; j++) {
                var match = matches[j];
                arr[i] = arr[i].replace(match, escapedChar.repeat(match.length));
                quotes.push(match);
            }
        }
    }
    return quotes;
}
function RemoveExtraNewLines(input) {
    input = input.replace(/(?:\r\n|\r|\n)/g, '\r\n');
    input = input.replace(/ \r\n/g, '\r\n');
    input = input.replace(/\r\n\r\n(?:\r\n)+/g, '\r\n\r\n');
    return input;
}
//# sourceMappingURL=VHDLFormatter.js.map