'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var vscode = require("vscode");
var VHDLFormatter = require("./VHDLFormatter/VHDLFormatter");
var config = require("./config");
function getDocumentRange(document) {
    var start = new vscode.Position(0, 0);
    var lastLine = document.lineCount - 1;
    var end = new vscode.Position(lastLine, document.lineAt(lastLine).text.length);
    return new vscode.Range(start, end);
}
function activate(context) {
    vscode.languages.registerDocumentFormattingEditProvider('vhdl', {
        provideDocumentFormattingEdits: function (document, options, token) {
            var result = [];
            var beautifierSettings = config.getConfig(options);
            var formatted = VHDLFormatter.beautify(document.getText(), beautifierSettings);
            if (config.getExtSettings(config.CONFIGURATION_REMOVE_BLANK_LINES, false)) {
                var eol = beautifierSettings.EndOfLine;
                formatted = formatted.replace(new RegExp(eol + '*[ \t]*' + eol, 'g'), eol);
            }
            if (formatted) {
                result.push(new vscode.TextEdit(getDocumentRange(document), formatted));
            }
            return result;
        }
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map