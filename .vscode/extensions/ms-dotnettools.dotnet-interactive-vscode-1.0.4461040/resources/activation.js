/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var LIB;(()=>{var t={470:t=>{function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,e){for(var r,n="",o=0,i=-1,a=0,h=0;h<=t.length;++h){if(h<t.length)r=t.charCodeAt(h);else {if(47===r)break;r=47;}if(47===r){if(i===h-1||1===a);else if(i!==h-1&&2===a){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",o=0):o=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),i=h,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=h,a=0;continue}e&&(n.length>0?n+="/..":n="..",o=2);}else n.length>0?n+="/"+t.slice(i+1,h):n=t.slice(i+1,h),o=h-i-1;i=h,a=0;}else 46===r&&-1!==a?++a:a=-1;}return n}var n={resolve:function(){for(var t,n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a;i>=0?a=arguments[i]:(void 0===t&&(t=process.cwd()),a=t),e(a),0!==a.length&&(n=a+"/"+n,o=47===a.charCodeAt(0));}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(e(t),0===t.length)return ".";var n=47===t.charCodeAt(0),o=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!n)).length||n||(t="."),t.length>0&&o&&(t+="/"),n?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return ".";for(var t,r=0;r<arguments.length;++r){var o=arguments[r];e(o),o.length>0&&(void 0===t?t=o:t+="/"+o);}return void 0===t?".":n.normalize(t)},relative:function(t,r){if(e(t),e(r),t===r)return "";if((t=n.resolve(t))===(r=n.resolve(r)))return "";for(var o=1;o<t.length&&47===t.charCodeAt(o);++o);for(var i=t.length,a=i-o,h=1;h<r.length&&47===r.charCodeAt(h);++h);for(var s=r.length-h,c=a<s?a:s,f=-1,u=0;u<=c;++u){if(u===c){if(s>c){if(47===r.charCodeAt(h+u))return r.slice(h+u+1);if(0===u)return r.slice(h+u)}else a>c&&(47===t.charCodeAt(o+u)?f=u:0===u&&(f=0));break}var l=t.charCodeAt(o+u);if(l!==r.charCodeAt(h+u))break;47===l&&(f=u);}var p="";for(u=o+f+1;u<=i;++u)u!==i&&47!==t.charCodeAt(u)||(0===p.length?p+="..":p+="/..");return p.length>0?p+r.slice(h+f):(h+=f,47===r.charCodeAt(h)&&++h,r.slice(h))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return ".";for(var r=t.charCodeAt(0),n=47===r,o=-1,i=!0,a=t.length-1;a>=1;--a)if(47===(r=t.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return -1===o?n?"/":".":n&&1===o?"//":t.slice(0,o)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');e(t);var n,o=0,i=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return "";var h=r.length-1,s=-1;for(n=t.length-1;n>=0;--n){var c=t.charCodeAt(n);if(47===c){if(!a){o=n+1;break}}else -1===s&&(a=!1,s=n+1),h>=0&&(c===r.charCodeAt(h)?-1==--h&&(i=n):(h=-1,i=s));}return o===i?i=s:-1===i&&(i=t.length),t.slice(o,i)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){o=n+1;break}}else -1===i&&(a=!1,i=n+1);return -1===i?"":t.slice(o,i)},extname:function(t){e(t);for(var r=-1,n=0,o=-1,i=!0,a=0,h=t.length-1;h>=0;--h){var s=t.charCodeAt(h);if(47!==s)-1===o&&(i=!1,o=h+1),46===s?-1===r?r=h:1!==a&&(a=1):-1!==r&&(a=-1);else if(!i){n=h+1;break}}return -1===r||-1===o||0===a||1===a&&r===o-1&&r===n+1?"":t.slice(r,o)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+"/"+n:n}(0,t)},parse:function(t){e(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var n,o=t.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var a=-1,h=0,s=-1,c=!0,f=t.length-1,u=0;f>=n;--f)if(47!==(o=t.charCodeAt(f)))-1===s&&(c=!1,s=f+1),46===o?-1===a?a=f:1!==u&&(u=1):-1!==a&&(u=-1);else if(!c){h=f+1;break}return -1===a||-1===s||0===u||1===u&&a===s-1&&a===h+1?-1!==s&&(r.base=r.name=0===h&&i?t.slice(1,s):t.slice(h,s)):(0===h&&i?(r.name=t.slice(1,a),r.base=t.slice(1,s)):(r.name=t.slice(h,a),r.base=t.slice(h,s)),r.ext=t.slice(a,s)),h>0?r.dir=t.slice(0,h-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,t.exports=n;}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]});},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};var n={};(()=>{var t;if(r.r(n),r.d(n,{URI:()=>p,Utils:()=>_}),"object"==typeof process)t="win32"===process.platform;else if("object"==typeof navigator){var e=navigator.userAgent;t=e.indexOf("Windows")>=0;}var o,i,a=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}),h=/^\w[\w\d+.-]*$/,s=/^\//,c=/^\/\//,f="",u="/",l=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,p=function(){function e(t,e,r,n,o,i){void 0===i&&(i=!1),"object"==typeof t?(this.scheme=t.scheme||f,this.authority=t.authority||f,this.path=t.path||f,this.query=t.query||f,this.fragment=t.fragment||f):(this.scheme=function(t,e){return t||e?t:"file"}(t,i),this.authority=e||f,this.path=function(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==u&&(e=u+e):e=u;}return e}(this.scheme,r||f),this.query=n||f,this.fragment=o||f,function(t,e){if(!t.scheme&&e)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(t.authority,'", path: "').concat(t.path,'", query: "').concat(t.query,'", fragment: "').concat(t.fragment,'"}'));if(t.scheme&&!h.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!s.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(c.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,i));}return e.isUri=function(t){return t instanceof e||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString},Object.defineProperty(e.prototype,"fsPath",{get:function(){return b(this,!1)},enumerable:!1,configurable:!0}),e.prototype.with=function(t){if(!t)return this;var e=t.scheme,r=t.authority,n=t.path,o=t.query,i=t.fragment;return void 0===e?e=this.scheme:null===e&&(e=f),void 0===r?r=this.authority:null===r&&(r=f),void 0===n?n=this.path:null===n&&(n=f),void 0===o?o=this.query:null===o&&(o=f),void 0===i?i=this.fragment:null===i&&(i=f),e===this.scheme&&r===this.authority&&n===this.path&&o===this.query&&i===this.fragment?this:new d(e,r,n,o,i)},e.parse=function(t,e){void 0===e&&(e=!1);var r=l.exec(t);return r?new d(r[2]||f,x(r[4]||f),x(r[5]||f),x(r[7]||f),x(r[9]||f),e):new d(f,f,f,f,f)},e.file=function(e){var r=f;if(t&&(e=e.replace(/\\/g,u)),e[0]===u&&e[1]===u){var n=e.indexOf(u,2);-1===n?(r=e.substring(2),e=u):(r=e.substring(2,n),e=e.substring(n)||u);}return new d("file",r,e,f,f)},e.from=function(t){return new d(t.scheme,t.authority,t.path,t.query,t.fragment)},e.prototype.toString=function(t){return void 0===t&&(t=!1),C(this,t)},e.prototype.toJSON=function(){return this},e.revive=function(t){if(t){if(t instanceof e)return t;var r=new d(t);return r._formatted=t.external,r._fsPath=t._sep===g?t.fsPath:null,r}return t},e}(),g=t?1:void 0,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._formatted=null,e._fsPath=null,e}return a(e,t),Object.defineProperty(e.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=b(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(t){return void 0===t&&(t=!1),t?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)},e.prototype.toJSON=function(){var t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=g),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},e}(p),v=((i={})[58]="%3A",i[47]="%2F",i[63]="%3F",i[35]="%23",i[91]="%5B",i[93]="%5D",i[64]="%40",i[33]="%21",i[36]="%24",i[38]="%26",i[39]="%27",i[40]="%28",i[41]="%29",i[42]="%2A",i[43]="%2B",i[44]="%2C",i[59]="%3B",i[61]="%3D",i[32]="%20",i);function y(t,e){for(var r=void 0,n=-1,o=0;o<t.length;o++){var i=t.charCodeAt(o);if(i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57||45===i||46===i||95===i||126===i||e&&47===i)-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),void 0!==r&&(r+=t.charAt(o));else {void 0===r&&(r=t.substr(0,o));var a=v[i];void 0!==a?(-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),r+=a):-1===n&&(n=o);}}return -1!==n&&(r+=encodeURIComponent(t.substring(n))),void 0!==r?r:t}function m(t){for(var e=void 0,r=0;r<t.length;r++){var n=t.charCodeAt(r);35===n||63===n?(void 0===e&&(e=t.substr(0,r)),e+=v[n]):void 0!==e&&(e+=t[r]);}return void 0!==e?e:t}function b(e,r){var n;return n=e.authority&&e.path.length>1&&"file"===e.scheme?"//".concat(e.authority).concat(e.path):47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&e.path.charCodeAt(1)<=90||e.path.charCodeAt(1)>=97&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?r?e.path.substr(1):e.path[1].toLowerCase()+e.path.substr(2):e.path,t&&(n=n.replace(/\//g,"\\")),n}function C(t,e){var r=e?m:y,n="",o=t.scheme,i=t.authority,a=t.path,h=t.query,s=t.fragment;if(o&&(n+=o,n+=":"),(i||"file"===o)&&(n+=u,n+=u),i){var c=i.indexOf("@");if(-1!==c){var f=i.substr(0,c);i=i.substr(c+1),-1===(c=f.indexOf(":"))?n+=r(f,!1):(n+=r(f.substr(0,c),!1),n+=":",n+=r(f.substr(c+1),!1)),n+="@";}-1===(c=(i=i.toLowerCase()).indexOf(":"))?n+=r(i,!1):(n+=r(i.substr(0,c),!1),n+=i.substr(c));}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2))(l=a.charCodeAt(1))>=65&&l<=90&&(a="/".concat(String.fromCharCode(l+32),":").concat(a.substr(3)));else if(a.length>=2&&58===a.charCodeAt(1)){var l;(l=a.charCodeAt(0))>=65&&l<=90&&(a="".concat(String.fromCharCode(l+32),":").concat(a.substr(2)));}n+=r(a,!0);}return h&&(n+="?",n+=r(h,!1)),s&&(n+="#",n+=e?s:y(s,!1)),n}function A(t){try{return decodeURIComponent(t)}catch(e){return t.length>3?t.substr(0,3)+A(t.substr(3)):t}}var w=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function x(t){return t.match(w)?t.replace(w,(function(t){return A(t)})):t}var _,O=r(470),P=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},j=O.posix||O,U="/";!function(t){t.joinPath=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t.with({path:j.join.apply(j,P([t.path],e,!1))})},t.resolvePath=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=t.path,o=!1;n[0]!==U&&(n=U+n,o=!0);var i=j.resolve.apply(j,P([n],e,!1));return o&&i[0]===U&&!t.authority&&(i=i.substring(1)),t.with({path:i})},t.dirname=function(t){if(0===t.path.length||t.path===U)return t;var e=j.dirname(t.path);return 1===e.length&&46===e.charCodeAt(0)&&(e=""),t.with({path:e})},t.basename=function(t){return j.basename(t.path)},t.extname=function(t){return j.extname(t.path)};}(_||(_={}));})(),LIB=n;})();const{URI,Utils}=LIB;

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function createKernelUri(kernelUri) {
    const uri = URI.parse(kernelUri);
    uri.authority; //?
    uri.path; //?
    let absoluteUri = `${uri.scheme}://${uri.authority}${uri.path || "/"}`;
    return absoluteUri; //?
}
function createKernelUriWithQuery(kernelUri) {
    const uri = URI.parse(kernelUri);
    uri.authority; //?
    uri.path; //?
    let absoluteUri = `${uri.scheme}://${uri.authority}${uri.path || "/"}`;
    if (uri.query) {
        absoluteUri += `?${uri.query}`;
    }
    return absoluteUri; //?
}
function getTag(kernelUri) {
    const uri = URI.parse(kernelUri);
    if (uri.query) { //?
        const parts = uri.query.split("tag=");
        if (parts.length > 1) {
            return parts[1];
        }
    }
    return undefined;
}
function createRoutingSlip(kernelUris) {
    return Array.from(new Set(kernelUris.map(e => createKernelUriWithQuery(e))));
}
function routingSlipStartsWith(thisKernelUris, otherKernelUris) {
    let startsWith = true;
    if (otherKernelUris.length > 0 && thisKernelUris.length >= otherKernelUris.length) {
        for (let i = 0; i < otherKernelUris.length; i++) {
            if (createKernelUri(otherKernelUris[i]) !== createKernelUri(thisKernelUris[i])) {
                startsWith = false;
                break;
            }
        }
    }
    else {
        startsWith = false;
    }
    return startsWith;
}
function routingSlipContains(routingSlip, kernelUri, ignoreQuery = false) {
    const normalizedUri = ignoreQuery ? createKernelUri(kernelUri) : createKernelUriWithQuery(kernelUri);
    return routingSlip.find(e => normalizedUri === (!ignoreQuery ? createKernelUriWithQuery(e) : createKernelUri(e))) !== undefined;
}
class RoutingSlip {
    constructor() {
        this._uris = [];
    }
    get uris() {
        return this._uris;
    }
    set uris(value) {
        this._uris = value;
    }
    contains(kernelUri, ignoreQuery = false) {
        return routingSlipContains(this._uris, kernelUri, ignoreQuery);
    }
    startsWith(other) {
        if (other instanceof Array) {
            return routingSlipStartsWith(this._uris, other);
        }
        else {
            return routingSlipStartsWith(this._uris, other._uris);
        }
    }
    continueWith(other) {
        let otherUris = (other instanceof Array ? other : other._uris) || [];
        if (otherUris.length > 0) {
            if (routingSlipStartsWith(otherUris, this._uris)) {
                otherUris = otherUris.slice(this._uris.length);
            }
        }
        for (let i = 0; i < otherUris.length; i++) {
            if (!this.contains(otherUris[i])) {
                this._uris.push(otherUris[i]);
            }
            else {
                throw new Error(`The uri ${otherUris[i]} is already in the routing slip [${this._uris}], cannot continue with routing slip [${otherUris}]`);
            }
        }
    }
    toArray() {
        return [...this._uris];
    }
}
class CommandRoutingSlip extends RoutingSlip {
    constructor() {
        super();
    }
    static fromUris(uris) {
        const routingSlip = new CommandRoutingSlip();
        routingSlip.uris = uris;
        return routingSlip;
    }
    stampAsArrived(kernelUri) {
        this.stampAs(kernelUri, "arrived");
    }
    stamp(kernelUri) {
        this.stampAs(kernelUri);
    }
    stampAs(kernelUri, tag) {
        if (tag) {
            const absoluteUriWithQuery = `${createKernelUri(kernelUri)}?tag=${tag}`;
            const absoluteUriWithoutQuery = createKernelUri(kernelUri);
            if (this.uris.find(e => e.startsWith(absoluteUriWithoutQuery))) {
                throw new Error(`The uri ${absoluteUriWithQuery} is already in the routing slip [${this.uris}]`);
            }
            else {
                this.uris.push(absoluteUriWithQuery);
            }
        }
        else {
            const absoluteUriWithQuery = `${createKernelUri(kernelUri)}?tag=arrived`;
            const absoluteUriWithoutQuery = createKernelUri(kernelUri);
            if (!this.uris.find(e => e.startsWith(absoluteUriWithQuery))) {
                throw new Error(`The uri ${absoluteUriWithQuery} is not in the routing slip [${this.uris}]`);
            }
            else if (this.uris.find(e => e === absoluteUriWithoutQuery)) {
                throw new Error(`The uri ${absoluteUriWithoutQuery} is already in the routing slip [${this.uris}]`);
            }
            else {
                this.uris.push(absoluteUriWithoutQuery);
            }
        }
    }
}
class EventRoutingSlip extends RoutingSlip {
    constructor() {
        super();
    }
    static fromUris(uris) {
        const routingSlip = new EventRoutingSlip();
        routingSlip.uris = uris;
        return routingSlip;
    }
    stamp(kernelUri) {
        const normalizedUri = createKernelUriWithQuery(kernelUri);
        const canAdd = !this.uris.find(e => createKernelUriWithQuery(e) === normalizedUri);
        if (canAdd) {
            this.uris.push(normalizedUri);
            this.uris; //?
        }
        else {
            throw new Error(`The uri ${normalizedUri} is already in the routing slip [${this.uris}]`);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// Generated TypeScript interfaces and types.
// --------------------------------------------- Kernel Commands
const CancelType = "Cancel";
const ChangeWorkingDirectoryType = "ChangeWorkingDirectory";
const CompileProjectType = "CompileProject";
const DisplayErrorType = "DisplayError";
const DisplayValueType = "DisplayValue";
const OpenDocumentType = "OpenDocument";
const OpenProjectType = "OpenProject";
const QuitType = "Quit";
const RequestCompletionsType = "RequestCompletions";
const RequestDiagnosticsType = "RequestDiagnostics";
const RequestHoverTextType = "RequestHoverText";
const RequestInputType = "RequestInput";
const RequestKernelInfoType = "RequestKernelInfo";
const RequestSignatureHelpType = "RequestSignatureHelp";
const RequestValueType = "RequestValue";
const RequestValueInfosType = "RequestValueInfos";
const SendEditableCodeType = "SendEditableCode";
const SendValueType = "SendValue";
const SubmitCodeType = "SubmitCode";
const UpdateDisplayedValueType = "UpdateDisplayedValue";
// --------------------------------------------- Kernel events
const AssemblyProducedType = "AssemblyProduced";
const CodeSubmissionReceivedType = "CodeSubmissionReceived";
const CommandFailedType = "CommandFailed";
const CommandSucceededType = "CommandSucceeded";
const CompleteCodeSubmissionReceivedType = "CompleteCodeSubmissionReceived";
const CompletionsProducedType = "CompletionsProduced";
const DiagnosticsProducedType = "DiagnosticsProduced";
const DisplayedValueProducedType = "DisplayedValueProduced";
const DisplayedValueUpdatedType = "DisplayedValueUpdated";
const DocumentOpenedType = "DocumentOpened";
const ErrorProducedType = "ErrorProduced";
const HoverTextProducedType = "HoverTextProduced";
const IncompleteCodeSubmissionReceivedType = "IncompleteCodeSubmissionReceived";
const InputProducedType = "InputProduced";
const KernelExtensionLoadedType = "KernelExtensionLoaded";
const KernelInfoProducedType = "KernelInfoProduced";
const KernelReadyType = "KernelReady";
const PackageAddedType = "PackageAdded";
const ProjectOpenedType = "ProjectOpened";
const ReturnValueProducedType = "ReturnValueProduced";
const SignatureHelpProducedType = "SignatureHelpProduced";
const StandardErrorValueProducedType = "StandardErrorValueProduced";
const StandardOutputValueProducedType = "StandardOutputValueProduced";
const ValueInfosProducedType = "ValueInfosProduced";
const ValueProducedType = "ValueProduced";
const WorkingDirectoryChangedType = "WorkingDirectoryChanged";
var InsertTextFormat;
(function (InsertTextFormat) {
    InsertTextFormat["PlainText"] = "plaintext";
    InsertTextFormat["Snippet"] = "snippet";
})(InsertTextFormat || (InsertTextFormat = {}));
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity["Hidden"] = "hidden";
    DiagnosticSeverity["Info"] = "info";
    DiagnosticSeverity["Warning"] = "warning";
    DiagnosticSeverity["Error"] = "error";
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var DocumentSerializationType;
(function (DocumentSerializationType) {
    DocumentSerializationType["Dib"] = "dib";
    DocumentSerializationType["Ipynb"] = "ipynb";
})(DocumentSerializationType || (DocumentSerializationType = {}));
var RequestType;
(function (RequestType) {
    RequestType["Parse"] = "parse";
    RequestType["Serialize"] = "serialize";
})(RequestType || (RequestType = {}));
var SubmissionType;
(function (SubmissionType) {
    SubmissionType["Run"] = "run";
    SubmissionType["Diagnose"] = "diagnose";
})(SubmissionType || (SubmissionType = {}));

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function toBase64String(value) {
    const wnd = (globalThis.window);
    if (wnd) {
        return wnd.btoa(String.fromCharCode(...value));
    }
    else {
        return Buffer.from(value).toString('base64');
    }
}
class KernelCommandEnvelope {
    constructor(commandType, command) {
        this.commandType = commandType;
        this.command = command;
        this._childCommandCounter = 0;
        this._routingSlip = new CommandRoutingSlip();
        const guidBytes = parse(v4());
        const data = new Uint8Array(guidBytes);
        this._id = toBase64String(data);
    }
    get id() {
        return this._id;
    }
    get routingSlip() {
        return this._routingSlip;
    }
    get parentCommand() {
        return this._parentCommand;
    }
    set parent(parentCommand) {
        if (this._parentCommand && this._parentCommand !== parentCommand) {
            throw new Error("Parent cannot be changed.");
        }
        this._parentCommand = parentCommand;
    }
    setId(id) {
        this._id = id;
    }
    getOrCreateToken() {
        if (this._token) {
            return this._token;
        }
        if (this._parentCommand) {
            this._token = `${this._parentCommand.getOrCreateToken()}.${this._parentCommand.getNextChildToken()}`;
            return this._token;
        }
        const guidBytes = parse(v4());
        const data = new Uint8Array(guidBytes);
        this._token = toBase64String(data);
        return this._token;
    }
    isSelforDescendantOf(otherCommand) {
        const otherToken = otherCommand.getOrCreateToken();
        const thisToken = this.getOrCreateToken();
        if (thisToken && otherToken) {
            return thisToken.startsWith(otherToken);
        }
        throw new Error('both commands must have tokens');
    }
    hasSameRootCommandAs(otherCommand) {
        const otherToken = otherCommand.getOrCreateToken();
        const thisToken = this.getOrCreateToken();
        if (thisToken && otherToken) {
            const otherRootToken = KernelCommandEnvelope.getRootToken(otherToken);
            const thisRootToken = KernelCommandEnvelope.getRootToken(thisToken);
            return thisRootToken === otherRootToken;
        }
        throw new Error('both commands must have tokens');
    }
    static getRootToken(token) {
        const parts = token.split('.');
        return parts[0];
    }
    toJson() {
        const model = {
            commandType: this.commandType,
            command: this.command,
            routingSlip: this._routingSlip.toArray(),
            id: this._id,
            token: this.getOrCreateToken()
        };
        return model;
    }
    static fromJson(model) {
        const command = new KernelCommandEnvelope(model.commandType, model.command);
        command._routingSlip = CommandRoutingSlip.fromUris(model.routingSlip || []);
        if (model.id) {
            command._id = model.id;
        }
        command._token = model.token;
        return command;
    }
    clone() {
        return KernelCommandEnvelope.fromJson(this.toJson());
    }
    getNextChildToken() {
        return this._childCommandCounter++;
    }
}
class KernelEventEnvelope {
    constructor(eventType, event, command) {
        this.eventType = eventType;
        this.event = event;
        this.command = command;
        this._routingSlip = new EventRoutingSlip();
    }
    get routingSlip() {
        return this._routingSlip;
    }
    toJson() {
        var _a;
        const model = {
            eventType: this.eventType,
            event: this.event,
            command: (_a = this.command) === null || _a === void 0 ? void 0 : _a.toJson(),
            routingSlip: this._routingSlip.toArray()
        };
        return model;
    }
    static fromJson(model) {
        const event = new KernelEventEnvelope(model.eventType, model.event, model.command ? KernelCommandEnvelope.fromJson(model.command) : undefined);
        event._routingSlip = EventRoutingSlip.fromUris(model.routingSlip || []);
        return event;
    }
    clone() {
        return KernelEventEnvelope.fromJson(this.toJson());
    }
}

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
function isPromiseCompletionSource(obj) {
    return obj.promise
        && obj.resolve
        && obj.reject;
}
class PromiseCompletionSource {
    constructor() {
        this._resolve = () => { };
        this._reject = () => { };
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    resolve(value) {
        this._resolve(value);
    }
    reject(reason) {
        this._reject(reason);
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
function isSelforDescendantOf(thisCommand, otherCommand) {
    const otherToken = otherCommand.getOrCreateToken();
    const thisToken = thisCommand.getOrCreateToken();
    if (thisToken && otherToken) {
        return thisToken.startsWith(otherToken);
    }
    throw new Error('both commands must have tokens');
}
function hasSameRootCommandAs(thisCommand, otherCommand) {
    const otherToken = otherCommand.getOrCreateToken();
    const thisToken = thisCommand.getOrCreateToken();
    if (thisToken && otherToken) {
        const otherRootToken = getRootToken(otherToken);
        const thisRootToken = getRootToken(thisToken);
        return thisRootToken === otherRootToken;
    }
    throw new Error('both commands must have tokens');
}
function getRootToken(token) {
    const parts = token.split('.');
    return parts[0];
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelInvocationContext {
    constructor(kernelCommandInvocation) {
        this._childCommands = [];
        this._eventSubject = new Subject();
        this._isComplete = false;
        this._handlingKernel = null;
        this.completionSource = new PromiseCompletionSource();
        this._commandEnvelope = kernelCommandInvocation;
    }
    get promise() {
        return this.completionSource.promise;
    }
    get handlingKernel() {
        return this._handlingKernel;
    }
    ;
    get kernelEvents() {
        return this._eventSubject.asObservable();
    }
    ;
    set handlingKernel(value) {
        this._handlingKernel = value;
    }
    static getOrCreateAmbientContext(kernelCommandInvocation) {
        let current = KernelInvocationContext._current;
        if (!current || current._isComplete) {
            KernelInvocationContext._current = new KernelInvocationContext(kernelCommandInvocation);
        }
        else {
            if (!areCommandsTheSame(kernelCommandInvocation, current._commandEnvelope)) {
                const found = current._childCommands.includes(kernelCommandInvocation);
                if (!found) {
                    current._childCommands.push(kernelCommandInvocation);
                }
            }
        }
        return KernelInvocationContext._current;
    }
    static get current() { return this._current; }
    get command() { return this._commandEnvelope.command; }
    get commandEnvelope() { return this._commandEnvelope; }
    complete(command) {
        if (areCommandsTheSame(command, this._commandEnvelope)) {
            this._isComplete = true;
            let succeeded = {};
            let eventEnvelope = new KernelEventEnvelope(CommandSucceededType, succeeded, this._commandEnvelope);
            this.internalPublish(eventEnvelope);
            this.completionSource.resolve();
            // TODO: C# version has completion callbacks - do we need these?
            // if (!_events.IsDisposed)
            // {
            //     _events.OnCompleted();
            // }
        }
        else {
            let pos = this._childCommands.indexOf(command);
            delete this._childCommands[pos];
        }
    }
    fail(message) {
        // TODO:
        // The C# code accepts a message and/or an exception. Do we need to add support
        // for exceptions? (The TS CommandFailed interface doesn't have a place for it right now.)
        this._isComplete = true;
        let failed = { message: message !== null && message !== void 0 ? message : "Command Failed" };
        let eventEnvelope = new KernelEventEnvelope(CommandFailedType, failed, this._commandEnvelope);
        this.internalPublish(eventEnvelope);
        this.completionSource.resolve();
    }
    publish(kernelEvent) {
        if (!this._isComplete) {
            this.internalPublish(kernelEvent);
        }
    }
    internalPublish(kernelEvent) {
        if (!kernelEvent.command) {
            kernelEvent.command = this._commandEnvelope;
        }
        let command = kernelEvent.command;
        if (this.handlingKernel) {
            const kernelUri = getKernelUri(this.handlingKernel);
            if (!kernelEvent.routingSlip.contains(kernelUri)) {
                kernelEvent.routingSlip.stamp(kernelUri);
                kernelEvent.routingSlip; //?
            }
        }
        this._commandEnvelope; //?
        if (command === null ||
            command === undefined ||
            areCommandsTheSame(command, this._commandEnvelope) ||
            this._childCommands.includes(command)) {
            this._eventSubject.next(kernelEvent);
        }
        else if (isSelforDescendantOf(command, this._commandEnvelope)) {
            this._eventSubject.next(kernelEvent);
        }
        else if (hasSameRootCommandAs(command, this._commandEnvelope)) {
            this._eventSubject.next(kernelEvent);
        }
    }
    isParentOfCommand(commandEnvelope) {
        const childFound = this._childCommands.includes(commandEnvelope);
        return childFound;
    }
    dispose() {
        if (!this._isComplete) {
            this.complete(this._commandEnvelope);
        }
        KernelInvocationContext._current = null;
    }
}
KernelInvocationContext._current = null;
function areCommandsTheSame(envelope1, envelope2) {
    if (envelope1 === envelope2) {
        return true;
    }
    const sameCommandType = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1.commandType) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2.commandType); //?
    if (!sameCommandType) {
        return false;
    }
    const sameCommandId = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1.id) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2.id); //?
    if (!sameCommandId) {
        return false;
    }
    const sameToken = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1.getOrCreateToken()) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2.getOrCreateToken()); //?
    if (!sameToken) {
        return false;
    }
    return true;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Warn"] = 1] = "Warn";
    LogLevel[LogLevel["Error"] = 2] = "Error";
    LogLevel[LogLevel["None"] = 3] = "None";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(source, write) {
        this.source = source;
        this.write = write;
    }
    info(message) {
        this.write({ logLevel: LogLevel.Info, source: this.source, message });
    }
    warn(message) {
        this.write({ logLevel: LogLevel.Warn, source: this.source, message });
    }
    error(message) {
        this.write({ logLevel: LogLevel.Error, source: this.source, message });
    }
    static configure(source, writer) {
        const logger = new Logger(source, writer);
        Logger._default = logger;
    }
    static get default() {
        if (Logger._default) {
            return Logger._default;
        }
        throw new Error('No logger has been configured for this context');
    }
}
Logger._default = new Logger('default', (_entry) => { });

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelScheduler {
    constructor() {
        this._operationQueue = [];
        this._mustTrampoline = (_c) => false;
    }
    setMustTrampoline(predicate) {
        this._mustTrampoline = predicate !== null && predicate !== void 0 ? predicate : ((_c) => false);
    }
    cancelCurrentOperation() {
        var _a;
        (_a = this._inFlightOperation) === null || _a === void 0 ? void 0 : _a.promiseCompletionSource.reject(new Error("Operation cancelled"));
    }
    runAsync(value, executor) {
        const operation = {
            value,
            executor,
            promiseCompletionSource: new PromiseCompletionSource(),
        };
        const mustTrampoline = this._mustTrampoline(value);
        if (this._inFlightOperation && !mustTrampoline) {
            Logger.default.info(`kernelScheduler: starting immediate execution of ${JSON.stringify(operation.value)}`);
            // invoke immediately
            return operation.executor(operation.value)
                .then(() => {
                Logger.default.info(`kernelScheduler: immediate execution completed: ${JSON.stringify(operation.value)}`);
                operation.promiseCompletionSource.resolve();
            })
                .catch(e => {
                Logger.default.info(`kernelScheduler: immediate execution failed: ${JSON.stringify(e)} - ${JSON.stringify(operation.value)}`);
                operation.promiseCompletionSource.reject(e);
            });
        }
        Logger.default.info(`kernelScheduler: scheduling execution of ${JSON.stringify(operation.value)}`);
        this._operationQueue.push(operation);
        if (this._operationQueue.length === 1) {
            setTimeout(() => {
                this.executeNextCommand();
            }, 0);
        }
        return operation.promiseCompletionSource.promise;
    }
    executeNextCommand() {
        const nextOperation = this._operationQueue.length > 0 ? this._operationQueue[0] : undefined;
        if (nextOperation) {
            this._inFlightOperation = nextOperation;
            Logger.default.info(`kernelScheduler: starting scheduled execution of ${JSON.stringify(nextOperation.value)}`);
            nextOperation.executor(nextOperation.value)
                .then(() => {
                this._inFlightOperation = undefined;
                Logger.default.info(`kernelScheduler: completing inflight operation: success ${JSON.stringify(nextOperation.value)}`);
                nextOperation.promiseCompletionSource.resolve();
            })
                .catch(e => {
                this._inFlightOperation = undefined;
                Logger.default.info(`kernelScheduler: completing inflight operation: failure ${JSON.stringify(e)} - ${JSON.stringify(nextOperation.value)}`);
                nextOperation.promiseCompletionSource.reject(e);
            })
                .finally(() => {
                this._inFlightOperation = undefined;
                setTimeout(() => {
                    this._operationQueue.shift();
                    this.executeNextCommand();
                }, 0);
            });
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class Kernel {
    constructor(name, languageName, languageVersion, displayName) {
        this.name = name;
        this._commandHandlers = new Map();
        this._eventSubject = new Subject();
        this.rootKernel = this;
        this.parentKernel = null;
        this._scheduler = null;
        this._kernelInfo = {
            isProxy: false,
            isComposite: false,
            localName: name,
            languageName: languageName,
            aliases: [],
            uri: createKernelUri(`kernel://local/${name}`),
            languageVersion: languageVersion,
            displayName: displayName !== null && displayName !== void 0 ? displayName : name,
            supportedDirectives: [],
            supportedKernelCommands: []
        };
        this._internalRegisterCommandHandler({
            commandType: RequestKernelInfoType, handle: (invocation) => __awaiter(this, void 0, void 0, function* () {
                yield this.handleRequestKernelInfo(invocation);
            })
        });
    }
    get kernelInfo() {
        return this._kernelInfo;
    }
    get kernelEvents() {
        return this._eventSubject.asObservable();
    }
    handleRequestKernelInfo(invocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventEnvelope = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this._kernelInfo }, invocation.commandEnvelope); //?
            invocation.context.publish(eventEnvelope);
            return Promise.resolve();
        });
    }
    getScheduler() {
        var _a, _b;
        if (!this._scheduler) {
            this._scheduler = (_b = (_a = this.parentKernel) === null || _a === void 0 ? void 0 : _a.getScheduler()) !== null && _b !== void 0 ? _b : new KernelScheduler();
        }
        return this._scheduler;
    }
    static get current() {
        if (KernelInvocationContext.current) {
            return KernelInvocationContext.current.handlingKernel;
        }
        return null;
    }
    static get root() {
        if (Kernel.current) {
            return Kernel.current.rootKernel;
        }
        return null;
    }
    // Is it worth us going to efforts to ensure that the Promise returned here accurately reflects
    // the command's progress? The only thing that actually calls this is the kernel channel, through
    // the callback set up by attachKernelToChannel, and the callback is expected to return void, so
    // nothing is ever going to look at the promise we return here.
    send(commandEnvelopeOrModel) {
        return __awaiter(this, void 0, void 0, function* () {
            let commandEnvelope = commandEnvelopeOrModel;
            if (!commandEnvelopeOrModel.getOrCreateToken) {
                Logger.default.warn(`Converting command envelope model to command envelope for backawards compatibility.`);
                commandEnvelope = KernelCommandEnvelope.fromJson(commandEnvelopeOrModel);
            }
            const context = KernelInvocationContext.getOrCreateAmbientContext(commandEnvelope);
            if (context.commandEnvelope) {
                if (context.commandEnvelope !== commandEnvelope) {
                    commandEnvelope.parent = context.commandEnvelope;
                }
            }
            const kernelUri = getKernelUri(this);
            if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                commandEnvelope.routingSlip.stampAsArrived(kernelUri);
            }
            else {
                Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as arrived but uri ${kernelUri} is already present.`);
            }
            commandEnvelope.routingSlip; //?
            return this.getScheduler().runAsync(commandEnvelope, (value) => this.executeCommand(value).finally(() => {
                if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                    commandEnvelope.routingSlip.stamp(kernelUri);
                }
                else {
                    Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as completed but uri ${kernelUri} is already present.`);
                }
            }));
        });
    }
    executeCommand(commandEnvelope) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = KernelInvocationContext.getOrCreateAmbientContext(commandEnvelope);
            let previousHandlingKernel = context.handlingKernel;
            try {
                yield this.handleCommand(commandEnvelope);
            }
            catch (e) {
                context.fail((e === null || e === void 0 ? void 0 : e.message) || JSON.stringify(e));
            }
            finally {
                context.handlingKernel = previousHandlingKernel;
            }
        });
    }
    getCommandHandler(commandType) {
        return this._commandHandlers.get(commandType);
    }
    handleCommand(commandEnvelope) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let context = KernelInvocationContext.getOrCreateAmbientContext(commandEnvelope);
            const previoudHendlingKernel = context.handlingKernel;
            context.handlingKernel = this;
            let isRootCommand = areCommandsTheSame(context.commandEnvelope, commandEnvelope);
            let eventSubscription = undefined; //?
            if (isRootCommand) {
                const kernelType = (this.kernelInfo.isProxy ? "proxy" : "") + (this.kernelInfo.isComposite ? "composite" : "");
                Logger.default.info(`kernel ${this.name} of type ${kernelType} subscribing to context events`);
                eventSubscription = context.kernelEvents.pipe(map(e => {
                    var _a;
                    const message = `kernel ${this.name} of type ${kernelType} saw event ${e.eventType} with token ${(_a = e.command) === null || _a === void 0 ? void 0 : _a.getOrCreateToken()}`;
                    Logger.default.info(message);
                    const kernelUri = getKernelUri(this);
                    if (!e.routingSlip.contains(kernelUri)) {
                        e.routingSlip.stamp(kernelUri);
                    }
                    return e;
                }))
                    .subscribe(this.publishEvent.bind(this));
            }
            let handler = this.getCommandHandler(commandEnvelope.commandType);
            if (handler) {
                try {
                    Logger.default.info(`kernel ${this.name} about to handle command: ${JSON.stringify(commandEnvelope)}`);
                    yield handler.handle({ commandEnvelope: commandEnvelope, context });
                    context.complete(commandEnvelope);
                    context.handlingKernel = previoudHendlingKernel;
                    if (isRootCommand) {
                        eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                        context.dispose();
                    }
                    Logger.default.info(`kernel ${this.name} done handling command: ${JSON.stringify(commandEnvelope)}`);
                    resolve();
                }
                catch (e) {
                    context.fail((e === null || e === void 0 ? void 0 : e.message) || JSON.stringify(e));
                    context.handlingKernel = previoudHendlingKernel;
                    if (isRootCommand) {
                        eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                        context.dispose();
                    }
                    reject(e);
                }
            }
            else {
                context.handlingKernel = previoudHendlingKernel;
                if (isRootCommand) {
                    eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                    context.dispose();
                }
                reject(new Error(`No handler found for command type ${commandEnvelope.commandType}`));
            }
        }));
    }
    subscribeToKernelEvents(observer) {
        const sub = this._eventSubject.subscribe(observer);
        return {
            dispose: () => { sub.unsubscribe(); }
        };
    }
    canHandle(commandEnvelope) {
        if (commandEnvelope.command.targetKernelName && commandEnvelope.command.targetKernelName !== this.name) {
            return false;
        }
        if (commandEnvelope.command.destinationUri) {
            const normalizedUri = createKernelUri(commandEnvelope.command.destinationUri);
            if (this.kernelInfo.uri !== normalizedUri) {
                return false;
            }
        }
        return this.supportsCommand(commandEnvelope.commandType);
    }
    supportsCommand(commandType) {
        return this._commandHandlers.has(commandType);
    }
    registerCommandHandler(handler) {
        // When a registration already existed, we want to overwrite it because we want users to
        // be able to develop handlers iteratively, and it would be unhelpful for handler registration
        // for any particular command to be cumulative.
        var _a;
        const shouldNotify = !this._commandHandlers.has(handler.commandType);
        this._internalRegisterCommandHandler(handler);
        if (shouldNotify) {
            const event = {
                kernelInfo: this._kernelInfo,
            };
            const envelope = new KernelEventEnvelope(KernelInfoProducedType, event, (_a = KernelInvocationContext.current) === null || _a === void 0 ? void 0 : _a.commandEnvelope);
            envelope.routingSlip.stamp(getKernelUri(this));
            const context = KernelInvocationContext.current;
            if (context) {
                envelope.command = context.commandEnvelope;
                context.publish(envelope);
            }
            else {
                this.publishEvent(envelope);
            }
        }
    }
    _internalRegisterCommandHandler(handler) {
        this._commandHandlers.set(handler.commandType, handler);
        this._kernelInfo.supportedKernelCommands = Array.from(this._commandHandlers.keys()).map(commandName => ({ name: commandName }));
    }
    getHandlingKernel(commandEnvelope, context) {
        if (this.canHandle(commandEnvelope)) {
            return this;
        }
        else {
            context === null || context === void 0 ? void 0 : context.fail(`Command ${commandEnvelope.commandType} is not supported by Kernel ${this.name}`);
            return null;
        }
    }
    publishEvent(kernelEvent) {
        this._eventSubject.next(kernelEvent);
    }
}
function submitCommandAndGetResult(kernel, commandEnvelope, expectedEventType) {
    return __awaiter(this, void 0, void 0, function* () {
        let completionSource = new PromiseCompletionSource();
        let handled = false;
        let disposable = kernel.subscribeToKernelEvents(eventEnvelope => {
            var _a, _b;
            if (((_a = eventEnvelope.command) === null || _a === void 0 ? void 0 : _a.getOrCreateToken()) === commandEnvelope.getOrCreateToken()) {
                switch (eventEnvelope.eventType) {
                    case CommandFailedType:
                        if (!handled) {
                            handled = true;
                            let err = eventEnvelope.event; //?
                            completionSource.reject(err);
                        }
                        break;
                    case CommandSucceededType:
                        if (areCommandsTheSame(eventEnvelope.command, commandEnvelope)
                            && (((_b = eventEnvelope.command) === null || _b === void 0 ? void 0 : _b.id) === commandEnvelope.id)) {
                            if (!handled) { //? ($ ? eventEnvelope : {})
                                handled = true;
                                completionSource.reject('Command was handled before reporting expected result.');
                            }
                            break;
                        }
                    default:
                        if (eventEnvelope.eventType === expectedEventType) {
                            handled = true;
                            let event = eventEnvelope.event; //? ($ ? eventEnvelope : {})
                            completionSource.resolve(event);
                        }
                        break;
                }
            }
        });
        try {
            yield kernel.send(commandEnvelope);
        }
        finally {
            disposable.dispose();
        }
        return completionSource.promise;
    });
}
function getKernelUri(kernel) {
    var _a;
    return (_a = kernel.kernelInfo.uri) !== null && _a !== void 0 ? _a : `kernel://local/${kernel.kernelInfo.localName}`;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class CompositeKernel extends Kernel {
    constructor(name) {
        super(name);
        this._host = null;
        this._defaultKernelNamesByCommandType = new Map();
        this.kernelInfo.isComposite = true;
        this._childKernels = new KernelCollection(this);
    }
    get childKernels() {
        return Array.from(this._childKernels);
    }
    get host() {
        return this._host;
    }
    set host(host) {
        this._host = host;
        if (this._host) {
            this.kernelInfo.uri = this._host.uri;
            this._childKernels.notifyThatHostWasSet();
        }
    }
    handleRequestKernelInfo(invocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventEnvelope = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this.kernelInfo }, invocation.commandEnvelope); //?
            invocation.context.publish(eventEnvelope);
            for (let kernel of this._childKernels) {
                if (kernel.supportsCommand(invocation.commandEnvelope.commandType)) {
                    const childCommand = new KernelCommandEnvelope(RequestKernelInfoType, {
                        targetKernelName: kernel.kernelInfo.localName
                    });
                    childCommand.routingSlip.continueWith(invocation.commandEnvelope.routingSlip);
                    yield kernel.handleCommand(childCommand);
                }
            }
        });
    }
    add(kernel, aliases) {
        if (!kernel) {
            throw new Error("kernel cannot be null or undefined");
        }
        if (!this.defaultKernelName) {
            // default to first kernel
            this.defaultKernelName = kernel.name;
        }
        kernel.parentKernel = this;
        kernel.rootKernel = this.rootKernel;
        kernel.kernelEvents.subscribe({
            next: (event) => {
                const kernelUri = getKernelUri(this);
                if (!event.routingSlip.contains(kernelUri)) {
                    event.routingSlip.stamp(kernelUri);
                }
                this.publishEvent(event);
            }
        });
        if (aliases) {
            let set = new Set(aliases);
            if (kernel.kernelInfo.aliases) {
                for (let alias in kernel.kernelInfo.aliases) {
                    set.add(alias);
                }
            }
            kernel.kernelInfo.aliases = Array.from(set);
        }
        this._childKernels.add(kernel, aliases);
        const invocationContext = KernelInvocationContext.current;
        if (invocationContext) {
            invocationContext.commandEnvelope; //?
            const event = new KernelEventEnvelope(KernelInfoProducedType, {
                kernelInfo: kernel.kernelInfo
            }, invocationContext.commandEnvelope); //?
            invocationContext.publish(event);
        }
        else {
            const event = new KernelEventEnvelope(KernelInfoProducedType, {
                kernelInfo: kernel.kernelInfo
            }); //?
            this.publishEvent(event);
        }
    }
    findKernelByUri(uri) {
        const normalized = createKernelUri(uri);
        if (this.kernelInfo.uri === normalized) {
            return this;
        }
        return this._childKernels.tryGetByUri(normalized);
    }
    findKernelByName(name) {
        if (this.kernelInfo.localName === name || this.kernelInfo.aliases.find(a => a === name)) {
            return this;
        }
        return this._childKernels.tryGetByAlias(name);
    }
    findKernels(predicate) {
        var results = [];
        if (predicate(this)) {
            results.push(this);
        }
        for (let kernel of this.childKernels) {
            if (predicate(kernel)) {
                results.push(kernel);
            }
        }
        return results;
    }
    findKernel(predicate) {
        if (predicate(this)) {
            return this;
        }
        return this.childKernels.find(predicate);
    }
    setDefaultTargetKernelNameForCommand(commandType, kernelName) {
        this._defaultKernelNamesByCommandType.set(commandType, kernelName);
    }
    handleCommand(commandEnvelope) {
        var _a;
        const invocationContext = KernelInvocationContext.current;
        let kernel = commandEnvelope.command.targetKernelName === this.name
            ? this
            : this.getHandlingKernel(commandEnvelope, invocationContext);
        const previusoHandlingKernel = (_a = invocationContext === null || invocationContext === void 0 ? void 0 : invocationContext.handlingKernel) !== null && _a !== void 0 ? _a : null;
        if (kernel === this) {
            if (invocationContext !== null) {
                invocationContext.handlingKernel = kernel;
            }
            return super.handleCommand(commandEnvelope).finally(() => {
                if (invocationContext !== null) {
                    invocationContext.handlingKernel = previusoHandlingKernel;
                }
            });
        }
        else if (kernel) {
            if (invocationContext !== null) {
                invocationContext.handlingKernel = kernel;
            }
            const kernelUri = getKernelUri(kernel);
            if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                commandEnvelope.routingSlip.stampAsArrived(kernelUri);
            }
            else {
                Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as arrived but uri ${kernelUri} is already present.`);
            }
            return kernel.handleCommand(commandEnvelope).finally(() => {
                if (invocationContext !== null) {
                    invocationContext.handlingKernel = previusoHandlingKernel;
                }
                if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                    commandEnvelope.routingSlip.stamp(kernelUri);
                }
                else {
                    Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as completed but uri ${kernelUri} is already present.`);
                }
            });
        }
        if (invocationContext !== null) {
            invocationContext.handlingKernel = previusoHandlingKernel;
        }
        return Promise.reject(new Error("Kernel not found: " + commandEnvelope.command.targetKernelName));
    }
    getHandlingKernel(commandEnvelope, context) {
        var _a, _b, _c, _d, _e;
        let kernel = null;
        if (commandEnvelope.command.destinationUri) {
            const normalized = createKernelUri(commandEnvelope.command.destinationUri);
            kernel = (_a = this._childKernels.tryGetByUri(normalized)) !== null && _a !== void 0 ? _a : null;
            if (kernel) {
                return kernel;
            }
        }
        let targetKernelName = commandEnvelope.command.targetKernelName;
        if (targetKernelName === undefined || targetKernelName === null) {
            if (this.canHandle(commandEnvelope)) {
                return this;
            }
            targetKernelName = (_b = this._defaultKernelNamesByCommandType.get(commandEnvelope.commandType)) !== null && _b !== void 0 ? _b : this.defaultKernelName;
        }
        if (targetKernelName !== undefined && targetKernelName !== null) {
            kernel = (_c = this._childKernels.tryGetByAlias(targetKernelName)) !== null && _c !== void 0 ? _c : null;
        }
        if (targetKernelName && !kernel) {
            const errorMessage = `Kernel not found: ${targetKernelName}`;
            Logger.default.error(errorMessage);
            throw new Error(errorMessage);
        }
        if (!kernel) {
            if (this._childKernels.count === 1) {
                kernel = (_d = this._childKernels.single()) !== null && _d !== void 0 ? _d : null;
            }
        }
        if (!kernel) {
            kernel = (_e = context === null || context === void 0 ? void 0 : context.handlingKernel) !== null && _e !== void 0 ? _e : null;
        }
        return kernel !== null && kernel !== void 0 ? kernel : this;
    }
}
class KernelCollection {
    constructor(compositeKernel) {
        this._kernels = [];
        this._nameAndAliasesByKernel = new Map();
        this._kernelsByNameOrAlias = new Map();
        this._kernelsByLocalUri = new Map();
        this._kernelsByRemoteUri = new Map();
        this._compositeKernel = compositeKernel;
    }
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next: () => {
                return {
                    value: this._kernels[counter++],
                    done: counter > this._kernels.length //?
                };
            }
        };
    }
    single() {
        return this._kernels.length === 1 ? this._kernels[0] : undefined;
    }
    add(kernel, aliases) {
        if (this._kernelsByNameOrAlias.has(kernel.name)) {
            throw new Error(`kernel with name ${kernel.name} already exists`);
        }
        this.updateKernelInfoAndIndex(kernel, aliases);
        this._kernels.push(kernel);
    }
    get count() {
        return this._kernels.length;
    }
    updateKernelInfoAndIndex(kernel, aliases) {
        var _a, _b;
        if (aliases) {
            for (let alias of aliases) {
                if (this._kernelsByNameOrAlias.has(alias)) {
                    throw new Error(`kernel with alias ${alias} already exists`);
                }
            }
        }
        if (!this._nameAndAliasesByKernel.has(kernel)) {
            let set = new Set();
            for (let alias of kernel.kernelInfo.aliases) {
                set.add(alias);
            }
            kernel.kernelInfo.aliases = Array.from(set);
            set.add(kernel.kernelInfo.localName);
            this._nameAndAliasesByKernel.set(kernel, set);
        }
        if (aliases) {
            for (let alias of aliases) {
                this._nameAndAliasesByKernel.get(kernel).add(alias);
            }
        }
        (_a = this._nameAndAliasesByKernel.get(kernel)) === null || _a === void 0 ? void 0 : _a.forEach(alias => {
            this._kernelsByNameOrAlias.set(alias, kernel);
        });
        let baseUri = ((_b = this._compositeKernel.host) === null || _b === void 0 ? void 0 : _b.uri) || this._compositeKernel.kernelInfo.uri;
        if (!baseUri.endsWith("/")) {
            baseUri += "/";
        }
        kernel.kernelInfo.uri = createKernelUri(`${baseUri}${kernel.kernelInfo.localName}`); //?
        this._kernelsByLocalUri.set(kernel.kernelInfo.uri, kernel);
        if (kernel.kernelInfo.isProxy) {
            this._kernelsByRemoteUri.set(kernel.kernelInfo.remoteUri, kernel);
        }
    }
    tryGetByAlias(alias) {
        return this._kernelsByNameOrAlias.get(alias);
    }
    tryGetByUri(uri) {
        let kernel = this._kernelsByLocalUri.get(uri) || this._kernelsByRemoteUri.get(uri);
        return kernel;
    }
    notifyThatHostWasSet() {
        for (let kernel of this._kernels) {
            this.updateKernelInfoAndIndex(kernel);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function isKernelCommandEnvelope(commandOrEvent) {
    return commandOrEvent.commandType !== undefined;
}
function isKernelCommandEnvelopeModel(commandOrEvent) {
    return commandOrEvent.commandType !== undefined;
}
function isKernelEventEnvelope(commandOrEvent) {
    return commandOrEvent.eventType !== undefined;
}
function isKernelEventEnvelopeModel(commandOrEvent) {
    return commandOrEvent.eventType !== undefined;
}
class KernelCommandAndEventReceiver {
    constructor(observer) {
        this._disposables = [];
        this._observable = observer;
    }
    subscribe(observer) {
        return this._observable.subscribe(observer);
    }
    dispose() {
        for (let disposable of this._disposables) {
            disposable.dispose();
        }
    }
    static FromObservable(observable) {
        return new KernelCommandAndEventReceiver(observable);
    }
    static FromEventListener(args) {
        let subject = new Subject();
        const listener = (e) => {
            let mapped = args.map(e);
            subject.next(mapped);
        };
        args.eventTarget.addEventListener(args.event, listener);
        const ret = new KernelCommandAndEventReceiver(subject);
        ret._disposables.push({
            dispose: () => {
                args.eventTarget.removeEventListener(args.event, listener);
            }
        });
        args.eventTarget.removeEventListener(args.event, listener);
        return ret;
    }
}
function isObservable(source) {
    return source.next !== undefined;
}
class KernelCommandAndEventSender {
    constructor() {
    }
    send(kernelCommandOrEventEnvelope) {
        if (this._sender) {
            try {
                const clone = kernelCommandOrEventEnvelope.clone();
                if (typeof this._sender === "function") {
                    this._sender(clone);
                }
                else if (isObservable(this._sender)) {
                    if (isKernelCommandEnvelope(kernelCommandOrEventEnvelope)) {
                        this._sender.next(clone);
                    }
                    else {
                        this._sender.next(clone);
                    }
                }
                else {
                    return Promise.reject(new Error("Sender is not set"));
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            return Promise.resolve();
        }
        return Promise.reject(new Error("Sender is not set"));
    }
    static FromObserver(observer) {
        const sender = new KernelCommandAndEventSender();
        sender._sender = observer;
        return sender;
    }
    static FromFunction(send) {
        const sender = new KernelCommandAndEventSender();
        sender._sender = send;
        return sender;
    }
}
function isSetOfString(collection) {
    return typeof (collection) !== typeof (new Set());
}
function isArrayOfString(collection) {
    return Array.isArray(collection) && collection.length > 0 && typeof (collection[0]) === typeof ("");
}
const onKernelInfoUpdates = [];
function registerForKernelInfoUpdates(callback) {
    onKernelInfoUpdates.push(callback);
}
function notifyOfKernelInfoUpdates(compositeKernel) {
    for (const updater of onKernelInfoUpdates) {
        updater(compositeKernel);
    }
}
function ensureOrUpdateProxyForKernelInfo(kernelInfo, compositeKernel) {
    if (kernelInfo.isProxy) {
        const host = extractHostAndNomalize(kernelInfo.remoteUri);
        if (host === extractHostAndNomalize(compositeKernel.kernelInfo.uri)) {
            Logger.default.warn(`skippin creation of proxy for a proxy kernel : [${JSON.stringify(kernelInfo)}]`);
            return;
        }
    }
    const uriToLookup = kernelInfo.isProxy ? kernelInfo.remoteUri : kernelInfo.uri;
    if (uriToLookup) {
        let kernel = compositeKernel.findKernelByUri(uriToLookup);
        if (!kernel) {
            // add
            if (compositeKernel.host) {
                Logger.default.info(`creating proxy for uri[${uriToLookup}]with info ${JSON.stringify(kernelInfo)}`);
                // check for clash with `kernelInfo.localName`
                kernel = compositeKernel.host.connectProxyKernel(kernelInfo.localName, uriToLookup, kernelInfo.aliases);
                updateKernelInfo(kernel.kernelInfo, kernelInfo);
            }
            else {
                throw new Error('no kernel host found');
            }
        }
        else {
            Logger.default.info(`patching proxy for uri[${uriToLookup}]with info ${JSON.stringify(kernelInfo)} `);
        }
        if (kernel.kernelInfo.isProxy) {
            // patch
            updateKernelInfo(kernel.kernelInfo, kernelInfo);
        }
        notifyOfKernelInfoUpdates(compositeKernel);
    }
}
function isKernelInfoForProxy(kernelInfo) {
    return kernelInfo.isProxy;
}
function updateKernelInfo(destination, source) {
    var _a, _b;
    destination.languageName = (_a = source.languageName) !== null && _a !== void 0 ? _a : destination.languageName;
    destination.languageVersion = (_b = source.languageVersion) !== null && _b !== void 0 ? _b : destination.languageVersion;
    destination.displayName = source.displayName;
    destination.isComposite = source.isComposite;
    if (source.displayName) {
        destination.displayName = source.displayName;
    }
    const supportedDirectives = new Set();
    const supportedCommands = new Set();
    if (!destination.supportedDirectives) {
        destination.supportedDirectives = [];
    }
    if (!destination.supportedKernelCommands) {
        destination.supportedKernelCommands = [];
    }
    for (const supportedDirective of destination.supportedDirectives) {
        supportedDirectives.add(supportedDirective.name);
    }
    for (const supportedCommand of destination.supportedKernelCommands) {
        supportedCommands.add(supportedCommand.name);
    }
    for (const supportedDirective of source.supportedDirectives) {
        if (!supportedDirectives.has(supportedDirective.name)) {
            supportedDirectives.add(supportedDirective.name);
            destination.supportedDirectives.push(supportedDirective);
        }
    }
    for (const supportedCommand of source.supportedKernelCommands) {
        if (!supportedCommands.has(supportedCommand.name)) {
            supportedCommands.add(supportedCommand.name);
            destination.supportedKernelCommands.push(supportedCommand);
        }
    }
}
class Connector {
    constructor(configuration) {
        this._remoteUris = new Set();
        this._receiver = configuration.receiver;
        this._sender = configuration.sender;
        if (configuration.remoteUris) {
            for (const remoteUri of configuration.remoteUris) {
                const uri = extractHostAndNomalize(remoteUri);
                if (uri) {
                    this._remoteUris.add(uri);
                }
            }
        }
        this._listener = this._receiver.subscribe({
            next: (kernelCommandOrEventEnvelope) => {
                var _a;
                if (isKernelEventEnvelope(kernelCommandOrEventEnvelope)) {
                    if (kernelCommandOrEventEnvelope.eventType === KernelInfoProducedType) {
                        const event = kernelCommandOrEventEnvelope.event;
                        if (!event.kernelInfo.remoteUri) {
                            const uri = extractHostAndNomalize(event.kernelInfo.uri);
                            if (uri) {
                                this._remoteUris.add(uri);
                            }
                        }
                    }
                    const eventRoutingSlip = kernelCommandOrEventEnvelope.routingSlip.toArray();
                    if (((_a = eventRoutingSlip.length) !== null && _a !== void 0 ? _a : 0) > 0) {
                        const eventOrigin = eventRoutingSlip[0];
                        const uri = extractHostAndNomalize(eventOrigin);
                        if (uri) {
                            this._remoteUris.add(uri);
                        }
                    }
                }
            }
        });
    }
    get remoteHostUris() {
        return Array.from(this._remoteUris.values());
    }
    get sender() {
        return this._sender;
    }
    get receiver() {
        return this._receiver;
    }
    addRemoteHostUri(remoteUri) {
        const uri = extractHostAndNomalize(remoteUri);
        if (uri) {
            this._remoteUris.add(uri);
        }
    }
    canReach(remoteUri) {
        const host = extractHostAndNomalize(remoteUri); //?
        if (host) {
            return this._remoteUris.has(host);
        }
        return false;
    }
    dispose() {
        this._listener.unsubscribe();
    }
}
function extractHostAndNomalize(kernelUri) {
    var _a;
    const filter = /(?<host>.+:\/\/[^\/]+)(\/[^\/])*/gi;
    const match = filter.exec(kernelUri); //?
    if ((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.host) {
        const host = match.groups.host;
        return host; //?
    }
    return "";
}
function Serialize(source) {
    return JSON.stringify(source, function (key, value) {
        //handling NaN, Infinity and -Infinity
        const processed = SerializeNumberLiterals(value);
        return processed;
    });
}
function SerializeNumberLiterals(value) {
    if (value !== value) {
        return "NaN";
    }
    else if (value === Infinity) {
        return "Infinity";
    }
    else if (value === -Infinity) {
        return "-Infinity";
    }
    return value;
}
function Deserialize(json) {
    return JSON.parse(json, function (key, value) {
        //handling NaN, Infinity and -Infinity
        const deserialized = DeserializeNumberLiterals(value);
        return deserialized;
    });
}
function DeserializeNumberLiterals(value) {
    if (value === "NaN") {
        return NaN;
    }
    else if (value === "Infinity") {
        return Infinity;
    }
    else if (value === "-Infinity") {
        return -Infinity;
    }
    return value;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class ConsoleCapture {
    constructor() {
        this.originalConsole = console;
        console = this;
    }
    set kernelInvocationContext(value) {
        this._kernelInvocationContext = value;
    }
    assert(value, message, ...optionalParams) {
        this.originalConsole.assert(value, message, optionalParams);
    }
    clear() {
        this.originalConsole.clear();
    }
    count(label) {
        this.originalConsole.count(label);
    }
    countReset(label) {
        this.originalConsole.countReset(label);
    }
    debug(message, ...optionalParams) {
        this.originalConsole.debug(message, optionalParams);
    }
    dir(obj, options) {
        this.originalConsole.dir(obj, options);
    }
    dirxml(...data) {
        this.originalConsole.dirxml(data);
    }
    error(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.error, ...[message, ...optionalParams]);
    }
    group(...label) {
        this.originalConsole.group(label);
    }
    groupCollapsed(...label) {
        this.originalConsole.groupCollapsed(label);
    }
    groupEnd() {
        this.originalConsole.groupEnd();
    }
    info(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.info, ...[message, ...optionalParams]);
    }
    log(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.log, ...[message, ...optionalParams]);
    }
    table(tabularData, properties) {
        this.originalConsole.table(tabularData, properties);
    }
    time(label) {
        this.originalConsole.time(label);
    }
    timeEnd(label) {
        this.originalConsole.timeEnd(label);
    }
    timeLog(label, ...data) {
        this.originalConsole.timeLog(label, data);
    }
    timeStamp(label) {
        this.originalConsole.timeStamp(label);
    }
    trace(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.trace, ...[message, ...optionalParams]);
    }
    warn(message, ...optionalParams) {
        this.originalConsole.warn(message, optionalParams);
    }
    profile(label) {
        this.originalConsole.profile(label);
    }
    profileEnd(label) {
        this.originalConsole.profileEnd(label);
    }
    dispose() {
        console = this.originalConsole;
    }
    redirectAndPublish(target, ...args) {
        if (this._kernelInvocationContext) {
            for (const arg of args) {
                let mimeType;
                let value;
                if (typeof arg !== 'object' && !Array.isArray(arg)) {
                    mimeType = 'text/plain';
                    value = arg === null || arg === void 0 ? void 0 : arg.toString();
                }
                else {
                    mimeType = 'application/json';
                    value = Serialize(arg);
                }
                const displayedValue = {
                    formattedValues: [
                        {
                            mimeType,
                            value,
                            suppressDisplay: false
                        }
                    ]
                };
                const eventEnvelope = new KernelEventEnvelope(DisplayedValueProducedType, displayedValue, this._kernelInvocationContext.commandEnvelope);
                this._kernelInvocationContext.publish(eventEnvelope);
            }
        }
        if (target) {
            target(...args);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class ProxyKernel extends Kernel {
    constructor(name, _sender, _receiver, languageName, languageVersion) {
        super(name, languageName, languageVersion);
        this.name = name;
        this._sender = _sender;
        this._receiver = _receiver;
        this.kernelInfo.isProxy = true;
    }
    getCommandHandler(commandType) {
        return {
            commandType,
            handle: (invocation) => {
                return this._commandHandler(invocation);
            }
        };
    }
    delegatePublication(envelope, invocationContext) {
        let alreadyBeenSeen = false;
        const kernelUri = getKernelUri(this);
        if (kernelUri && !envelope.routingSlip.contains(kernelUri)) {
            envelope.routingSlip.stamp(kernelUri);
        }
        else {
            alreadyBeenSeen = true;
        }
        if (this.hasSameOrigin(envelope)) {
            if (!alreadyBeenSeen) {
                invocationContext.publish(envelope);
            }
        }
    }
    hasSameOrigin(envelope) {
        var _a, _b, _c;
        let commandOriginUri = (_c = (_b = (_a = envelope.command) === null || _a === void 0 ? void 0 : _a.command) === null || _b === void 0 ? void 0 : _b.originUri) !== null && _c !== void 0 ? _c : this.kernelInfo.uri;
        if (commandOriginUri === this.kernelInfo.uri) {
            return true;
        }
        return commandOriginUri === null;
    }
    updateKernelInfoFromEvent(kernelInfoProduced) {
        updateKernelInfo(this.kernelInfo, kernelInfoProduced.kernelInfo);
    }
    _commandHandler(commandInvocation) {
        var _a, _b;
        var _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const commandToken = commandInvocation.commandEnvelope.getOrCreateToken();
            const commandId = commandInvocation.commandEnvelope.id;
            const completionSource = new PromiseCompletionSource();
            commandInvocation.commandEnvelope;
            // fix : is this the right way? We are trying to avoid forwarding events we just did forward
            let eventSubscription = this._receiver.subscribe({
                next: (envelope) => {
                    var _a, _b, _c;
                    if (isKernelEventEnvelope(envelope)) {
                        if (envelope.eventType === KernelInfoProducedType &&
                            (envelope.command === null || envelope.command === undefined)) {
                            const kernelInfoProduced = envelope.event;
                            kernelInfoProduced.kernelInfo; //?
                            this.kernelInfo; //?
                            if (kernelInfoProduced.kernelInfo.uri === this.kernelInfo.remoteUri) {
                                this.updateKernelInfoFromEvent(kernelInfoProduced);
                                const event = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this.kernelInfo });
                                this.publishEvent(event);
                            }
                        }
                        else if (envelope.command.getOrCreateToken() === commandToken) {
                            Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] processing event, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                            Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] processing event, ${JSON.stringify(envelope)}`);
                            try {
                                const original = [...(_b = (_a = commandInvocation.commandEnvelope) === null || _a === void 0 ? void 0 : _a.routingSlip.toArray()) !== null && _b !== void 0 ? _b : []];
                                commandInvocation.commandEnvelope.routingSlip.continueWith(envelope.command.routingSlip);
                                //envelope.command!.routingSlip = [...commandInvocation.commandEnvelope.routingSlip ?? []];//?
                                Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, command routingSlip :${original}] has changed to: ${JSON.stringify((_c = commandInvocation.commandEnvelope.routingSlip) !== null && _c !== void 0 ? _c : [])}`);
                            }
                            catch (e) {
                                Logger.default.error(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, error ${e === null || e === void 0 ? void 0 : e.message}`);
                            }
                            switch (envelope.eventType) {
                                case KernelInfoProducedType:
                                    {
                                        const kernelInfoProduced = envelope.event;
                                        if (kernelInfoProduced.kernelInfo.uri === this.kernelInfo.remoteUri) {
                                            this.updateKernelInfoFromEvent(kernelInfoProduced);
                                            const event = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this.kernelInfo }, commandInvocation.commandEnvelope);
                                            event.routingSlip.continueWith(envelope.routingSlip);
                                            this.delegatePublication(event, commandInvocation.context);
                                            this.delegatePublication(envelope, commandInvocation.context);
                                        }
                                        else {
                                            this.delegatePublication(envelope, commandInvocation.context);
                                        }
                                    }
                                    break;
                                case CommandFailedType:
                                case CommandSucceededType:
                                    Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] finished, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                                    if (envelope.command.id === commandId) {
                                        Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] resolving promise, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                                        completionSource.resolve(envelope);
                                    }
                                    else {
                                        Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] not resolving promise, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                                        this.delegatePublication(envelope, commandInvocation.context);
                                    }
                                    break;
                                default:
                                    this.delegatePublication(envelope, commandInvocation.context);
                                    break;
                            }
                        }
                    }
                }
            });
            try {
                if (!commandInvocation.commandEnvelope.command.destinationUri || !commandInvocation.commandEnvelope.command.originUri) {
                    (_a = (_c = commandInvocation.commandEnvelope.command).originUri) !== null && _a !== void 0 ? _a : (_c.originUri = this.kernelInfo.uri);
                    (_b = (_d = commandInvocation.commandEnvelope.command).destinationUri) !== null && _b !== void 0 ? _b : (_d.destinationUri = this.kernelInfo.remoteUri);
                }
                commandInvocation.commandEnvelope.routingSlip; //?
                if (commandInvocation.commandEnvelope.commandType === RequestKernelInfoType) {
                    const destinationUri = this.kernelInfo.remoteUri;
                    if (commandInvocation.commandEnvelope.routingSlip.contains(destinationUri, true)) {
                        return Promise.resolve();
                    }
                }
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] forwarding command ${commandInvocation.commandEnvelope.commandType} to ${commandInvocation.commandEnvelope.command.destinationUri}`);
                this._sender.send(commandInvocation.commandEnvelope);
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] about to await with token ${commandToken} and  commandid ${commandId}`);
                const enventEnvelope = yield completionSource.promise;
                if (enventEnvelope.eventType === CommandFailedType) {
                    commandInvocation.context.fail(enventEnvelope.event.message);
                }
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] done awaiting with token ${commandToken}} and  commandid ${commandId}`);
            }
            catch (e) {
                commandInvocation.context.fail(e.message);
            }
            finally {
                eventSubscription.unsubscribe();
            }
        });
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelHost {
    constructor(kernel, sender, receiver, hostUri) {
        this._remoteUriToKernel = new Map();
        this._uriToKernel = new Map();
        this._kernelToKernelInfo = new Map();
        this._connectors = [];
        this._kernel = kernel;
        this._uri = createKernelUri(hostUri || "kernel://vscode");
        this._kernel.host = this;
        this._scheduler = new KernelScheduler();
        this._scheduler.setMustTrampoline((c => {
            return (c.commandType === RequestInputType) || (c.commandType === SendEditableCodeType);
        }));
        this._defaultConnector = new Connector({ sender, receiver });
        this._connectors.push(this._defaultConnector);
    }
    get defaultConnector() {
        return this._defaultConnector;
    }
    get uri() {
        return this._uri;
    }
    get kernel() {
        return this._kernel;
    }
    tryGetKernelByRemoteUri(remoteUri) {
        return this._remoteUriToKernel.get(remoteUri);
    }
    trygetKernelByOriginUri(originUri) {
        return this._uriToKernel.get(originUri);
    }
    tryGetKernelInfo(kernel) {
        return this._kernelToKernelInfo.get(kernel);
    }
    addKernelInfo(kernel, kernelInfo) {
        kernelInfo.uri = createKernelUri(`${this._uri}${kernel.name}`);
        this._kernelToKernelInfo.set(kernel, kernelInfo);
        this._uriToKernel.set(kernelInfo.uri, kernel);
    }
    getKernel(kernelCommandEnvelope) {
        var _a;
        const uriToLookup = (_a = kernelCommandEnvelope.command.destinationUri) !== null && _a !== void 0 ? _a : kernelCommandEnvelope.command.originUri;
        let kernel = undefined;
        if (uriToLookup) {
            kernel = this._kernel.findKernelByUri(uriToLookup);
        }
        if (!kernel) {
            if (kernelCommandEnvelope.command.targetKernelName) {
                kernel = this._kernel.findKernelByName(kernelCommandEnvelope.command.targetKernelName);
            }
        }
        kernel !== null && kernel !== void 0 ? kernel : (kernel = this._kernel);
        Logger.default.info(`Using Kernel ${kernel.name}`);
        return kernel;
    }
    connectProxyKernelOnDefaultConnector(localName, remoteKernelUri, aliases) {
        return this.connectProxyKernelOnConnector(localName, this._defaultConnector.sender, this._defaultConnector.receiver, remoteKernelUri, aliases);
    }
    tryAddConnector(connector) {
        if (!connector.remoteUris) {
            this._connectors.push(new Connector(connector));
            return true;
        }
        else {
            const found = connector.remoteUris.find(uri => this._connectors.find(c => c.canReach(uri)));
            if (!found) {
                this._connectors.push(new Connector(connector));
                return true;
            }
            return false;
        }
    }
    tryRemoveConnector(connector) {
        if (!connector.remoteUris) {
            for (let uri of connector.remoteUris) {
                const index = this._connectors.findIndex(c => c.canReach(uri));
                if (index >= 0) {
                    this._connectors.splice(index, 1);
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    connectProxyKernel(localName, remoteKernelUri, aliases) {
        this._connectors; //?
        const connector = this._connectors.find(c => c.canReach(remoteKernelUri));
        if (!connector) {
            throw new Error(`Cannot find connector to reach ${remoteKernelUri}`);
        }
        let kernel = new ProxyKernel(localName, connector.sender, connector.receiver);
        kernel.kernelInfo.remoteUri = remoteKernelUri;
        this._kernel.add(kernel, aliases);
        return kernel;
    }
    connectProxyKernelOnConnector(localName, sender, receiver, remoteKernelUri, aliases) {
        let kernel = new ProxyKernel(localName, sender, receiver);
        kernel.kernelInfo.remoteUri = remoteKernelUri;
        this._kernel.add(kernel, aliases);
        return kernel;
    }
    tryGetConnector(remoteUri) {
        return this._connectors.find(c => c.canReach(remoteUri));
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this._kernel.subscribeToKernelEvents(e => {
                Logger.default.info(`KernelHost forwarding event: ${JSON.stringify(e)}`);
                this._defaultConnector.sender.send(e);
            });
            this._defaultConnector.receiver.subscribe({
                next: (kernelCommandOrEventEnvelope) => {
                    if (isKernelCommandEnvelope(kernelCommandOrEventEnvelope)) {
                        Logger.default.info(`KernelHost dispacthing command: ${JSON.stringify(kernelCommandOrEventEnvelope)}`);
                        this._scheduler.runAsync(kernelCommandOrEventEnvelope, commandEnvelope => {
                            const kernel = this._kernel;
                            return kernel.send(commandEnvelope);
                        });
                    }
                }
            });
            const kernelInfos = [this._kernel.kernelInfo, ...Array.from(this._kernel.childKernels.map(k => k.kernelInfo).filter(ki => ki.isProxy === false))];
            const kernekReady = {
                kernelInfos: kernelInfos
            };
            const event = new KernelEventEnvelope(KernelReadyType, kernekReady);
            event.routingSlip.stamp(this._kernel.kernelInfo.uri);
            yield this._defaultConnector.sender.send(event);
            return kernekReady;
        });
    }
    getKernelInfos() {
        let kernelInfos = [this._kernel.kernelInfo];
        for (let kernel of this._kernel.childKernels) {
            kernelInfos.push(kernel.kernelInfo);
        }
        return kernelInfos;
    }
    getKernelInfoProduced() {
        let events = Array.from(this.getKernelInfos().map(kernelInfo => {
            const event = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: kernelInfo });
            event.routingSlip.stamp(kernelInfo.uri);
            return event;
        }));
        return events;
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.

var polyglotNotebooksApi = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CompositeKernel: CompositeKernel,
    isKernelCommandEnvelope: isKernelCommandEnvelope,
    isKernelCommandEnvelopeModel: isKernelCommandEnvelopeModel,
    isKernelEventEnvelope: isKernelEventEnvelope,
    isKernelEventEnvelopeModel: isKernelEventEnvelopeModel,
    KernelCommandAndEventReceiver: KernelCommandAndEventReceiver,
    KernelCommandAndEventSender: KernelCommandAndEventSender,
    isSetOfString: isSetOfString,
    isArrayOfString: isArrayOfString,
    registerForKernelInfoUpdates: registerForKernelInfoUpdates,
    ensureOrUpdateProxyForKernelInfo: ensureOrUpdateProxyForKernelInfo,
    isKernelInfoForProxy: isKernelInfoForProxy,
    updateKernelInfo: updateKernelInfo,
    Connector: Connector,
    extractHostAndNomalize: extractHostAndNomalize,
    Serialize: Serialize,
    SerializeNumberLiterals: SerializeNumberLiterals,
    Deserialize: Deserialize,
    DeserializeNumberLiterals: DeserializeNumberLiterals,
    ConsoleCapture: ConsoleCapture,
    CancelType: CancelType,
    ChangeWorkingDirectoryType: ChangeWorkingDirectoryType,
    CompileProjectType: CompileProjectType,
    DisplayErrorType: DisplayErrorType,
    DisplayValueType: DisplayValueType,
    OpenDocumentType: OpenDocumentType,
    OpenProjectType: OpenProjectType,
    QuitType: QuitType,
    RequestCompletionsType: RequestCompletionsType,
    RequestDiagnosticsType: RequestDiagnosticsType,
    RequestHoverTextType: RequestHoverTextType,
    RequestInputType: RequestInputType,
    RequestKernelInfoType: RequestKernelInfoType,
    RequestSignatureHelpType: RequestSignatureHelpType,
    RequestValueType: RequestValueType,
    RequestValueInfosType: RequestValueInfosType,
    SendEditableCodeType: SendEditableCodeType,
    SendValueType: SendValueType,
    SubmitCodeType: SubmitCodeType,
    UpdateDisplayedValueType: UpdateDisplayedValueType,
    AssemblyProducedType: AssemblyProducedType,
    CodeSubmissionReceivedType: CodeSubmissionReceivedType,
    CommandFailedType: CommandFailedType,
    CommandSucceededType: CommandSucceededType,
    CompleteCodeSubmissionReceivedType: CompleteCodeSubmissionReceivedType,
    CompletionsProducedType: CompletionsProducedType,
    DiagnosticsProducedType: DiagnosticsProducedType,
    DisplayedValueProducedType: DisplayedValueProducedType,
    DisplayedValueUpdatedType: DisplayedValueUpdatedType,
    DocumentOpenedType: DocumentOpenedType,
    ErrorProducedType: ErrorProducedType,
    HoverTextProducedType: HoverTextProducedType,
    IncompleteCodeSubmissionReceivedType: IncompleteCodeSubmissionReceivedType,
    InputProducedType: InputProducedType,
    KernelExtensionLoadedType: KernelExtensionLoadedType,
    KernelInfoProducedType: KernelInfoProducedType,
    KernelReadyType: KernelReadyType,
    PackageAddedType: PackageAddedType,
    ProjectOpenedType: ProjectOpenedType,
    ReturnValueProducedType: ReturnValueProducedType,
    SignatureHelpProducedType: SignatureHelpProducedType,
    StandardErrorValueProducedType: StandardErrorValueProducedType,
    StandardOutputValueProducedType: StandardOutputValueProducedType,
    ValueInfosProducedType: ValueInfosProducedType,
    ValueProducedType: ValueProducedType,
    WorkingDirectoryChangedType: WorkingDirectoryChangedType,
    get InsertTextFormat () { return InsertTextFormat; },
    get DiagnosticSeverity () { return DiagnosticSeverity; },
    get DocumentSerializationType () { return DocumentSerializationType; },
    get RequestType () { return RequestType; },
    get SubmissionType () { return SubmissionType; },
    KernelCommandEnvelope: KernelCommandEnvelope,
    KernelEventEnvelope: KernelEventEnvelope,
    Kernel: Kernel,
    submitCommandAndGetResult: submitCommandAndGetResult,
    getKernelUri: getKernelUri,
    KernelHost: KernelHost,
    KernelInvocationContext: KernelInvocationContext,
    areCommandsTheSame: areCommandsTheSame,
    KernelScheduler: KernelScheduler,
    get LogLevel () { return LogLevel; },
    Logger: Logger,
    isPromiseCompletionSource: isPromiseCompletionSource,
    PromiseCompletionSource: PromiseCompletionSource,
    ProxyKernel: ProxyKernel,
    createKernelUri: createKernelUri,
    createKernelUriWithQuery: createKernelUriWithQuery,
    getTag: getTag,
    createRoutingSlip: createRoutingSlip,
    RoutingSlip: RoutingSlip,
    CommandRoutingSlip: CommandRoutingSlip,
    EventRoutingSlip: EventRoutingSlip
});

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class JavascriptKernel extends Kernel {
    constructor(name) {
        super(name !== null && name !== void 0 ? name : "javascript", "JavaScript");
        this.kernelInfo.displayName = `${this.kernelInfo.localName} - ${this.kernelInfo.languageName}`;
        this.suppressedLocals = new Set(this.allLocalVariableNames());
        this.registerCommandHandler({ commandType: SubmitCodeType, handle: invocation => this.handleSubmitCode(invocation) });
        this.registerCommandHandler({ commandType: RequestValueInfosType, handle: invocation => this.handleRequestValueInfos(invocation) });
        this.registerCommandHandler({ commandType: RequestValueType, handle: invocation => this.handleRequestValue(invocation) });
        this.registerCommandHandler({ commandType: SendValueType, handle: invocation => this.handleSendValue(invocation) });
        this.capture = new ConsoleCapture();
    }
    handleSendValue(invocation) {
        const sendValue = invocation.commandEnvelope.command;
        if (sendValue.formattedValue) {
            switch (sendValue.formattedValue.mimeType) {
                case 'application/json':
                    globalThis[sendValue.name] = Deserialize(sendValue.formattedValue.value);
                    break;
                default:
                    globalThis[sendValue.name] = sendValue.formattedValue.value;
                    break;
            }
            return Promise.resolve();
        }
        throw new Error("formattedValue is required");
    }
    handleSubmitCode(invocation) {
        const _super = Object.create(null, {
            kernelInfo: { get: () => super.kernelInfo }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const submitCode = invocation.commandEnvelope.command;
            const code = submitCode.code;
            _super.kernelInfo.localName; //?
            _super.kernelInfo.uri; //?
            _super.kernelInfo.remoteUri; //?
            const codeSubmissionReceivedEvent = new KernelEventEnvelope(CodeSubmissionReceivedType, { code }, invocation.commandEnvelope);
            invocation.context.publish(codeSubmissionReceivedEvent);
            invocation.context.commandEnvelope.routingSlip; //?
            this.capture.kernelInvocationContext = invocation.context;
            let result = undefined;
            try {
                const AsyncFunction = eval(`Object.getPrototypeOf(async function(){}).constructor`);
                const evaluator = AsyncFunction("console", "polyglotNotebooks", code);
                result = yield evaluator(this.capture, polyglotNotebooksApi);
                if (result !== undefined) {
                    const formattedValue = formatValue(result, 'application/json');
                    const event = {
                        formattedValues: [formattedValue]
                    };
                    const returnValueProducedEvent = new KernelEventEnvelope(ReturnValueProducedType, event, invocation.commandEnvelope);
                    invocation.context.publish(returnValueProducedEvent);
                }
            }
            catch (e) {
                throw e; //?
            }
            finally {
                this.capture.kernelInvocationContext = undefined;
            }
        });
    }
    handleRequestValueInfos(invocation) {
        const valueInfos = this.allLocalVariableNames().filter(v => !this.suppressedLocals.has(v)).map(v => ({
            name: v,
            typeName: getType(this.getLocalVariable(v)),
            formattedValue: formatValue(this.getLocalVariable(v), "text/plain"),
            preferredMimeTypes: []
        }));
        const event = {
            valueInfos
        };
        const valueInfosProducedEvent = new KernelEventEnvelope(ValueInfosProducedType, event, invocation.commandEnvelope);
        invocation.context.publish(valueInfosProducedEvent);
        return Promise.resolve();
    }
    handleRequestValue(invocation) {
        const requestValue = invocation.commandEnvelope.command;
        const rawValue = this.getLocalVariable(requestValue.name);
        const formattedValue = formatValue(rawValue, requestValue.mimeType || 'application/json');
        Logger.default.info(`returning ${JSON.stringify(formattedValue)} for ${requestValue.name}`);
        const event = {
            name: requestValue.name,
            formattedValue
        };
        const valueProducedEvent = new KernelEventEnvelope(ValueProducedType, event, invocation.commandEnvelope);
        invocation.context.publish(valueProducedEvent);
        return Promise.resolve();
    }
    allLocalVariableNames() {
        const result = [];
        try {
            for (const key in globalThis) {
                try {
                    if (typeof globalThis[key] !== 'function') {
                        result.push(key);
                    }
                }
                catch (e) {
                    Logger.default.error(`error getting value for ${key} : ${e}`);
                }
            }
        }
        catch (e) {
            Logger.default.error(`error scanning globla variables : ${e}`);
        }
        return result;
    }
    getLocalVariable(name) {
        return globalThis[name];
    }
}
function formatValue(arg, mimeType) {
    let value;
    switch (mimeType) {
        case 'text/plain':
            value = (arg === null || arg === void 0 ? void 0 : arg.toString()) || 'undefined';
            if (Array.isArray(arg)) {
                value = `[${value}]`;
            }
            break;
        case 'application/json':
            value = Serialize(arg);
            break;
        default:
            throw new Error(`unsupported mime type: ${mimeType}`);
    }
    return {
        mimeType,
        value,
        suppressDisplay: false
    };
}
function getType(arg) {
    let type = arg ? typeof (arg) : ""; //?
    if (Array.isArray(arg)) {
        type = `${typeof (arg[0])}[]`; //?
    }
    if (arg === Infinity || arg === -Infinity || (arg !== arg)) {
        type = "number";
    }
    return type; //?
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function createHost(global, compositeKernelName, configureRequire, logMessage, localToRemote, remoteToLocal, onReady) {
    Logger.configure(compositeKernelName, logMessage);
    global.interactive = {};
    configureRequire(global.interactive);
    const compositeKernel = new CompositeKernel(compositeKernelName);
    const kernelHost = new KernelHost(compositeKernel, KernelCommandAndEventSender.FromObserver(localToRemote), KernelCommandAndEventReceiver.FromObservable(remoteToLocal), `kernel://${compositeKernelName}`);
    kernelHost.defaultConnector.receiver.subscribe({
        next: (envelope) => {
            if (isKernelEventEnvelope(envelope) && envelope.eventType === KernelInfoProducedType) {
                const kernelInfoProduced = envelope.event;
                ensureOrUpdateProxyForKernelInfo(kernelInfoProduced.kernelInfo, compositeKernel);
            }
        }
    });
    // use composite kernel as root
    global.kernel = {
        get root() {
            return compositeKernel;
        }
    };
    global[compositeKernelName] = {
        compositeKernel,
        kernelHost,
    };
    const jsKernel = new JavascriptKernel();
    compositeKernel.add(jsKernel, ["js"]);
    kernelHost.connect();
    onReady();
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function activate(context) {
    configure(window, context);
    Logger.default.info(`set up 'webview' host module complete`);
}
function configure(global, context) {
    if (!global) {
        global = window;
    }
    const remoteToLocal = new Subject();
    const localToRemote = new Subject();
    localToRemote.subscribe({
        next: envelope => {
            const envelopeJson = envelope.toJson();
            context.postKernelMessage({ envelope: envelopeJson });
        }
    });
    const webViewId = v4();
    context.onDidReceiveKernelMessage((arg) => {
        var _a, _b;
        if (arg.envelope && arg.webViewId === webViewId) {
            const envelope = (arg.envelope);
            if (isKernelEventEnvelopeModel(envelope)) {
                Logger.default.info(`channel got ${envelope.eventType} with token ${(_a = envelope.command) === null || _a === void 0 ? void 0 : _a.token} and id ${(_b = envelope.command) === null || _b === void 0 ? void 0 : _b.id}`);
                const event = KernelEventEnvelope.fromJson(envelope);
                remoteToLocal.next(event);
            }
            else {
                const command = KernelCommandEnvelope.fromJson(envelope);
                remoteToLocal.next(command);
            }
        }
        else if (arg.webViewId === webViewId) {
            const kernelHost = (global['webview'].kernelHost);
            if (kernelHost) {
                switch (arg.preloadCommand) {
                    case '#!connect': {
                        Logger.default.info(`connecting to kernels from extension host`);
                        const kernelInfos = (arg.kernelInfos);
                        for (const kernelInfo of kernelInfos) {
                            const remoteUri = kernelInfo.isProxy ? kernelInfo.remoteUri : kernelInfo.uri;
                            if (!kernelHost.tryGetConnector(remoteUri)) {
                                kernelHost.defaultConnector.addRemoteHostUri(remoteUri);
                            }
                            ensureOrUpdateProxyForKernelInfo(kernelInfo, kernelHost.kernel);
                        }
                    }
                }
            }
        }
    });
    createHost(global, 'webview', configureRequire, entry => {
        context.postKernelMessage({ logEntry: entry });
    }, localToRemote, remoteToLocal, () => {
        const kernelInfos = (global['webview'].kernelHost).getKernelInfos();
        const hostUri = (global['webview'].kernelHost).uri;
        context.postKernelMessage({ preloadCommand: '#!connect', kernelInfos, hostUri, webViewId });
    });
}
function configureRequire(interactive) {
    if ((typeof (require) !== typeof (Function)) || (typeof (require.config) !== typeof (Function))) {
        let require_script = document.createElement('script');
        require_script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js');
        require_script.setAttribute('type', 'text/javascript');
        require_script.onload = function () {
            interactive.configureRequire = (confing) => {
                return require.config(confing) || require;
            };
        };
        document.getElementsByTagName('head')[0].appendChild(require_script);
    }
    else {
        interactive.configureRequire = (confing) => {
            return require.config(confing) || require;
        };
    }
}

export { activate };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGlvbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3ZzY29kZS11cmkvbGliL2VzbS9pbmRleC5qcyIsIi4uL3NyYy9yb3V0aW5nc2xpcC50cyIsIi4uL3NyYy9jb250cmFjdHMudHMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIi4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIi4uL3NyYy9jb21tYW5kc0FuZEV2ZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyclJlbW92ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJzY3JpcHRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvY29uZmlnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL25vb3AuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9lcnJvckNvbnRleHQuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3Vic2NyaWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvcGlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbGlmdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvT3BlcmF0b3JTdWJzY3JpYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3ViamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLmpzIiwiLi4vc3JjL3Byb21pc2VDb21wbGV0aW9uU291cmNlLnRzIiwiLi4vc3JjL3Rva2VuR2VuZXJhdG9yLnRzIiwiLi4vc3JjL2tlcm5lbEludm9jYXRpb25Db250ZXh0LnRzIiwiLi4vc3JjL2xvZ2dlci50cyIsIi4uL3NyYy9rZXJuZWxTY2hlZHVsZXIudHMiLCIuLi9zcmMva2VybmVsLnRzIiwiLi4vc3JjL2NvbXBvc2l0ZUtlcm5lbC50cyIsIi4uL3NyYy9jb25uZWN0aW9uLnRzIiwiLi4vc3JjL2NvbnNvbGVDYXB0dXJlLnRzIiwiLi4vc3JjL3Byb3h5S2VybmVsLnRzIiwiLi4vc3JjL2tlcm5lbEhvc3QudHMiLCIuLi9zcmMvYXBpLnRzIiwiLi4vc3JjL2phdmFzY3JpcHRLZXJuZWwudHMiLCIuLi9zcmMvd2Vidmlldy9mcm9udEVuZEhvc3QudHMiLCIuLi9zcmMvd2Vidmlldy9hY3RpdmF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBMSUI7KCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9ezQ3MDp0PT57ZnVuY3Rpb24gZSh0KXtpZihcInN0cmluZ1wiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0aCBtdXN0IGJlIGEgc3RyaW5nLiBSZWNlaXZlZCBcIitKU09OLnN0cmluZ2lmeSh0KSl9ZnVuY3Rpb24gcih0LGUpe2Zvcih2YXIgcixuPVwiXCIsbz0wLGk9LTEsYT0wLGg9MDtoPD10Lmxlbmd0aDsrK2gpe2lmKGg8dC5sZW5ndGgpcj10LmNoYXJDb2RlQXQoaCk7ZWxzZXtpZig0Nz09PXIpYnJlYWs7cj00N31pZig0Nz09PXIpe2lmKGk9PT1oLTF8fDE9PT1hKTtlbHNlIGlmKGkhPT1oLTEmJjI9PT1hKXtpZihuLmxlbmd0aDwyfHwyIT09b3x8NDYhPT1uLmNoYXJDb2RlQXQobi5sZW5ndGgtMSl8fDQ2IT09bi5jaGFyQ29kZUF0KG4ubGVuZ3RoLTIpKWlmKG4ubGVuZ3RoPjIpe3ZhciBzPW4ubGFzdEluZGV4T2YoXCIvXCIpO2lmKHMhPT1uLmxlbmd0aC0xKXstMT09PXM/KG49XCJcIixvPTApOm89KG49bi5zbGljZSgwLHMpKS5sZW5ndGgtMS1uLmxhc3RJbmRleE9mKFwiL1wiKSxpPWgsYT0wO2NvbnRpbnVlfX1lbHNlIGlmKDI9PT1uLmxlbmd0aHx8MT09PW4ubGVuZ3RoKXtuPVwiXCIsbz0wLGk9aCxhPTA7Y29udGludWV9ZSYmKG4ubGVuZ3RoPjA/bis9XCIvLi5cIjpuPVwiLi5cIixvPTIpfWVsc2Ugbi5sZW5ndGg+MD9uKz1cIi9cIit0LnNsaWNlKGkrMSxoKTpuPXQuc2xpY2UoaSsxLGgpLG89aC1pLTE7aT1oLGE9MH1lbHNlIDQ2PT09ciYmLTEhPT1hPysrYTphPS0xfXJldHVybiBufXZhciBuPXtyZXNvbHZlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0LG49XCJcIixvPSExLGk9YXJndW1lbnRzLmxlbmd0aC0xO2k+PS0xJiYhbztpLS0pe3ZhciBhO2k+PTA/YT1hcmd1bWVudHNbaV06KHZvaWQgMD09PXQmJih0PXByb2Nlc3MuY3dkKCkpLGE9dCksZShhKSwwIT09YS5sZW5ndGgmJihuPWErXCIvXCIrbixvPTQ3PT09YS5jaGFyQ29kZUF0KDApKX1yZXR1cm4gbj1yKG4sIW8pLG8/bi5sZW5ndGg+MD9cIi9cIituOlwiL1wiOm4ubGVuZ3RoPjA/bjpcIi5cIn0sbm9ybWFsaXplOmZ1bmN0aW9uKHQpe2lmKGUodCksMD09PXQubGVuZ3RoKXJldHVyblwiLlwiO3ZhciBuPTQ3PT09dC5jaGFyQ29kZUF0KDApLG89NDc9PT10LmNoYXJDb2RlQXQodC5sZW5ndGgtMSk7cmV0dXJuIDAhPT0odD1yKHQsIW4pKS5sZW5ndGh8fG58fCh0PVwiLlwiKSx0Lmxlbmd0aD4wJiZvJiYodCs9XCIvXCIpLG4/XCIvXCIrdDp0fSxpc0Fic29sdXRlOmZ1bmN0aW9uKHQpe3JldHVybiBlKHQpLHQubGVuZ3RoPjAmJjQ3PT09dC5jaGFyQ29kZUF0KDApfSxqb2luOmZ1bmN0aW9uKCl7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuXCIuXCI7Zm9yKHZhciB0LHI9MDtyPGFyZ3VtZW50cy5sZW5ndGg7KytyKXt2YXIgbz1hcmd1bWVudHNbcl07ZShvKSxvLmxlbmd0aD4wJiYodm9pZCAwPT09dD90PW86dCs9XCIvXCIrbyl9cmV0dXJuIHZvaWQgMD09PXQ/XCIuXCI6bi5ub3JtYWxpemUodCl9LHJlbGF0aXZlOmZ1bmN0aW9uKHQscil7aWYoZSh0KSxlKHIpLHQ9PT1yKXJldHVyblwiXCI7aWYoKHQ9bi5yZXNvbHZlKHQpKT09PShyPW4ucmVzb2x2ZShyKSkpcmV0dXJuXCJcIjtmb3IodmFyIG89MTtvPHQubGVuZ3RoJiY0Nz09PXQuY2hhckNvZGVBdChvKTsrK28pO2Zvcih2YXIgaT10Lmxlbmd0aCxhPWktbyxoPTE7aDxyLmxlbmd0aCYmNDc9PT1yLmNoYXJDb2RlQXQoaCk7KytoKTtmb3IodmFyIHM9ci5sZW5ndGgtaCxjPWE8cz9hOnMsZj0tMSx1PTA7dTw9YzsrK3Upe2lmKHU9PT1jKXtpZihzPmMpe2lmKDQ3PT09ci5jaGFyQ29kZUF0KGgrdSkpcmV0dXJuIHIuc2xpY2UoaCt1KzEpO2lmKDA9PT11KXJldHVybiByLnNsaWNlKGgrdSl9ZWxzZSBhPmMmJig0Nz09PXQuY2hhckNvZGVBdChvK3UpP2Y9dTowPT09dSYmKGY9MCkpO2JyZWFrfXZhciBsPXQuY2hhckNvZGVBdChvK3UpO2lmKGwhPT1yLmNoYXJDb2RlQXQoaCt1KSlicmVhazs0Nz09PWwmJihmPXUpfXZhciBwPVwiXCI7Zm9yKHU9bytmKzE7dTw9aTsrK3UpdSE9PWkmJjQ3IT09dC5jaGFyQ29kZUF0KHUpfHwoMD09PXAubGVuZ3RoP3ArPVwiLi5cIjpwKz1cIi8uLlwiKTtyZXR1cm4gcC5sZW5ndGg+MD9wK3Iuc2xpY2UoaCtmKTooaCs9Ziw0Nz09PXIuY2hhckNvZGVBdChoKSYmKytoLHIuc2xpY2UoaCkpfSxfbWFrZUxvbmc6ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGRpcm5hbWU6ZnVuY3Rpb24odCl7aWYoZSh0KSwwPT09dC5sZW5ndGgpcmV0dXJuXCIuXCI7Zm9yKHZhciByPXQuY2hhckNvZGVBdCgwKSxuPTQ3PT09cixvPS0xLGk9ITAsYT10Lmxlbmd0aC0xO2E+PTE7LS1hKWlmKDQ3PT09KHI9dC5jaGFyQ29kZUF0KGEpKSl7aWYoIWkpe289YTticmVha319ZWxzZSBpPSExO3JldHVybi0xPT09bz9uP1wiL1wiOlwiLlwiOm4mJjE9PT1vP1wiLy9cIjp0LnNsaWNlKDAsbyl9LGJhc2VuYW1lOmZ1bmN0aW9uKHQscil7aWYodm9pZCAwIT09ciYmXCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJleHRcIiBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7ZSh0KTt2YXIgbixvPTAsaT0tMSxhPSEwO2lmKHZvaWQgMCE9PXImJnIubGVuZ3RoPjAmJnIubGVuZ3RoPD10Lmxlbmd0aCl7aWYoci5sZW5ndGg9PT10Lmxlbmd0aCYmcj09PXQpcmV0dXJuXCJcIjt2YXIgaD1yLmxlbmd0aC0xLHM9LTE7Zm9yKG49dC5sZW5ndGgtMTtuPj0wOy0tbil7dmFyIGM9dC5jaGFyQ29kZUF0KG4pO2lmKDQ3PT09Yyl7aWYoIWEpe289bisxO2JyZWFrfX1lbHNlLTE9PT1zJiYoYT0hMSxzPW4rMSksaD49MCYmKGM9PT1yLmNoYXJDb2RlQXQoaCk/LTE9PS0taCYmKGk9bik6KGg9LTEsaT1zKSl9cmV0dXJuIG89PT1pP2k9czotMT09PWkmJihpPXQubGVuZ3RoKSx0LnNsaWNlKG8saSl9Zm9yKG49dC5sZW5ndGgtMTtuPj0wOy0tbilpZig0Nz09PXQuY2hhckNvZGVBdChuKSl7aWYoIWEpe289bisxO2JyZWFrfX1lbHNlLTE9PT1pJiYoYT0hMSxpPW4rMSk7cmV0dXJuLTE9PT1pP1wiXCI6dC5zbGljZShvLGkpfSxleHRuYW1lOmZ1bmN0aW9uKHQpe2UodCk7Zm9yKHZhciByPS0xLG49MCxvPS0xLGk9ITAsYT0wLGg9dC5sZW5ndGgtMTtoPj0wOy0taCl7dmFyIHM9dC5jaGFyQ29kZUF0KGgpO2lmKDQ3IT09cyktMT09PW8mJihpPSExLG89aCsxKSw0Nj09PXM/LTE9PT1yP3I9aDoxIT09YSYmKGE9MSk6LTEhPT1yJiYoYT0tMSk7ZWxzZSBpZighaSl7bj1oKzE7YnJlYWt9fXJldHVybi0xPT09cnx8LTE9PT1vfHwwPT09YXx8MT09PWEmJnI9PT1vLTEmJnI9PT1uKzE/XCJcIjp0LnNsaWNlKHIsbyl9LGZvcm1hdDpmdW5jdGlvbih0KXtpZihudWxsPT09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwicGF0aE9iamVjdFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgdCk7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS5kaXJ8fGUucm9vdCxuPWUuYmFzZXx8KGUubmFtZXx8XCJcIikrKGUuZXh0fHxcIlwiKTtyZXR1cm4gcj9yPT09ZS5yb290P3IrbjpyK1wiL1wiK246bn0oMCx0KX0scGFyc2U6ZnVuY3Rpb24odCl7ZSh0KTt2YXIgcj17cm9vdDpcIlwiLGRpcjpcIlwiLGJhc2U6XCJcIixleHQ6XCJcIixuYW1lOlwiXCJ9O2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gcjt2YXIgbixvPXQuY2hhckNvZGVBdCgwKSxpPTQ3PT09bztpPyhyLnJvb3Q9XCIvXCIsbj0xKTpuPTA7Zm9yKHZhciBhPS0xLGg9MCxzPS0xLGM9ITAsZj10Lmxlbmd0aC0xLHU9MDtmPj1uOy0tZilpZig0NyE9PShvPXQuY2hhckNvZGVBdChmKSkpLTE9PT1zJiYoYz0hMSxzPWYrMSksNDY9PT1vPy0xPT09YT9hPWY6MSE9PXUmJih1PTEpOi0xIT09YSYmKHU9LTEpO2Vsc2UgaWYoIWMpe2g9ZisxO2JyZWFrfXJldHVybi0xPT09YXx8LTE9PT1zfHwwPT09dXx8MT09PXUmJmE9PT1zLTEmJmE9PT1oKzE/LTEhPT1zJiYoci5iYXNlPXIubmFtZT0wPT09aCYmaT90LnNsaWNlKDEscyk6dC5zbGljZShoLHMpKTooMD09PWgmJmk/KHIubmFtZT10LnNsaWNlKDEsYSksci5iYXNlPXQuc2xpY2UoMSxzKSk6KHIubmFtZT10LnNsaWNlKGgsYSksci5iYXNlPXQuc2xpY2UoaCxzKSksci5leHQ9dC5zbGljZShhLHMpKSxoPjA/ci5kaXI9dC5zbGljZSgwLGgtMSk6aSYmKHIuZGlyPVwiL1wiKSxyfSxzZXA6XCIvXCIsZGVsaW1pdGVyOlwiOlwiLHdpbjMyOm51bGwscG9zaXg6bnVsbH07bi5wb3NpeD1uLHQuZXhwb3J0cz1ufX0sZT17fTtmdW5jdGlvbiByKG4pe3ZhciBvPWVbbl07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciBpPWVbbl09e2V4cG9ydHM6e319O3JldHVybiB0W25dKGksaS5leHBvcnRzLHIpLGkuZXhwb3J0c31yLmQ9KHQsZSk9Pntmb3IodmFyIG4gaW4gZSlyLm8oZSxuKSYmIXIubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LHIubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksci5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTsoKCk9Pnt2YXIgdDtpZihyLnIobiksci5kKG4se1VSSTooKT0+cCxVdGlsczooKT0+X30pLFwib2JqZWN0XCI9PXR5cGVvZiBwcm9jZXNzKXQ9XCJ3aW4zMlwiPT09cHJvY2Vzcy5wbGF0Zm9ybTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBuYXZpZ2F0b3Ipe3ZhciBlPW5hdmlnYXRvci51c2VyQWdlbnQ7dD1lLmluZGV4T2YoXCJXaW5kb3dzXCIpPj0wfXZhciBvLGksYT0obz1mdW5jdGlvbih0LGUpe3JldHVybiBvPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0sbyh0LGUpfSxmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhlKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPXR9byh0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KHIucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyByKX0pLGg9L15cXHdbXFx3XFxkKy4tXSokLyxzPS9eXFwvLyxjPS9eXFwvXFwvLyxmPVwiXCIsdT1cIi9cIixsPS9eKChbXjovPyNdKz8pOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vLHA9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsZSxyLG4sbyxpKXt2b2lkIDA9PT1pJiYoaT0hMSksXCJvYmplY3RcIj09dHlwZW9mIHQ/KHRoaXMuc2NoZW1lPXQuc2NoZW1lfHxmLHRoaXMuYXV0aG9yaXR5PXQuYXV0aG9yaXR5fHxmLHRoaXMucGF0aD10LnBhdGh8fGYsdGhpcy5xdWVyeT10LnF1ZXJ5fHxmLHRoaXMuZnJhZ21lbnQ9dC5mcmFnbWVudHx8Zik6KHRoaXMuc2NoZW1lPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHR8fGU/dDpcImZpbGVcIn0odCxpKSx0aGlzLmF1dGhvcml0eT1lfHxmLHRoaXMucGF0aD1mdW5jdGlvbih0LGUpe3N3aXRjaCh0KXtjYXNlXCJodHRwc1wiOmNhc2VcImh0dHBcIjpjYXNlXCJmaWxlXCI6ZT9lWzBdIT09dSYmKGU9dStlKTplPXV9cmV0dXJuIGV9KHRoaXMuc2NoZW1lLHJ8fGYpLHRoaXMucXVlcnk9bnx8Zix0aGlzLmZyYWdtZW50PW98fGYsZnVuY3Rpb24odCxlKXtpZighdC5zY2hlbWUmJmUpdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBTY2hlbWUgaXMgbWlzc2luZzoge3NjaGVtZTogXCJcIiwgYXV0aG9yaXR5OiBcIicuY29uY2F0KHQuYXV0aG9yaXR5LCdcIiwgcGF0aDogXCInKS5jb25jYXQodC5wYXRoLCdcIiwgcXVlcnk6IFwiJykuY29uY2F0KHQucXVlcnksJ1wiLCBmcmFnbWVudDogXCInKS5jb25jYXQodC5mcmFnbWVudCwnXCJ9JykpO2lmKHQuc2NoZW1lJiYhaC50ZXN0KHQuc2NoZW1lKSl0aHJvdyBuZXcgRXJyb3IoXCJbVXJpRXJyb3JdOiBTY2hlbWUgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzLlwiKTtpZih0LnBhdGgpaWYodC5hdXRob3JpdHkpe2lmKCFzLnRlc3QodC5wYXRoKSl0aHJvdyBuZXcgRXJyb3IoJ1tVcmlFcnJvcl06IElmIGEgVVJJIGNvbnRhaW5zIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY29tcG9uZW50IG11c3QgZWl0aGVyIGJlIGVtcHR5IG9yIGJlZ2luIHdpdGggYSBzbGFzaCAoXCIvXCIpIGNoYXJhY3RlcicpfWVsc2UgaWYoYy50ZXN0KHQucGF0aCkpdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBJZiBhIFVSSSBkb2VzIG5vdCBjb250YWluIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY2Fubm90IGJlZ2luIHdpdGggdHdvIHNsYXNoIGNoYXJhY3RlcnMgKFwiLy9cIiknKX0odGhpcyxpKSl9cmV0dXJuIGUuaXNVcmk9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBlfHwhIXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmF1dGhvcml0eSYmXCJzdHJpbmdcIj09dHlwZW9mIHQuZnJhZ21lbnQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LnBhdGgmJlwic3RyaW5nXCI9PXR5cGVvZiB0LnF1ZXJ5JiZcInN0cmluZ1wiPT10eXBlb2YgdC5zY2hlbWUmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmZzUGF0aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC53aXRoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRvU3RyaW5nfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJmc1BhdGhcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGIodGhpcywhMSl9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksZS5wcm90b3R5cGUud2l0aD1mdW5jdGlvbih0KXtpZighdClyZXR1cm4gdGhpczt2YXIgZT10LnNjaGVtZSxyPXQuYXV0aG9yaXR5LG49dC5wYXRoLG89dC5xdWVyeSxpPXQuZnJhZ21lbnQ7cmV0dXJuIHZvaWQgMD09PWU/ZT10aGlzLnNjaGVtZTpudWxsPT09ZSYmKGU9Ziksdm9pZCAwPT09cj9yPXRoaXMuYXV0aG9yaXR5Om51bGw9PT1yJiYocj1mKSx2b2lkIDA9PT1uP249dGhpcy5wYXRoOm51bGw9PT1uJiYobj1mKSx2b2lkIDA9PT1vP289dGhpcy5xdWVyeTpudWxsPT09byYmKG89Ziksdm9pZCAwPT09aT9pPXRoaXMuZnJhZ21lbnQ6bnVsbD09PWkmJihpPWYpLGU9PT10aGlzLnNjaGVtZSYmcj09PXRoaXMuYXV0aG9yaXR5JiZuPT09dGhpcy5wYXRoJiZvPT09dGhpcy5xdWVyeSYmaT09PXRoaXMuZnJhZ21lbnQ/dGhpczpuZXcgZChlLHIsbixvLGkpfSxlLnBhcnNlPWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09ZSYmKGU9ITEpO3ZhciByPWwuZXhlYyh0KTtyZXR1cm4gcj9uZXcgZChyWzJdfHxmLHgocls0XXx8ZikseChyWzVdfHxmKSx4KHJbN118fGYpLHgocls5XXx8ZiksZSk6bmV3IGQoZixmLGYsZixmKX0sZS5maWxlPWZ1bmN0aW9uKGUpe3ZhciByPWY7aWYodCYmKGU9ZS5yZXBsYWNlKC9cXFxcL2csdSkpLGVbMF09PT11JiZlWzFdPT09dSl7dmFyIG49ZS5pbmRleE9mKHUsMik7LTE9PT1uPyhyPWUuc3Vic3RyaW5nKDIpLGU9dSk6KHI9ZS5zdWJzdHJpbmcoMixuKSxlPWUuc3Vic3RyaW5nKG4pfHx1KX1yZXR1cm4gbmV3IGQoXCJmaWxlXCIscixlLGYsZil9LGUuZnJvbT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGQodC5zY2hlbWUsdC5hdXRob3JpdHksdC5wYXRoLHQucXVlcnksdC5mcmFnbWVudCl9LGUucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMSksQyh0aGlzLHQpfSxlLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sZS5yZXZpdmU9ZnVuY3Rpb24odCl7aWYodCl7aWYodCBpbnN0YW5jZW9mIGUpcmV0dXJuIHQ7dmFyIHI9bmV3IGQodCk7cmV0dXJuIHIuX2Zvcm1hdHRlZD10LmV4dGVybmFsLHIuX2ZzUGF0aD10Ll9zZXA9PT1nP3QuZnNQYXRoOm51bGwscn1yZXR1cm4gdH0sZX0oKSxnPXQ/MTp2b2lkIDAsZD1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7dmFyIGU9bnVsbCE9PXQmJnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzO3JldHVybiBlLl9mb3JtYXR0ZWQ9bnVsbCxlLl9mc1BhdGg9bnVsbCxlfXJldHVybiBhKGUsdCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiZnNQYXRoXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mc1BhdGh8fCh0aGlzLl9mc1BhdGg9Yih0aGlzLCExKSksdGhpcy5fZnNQYXRofSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMSksdD9DKHRoaXMsITApOih0aGlzLl9mb3JtYXR0ZWR8fCh0aGlzLl9mb3JtYXR0ZWQ9Qyh0aGlzLCExKSksdGhpcy5fZm9ybWF0dGVkKX0sZS5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7dmFyIHQ9eyRtaWQ6MX07cmV0dXJuIHRoaXMuX2ZzUGF0aCYmKHQuZnNQYXRoPXRoaXMuX2ZzUGF0aCx0Ll9zZXA9ZyksdGhpcy5fZm9ybWF0dGVkJiYodC5leHRlcm5hbD10aGlzLl9mb3JtYXR0ZWQpLHRoaXMucGF0aCYmKHQucGF0aD10aGlzLnBhdGgpLHRoaXMuc2NoZW1lJiYodC5zY2hlbWU9dGhpcy5zY2hlbWUpLHRoaXMuYXV0aG9yaXR5JiYodC5hdXRob3JpdHk9dGhpcy5hdXRob3JpdHkpLHRoaXMucXVlcnkmJih0LnF1ZXJ5PXRoaXMucXVlcnkpLHRoaXMuZnJhZ21lbnQmJih0LmZyYWdtZW50PXRoaXMuZnJhZ21lbnQpLHR9LGV9KHApLHY9KChpPXt9KVs1OF09XCIlM0FcIixpWzQ3XT1cIiUyRlwiLGlbNjNdPVwiJTNGXCIsaVszNV09XCIlMjNcIixpWzkxXT1cIiU1QlwiLGlbOTNdPVwiJTVEXCIsaVs2NF09XCIlNDBcIixpWzMzXT1cIiUyMVwiLGlbMzZdPVwiJTI0XCIsaVszOF09XCIlMjZcIixpWzM5XT1cIiUyN1wiLGlbNDBdPVwiJTI4XCIsaVs0MV09XCIlMjlcIixpWzQyXT1cIiUyQVwiLGlbNDNdPVwiJTJCXCIsaVs0NF09XCIlMkNcIixpWzU5XT1cIiUzQlwiLGlbNjFdPVwiJTNEXCIsaVszMl09XCIlMjBcIixpKTtmdW5jdGlvbiB5KHQsZSl7Zm9yKHZhciByPXZvaWQgMCxuPS0xLG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIGk9dC5jaGFyQ29kZUF0KG8pO2lmKGk+PTk3JiZpPD0xMjJ8fGk+PTY1JiZpPD05MHx8aT49NDgmJmk8PTU3fHw0NT09PWl8fDQ2PT09aXx8OTU9PT1pfHwxMjY9PT1pfHxlJiY0Nz09PWkpLTEhPT1uJiYocis9ZW5jb2RlVVJJQ29tcG9uZW50KHQuc3Vic3RyaW5nKG4sbykpLG49LTEpLHZvaWQgMCE9PXImJihyKz10LmNoYXJBdChvKSk7ZWxzZXt2b2lkIDA9PT1yJiYocj10LnN1YnN0cigwLG8pKTt2YXIgYT12W2ldO3ZvaWQgMCE9PWE/KC0xIT09biYmKHIrPWVuY29kZVVSSUNvbXBvbmVudCh0LnN1YnN0cmluZyhuLG8pKSxuPS0xKSxyKz1hKTotMT09PW4mJihuPW8pfX1yZXR1cm4tMSE9PW4mJihyKz1lbmNvZGVVUklDb21wb25lbnQodC5zdWJzdHJpbmcobikpKSx2b2lkIDAhPT1yP3I6dH1mdW5jdGlvbiBtKHQpe2Zvcih2YXIgZT12b2lkIDAscj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10LmNoYXJDb2RlQXQocik7MzU9PT1ufHw2Mz09PW4/KHZvaWQgMD09PWUmJihlPXQuc3Vic3RyKDAscikpLGUrPXZbbl0pOnZvaWQgMCE9PWUmJihlKz10W3JdKX1yZXR1cm4gdm9pZCAwIT09ZT9lOnR9ZnVuY3Rpb24gYihlLHIpe3ZhciBuO3JldHVybiBuPWUuYXV0aG9yaXR5JiZlLnBhdGgubGVuZ3RoPjEmJlwiZmlsZVwiPT09ZS5zY2hlbWU/XCIvL1wiLmNvbmNhdChlLmF1dGhvcml0eSkuY29uY2F0KGUucGF0aCk6NDc9PT1lLnBhdGguY2hhckNvZGVBdCgwKSYmKGUucGF0aC5jaGFyQ29kZUF0KDEpPj02NSYmZS5wYXRoLmNoYXJDb2RlQXQoMSk8PTkwfHxlLnBhdGguY2hhckNvZGVBdCgxKT49OTcmJmUucGF0aC5jaGFyQ29kZUF0KDEpPD0xMjIpJiY1OD09PWUucGF0aC5jaGFyQ29kZUF0KDIpP3I/ZS5wYXRoLnN1YnN0cigxKTplLnBhdGhbMV0udG9Mb3dlckNhc2UoKStlLnBhdGguc3Vic3RyKDIpOmUucGF0aCx0JiYobj1uLnJlcGxhY2UoL1xcLy9nLFwiXFxcXFwiKSksbn1mdW5jdGlvbiBDKHQsZSl7dmFyIHI9ZT9tOnksbj1cIlwiLG89dC5zY2hlbWUsaT10LmF1dGhvcml0eSxhPXQucGF0aCxoPXQucXVlcnkscz10LmZyYWdtZW50O2lmKG8mJihuKz1vLG4rPVwiOlwiKSwoaXx8XCJmaWxlXCI9PT1vKSYmKG4rPXUsbis9dSksaSl7dmFyIGM9aS5pbmRleE9mKFwiQFwiKTtpZigtMSE9PWMpe3ZhciBmPWkuc3Vic3RyKDAsYyk7aT1pLnN1YnN0cihjKzEpLC0xPT09KGM9Zi5pbmRleE9mKFwiOlwiKSk/bis9cihmLCExKToobis9cihmLnN1YnN0cigwLGMpLCExKSxuKz1cIjpcIixuKz1yKGYuc3Vic3RyKGMrMSksITEpKSxuKz1cIkBcIn0tMT09PShjPShpPWkudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihcIjpcIikpP24rPXIoaSwhMSk6KG4rPXIoaS5zdWJzdHIoMCxjKSwhMSksbis9aS5zdWJzdHIoYykpfWlmKGEpe2lmKGEubGVuZ3RoPj0zJiY0Nz09PWEuY2hhckNvZGVBdCgwKSYmNTg9PT1hLmNoYXJDb2RlQXQoMikpKGw9YS5jaGFyQ29kZUF0KDEpKT49NjUmJmw8PTkwJiYoYT1cIi9cIi5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZShsKzMyKSxcIjpcIikuY29uY2F0KGEuc3Vic3RyKDMpKSk7ZWxzZSBpZihhLmxlbmd0aD49MiYmNTg9PT1hLmNoYXJDb2RlQXQoMSkpe3ZhciBsOyhsPWEuY2hhckNvZGVBdCgwKSk+PTY1JiZsPD05MCYmKGE9XCJcIi5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZShsKzMyKSxcIjpcIikuY29uY2F0KGEuc3Vic3RyKDIpKSl9bis9cihhLCEwKX1yZXR1cm4gaCYmKG4rPVwiP1wiLG4rPXIoaCwhMSkpLHMmJihuKz1cIiNcIixuKz1lP3M6eShzLCExKSksbn1mdW5jdGlvbiBBKHQpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHQpfWNhdGNoKGUpe3JldHVybiB0Lmxlbmd0aD4zP3Quc3Vic3RyKDAsMykrQSh0LnN1YnN0cigzKSk6dH19dmFyIHc9LyglWzAtOUEtWmEtel1bMC05QS1aYS16XSkrL2c7ZnVuY3Rpb24geCh0KXtyZXR1cm4gdC5tYXRjaCh3KT90LnJlcGxhY2UodywoZnVuY3Rpb24odCl7cmV0dXJuIEEodCl9KSk6dH12YXIgXyxPPXIoNDcwKSxQPWZ1bmN0aW9uKHQsZSxyKXtpZihyfHwyPT09YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIG4sbz0wLGk9ZS5sZW5ndGg7bzxpO28rKykhbiYmbyBpbiBlfHwobnx8KG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSwwLG8pKSxuW29dPWVbb10pO3JldHVybiB0LmNvbmNhdChufHxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKSl9LGo9Ty5wb3NpeHx8TyxVPVwiL1wiOyFmdW5jdGlvbih0KXt0LmpvaW5QYXRoPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyllW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiB0LndpdGgoe3BhdGg6ai5qb2luLmFwcGx5KGosUChbdC5wYXRoXSxlLCExKSl9KX0sdC5yZXNvbHZlUGF0aD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspZVtyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbj10LnBhdGgsbz0hMTtuWzBdIT09VSYmKG49VStuLG89ITApO3ZhciBpPWoucmVzb2x2ZS5hcHBseShqLFAoW25dLGUsITEpKTtyZXR1cm4gbyYmaVswXT09PVUmJiF0LmF1dGhvcml0eSYmKGk9aS5zdWJzdHJpbmcoMSkpLHQud2l0aCh7cGF0aDppfSl9LHQuZGlybmFtZT1mdW5jdGlvbih0KXtpZigwPT09dC5wYXRoLmxlbmd0aHx8dC5wYXRoPT09VSlyZXR1cm4gdDt2YXIgZT1qLmRpcm5hbWUodC5wYXRoKTtyZXR1cm4gMT09PWUubGVuZ3RoJiY0Nj09PWUuY2hhckNvZGVBdCgwKSYmKGU9XCJcIiksdC53aXRoKHtwYXRoOmV9KX0sdC5iYXNlbmFtZT1mdW5jdGlvbih0KXtyZXR1cm4gai5iYXNlbmFtZSh0LnBhdGgpfSx0LmV4dG5hbWU9ZnVuY3Rpb24odCl7cmV0dXJuIGouZXh0bmFtZSh0LnBhdGgpfX0oX3x8KF89e30pKX0pKCksTElCPW59KSgpO2V4cG9ydCBjb25zdHtVUkksVXRpbHN9PUxJQjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tICcuL2NvbW1hbmRzQW5kRXZlbnRzJztcclxuaW1wb3J0IHsgVVJJIH0gZnJvbSAndnNjb2RlLXVyaSc7XHJcbmltcG9ydCB7IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUsIGlzS2VybmVsQ29tbWFuZEVudmVsb3BlIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2VybmVsVXJpKGtlcm5lbFVyaTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGtlcm5lbFVyaTsvLz9cclxuICAgIGNvbnN0IHVyaSA9IFVSSS5wYXJzZShrZXJuZWxVcmkpO1xyXG4gICAgdXJpLmF1dGhvcml0eTsvLz9cclxuICAgIHVyaS5wYXRoOy8vP1xyXG4gICAgbGV0IGFic29sdXRlVXJpID0gYCR7dXJpLnNjaGVtZX06Ly8ke3VyaS5hdXRob3JpdHl9JHt1cmkucGF0aCB8fCBcIi9cIn1gO1xyXG4gICAgcmV0dXJuIGFic29sdXRlVXJpOy8vP1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2VybmVsVXJpV2l0aFF1ZXJ5KGtlcm5lbFVyaTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGtlcm5lbFVyaTsvLz9cclxuICAgIGNvbnN0IHVyaSA9IFVSSS5wYXJzZShrZXJuZWxVcmkpO1xyXG4gICAgdXJpLmF1dGhvcml0eTsvLz9cclxuICAgIHVyaS5wYXRoOy8vP1xyXG4gICAgbGV0IGFic29sdXRlVXJpID0gYCR7dXJpLnNjaGVtZX06Ly8ke3VyaS5hdXRob3JpdHl9JHt1cmkucGF0aCB8fCBcIi9cIn1gO1xyXG4gICAgaWYgKHVyaS5xdWVyeSkge1xyXG4gICAgICAgIGFic29sdXRlVXJpICs9IGA/JHt1cmkucXVlcnl9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBhYnNvbHV0ZVVyaTsvLz9cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnKGtlcm5lbFVyaTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IHVyaSA9IFVSSS5wYXJzZShrZXJuZWxVcmkpO1xyXG4gICAgaWYgKHVyaS5xdWVyeSkgey8vP1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdXJpLnF1ZXJ5LnNwbGl0KFwidGFnPVwiKTtcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydHNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvdXRpbmdTbGlwKGtlcm5lbFVyaXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChrZXJuZWxVcmlzLm1hcChlID0+IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm91dGluZ1NsaXBTdGFydHNXaXRoKHRoaXNLZXJuZWxVcmlzOiBzdHJpbmdbXSwgb3RoZXJLZXJuZWxVcmlzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHN0YXJ0c1dpdGggPSB0cnVlO1xyXG5cclxuICAgIGlmIChvdGhlcktlcm5lbFVyaXMubGVuZ3RoID4gMCAmJiB0aGlzS2VybmVsVXJpcy5sZW5ndGggPj0gb3RoZXJLZXJuZWxVcmlzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJLZXJuZWxVcmlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjcmVhdGVLZXJuZWxVcmkob3RoZXJLZXJuZWxVcmlzW2ldKSAhPT0gY3JlYXRlS2VybmVsVXJpKHRoaXNLZXJuZWxVcmlzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRzV2l0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGFydHNXaXRoID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXJ0c1dpdGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdXRpbmdTbGlwQ29udGFpbnMocm91dGluZ1NsaXA6IHN0cmluZ1tdLCBrZXJuZWxVcmk6IHN0cmluZywgaWdub3JlUXVlcnk6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFVyaSA9IGlnbm9yZVF1ZXJ5ID8gY3JlYXRlS2VybmVsVXJpKGtlcm5lbFVyaSkgOiBjcmVhdGVLZXJuZWxVcmlXaXRoUXVlcnkoa2VybmVsVXJpKTtcclxuICAgIHJldHVybiByb3V0aW5nU2xpcC5maW5kKGUgPT4gbm9ybWFsaXplZFVyaSA9PT0gKCFpZ25vcmVRdWVyeSA/IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSA6IGNyZWF0ZUtlcm5lbFVyaShlKSkpICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb3V0aW5nU2xpcCB7XHJcbiAgICBwcml2YXRlIF91cmlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgdXJpcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VyaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldCB1cmlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuX3VyaXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoa2VybmVsVXJpOiBzdHJpbmcsIGlnbm9yZVF1ZXJ5OiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcm91dGluZ1NsaXBDb250YWlucyh0aGlzLl91cmlzLCBrZXJuZWxVcmksIGlnbm9yZVF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRzV2l0aChvdGhlcjogc3RyaW5nW10gfCBSb3V0aW5nU2xpcCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0aW5nU2xpcFN0YXJ0c1dpdGgodGhpcy5fdXJpcywgb3RoZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0aW5nU2xpcFN0YXJ0c1dpdGgodGhpcy5fdXJpcywgb3RoZXIuX3VyaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGludWVXaXRoKG90aGVyOiBzdHJpbmdbXSB8IFJvdXRpbmdTbGlwKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG90aGVyVXJpcyA9IChvdGhlciBpbnN0YW5jZW9mIEFycmF5ID8gb3RoZXIgOiBvdGhlci5fdXJpcykgfHwgW107XHJcbiAgICAgICAgaWYgKG90aGVyVXJpcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0aW5nU2xpcFN0YXJ0c1dpdGgob3RoZXJVcmlzLCB0aGlzLl91cmlzKSkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJVcmlzID0gb3RoZXJVcmlzLnNsaWNlKHRoaXMuX3VyaXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclVyaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKG90aGVyVXJpc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VyaXMucHVzaChvdGhlclVyaXNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdXJpICR7b3RoZXJVcmlzW2ldfSBpcyBhbHJlYWR5IGluIHRoZSByb3V0aW5nIHNsaXAgWyR7dGhpcy5fdXJpc31dLCBjYW5ub3QgY29udGludWUgd2l0aCByb3V0aW5nIHNsaXAgWyR7b3RoZXJVcmlzfV1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJheSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl91cmlzXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3RhbXAoa2VybmVsVXJpOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZFJvdXRpbmdTbGlwIGV4dGVuZHMgUm91dGluZ1NsaXAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21VcmlzKHVyaXM6IHN0cmluZ1tdKTogQ29tbWFuZFJvdXRpbmdTbGlwIHtcclxuICAgICAgICBjb25zdCByb3V0aW5nU2xpcCA9IG5ldyBDb21tYW5kUm91dGluZ1NsaXAoKTtcclxuICAgICAgICByb3V0aW5nU2xpcC51cmlzID0gdXJpcztcclxuICAgICAgICByZXR1cm4gcm91dGluZ1NsaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YW1wQXNBcnJpdmVkKGtlcm5lbFVyaTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFtcEFzKGtlcm5lbFVyaSwgXCJhcnJpdmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzdGFtcChrZXJuZWxVcmk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhbXBBcyhrZXJuZWxVcmkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhbXBBcyhrZXJuZWxVcmk6IHN0cmluZywgdGFnPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRhZykge1xyXG4gICAgICAgICAgICBjb25zdCBhYnNvbHV0ZVVyaVdpdGhRdWVyeSA9IGAke2NyZWF0ZUtlcm5lbFVyaShrZXJuZWxVcmkpfT90YWc9JHt0YWd9YDtcclxuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVcmlXaXRob3V0UXVlcnkgPSBjcmVhdGVLZXJuZWxVcmkoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXJpcy5maW5kKGUgPT4gZS5zdGFydHNXaXRoKGFic29sdXRlVXJpV2l0aG91dFF1ZXJ5KSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHVyaSAke2Fic29sdXRlVXJpV2l0aFF1ZXJ5fSBpcyBhbHJlYWR5IGluIHRoZSByb3V0aW5nIHNsaXAgWyR7dGhpcy51cmlzfV1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXJpcy5wdXNoKGFic29sdXRlVXJpV2l0aFF1ZXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlVXJpV2l0aFF1ZXJ5ID0gYCR7Y3JlYXRlS2VybmVsVXJpKGtlcm5lbFVyaSl9P3RhZz1hcnJpdmVkYDtcclxuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVcmlXaXRob3V0UXVlcnkgPSBjcmVhdGVLZXJuZWxVcmkoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnVyaXMuZmluZChlID0+IGUuc3RhcnRzV2l0aChhYnNvbHV0ZVVyaVdpdGhRdWVyeSkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB1cmkgJHthYnNvbHV0ZVVyaVdpdGhRdWVyeX0gaXMgbm90IGluIHRoZSByb3V0aW5nIHNsaXAgWyR7dGhpcy51cmlzfV1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVyaXMuZmluZChlID0+IGUgPT09IGFic29sdXRlVXJpV2l0aG91dFF1ZXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdXJpICR7YWJzb2x1dGVVcmlXaXRob3V0UXVlcnl9IGlzIGFscmVhZHkgaW4gdGhlIHJvdXRpbmcgc2xpcCBbJHt0aGlzLnVyaXN9XWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cmlzLnB1c2goYWJzb2x1dGVVcmlXaXRob3V0UXVlcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRSb3V0aW5nU2xpcCBleHRlbmRzIFJvdXRpbmdTbGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tVXJpcyh1cmlzOiBzdHJpbmdbXSk6IEV2ZW50Um91dGluZ1NsaXAge1xyXG4gICAgICAgIGNvbnN0IHJvdXRpbmdTbGlwID0gbmV3IEV2ZW50Um91dGluZ1NsaXAoKTtcclxuICAgICAgICByb3V0aW5nU2xpcC51cmlzID0gdXJpcztcclxuICAgICAgICByZXR1cm4gcm91dGluZ1NsaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHN0YW1wKGtlcm5lbFVyaTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVyaSA9IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShrZXJuZWxVcmkpO1xyXG4gICAgICAgIGNvbnN0IGNhbkFkZCA9ICF0aGlzLnVyaXMuZmluZChlID0+IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSA9PT0gbm9ybWFsaXplZFVyaSk7XHJcbiAgICAgICAgaWYgKGNhbkFkZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVyaXMucHVzaChub3JtYWxpemVkVXJpKTtcclxuICAgICAgICAgICAgdGhpcy51cmlzOy8vP1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHVyaSAke25vcm1hbGl6ZWRVcml9IGlzIGFscmVhZHkgaW4gdGhlIHJvdXRpbmcgc2xpcCBbJHt0aGlzLnVyaXN9XWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG4vLyBHZW5lcmF0ZWQgVHlwZVNjcmlwdCBpbnRlcmZhY2VzIGFuZCB0eXBlcy5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBLZXJuZWwgQ29tbWFuZHNcclxuXHJcbmV4cG9ydCBjb25zdCBDYW5jZWxUeXBlID0gXCJDYW5jZWxcIjtcclxuZXhwb3J0IGNvbnN0IENoYW5nZVdvcmtpbmdEaXJlY3RvcnlUeXBlID0gXCJDaGFuZ2VXb3JraW5nRGlyZWN0b3J5XCI7XHJcbmV4cG9ydCBjb25zdCBDb21waWxlUHJvamVjdFR5cGUgPSBcIkNvbXBpbGVQcm9qZWN0XCI7XHJcbmV4cG9ydCBjb25zdCBEaXNwbGF5RXJyb3JUeXBlID0gXCJEaXNwbGF5RXJyb3JcIjtcclxuZXhwb3J0IGNvbnN0IERpc3BsYXlWYWx1ZVR5cGUgPSBcIkRpc3BsYXlWYWx1ZVwiO1xyXG5leHBvcnQgY29uc3QgT3BlbkRvY3VtZW50VHlwZSA9IFwiT3BlbkRvY3VtZW50XCI7XHJcbmV4cG9ydCBjb25zdCBPcGVuUHJvamVjdFR5cGUgPSBcIk9wZW5Qcm9qZWN0XCI7XHJcbmV4cG9ydCBjb25zdCBRdWl0VHlwZSA9IFwiUXVpdFwiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdENvbXBsZXRpb25zVHlwZSA9IFwiUmVxdWVzdENvbXBsZXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0RGlhZ25vc3RpY3NUeXBlID0gXCJSZXF1ZXN0RGlhZ25vc3RpY3NcIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RIb3ZlclRleHRUeXBlID0gXCJSZXF1ZXN0SG92ZXJUZXh0XCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0SW5wdXRUeXBlID0gXCJSZXF1ZXN0SW5wdXRcIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RLZXJuZWxJbmZvVHlwZSA9IFwiUmVxdWVzdEtlcm5lbEluZm9cIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RTaWduYXR1cmVIZWxwVHlwZSA9IFwiUmVxdWVzdFNpZ25hdHVyZUhlbHBcIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RWYWx1ZVR5cGUgPSBcIlJlcXVlc3RWYWx1ZVwiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdFZhbHVlSW5mb3NUeXBlID0gXCJSZXF1ZXN0VmFsdWVJbmZvc1wiO1xyXG5leHBvcnQgY29uc3QgU2VuZEVkaXRhYmxlQ29kZVR5cGUgPSBcIlNlbmRFZGl0YWJsZUNvZGVcIjtcclxuZXhwb3J0IGNvbnN0IFNlbmRWYWx1ZVR5cGUgPSBcIlNlbmRWYWx1ZVwiO1xyXG5leHBvcnQgY29uc3QgU3VibWl0Q29kZVR5cGUgPSBcIlN1Ym1pdENvZGVcIjtcclxuZXhwb3J0IGNvbnN0IFVwZGF0ZURpc3BsYXllZFZhbHVlVHlwZSA9IFwiVXBkYXRlRGlzcGxheWVkVmFsdWVcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEtlcm5lbENvbW1hbmRUeXBlID1cclxuICAgICAgdHlwZW9mIENhbmNlbFR5cGVcclxuICAgIHwgdHlwZW9mIENoYW5nZVdvcmtpbmdEaXJlY3RvcnlUeXBlXHJcbiAgICB8IHR5cGVvZiBDb21waWxlUHJvamVjdFR5cGVcclxuICAgIHwgdHlwZW9mIERpc3BsYXlFcnJvclR5cGVcclxuICAgIHwgdHlwZW9mIERpc3BsYXlWYWx1ZVR5cGVcclxuICAgIHwgdHlwZW9mIE9wZW5Eb2N1bWVudFR5cGVcclxuICAgIHwgdHlwZW9mIE9wZW5Qcm9qZWN0VHlwZVxyXG4gICAgfCB0eXBlb2YgUXVpdFR5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3RDb21wbGV0aW9uc1R5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3REaWFnbm9zdGljc1R5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3RIb3ZlclRleHRUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0SW5wdXRUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0S2VybmVsSW5mb1R5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3RTaWduYXR1cmVIZWxwVHlwZVxyXG4gICAgfCB0eXBlb2YgUmVxdWVzdFZhbHVlVHlwZVxyXG4gICAgfCB0eXBlb2YgUmVxdWVzdFZhbHVlSW5mb3NUeXBlXHJcbiAgICB8IHR5cGVvZiBTZW5kRWRpdGFibGVDb2RlVHlwZVxyXG4gICAgfCB0eXBlb2YgU2VuZFZhbHVlVHlwZVxyXG4gICAgfCB0eXBlb2YgU3VibWl0Q29kZVR5cGVcclxuICAgIHwgdHlwZW9mIFVwZGF0ZURpc3BsYXllZFZhbHVlVHlwZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FuY2VsIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsQ29tbWFuZCB7XHJcbiAgICB0YXJnZXRLZXJuZWxOYW1lPzogc3RyaW5nO1xyXG4gICAgb3JpZ2luVXJpPzogc3RyaW5nO1xyXG4gICAgZGVzdGluYXRpb25Vcmk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlV29ya2luZ0RpcmVjdG9yeSBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgd29ya2luZ0RpcmVjdG9yeTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVQcm9qZWN0IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheUVycm9yIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheVZhbHVlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBmb3JtYXR0ZWRWYWx1ZTogRm9ybWF0dGVkVmFsdWU7XHJcbiAgICB2YWx1ZUlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlbkRvY3VtZW50IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICByZWxhdGl2ZUZpbGVQYXRoOiBzdHJpbmc7XHJcbiAgICByZWdpb25OYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5Qcm9qZWN0IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBwcm9qZWN0OiBQcm9qZWN0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1aXQgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q29tcGxldGlvbnMgZXh0ZW5kcyBMYW5ndWFnZVNlcnZpY2VDb21tYW5kIHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVNlcnZpY2VDb21tYW5kIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBsaW5lUG9zaXRpb246IExpbmVQb3NpdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGlhZ25vc3RpY3MgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SG92ZXJUZXh0IGV4dGVuZHMgTGFuZ3VhZ2VTZXJ2aWNlQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdElucHV0IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBwcm9tcHQ6IHN0cmluZztcclxuICAgIGlzUGFzc3dvcmQ6IGJvb2xlYW47XHJcbiAgICBpbnB1dFR5cGVIaW50OiBzdHJpbmc7XHJcbiAgICB2YWx1ZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0S2VybmVsSW5mbyBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RTaWduYXR1cmVIZWxwIGV4dGVuZHMgTGFuZ3VhZ2VTZXJ2aWNlQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFZhbHVlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RWYWx1ZUluZm9zIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbmRFZGl0YWJsZUNvZGUgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIGtlcm5lbE5hbWU6IHN0cmluZztcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZW5kVmFsdWUgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIGZvcm1hdHRlZFZhbHVlOiBGb3JtYXR0ZWRWYWx1ZTtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWJtaXRDb2RlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBzdWJtaXNzaW9uVHlwZT86IFN1Ym1pc3Npb25UeXBlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZURpc3BsYXllZFZhbHVlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBmb3JtYXR0ZWRWYWx1ZTogRm9ybWF0dGVkVmFsdWU7XHJcbiAgICB2YWx1ZUlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlFbGVtZW50IGV4dGVuZHMgSW50ZXJhY3RpdmVEb2N1bWVudE91dHB1dEVsZW1lbnQge1xyXG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcbiAgICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3RpdmVEb2N1bWVudE91dHB1dEVsZW1lbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldHVyblZhbHVlRWxlbWVudCBleHRlbmRzIEludGVyYWN0aXZlRG9jdW1lbnRPdXRwdXRFbGVtZW50IHtcclxuICAgIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xyXG4gICAgZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcclxuICAgIG1ldGFkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueTsgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0RWxlbWVudCBleHRlbmRzIEludGVyYWN0aXZlRG9jdW1lbnRPdXRwdXRFbGVtZW50IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvckVsZW1lbnQgZXh0ZW5kcyBJbnRlcmFjdGl2ZURvY3VtZW50T3V0cHV0RWxlbWVudCB7XHJcbiAgICBlcnJvck5hbWU6IHN0cmluZztcclxuICAgIGVycm9yVmFsdWU6IHN0cmluZztcclxuICAgIHN0YWNrVHJhY2U6IEFycmF5PHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRLZXJuZWxJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIGFsaWFzZXM6IEFycmF5PHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90ZWJvb2tQYXJzZVJlcXVlc3QgZXh0ZW5kcyBOb3RlYm9va1BhcnNlT3JTZXJpYWxpemVSZXF1ZXN0IHtcclxuICAgIHR5cGU6IFJlcXVlc3RUeXBlO1xyXG4gICAgcmF3RGF0YTogVWludDhBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RlYm9va1BhcnNlT3JTZXJpYWxpemVSZXF1ZXN0IHtcclxuICAgIHR5cGU6IFJlcXVlc3RUeXBlO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHNlcmlhbGl6YXRpb25UeXBlOiBEb2N1bWVudFNlcmlhbGl6YXRpb25UeXBlO1xyXG4gICAgZGVmYXVsdExhbmd1YWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90ZWJvb2tTZXJpYWxpemVSZXF1ZXN0IGV4dGVuZHMgTm90ZWJvb2tQYXJzZU9yU2VyaWFsaXplUmVxdWVzdCB7XHJcbiAgICB0eXBlOiBSZXF1ZXN0VHlwZTtcclxuICAgIG5ld0xpbmU6IHN0cmluZztcclxuICAgIGRvY3VtZW50OiBJbnRlcmFjdGl2ZURvY3VtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVib29rUGFyc2VSZXNwb25zZSBleHRlbmRzIE5vdGVib29rUGFyc2VyU2VydmVyUmVzcG9uc2Uge1xyXG4gICAgZG9jdW1lbnQ6IEludGVyYWN0aXZlRG9jdW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90ZWJvb2tQYXJzZXJTZXJ2ZXJSZXNwb25zZSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVib29rU2VyaWFsaXplUmVzcG9uc2UgZXh0ZW5kcyBOb3RlYm9va1BhcnNlclNlcnZlclJlc3BvbnNlIHtcclxuICAgIHJhd0RhdGE6IFVpbnQ4QXJyYXk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBLZXJuZWwgZXZlbnRzXHJcblxyXG5leHBvcnQgY29uc3QgQXNzZW1ibHlQcm9kdWNlZFR5cGUgPSBcIkFzc2VtYmx5UHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IENvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlID0gXCJDb2RlU3VibWlzc2lvblJlY2VpdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBDb21tYW5kRmFpbGVkVHlwZSA9IFwiQ29tbWFuZEZhaWxlZFwiO1xyXG5leHBvcnQgY29uc3QgQ29tbWFuZFN1Y2NlZWRlZFR5cGUgPSBcIkNvbW1hbmRTdWNjZWVkZWRcIjtcclxuZXhwb3J0IGNvbnN0IENvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFR5cGUgPSBcIkNvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFwiO1xyXG5leHBvcnQgY29uc3QgQ29tcGxldGlvbnNQcm9kdWNlZFR5cGUgPSBcIkNvbXBsZXRpb25zUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IERpYWdub3N0aWNzUHJvZHVjZWRUeXBlID0gXCJEaWFnbm9zdGljc1Byb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBEaXNwbGF5ZWRWYWx1ZVByb2R1Y2VkVHlwZSA9IFwiRGlzcGxheWVkVmFsdWVQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgRGlzcGxheWVkVmFsdWVVcGRhdGVkVHlwZSA9IFwiRGlzcGxheWVkVmFsdWVVcGRhdGVkXCI7XHJcbmV4cG9ydCBjb25zdCBEb2N1bWVudE9wZW5lZFR5cGUgPSBcIkRvY3VtZW50T3BlbmVkXCI7XHJcbmV4cG9ydCBjb25zdCBFcnJvclByb2R1Y2VkVHlwZSA9IFwiRXJyb3JQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgSG92ZXJUZXh0UHJvZHVjZWRUeXBlID0gXCJIb3ZlclRleHRQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgSW5jb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlID0gXCJJbmNvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFwiO1xyXG5leHBvcnQgY29uc3QgSW5wdXRQcm9kdWNlZFR5cGUgPSBcIklucHV0UHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IEtlcm5lbEV4dGVuc2lvbkxvYWRlZFR5cGUgPSBcIktlcm5lbEV4dGVuc2lvbkxvYWRlZFwiO1xyXG5leHBvcnQgY29uc3QgS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSA9IFwiS2VybmVsSW5mb1Byb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBLZXJuZWxSZWFkeVR5cGUgPSBcIktlcm5lbFJlYWR5XCI7XHJcbmV4cG9ydCBjb25zdCBQYWNrYWdlQWRkZWRUeXBlID0gXCJQYWNrYWdlQWRkZWRcIjtcclxuZXhwb3J0IGNvbnN0IFByb2plY3RPcGVuZWRUeXBlID0gXCJQcm9qZWN0T3BlbmVkXCI7XHJcbmV4cG9ydCBjb25zdCBSZXR1cm5WYWx1ZVByb2R1Y2VkVHlwZSA9IFwiUmV0dXJuVmFsdWVQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgU2lnbmF0dXJlSGVscFByb2R1Y2VkVHlwZSA9IFwiU2lnbmF0dXJlSGVscFByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBTdGFuZGFyZEVycm9yVmFsdWVQcm9kdWNlZFR5cGUgPSBcIlN0YW5kYXJkRXJyb3JWYWx1ZVByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBTdGFuZGFyZE91dHB1dFZhbHVlUHJvZHVjZWRUeXBlID0gXCJTdGFuZGFyZE91dHB1dFZhbHVlUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IFZhbHVlSW5mb3NQcm9kdWNlZFR5cGUgPSBcIlZhbHVlSW5mb3NQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgVmFsdWVQcm9kdWNlZFR5cGUgPSBcIlZhbHVlUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IFdvcmtpbmdEaXJlY3RvcnlDaGFuZ2VkVHlwZSA9IFwiV29ya2luZ0RpcmVjdG9yeUNoYW5nZWRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEtlcm5lbEV2ZW50VHlwZSA9XHJcbiAgICAgIHR5cGVvZiBBc3NlbWJseVByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFR5cGVcclxuICAgIHwgdHlwZW9mIENvbW1hbmRGYWlsZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBDb21tYW5kU3VjY2VlZGVkVHlwZVxyXG4gICAgfCB0eXBlb2YgQ29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkVHlwZVxyXG4gICAgfCB0eXBlb2YgQ29tcGxldGlvbnNQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIERpYWdub3N0aWNzUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBEaXNwbGF5ZWRWYWx1ZVByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgRGlzcGxheWVkVmFsdWVVcGRhdGVkVHlwZVxyXG4gICAgfCB0eXBlb2YgRG9jdW1lbnRPcGVuZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBFcnJvclByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgSG92ZXJUZXh0UHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBJbmNvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFR5cGVcclxuICAgIHwgdHlwZW9mIElucHV0UHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBLZXJuZWxFeHRlbnNpb25Mb2FkZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBLZXJuZWxJbmZvUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBLZXJuZWxSZWFkeVR5cGVcclxuICAgIHwgdHlwZW9mIFBhY2thZ2VBZGRlZFR5cGVcclxuICAgIHwgdHlwZW9mIFByb2plY3RPcGVuZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXR1cm5WYWx1ZVByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgU2lnbmF0dXJlSGVscFByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgU3RhbmRhcmRFcnJvclZhbHVlUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBTdGFuZGFyZE91dHB1dFZhbHVlUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBWYWx1ZUluZm9zUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBWYWx1ZVByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgV29ya2luZ0RpcmVjdG9yeUNoYW5nZWRUeXBlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBc3NlbWJseVByb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgYXNzZW1ibHk6IEJhc2U2NEVuY29kZWRBc3NlbWJseTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2RlU3VibWlzc2lvblJlY2VpdmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRGYWlsZWQgZXh0ZW5kcyBLZXJuZWxDb21tYW5kQ29tcGxldGlvbkV2ZW50IHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxDb21tYW5kQ29tcGxldGlvbkV2ZW50IGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFN1Y2NlZWRlZCBleHRlbmRzIEtlcm5lbENvbW1hbmRDb21wbGV0aW9uRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0aW9uc1Byb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgbGluZVBvc2l0aW9uU3Bhbj86IExpbmVQb3NpdGlvblNwYW47XHJcbiAgICBjb21wbGV0aW9uczogQXJyYXk8Q29tcGxldGlvbkl0ZW0+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWNzUHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBkaWFnbm9zdGljczogQXJyYXk8RGlhZ25vc3RpYz47XHJcbiAgICBmb3JtYXR0ZWREaWFnbm9zdGljczogQXJyYXk8Rm9ybWF0dGVkVmFsdWU+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZFZhbHVlUHJvZHVjZWQgZXh0ZW5kcyBEaXNwbGF5RXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlFdmVudCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGZvcm1hdHRlZFZhbHVlczogQXJyYXk8Rm9ybWF0dGVkVmFsdWU+O1xyXG4gICAgdmFsdWVJZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRWYWx1ZVVwZGF0ZWQgZXh0ZW5kcyBEaXNwbGF5RXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50T3BlbmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgcmVsYXRpdmVGaWxlUGF0aDogc3RyaW5nO1xyXG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvclByb2R1Y2VkIGV4dGVuZHMgRGlzcGxheUV2ZW50IHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb3ZlclRleHRQcm9kdWNlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGNvbnRlbnQ6IEFycmF5PEZvcm1hdHRlZFZhbHVlPjtcclxuICAgIGxpbmVQb3NpdGlvblNwYW4/OiBMaW5lUG9zaXRpb25TcGFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluY29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbEV4dGVuc2lvbkxvYWRlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxJbmZvUHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBrZXJuZWxJbmZvOiBLZXJuZWxJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbFJlYWR5IGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAga2VybmVsSW5mb3M6IEFycmF5PEtlcm5lbEluZm8+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhY2thZ2VBZGRlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIHBhY2thZ2VSZWZlcmVuY2U6IFJlc29sdmVkUGFja2FnZVJlZmVyZW5jZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0T3BlbmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgcHJvamVjdEl0ZW1zOiBBcnJheTxQcm9qZWN0SXRlbT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuVmFsdWVQcm9kdWNlZCBleHRlbmRzIERpc3BsYXlFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlSGVscFByb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgc2lnbmF0dXJlczogQXJyYXk8U2lnbmF0dXJlSW5mb3JtYXRpb24+O1xyXG4gICAgYWN0aXZlU2lnbmF0dXJlSW5kZXg6IG51bWJlcjtcclxuICAgIGFjdGl2ZVBhcmFtZXRlckluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhbmRhcmRFcnJvclZhbHVlUHJvZHVjZWQgZXh0ZW5kcyBEaXNwbGF5RXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkT3V0cHV0VmFsdWVQcm9kdWNlZCBleHRlbmRzIERpc3BsYXlFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsdWVJbmZvc1Byb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgdmFsdWVJbmZvczogQXJyYXk8S2VybmVsVmFsdWVJbmZvPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWx1ZVByb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZm9ybWF0dGVkVmFsdWU6IEZvcm1hdHRlZFZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdvcmtpbmdEaXJlY3RvcnlDaGFuZ2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgd29ya2luZ0RpcmVjdG9yeTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVxdWlyZWQgVHlwZXNcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZTY0RW5jb2RlZEFzc2VtYmx5IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxldGlvbkl0ZW0ge1xyXG4gICAgZGlzcGxheVRleHQ6IHN0cmluZztcclxuICAgIGtpbmQ6IHN0cmluZztcclxuICAgIGZpbHRlclRleHQ6IHN0cmluZztcclxuICAgIHNvcnRUZXh0OiBzdHJpbmc7XHJcbiAgICBpbnNlcnRUZXh0OiBzdHJpbmc7XHJcbiAgICBpbnNlcnRUZXh0Rm9ybWF0PzogSW5zZXJ0VGV4dEZvcm1hdDtcclxuICAgIGRvY3VtZW50YXRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW5zZXJ0VGV4dEZvcm1hdCB7XHJcbiAgICBQbGFpblRleHQgPSBcInBsYWludGV4dFwiLFxyXG4gICAgU25pcHBldCA9IFwic25pcHBldFwiLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWMge1xyXG4gICAgbGluZVBvc2l0aW9uU3BhbjogTGluZVBvc2l0aW9uU3BhbjtcclxuICAgIHNldmVyaXR5OiBEaWFnbm9zdGljU2V2ZXJpdHk7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpYWdub3N0aWNTZXZlcml0eSB7XHJcbiAgICBIaWRkZW4gPSBcImhpZGRlblwiLFxyXG4gICAgSW5mbyA9IFwiaW5mb1wiLFxyXG4gICAgV2FybmluZyA9IFwid2FybmluZ1wiLFxyXG4gICAgRXJyb3IgPSBcImVycm9yXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZVBvc2l0aW9uU3BhbiB7XHJcbiAgICBzdGFydDogTGluZVBvc2l0aW9uO1xyXG4gICAgZW5kOiBMaW5lUG9zaXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZVBvc2l0aW9uIHtcclxuICAgIGxpbmU6IG51bWJlcjtcclxuICAgIGNoYXJhY3RlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEb2N1bWVudFNlcmlhbGl6YXRpb25UeXBlIHtcclxuICAgIERpYiA9IFwiZGliXCIsXHJcbiAgICBJcHluYiA9IFwiaXB5bmJcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXR0ZWRWYWx1ZSB7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIHN1cHByZXNzRGlzcGxheTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGl2ZURvY3VtZW50IHtcclxuICAgIGVsZW1lbnRzOiBBcnJheTxJbnRlcmFjdGl2ZURvY3VtZW50RWxlbWVudD47XHJcbiAgICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3RpdmVEb2N1bWVudEVsZW1lbnQge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBrZXJuZWxOYW1lPzogc3RyaW5nO1xyXG4gICAgY29udGVudHM6IHN0cmluZztcclxuICAgIG91dHB1dHM6IEFycmF5PEludGVyYWN0aXZlRG9jdW1lbnRPdXRwdXRFbGVtZW50PjtcclxuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XHJcbiAgICBtZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbEluZm8ge1xyXG4gICAgYWxpYXNlczogQXJyYXk8c3RyaW5nPjtcclxuICAgIGxhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIGxhbmd1YWdlVmVyc2lvbj86IHN0cmluZztcclxuICAgIGlzUHJveHk6IGJvb2xlYW47XHJcbiAgICBpc0NvbXBvc2l0ZTogYm9vbGVhbjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBsb2NhbE5hbWU6IHN0cmluZztcclxuICAgIHVyaTogc3RyaW5nO1xyXG4gICAgcmVtb3RlVXJpPzogc3RyaW5nO1xyXG4gICAgc3VwcG9ydGVkS2VybmVsQ29tbWFuZHM6IEFycmF5PEtlcm5lbENvbW1hbmRJbmZvPjtcclxuICAgIHN1cHBvcnRlZERpcmVjdGl2ZXM6IEFycmF5PEtlcm5lbERpcmVjdGl2ZUluZm8+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbENvbW1hbmRJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxEaXJlY3RpdmVJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxWYWx1ZUluZm8ge1xyXG4gICAgdHlwZU5hbWU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGZvcm1hdHRlZFZhbHVlOiBGb3JtYXR0ZWRWYWx1ZTtcclxuICAgIHByZWZlcnJlZE1pbWVUeXBlczogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcclxuICAgIGZpbGVzOiBBcnJheTxQcm9qZWN0RmlsZT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdEZpbGUge1xyXG4gICAgcmVsYXRpdmVGaWxlUGF0aDogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RJdGVtIHtcclxuICAgIHJlbGF0aXZlRmlsZVBhdGg6IHN0cmluZztcclxuICAgIHJlZ2lvbk5hbWVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcmVnaW9uc0NvbnRlbnQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZXF1ZXN0VHlwZSB7XHJcbiAgICBQYXJzZSA9IFwicGFyc2VcIixcclxuICAgIFNlcmlhbGl6ZSA9IFwic2VyaWFsaXplXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZWRQYWNrYWdlUmVmZXJlbmNlIGV4dGVuZHMgUGFja2FnZVJlZmVyZW5jZSB7XHJcbiAgICBhc3NlbWJseVBhdGhzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJvYmluZ1BhdGhzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcGFja2FnZVJvb3Q6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWNrYWdlUmVmZXJlbmNlIHtcclxuICAgIHBhY2thZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBwYWNrYWdlVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgaXNQYWNrYWdlVmVyc2lvblNwZWNpZmllZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduYXR1cmVJbmZvcm1hdGlvbiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgZG9jdW1lbnRhdGlvbjogRm9ybWF0dGVkVmFsdWU7XHJcbiAgICBwYXJhbWV0ZXJzOiBBcnJheTxQYXJhbWV0ZXJJbmZvcm1hdGlvbj47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1ldGVySW5mb3JtYXRpb24ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGRvY3VtZW50YXRpb246IEZvcm1hdHRlZFZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdWJtaXNzaW9uVHlwZSB7XHJcbiAgICBSdW4gPSBcInJ1blwiLFxyXG4gICAgRGlhZ25vc2UgPSBcImRpYWdub3NlXCIsXHJcbn1cclxuXHJcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIGNvbnRyYWN0cyBmcm9tIFwiLi9jb250cmFjdHNcIjtcclxuaW1wb3J0IHsgQ29tbWFuZFJvdXRpbmdTbGlwLCBFdmVudFJvdXRpbmdTbGlwIH0gZnJvbSBcIi4vcm91dGluZ3NsaXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29udHJhY3RzXCI7XHJcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRLZXJuZWxJbmZvQ29sbGVjdGlvbiB7XHJcbiAgICBkZWZhdWx0S2VybmVsTmFtZTogc3RyaW5nO1xyXG4gICAgaXRlbXM6IGNvbnRyYWN0cy5Eb2N1bWVudEtlcm5lbEluZm9bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxFdmVudEVudmVsb3BlTW9kZWwge1xyXG4gICAgZXZlbnRUeXBlOiBjb250cmFjdHMuS2VybmVsRXZlbnRUeXBlO1xyXG4gICAgZXZlbnQ6IGNvbnRyYWN0cy5LZXJuZWxFdmVudDtcclxuICAgIGNvbW1hbmQ/OiBLZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbDtcclxuICAgIHJvdXRpbmdTbGlwPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsQ29tbWFuZEVudmVsb3BlTW9kZWwge1xyXG4gICAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGNvbW1hbmRUeXBlOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZFR5cGU7XHJcbiAgICBjb21tYW5kOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZDtcclxuICAgIHJvdXRpbmdTbGlwPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsRXZlbnRFbnZlbG9wZU9ic2VydmVyIHtcclxuICAgIChldmVudEVudmVsb3BlOiBLZXJuZWxFdmVudEVudmVsb3BlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxDb21tYW5kRW52ZWxvcGVIYW5kbGVyIHtcclxuICAgIChldmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0Jhc2U2NFN0cmluZyh2YWx1ZTogVWludDhBcnJheSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB3bmQgPSA8YW55PihnbG9iYWxUaGlzLndpbmRvdyk7XHJcbiAgICBpZiAod25kKSB7XHJcbiAgICAgICAgcmV0dXJuIHduZC5idG9hKFN0cmluZy5mcm9tQ2hhckNvZGUoLi4udmFsdWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEtlcm5lbENvbW1hbmRFbnZlbG9wZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hpbGRDb21tYW5kQ291bnRlcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3JvdXRpbmdTbGlwOiBDb21tYW5kUm91dGluZ1NsaXAgPSBuZXcgQ29tbWFuZFJvdXRpbmdTbGlwKCk7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdG9rZW4/OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9wYXJlbnRDb21tYW5kPzogS2VybmVsQ29tbWFuZEVudmVsb3BlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBjb21tYW5kVHlwZTogY29udHJhY3RzLktlcm5lbENvbW1hbmRUeXBlLFxyXG4gICAgICAgIHB1YmxpYyBjb21tYW5kOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZCkge1xyXG5cclxuICAgICAgICBjb25zdCBndWlkQnl0ZXMgPSB1dWlkLnBhcnNlKHV1aWQudjQoKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGd1aWRCeXRlcyk7XHJcbiAgICAgICAgdGhpcy5faWQgPSB0b0Jhc2U2NFN0cmluZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcm91dGluZ1NsaXAoKTogQ29tbWFuZFJvdXRpbmdTbGlwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm91dGluZ1NsaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwYXJlbnRDb21tYW5kKCk6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudENvbW1hbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBwYXJlbnQocGFyZW50Q29tbWFuZDogS2VybmVsQ29tbWFuZEVudmVsb3BlIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudENvbW1hbmQgJiYgdGhpcy5fcGFyZW50Q29tbWFuZCAhPT0gcGFyZW50Q29tbWFuZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJlbnQgY2Fubm90IGJlIGNoYW5nZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wYXJlbnRDb21tYW5kID0gcGFyZW50Q29tbWFuZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9yQ3JlYXRlVG9rZW4oKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5fdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudENvbW1hbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSBgJHt0aGlzLl9wYXJlbnRDb21tYW5kLmdldE9yQ3JlYXRlVG9rZW4oKX0uJHt0aGlzLl9wYXJlbnRDb21tYW5kLmdldE5leHRDaGlsZFRva2VuKCl9YDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBndWlkQnl0ZXMgPSB1dWlkLnBhcnNlKHV1aWQudjQoKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGd1aWRCeXRlcyk7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB0b0Jhc2U2NFN0cmluZyhkYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1NlbGZvckRlc2NlbmRhbnRPZihvdGhlckNvbW1hbmQ6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgICAgIGNvbnN0IG90aGVyVG9rZW4gPSBvdGhlckNvbW1hbmQuZ2V0T3JDcmVhdGVUb2tlbigpO1xyXG4gICAgICAgIGNvbnN0IHRoaXNUb2tlbiA9IHRoaXMuZ2V0T3JDcmVhdGVUb2tlbigpO1xyXG4gICAgICAgIGlmICh0aGlzVG9rZW4gJiYgb3RoZXJUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1Rva2VuLnN0YXJ0c1dpdGgob3RoZXJUb2tlbiEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib3RoIGNvbW1hbmRzIG11c3QgaGF2ZSB0b2tlbnMnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzU2FtZVJvb3RDb21tYW5kQXMob3RoZXJDb21tYW5kOiBLZXJuZWxDb21tYW5kRW52ZWxvcGUpIHtcclxuICAgICAgICBjb25zdCBvdGhlclRva2VuID0gb3RoZXJDb21tYW5kLmdldE9yQ3JlYXRlVG9rZW4oKTtcclxuICAgICAgICBjb25zdCB0aGlzVG9rZW4gPSB0aGlzLmdldE9yQ3JlYXRlVG9rZW4oKTtcclxuICAgICAgICBpZiAodGhpc1Rva2VuICYmIG90aGVyVG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgb3RoZXJSb290VG9rZW4gPSBLZXJuZWxDb21tYW5kRW52ZWxvcGUuZ2V0Um9vdFRva2VuKG90aGVyVG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzUm9vdFRva2VuID0gS2VybmVsQ29tbWFuZEVudmVsb3BlLmdldFJvb3RUb2tlbih0aGlzVG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1Jvb3RUb2tlbiA9PT0gb3RoZXJSb290VG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYm90aCBjb21tYW5kcyBtdXN0IGhhdmUgdG9rZW5zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSb290VG9rZW4odG9rZW46IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9Kc29uKCk6IEtlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsIHtcclxuICAgICAgICBjb25zdCBtb2RlbDogS2VybmVsQ29tbWFuZEVudmVsb3BlTW9kZWwgPSB7XHJcbiAgICAgICAgICAgIGNvbW1hbmRUeXBlOiB0aGlzLmNvbW1hbmRUeXBlLFxyXG4gICAgICAgICAgICBjb21tYW5kOiB0aGlzLmNvbW1hbmQsXHJcbiAgICAgICAgICAgIHJvdXRpbmdTbGlwOiB0aGlzLl9yb3V0aW5nU2xpcC50b0FycmF5KCksXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0T3JDcmVhdGVUb2tlbigpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24obW9kZWw6IEtlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsKTogS2VybmVsQ29tbWFuZEVudmVsb3BlIHtcclxuICAgICAgICBjb25zdCBjb21tYW5kID0gbmV3IEtlcm5lbENvbW1hbmRFbnZlbG9wZShtb2RlbC5jb21tYW5kVHlwZSwgbW9kZWwuY29tbWFuZCk7XHJcbiAgICAgICAgY29tbWFuZC5fcm91dGluZ1NsaXAgPSBDb21tYW5kUm91dGluZ1NsaXAuZnJvbVVyaXMobW9kZWwucm91dGluZ1NsaXAgfHwgW10pO1xyXG4gICAgICAgIGlmIChtb2RlbC5pZCkge1xyXG4gICAgICAgICAgICBjb21tYW5kLl9pZCA9IG1vZGVsLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21tYW5kLl90b2tlbiA9IG1vZGVsLnRva2VuO1xyXG4gICAgICAgIHJldHVybiBjb21tYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBLZXJuZWxDb21tYW5kRW52ZWxvcGUge1xyXG4gICAgICAgIHJldHVybiBLZXJuZWxDb21tYW5kRW52ZWxvcGUuZnJvbUpzb24odGhpcy50b0pzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXh0Q2hpbGRUb2tlbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbW1hbmRDb3VudGVyKys7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJuZWxFdmVudEVudmVsb3BlIHtcclxuICAgIHByaXZhdGUgX3JvdXRpbmdTbGlwOiBFdmVudFJvdXRpbmdTbGlwID0gbmV3IEV2ZW50Um91dGluZ1NsaXAoKTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBldmVudFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxFdmVudFR5cGUsXHJcbiAgICAgICAgcHVibGljIGV2ZW50OiBjb250cmFjdHMuS2VybmVsRXZlbnQsXHJcbiAgICAgICAgcHVibGljIGNvbW1hbmQ/OiBLZXJuZWxDb21tYW5kRW52ZWxvcGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJvdXRpbmdTbGlwKCk6IEV2ZW50Um91dGluZ1NsaXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3V0aW5nU2xpcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9Kc29uKCk6IEtlcm5lbEV2ZW50RW52ZWxvcGVNb2RlbCB7XHJcbiAgICAgICAgY29uc3QgbW9kZWw6IEtlcm5lbEV2ZW50RW52ZWxvcGVNb2RlbCA9IHtcclxuICAgICAgICAgICAgZXZlbnRUeXBlOiB0aGlzLmV2ZW50VHlwZSxcclxuICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMuY29tbWFuZD8udG9Kc29uKCksXHJcbiAgICAgICAgICAgIHJvdXRpbmdTbGlwOiB0aGlzLl9yb3V0aW5nU2xpcC50b0FycmF5KClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tSnNvbihtb2RlbDogS2VybmVsRXZlbnRFbnZlbG9wZU1vZGVsKTogS2VybmVsRXZlbnRFbnZlbG9wZSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgS2VybmVsRXZlbnRFbnZlbG9wZShcclxuICAgICAgICAgICAgbW9kZWwuZXZlbnRUeXBlLFxyXG4gICAgICAgICAgICBtb2RlbC5ldmVudCxcclxuICAgICAgICAgICAgbW9kZWwuY29tbWFuZCA/IEtlcm5lbENvbW1hbmRFbnZlbG9wZS5mcm9tSnNvbihtb2RlbC5jb21tYW5kKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgZXZlbnQuX3JvdXRpbmdTbGlwID0gRXZlbnRSb3V0aW5nU2xpcC5mcm9tVXJpcyhtb2RlbC5yb3V0aW5nU2xpcCB8fCBbXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBLZXJuZWxFdmVudEVudmVsb3BlIHtcclxuICAgICAgICByZXR1cm4gS2VybmVsRXZlbnRFbnZlbG9wZS5mcm9tSnNvbih0aGlzLnRvSnNvbigpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2xhc3MoY3JlYXRlSW1wbCkge1xuICAgIHZhciBfc3VwZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgfTtcbiAgICB2YXIgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gICAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGN0b3JGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JGdW5jO1xuICAgIHJldHVybiBjdG9yRnVuYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUVycm9yQ2xhc3MuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5leHBvcnQgdmFyIFVuc3Vic2NyaXB0aW9uRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzXG4gICAgICAgICAgICA/IGVycm9ycy5sZW5ndGggKyBcIiBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxcblwiICsgZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiBpICsgMSArIFwiKSBcIiArIGVyci50b1N0cmluZygpOyB9KS5qb2luKCdcXG4gICcpXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFyclJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyclJlbW92ZS5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXksIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKGluaXRpYWxUZWFyZG93bikge1xuICAgICAgICB0aGlzLmluaXRpYWxUZWFyZG93biA9IGluaXRpYWxUZWFyZG93bjtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgICAgIGlmIChfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3BhcmVudGFnZV8xID0gX192YWx1ZXMoX3BhcmVudGFnZSksIF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKTsgIV9wYXJlbnRhZ2VfMV8xLmRvbmU7IF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRhZ2VfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXJlbnRhZ2VfMV8xICYmICFfcGFyZW50YWdlXzFfMS5kb25lICYmIChfYSA9IF9wYXJlbnRhZ2VfMS5yZXR1cm4pKSBfYS5jYWxsKF9wYXJlbnRhZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbml0aWFsRmluYWxpemVyID0gdGhpcy5pbml0aWFsVGVhcmRvd247XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihpbml0aWFsRmluYWxpemVyKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxGaW5hbGl6ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzO1xuICAgICAgICAgICAgaWYgKF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2ZpbmFsaXplcnNfMSA9IF9fdmFsdWVzKF9maW5hbGl6ZXJzKSwgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCk7ICFfZmluYWxpemVyc18xXzEuZG9uZTsgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaW5hbGl6ZXIgPSBfZmluYWxpemVyc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgIT09IG51bGwgJiYgZXJyb3JzICE9PSB2b2lkIDAgPyBlcnJvcnMgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChlcnJvcnMpKSwgX19yZWFkKGVyci5lcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2ZpbmFsaXplcnNfMV8xICYmICFfZmluYWxpemVyc18xXzEuZG9uZSAmJiAoX2IgPSBfZmluYWxpemVyc18xLnJldHVybikpIF9iLmNhbGwoX2ZpbmFsaXplcnNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlYXJkb3duLmNsb3NlZCB8fCB0ZWFyZG93bi5faGFzUGFyZW50KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhcmRvd24uX2FkZFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKHRoaXMuX2ZpbmFsaXplcnMgPSAoX2EgPSB0aGlzLl9maW5hbGl6ZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2hhc1BhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2FkZFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgPyAoX3BhcmVudGFnZS5wdXNoKHBhcmVudCksIF9wYXJlbnRhZ2UpIDogX3BhcmVudGFnZSA/IFtfcGFyZW50YWdlLCBwYXJlbnRdIDogcGFyZW50O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fcmVtb3ZlUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgaWYgKF9wYXJlbnRhZ2UgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIF9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycztcbiAgICAgICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG4gICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGVhcmRvd24uX3JlbW92ZVBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLkVNUFRZID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVtcHR5ID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiB9O1xuZXhwb3J0IHZhciBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKSk7XG59XG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZpbmFsaXplcikpIHtcbiAgICAgICAgZmluYWxpemVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaW5hbGl6ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiZXhwb3J0IHZhciBjb25maWcgPSB7XG4gICAgb25VbmhhbmRsZWRFcnJvcjogbnVsbCxcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGZhbHNlLFxuICAgIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuZXhwb3J0IHZhciB0aW1lb3V0UHJvdmlkZXIgPSB7XG4gICAgc2V0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLnNldFRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRUaW1lb3V0LmFwcGx5KGRlbGVnYXRlLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuY2xlYXJUaW1lb3V0KSB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSk7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWVvdXRQcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKSB7XG4gICAgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25VbmhhbmRsZWRFcnJvciA9IGNvbmZpZy5vblVuaGFuZGxlZEVycm9yO1xuICAgICAgICBpZiAob25VbmhhbmRsZWRFcnJvcikge1xuICAgICAgICAgICAgb25VbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXBvcnRVbmhhbmRsZWRFcnJvci5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xudmFyIGNvbnRleHQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICB2YXIgaXNSb290ID0gIWNvbnRleHQ7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb250ZXh0LCBlcnJvclRocm93biA9IF9hLmVycm9yVGhyb3duLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2IoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbC9ub29wJztcbmltcG9ydCB7IG5leHROb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9uLCBDT01QTEVURV9OT1RJRklDQVRJT04gfSBmcm9tICcuL05vdGlmaWNhdGlvbkZhY3Rvcmllcyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuaW1wb3J0IHsgY2FwdHVyZUVycm9yIH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG52YXIgU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlcihkZXN0aW5hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IEVNUFRZX09CU0VSVkVSO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaWJlci5jcmVhdGUgPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2FmZVN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKGVycm9yTm90aWZpY2F0aW9uKGVyciksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb24pKTtcbmV4cG9ydCB7IFN1YnNjcmliZXIgfTtcbnZhciBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cbnZhciBDb25zdW1lck9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcikge1xuICAgICAgICB0aGlzLnBhcnRpYWxPYnNlcnZlciA9IHBhcnRpYWxPYnNlcnZlcjtcbiAgICB9XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29uc3VtZXJPYnNlcnZlcjtcbn0oKSk7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSB8fCAhb2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiAob2JzZXJ2ZXJPck5leHQgIT09IG51bGwgJiYgb2JzZXJ2ZXJPck5leHQgIT09IHZvaWQgMCA/IG9ic2VydmVyT3JOZXh0IDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCA/IGVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSAhPT0gbnVsbCAmJiBjb21wbGV0ZSAhPT0gdm9pZCAwID8gY29tcGxldGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvbnRleHRfMTtcbiAgICAgICAgICAgIGlmIChfdGhpcyAmJiBjb25maWcudXNlRGVwcmVjYXRlZE5leHRDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyT3JOZXh0Lm5leHQgJiYgYmluZChvYnNlcnZlck9yTmV4dC5uZXh0LCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXJPck5leHQuZXJyb3IgJiYgYmluZChvYnNlcnZlck9yTmV4dC5lcnJvciwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuY29tcGxldGUsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IFNhZmVTdWJzY3JpYmVyIH07XG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICBjYXB0dXJlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckhhbmRsZXIoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgb25TdG9wcGVkTm90aWZpY2F0aW9uID0gY29uZmlnLm9uU3RvcHBlZE5vdGlmaWNhdGlvbjtcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb24gJiYgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb25TdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcik7IH0pO1xufVxuZXhwb3J0IHZhciBFTVBUWV9PQlNFUlZFUiA9IHtcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbmV4dDogbm9vcCxcbiAgICBlcnJvcjogZGVmYXVsdEVycm9ySGFuZGxlcixcbiAgICBjb21wbGV0ZTogbm9vcCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcCIsImV4cG9ydCB2YXIgb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZGVudGl0eS5qcy5tYXAiLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsImltcG9ydCB7IFNhZmVTdWJzY3JpYmVyLCBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgcGlwZUZyb21BcnJheSB9IGZyb20gJy4vdXRpbC9waXBlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gaXNTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0KSA/IG9ic2VydmVyT3JOZXh0IDogbmV3IFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIG9wZXJhdG9yID0gX2Eub3BlcmF0b3IsIHNvdXJjZSA9IF9hLnNvdXJjZTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKG9wZXJhdG9yXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5jYWxsKHN1YnNjcmliZXIsIHNvdXJjZSlcbiAgICAgICAgICAgICAgICA6IHNvdXJjZVxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVyID0gbmV3IFNhZmVTdWJzY3JpYmVyKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbU3ltYm9sX29ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiAodmFsdWUgPSB4KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gcHJvbWlzZUN0b3IgIT09IG51bGwgJiYgcHJvbWlzZUN0b3IgIT09IHZvaWQgMCA/IHByb21pc2VDdG9yIDogY29uZmlnLlByb21pc2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFByb21pc2U7XG59XG5mdW5jdGlvbiBpc09ic2VydmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5mdW5jdGlvbiBpc1N1YnNjcmliZXIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaWJlcikgfHwgKGlzT2JzZXJ2ZXIodmFsdWUpICYmIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlID09PSBudWxsIHx8IHNvdXJjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc291cmNlLmxpZnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGUoaW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAobGlmdGVkU291cmNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlmdC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSkge1xuICAgIHJldHVybiBuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpO1xufVxudmFyIE9wZXJhdG9yU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9wZXJhdG9yU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSwgc2hvdWxkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9uRmluYWxpemUgPSBvbkZpbmFsaXplO1xuICAgICAgICBfdGhpcy5zaG91bGRVbnN1YnNjcmliZSA9IHNob3VsZFVuc3Vic2NyaWJlO1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG9uTmV4dFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbk5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9uZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBvbkVycm9yXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2Vycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBvbkNvbXBsZXRlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9wZXJhdG9yU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFVuc3Vic2NyaWJlIHx8IHRoaXMuc2hvdWxkVW5zdWJzY3JpYmUoKSkge1xuICAgICAgICAgICAgdmFyIGNsb3NlZF8xID0gdGhpcy5jbG9zZWQ7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAhY2xvc2VkXzEgJiYgKChfYSA9IHRoaXMub25GaW5hbGl6ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT3BlcmF0b3JTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBPcGVyYXRvclN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9wZXJhdG9yU3Vic2NyaWJlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKCkge1xuICAgICAgICBfc3VwZXIodGhpcyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMudGhyb3duRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3QucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICAgICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90aHJvd0lmQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbShfdGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLmN1cnJlbnRPYnNlcnZlcnMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhc0Vycm9yID0gX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1YmplY3QucHJvdG90eXBlLCBcIm9ic2VydmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMub2JzZXJ2ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5faW5uZXJTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBoYXNFcnJvciA9IF9hLmhhc0Vycm9yLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQsIG9ic2VydmVycyA9IF9hLm9ic2VydmVycztcbiAgICAgICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhhc0Vycm9yID0gX2EuaGFzRXJyb3IsIHRocm93bkVycm9yID0gX2EudGhyb3duRXJyb3IsIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBTdWJqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdWJqZWN0O1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBTdWJqZWN0IH07XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdmFsdWUpO1xuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVycik7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgQW5vbnltb3VzU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ge1xyXG4gICAgcmV0dXJuIG9iai5wcm9taXNlXHJcbiAgICAgICAgJiYgb2JqLnJlc29sdmVcclxuICAgICAgICAmJiBvYmoucmVqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ge1xyXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZTogKHZhbHVlOiBUKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgcHJpdmF0ZSBfcmVqZWN0OiAocmVhc29uOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgICByZWFkb25seSBwcm9taXNlOiBQcm9taXNlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVqZWN0KHJlYXNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IEtlcm5lbENvbW1hbmRFbnZlbG9wZSB9IGZyb20gXCIuL2NvbW1hbmRzQW5kRXZlbnRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTZWxmb3JEZXNjZW5kYW50T2YodGhpc0NvbW1hbmQ6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSwgb3RoZXJDb21tYW5kOiBLZXJuZWxDb21tYW5kRW52ZWxvcGUpIHtcclxuICAgIGNvbnN0IG90aGVyVG9rZW4gPSBvdGhlckNvbW1hbmQuZ2V0T3JDcmVhdGVUb2tlbigpO1xyXG4gICAgY29uc3QgdGhpc1Rva2VuID0gdGhpc0NvbW1hbmQuZ2V0T3JDcmVhdGVUb2tlbigpO1xyXG4gICAgaWYgKHRoaXNUb2tlbiAmJiBvdGhlclRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNUb2tlbi5zdGFydHNXaXRoKG90aGVyVG9rZW4hKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvdGggY29tbWFuZHMgbXVzdCBoYXZlIHRva2VucycpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzU2FtZVJvb3RDb21tYW5kQXModGhpc0NvbW1hbmQ6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSwgb3RoZXJDb21tYW5kOiBLZXJuZWxDb21tYW5kRW52ZWxvcGUpIHtcclxuICAgIGNvbnN0IG90aGVyVG9rZW4gPSBvdGhlckNvbW1hbmQuZ2V0T3JDcmVhdGVUb2tlbigpO1xyXG4gICAgY29uc3QgdGhpc1Rva2VuID0gdGhpc0NvbW1hbmQuZ2V0T3JDcmVhdGVUb2tlbigpO1xyXG4gICAgaWYgKHRoaXNUb2tlbiAmJiBvdGhlclRva2VuKSB7XHJcbiAgICAgICAgY29uc3Qgb3RoZXJSb290VG9rZW4gPSBnZXRSb290VG9rZW4ob3RoZXJUb2tlbik7XHJcbiAgICAgICAgY29uc3QgdGhpc1Jvb3RUb2tlbiA9IGdldFJvb3RUb2tlbih0aGlzVG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB0aGlzUm9vdFRva2VuID09PSBvdGhlclJvb3RUb2tlbjtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcignYm90aCBjb21tYW5kcyBtdXN0IGhhdmUgdG9rZW5zJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290VG9rZW4odG9rZW46IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gcGFydHNbMF07XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0ICogYXMgcnhqcyBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgKiBhcyByb3V0aW5nc2xpcCBmcm9tIFwiLi9yb3V0aW5nc2xpcFwiO1xyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tIFwiLi9jb21tYW5kc0FuZEV2ZW50c1wiO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlIH0gZnJvbSBcIi4vZGlzcG9zYWJsZXNcIjtcclxuaW1wb3J0IHsgZ2V0S2VybmVsVXJpLCBLZXJuZWwgfSBmcm9tIFwiLi9rZXJuZWxcIjtcclxuaW1wb3J0IHsgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UgfSBmcm9tIFwiLi9wcm9taXNlQ29tcGxldGlvblNvdXJjZVwiO1xyXG5pbXBvcnQgeyBoYXNTYW1lUm9vdENvbW1hbmRBcywgaXNTZWxmb3JEZXNjZW5kYW50T2YgfSBmcm9tIFwiLi90b2tlbkdlbmVyYXRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCBpbXBsZW1lbnRzIERpc3Bvc2FibGUge1xyXG4gICAgcHVibGljIGdldCBwcm9taXNlKCk6IHZvaWQgfCBQcm9taXNlTGlrZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGlvblNvdXJjZS5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnQ6IEtlcm5lbEludm9jYXRpb25Db250ZXh0IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NoaWxkQ29tbWFuZHM6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZVtdID0gW107XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ldmVudFN1YmplY3Q6IHJ4anMuU3ViamVjdDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlPiA9IG5ldyByeGpzLlN1YmplY3Q8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9oYW5kbGluZ0tlcm5lbDogS2VybmVsIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGdldCBoYW5kbGluZ0tlcm5lbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxpbmdLZXJuZWw7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXQga2VybmVsRXZlbnRzKCk6IHJ4anMuT2JzZXJ2YWJsZTxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50U3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHNldCBoYW5kbGluZ0tlcm5lbCh2YWx1ZTogS2VybmVsIHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsaW5nS2VybmVsID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wbGV0aW9uU291cmNlID0gbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPHZvaWQ+KCk7XHJcbiAgICBzdGF0aWMgZ2V0T3JDcmVhdGVBbWJpZW50Q29udGV4dChrZXJuZWxDb21tYW5kSW52b2NhdGlvbjogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKTogS2VybmVsSW52b2NhdGlvbkNvbnRleHQge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuX2N1cnJlbnQ7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQuX2lzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgS2VybmVsSW52b2NhdGlvbkNvbnRleHQuX2N1cnJlbnQgPSBuZXcgS2VybmVsSW52b2NhdGlvbkNvbnRleHQoa2VybmVsQ29tbWFuZEludm9jYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghYXJlQ29tbWFuZHNUaGVTYW1lKGtlcm5lbENvbW1hbmRJbnZvY2F0aW9uLCBjdXJyZW50Ll9jb21tYW5kRW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9IGN1cnJlbnQuX2NoaWxkQ29tbWFuZHMuaW5jbHVkZXMoa2VybmVsQ29tbWFuZEludm9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuX2NoaWxkQ29tbWFuZHMucHVzaChrZXJuZWxDb21tYW5kSW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5fY3VycmVudCE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjdXJyZW50KCk6IEtlcm5lbEludm9jYXRpb25Db250ZXh0IHwgbnVsbCB7IHJldHVybiB0aGlzLl9jdXJyZW50OyB9XHJcbiAgICBnZXQgY29tbWFuZCgpOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kIHsgcmV0dXJuIHRoaXMuX2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kOyB9XHJcbiAgICBnZXQgY29tbWFuZEVudmVsb3BlKCk6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSB7IHJldHVybiB0aGlzLl9jb21tYW5kRW52ZWxvcGU7IH1cclxuICAgIGNvbnN0cnVjdG9yKGtlcm5lbENvbW1hbmRJbnZvY2F0aW9uOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpIHtcclxuICAgICAgICB0aGlzLl9jb21tYW5kRW52ZWxvcGUgPSBrZXJuZWxDb21tYW5kSW52b2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb21wbGV0ZShjb21tYW5kOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpIHtcclxuICAgICAgICBpZiAoYXJlQ29tbWFuZHNUaGVTYW1lKGNvbW1hbmQsIHRoaXMuX2NvbW1hbmRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBzdWNjZWVkZWQ6IGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRTdWNjZWVkZWQgPSB7fTtcclxuICAgICAgICAgICAgbGV0IGV2ZW50RW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUgPSBuZXcgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZShcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRTdWNjZWVkZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VlZGVkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWFuZEVudmVsb3BlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsUHVibGlzaChldmVudEVudmVsb3BlKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uU291cmNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogQyMgdmVyc2lvbiBoYXMgY29tcGxldGlvbiBjYWxsYmFja3MgLSBkbyB3ZSBuZWVkIHRoZXNlP1xyXG4gICAgICAgICAgICAvLyBpZiAoIV9ldmVudHMuSXNEaXNwb3NlZClcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgX2V2ZW50cy5PbkNvbXBsZXRlZCgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuX2NoaWxkQ29tbWFuZHMuaW5kZXhPZihjb21tYW5kKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NoaWxkQ29tbWFuZHNbcG9zXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbChtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gVE9ETzpcclxuICAgICAgICAvLyBUaGUgQyMgY29kZSBhY2NlcHRzIGEgbWVzc2FnZSBhbmQvb3IgYW4gZXhjZXB0aW9uLiBEbyB3ZSBuZWVkIHRvIGFkZCBzdXBwb3J0XHJcbiAgICAgICAgLy8gZm9yIGV4Y2VwdGlvbnM/IChUaGUgVFMgQ29tbWFuZEZhaWxlZCBpbnRlcmZhY2UgZG9lc24ndCBoYXZlIGEgcGxhY2UgZm9yIGl0IHJpZ2h0IG5vdy4pXHJcbiAgICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGZhaWxlZDogY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZCA9IHsgbWVzc2FnZTogbWVzc2FnZSA/PyBcIkNvbW1hbmQgRmFpbGVkXCIgfTtcclxuICAgICAgICBsZXQgZXZlbnRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICBjb21tYW5kc0FuZEV2ZW50cy5Db21tYW5kRmFpbGVkVHlwZSxcclxuICAgICAgICAgICAgZmFpbGVkLFxyXG4gICAgICAgICAgICB0aGlzLl9jb21tYW5kRW52ZWxvcGVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmludGVybmFsUHVibGlzaChldmVudEVudmVsb3BlKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1Ymxpc2goa2VybmVsRXZlbnQ6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFB1Ymxpc2goa2VybmVsRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludGVybmFsUHVibGlzaChrZXJuZWxFdmVudDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSkge1xyXG4gICAgICAgIGlmICgha2VybmVsRXZlbnQuY29tbWFuZCkge1xyXG4gICAgICAgICAgICBrZXJuZWxFdmVudC5jb21tYW5kID0gdGhpcy5fY29tbWFuZEVudmVsb3BlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBrZXJuZWxFdmVudC5jb21tYW5kO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYW5kbGluZ0tlcm5lbCkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkodGhpcy5oYW5kbGluZ0tlcm5lbCk7XHJcbiAgICAgICAgICAgIGlmICgha2VybmVsRXZlbnQucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICAgICAga2VybmVsRXZlbnQucm91dGluZ1NsaXAuc3RhbXAoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgICAgIGtlcm5lbEV2ZW50LnJvdXRpbmdTbGlwOy8vP1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXCJzaG91bGQgbm90IGJlIGhlcmVcIjsvLz9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBrZXJuZWxFdmVudDsvLz9cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29tbWFuZEVudmVsb3BlOy8vP1xyXG4gICAgICAgIGlmIChjb21tYW5kID09PSBudWxsIHx8XHJcbiAgICAgICAgICAgIGNvbW1hbmQgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBhcmVDb21tYW5kc1RoZVNhbWUoY29tbWFuZCEsIHRoaXMuX2NvbW1hbmRFbnZlbG9wZSkgfHxcclxuICAgICAgICAgICAgdGhpcy5fY2hpbGRDb21tYW5kcy5pbmNsdWRlcyhjb21tYW5kISkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRTdWJqZWN0Lm5leHQoa2VybmVsRXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNTZWxmb3JEZXNjZW5kYW50T2YoY29tbWFuZCwgdGhpcy5fY29tbWFuZEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudFN1YmplY3QubmV4dChrZXJuZWxFdmVudCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTYW1lUm9vdENvbW1hbmRBcyhjb21tYW5kLCB0aGlzLl9jb21tYW5kRW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50U3ViamVjdC5uZXh0KGtlcm5lbEV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNQYXJlbnRPZkNvbW1hbmQoY29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBjaGlsZEZvdW5kID0gdGhpcy5fY2hpbGRDb21tYW5kcy5pbmNsdWRlcyhjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZEZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUodGhpcy5fY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgS2VybmVsSW52b2NhdGlvbkNvbnRleHQuX2N1cnJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29tbWFuZHNUaGVTYW1lKGVudmVsb3BlMTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlLCBlbnZlbG9wZTI6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IGJvb2xlYW4ge1xyXG4gICAgZW52ZWxvcGUxOy8vP1xyXG4gICAgZW52ZWxvcGUyOy8vP1xyXG4gICAgZW52ZWxvcGUxID09PSBlbnZlbG9wZTI7Ly8/XHJcbiAgICBpZiAoZW52ZWxvcGUxID09PSBlbnZlbG9wZTIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzYW1lQ29tbWFuZFR5cGUgPSBlbnZlbG9wZTE/LmNvbW1hbmRUeXBlID09PSBlbnZlbG9wZTI/LmNvbW1hbmRUeXBlOyAvLz9cclxuICAgIGlmICghc2FtZUNvbW1hbmRUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2FtZUNvbW1hbmRJZCA9IGVudmVsb3BlMT8uaWQgPT09IGVudmVsb3BlMj8uaWQ7IC8vP1xyXG4gICAgaWYgKCFzYW1lQ29tbWFuZElkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2FtZVRva2VuID0gZW52ZWxvcGUxPy5nZXRPckNyZWF0ZVRva2VuKCkgPT09IGVudmVsb3BlMj8uZ2V0T3JDcmVhdGVUb2tlbigpOyAvLz9cclxuICAgIGlmICghc2FtZVRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcclxuICAgIEluZm8gPSAwLFxyXG4gICAgV2FybiA9IDEsXHJcbiAgICBFcnJvciA9IDIsXHJcbiAgICBOb25lID0gMyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTG9nRW50cnkgPSB7XHJcbiAgICBsb2dMZXZlbDogTG9nTGV2ZWw7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9kZWZhdWx0OiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCdkZWZhdWx0JywgKF9lbnRyeTogTG9nRW50cnkpID0+IHsgfSk7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogc3RyaW5nLCByZWFkb25seSB3cml0ZTogKGVudHJ5OiBMb2dFbnRyeSkgPT4gdm9pZCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud3JpdGUoeyBsb2dMZXZlbDogTG9nTGV2ZWwuSW5mbywgc291cmNlOiB0aGlzLnNvdXJjZSwgbWVzc2FnZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndyaXRlKHsgbG9nTGV2ZWw6IExvZ0xldmVsLldhcm4sIHNvdXJjZTogdGhpcy5zb3VyY2UsIG1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud3JpdGUoeyBsb2dMZXZlbDogTG9nTGV2ZWwuRXJyb3IsIHNvdXJjZTogdGhpcy5zb3VyY2UsIG1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb25maWd1cmUoc291cmNlOiBzdHJpbmcsIHdyaXRlcjogKGVudHJ5OiBMb2dFbnRyeSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoc291cmNlLCB3cml0ZXIpO1xyXG4gICAgICAgIExvZ2dlci5fZGVmYXVsdCA9IGxvZ2dlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBkZWZhdWx0KCk6IExvZ2dlciB7XHJcbiAgICAgICAgaWYgKExvZ2dlci5fZGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTG9nZ2VyLl9kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBsb2dnZXIgaGFzIGJlZW4gY29uZmlndXJlZCBmb3IgdGhpcyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBQcm9taXNlQ29tcGxldGlvblNvdXJjZSB9IGZyb20gXCIuL3Byb21pc2VDb21wbGV0aW9uU291cmNlXCI7XHJcblxyXG5pbnRlcmZhY2UgU2NoZWR1bGVyT3BlcmF0aW9uPFQ+IHtcclxuICAgIHZhbHVlOiBUO1xyXG4gICAgZXhlY3V0b3I6ICh2YWx1ZTogVCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHByb21pc2VDb21wbGV0aW9uU291cmNlOiBQcm9taXNlQ29tcGxldGlvblNvdXJjZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcm5lbFNjaGVkdWxlcjxUPiB7XHJcbiAgICBzZXRNdXN0VHJhbXBvbGluZShwcmVkaWNhdGU6IChjOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbXVzdFRyYW1wb2xpbmUgPSBwcmVkaWNhdGUgPz8gKChfYykgPT4gZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfb3BlcmF0aW9uUXVldWU6IEFycmF5PFNjaGVkdWxlck9wZXJhdGlvbjxUPj4gPSBbXTtcclxuICAgIHByaXZhdGUgX2luRmxpZ2h0T3BlcmF0aW9uPzogU2NoZWR1bGVyT3BlcmF0aW9uPFQ+O1xyXG4gICAgcHJpdmF0ZSBfbXVzdFRyYW1wb2xpbmU6IChjOiBUKSA9PiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fbXVzdFRyYW1wb2xpbmUgPSAoX2MpID0+IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWxDdXJyZW50T3BlcmF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2luRmxpZ2h0T3BlcmF0aW9uPy5wcm9taXNlQ29tcGxldGlvblNvdXJjZS5yZWplY3QobmV3IEVycm9yKFwiT3BlcmF0aW9uIGNhbmNlbGxlZFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuQXN5bmModmFsdWU6IFQsIGV4ZWN1dG9yOiAodmFsdWU6IFQpID0+IFByb21pc2U8dm9pZD4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBvcGVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBleGVjdXRvcixcclxuICAgICAgICAgICAgcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U6IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTx2b2lkPigpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG11c3RUcmFtcG9saW5lID0gdGhpcy5fbXVzdFRyYW1wb2xpbmUodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRPcGVyYXRpb24gJiYgIW11c3RUcmFtcG9saW5lKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbFNjaGVkdWxlcjogc3RhcnRpbmcgaW1tZWRpYXRlIGV4ZWN1dGlvbiBvZiAke0pTT04uc3RyaW5naWZ5KG9wZXJhdGlvbi52YWx1ZSl9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpbnZva2UgaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5leGVjdXRvcihvcGVyYXRpb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhga2VybmVsU2NoZWR1bGVyOiBpbW1lZGlhdGUgZXhlY3V0aW9uIGNvbXBsZXRlZDogJHtKU09OLnN0cmluZ2lmeShvcGVyYXRpb24udmFsdWUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wcm9taXNlQ29tcGxldGlvblNvdXJjZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbFNjaGVkdWxlcjogaW1tZWRpYXRlIGV4ZWN1dGlvbiBmYWlsZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZSl9IC0gJHtKU09OLnN0cmluZ2lmeShvcGVyYXRpb24udmFsdWUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wcm9taXNlQ29tcGxldGlvblNvdXJjZS5yZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbFNjaGVkdWxlcjogc2NoZWR1bGluZyBleGVjdXRpb24gb2YgJHtKU09OLnN0cmluZ2lmeShvcGVyYXRpb24udmFsdWUpfWApO1xyXG4gICAgICAgIHRoaXMuX29wZXJhdGlvblF1ZXVlLnB1c2gob3BlcmF0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5fb3BlcmF0aW9uUXVldWUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlTmV4dENvbW1hbmQoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3BlcmF0aW9uLnByb21pc2VDb21wbGV0aW9uU291cmNlLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGVjdXRlTmV4dENvbW1hbmQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmV4dE9wZXJhdGlvbiA9IHRoaXMuX29wZXJhdGlvblF1ZXVlLmxlbmd0aCA+IDAgPyB0aGlzLl9vcGVyYXRpb25RdWV1ZVswXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAobmV4dE9wZXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbkZsaWdodE9wZXJhdGlvbiA9IG5leHRPcGVyYXRpb247XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbFNjaGVkdWxlcjogc3RhcnRpbmcgc2NoZWR1bGVkIGV4ZWN1dGlvbiBvZiAke0pTT04uc3RyaW5naWZ5KG5leHRPcGVyYXRpb24udmFsdWUpfWApO1xyXG4gICAgICAgICAgICBuZXh0T3BlcmF0aW9uLmV4ZWN1dG9yKG5leHRPcGVyYXRpb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5GbGlnaHRPcGVyYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhga2VybmVsU2NoZWR1bGVyOiBjb21wbGV0aW5nIGluZmxpZ2h0IG9wZXJhdGlvbjogc3VjY2VzcyAke0pTT04uc3RyaW5naWZ5KG5leHRPcGVyYXRpb24udmFsdWUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRPcGVyYXRpb24ucHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbkZsaWdodE9wZXJhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWxTY2hlZHVsZXI6IGNvbXBsZXRpbmcgaW5mbGlnaHQgb3BlcmF0aW9uOiBmYWlsdXJlICR7SlNPTi5zdHJpbmdpZnkoZSl9IC0gJHtKU09OLnN0cmluZ2lmeShuZXh0T3BlcmF0aW9uLnZhbHVlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0T3BlcmF0aW9uLnByb21pc2VDb21wbGV0aW9uU291cmNlLnJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5GbGlnaHRPcGVyYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29wZXJhdGlvblF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZU5leHRDb21tYW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IEtlcm5lbEludm9jYXRpb25Db250ZXh0LCBhcmVDb21tYW5kc1RoZVNhbWUgfSBmcm9tIFwiLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dFwiO1xyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tIFwiLi9jb21tYW5kc0FuZEV2ZW50c1wiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29tcG9zaXRlS2VybmVsIH0gZnJvbSBcIi4vY29tcG9zaXRlS2VybmVsXCI7XHJcbmltcG9ydCB7IEtlcm5lbFNjaGVkdWxlciB9IGZyb20gXCIuL2tlcm5lbFNjaGVkdWxlclwiO1xyXG5pbXBvcnQgeyBQcm9taXNlQ29tcGxldGlvblNvdXJjZSB9IGZyb20gXCIuL3Byb21pc2VDb21wbGV0aW9uU291cmNlXCI7XHJcbmltcG9ydCAqIGFzIGRpc3Bvc2FibGVzIGZyb20gXCIuL2Rpc3Bvc2FibGVzXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRpbmdzbGlwIGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uIHtcclxuICAgIGNvbW1hbmRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlO1xyXG4gICAgY29udGV4dDogS2VybmVsSW52b2NhdGlvbkNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtlcm5lbENvbW1hbmRIYW5kbGVyIHtcclxuICAgIGNvbW1hbmRUeXBlOiBzdHJpbmc7XHJcbiAgICBoYW5kbGU6IChjb21tYW5kSW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElLZXJuZWxFdmVudE9ic2VydmVyIHtcclxuICAgIChrZXJuZWxFdmVudDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgS2VybmVsIHtcclxuICAgIHByaXZhdGUgX2tlcm5lbEluZm86IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm87XHJcbiAgICBwcml2YXRlIF9jb21tYW5kSGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgSUtlcm5lbENvbW1hbmRIYW5kbGVyPigpO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRTdWJqZWN0ID0gbmV3IHJ4anMuU3ViamVjdDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlPigpO1xyXG4gICAgcHVibGljIHJvb3RLZXJuZWw6IEtlcm5lbCA9IHRoaXM7XHJcbiAgICBwdWJsaWMgcGFyZW50S2VybmVsOiBDb21wb3NpdGVLZXJuZWwgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NjaGVkdWxlcj86IEtlcm5lbFNjaGVkdWxlcjxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGU+IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQga2VybmVsSW5mbygpOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbEluZm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBrZXJuZWxFdmVudHMoKTogcnhqcy5PYnNlcnZhYmxlPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG5hbWU6IHN0cmluZywgbGFuZ3VhZ2VOYW1lPzogc3RyaW5nLCBsYW5ndWFnZVZlcnNpb24/OiBzdHJpbmcsIGRpc3BsYXlOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsSW5mbyA9IHtcclxuICAgICAgICAgICAgaXNQcm94eTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQ29tcG9zaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9jYWxOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBsYW5ndWFnZU5hbWU6IGxhbmd1YWdlTmFtZSxcclxuICAgICAgICAgICAgYWxpYXNlczogW10sXHJcbiAgICAgICAgICAgIHVyaTogcm91dGluZ3NsaXAuY3JlYXRlS2VybmVsVXJpKGBrZXJuZWw6Ly9sb2NhbC8ke25hbWV9YCksXHJcbiAgICAgICAgICAgIGxhbmd1YWdlVmVyc2lvbjogbGFuZ3VhZ2VWZXJzaW9uLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgPz8gbmFtZSxcclxuICAgICAgICAgICAgc3VwcG9ydGVkRGlyZWN0aXZlczogW10sXHJcbiAgICAgICAgICAgIHN1cHBvcnRlZEtlcm5lbENvbW1hbmRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxSZWdpc3RlckNvbW1hbmRIYW5kbGVyKHtcclxuICAgICAgICAgICAgY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RLZXJuZWxJbmZvVHlwZSwgaGFuZGxlOiBhc3luYyBpbnZvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUmVxdWVzdEtlcm5lbEluZm8oaW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlUmVxdWVzdEtlcm5lbEluZm8oaW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkPnsga2VybmVsSW5mbzogdGhpcy5fa2VybmVsSW5mbyB9LFxyXG4gICAgICAgICAgICBpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICk7Ly8/XHJcblxyXG4gICAgICAgIGludm9jYXRpb24uY29udGV4dC5wdWJsaXNoKGV2ZW50RW52ZWxvcGUpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNjaGVkdWxlcigpOiBLZXJuZWxTY2hlZHVsZXI8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY2hlZHVsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVyID0gdGhpcy5wYXJlbnRLZXJuZWw/LmdldFNjaGVkdWxlcigpID8/IG5ldyBLZXJuZWxTY2hlZHVsZXI8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKTogS2VybmVsIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQuaGFuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgcm9vdCgpOiBLZXJuZWwgfCBudWxsIHtcclxuICAgICAgICBpZiAoS2VybmVsLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtlcm5lbC5jdXJyZW50LnJvb3RLZXJuZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElzIGl0IHdvcnRoIHVzIGdvaW5nIHRvIGVmZm9ydHMgdG8gZW5zdXJlIHRoYXQgdGhlIFByb21pc2UgcmV0dXJuZWQgaGVyZSBhY2N1cmF0ZWx5IHJlZmxlY3RzXHJcbiAgICAvLyB0aGUgY29tbWFuZCdzIHByb2dyZXNzPyBUaGUgb25seSB0aGluZyB0aGF0IGFjdHVhbGx5IGNhbGxzIHRoaXMgaXMgdGhlIGtlcm5lbCBjaGFubmVsLCB0aHJvdWdoXHJcbiAgICAvLyB0aGUgY2FsbGJhY2sgc2V0IHVwIGJ5IGF0dGFjaEtlcm5lbFRvQ2hhbm5lbCwgYW5kIHRoZSBjYWxsYmFjayBpcyBleHBlY3RlZCB0byByZXR1cm4gdm9pZCwgc29cclxuICAgIC8vIG5vdGhpbmcgaXMgZXZlciBnb2luZyB0byBsb29rIGF0IHRoZSBwcm9taXNlIHdlIHJldHVybiBoZXJlLlxyXG4gICAgYXN5bmMgc2VuZChjb21tYW5kRW52ZWxvcGVPck1vZGVsOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUgfCBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBjb21tYW5kRW52ZWxvcGUgPSA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPmNvbW1hbmRFbnZlbG9wZU9yTW9kZWw7XHJcblxyXG4gICAgICAgIGlmICghKDxhbnk+Y29tbWFuZEVudmVsb3BlT3JNb2RlbCkuZ2V0T3JDcmVhdGVUb2tlbikge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBDb252ZXJ0aW5nIGNvbW1hbmQgZW52ZWxvcGUgbW9kZWwgdG8gY29tbWFuZCBlbnZlbG9wZSBmb3IgYmFja2F3YXJkcyBjb21wYXRpYmlsaXR5LmApO1xyXG4gICAgICAgICAgICBjb21tYW5kRW52ZWxvcGUgPSBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUuZnJvbUpzb24oPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsPmNvbW1hbmRFbnZlbG9wZU9yTW9kZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0LmdldE9yQ3JlYXRlQW1iaWVudENvbnRleHQoY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICBpZiAoY29udGV4dC5jb21tYW5kRW52ZWxvcGUpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHQuY29tbWFuZEVudmVsb3BlICE9PSBjb21tYW5kRW52ZWxvcGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRFbnZlbG9wZS5wYXJlbnQgPSBjb250ZXh0LmNvbW1hbmRFbnZlbG9wZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkodGhpcyk7XHJcbiAgICAgICAgaWYgKCFjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICBjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuc3RhbXBBc0Fycml2ZWQoa2VybmVsVXJpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBUcnlpbmcgdG8gc3RhbXAgJHtjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGV9IGFzIGFycml2ZWQgYnV0IHVyaSAke2tlcm5lbFVyaX0gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXA7Ly8/XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNjaGVkdWxlcigpLnJ1bkFzeW5jKGNvbW1hbmRFbnZlbG9wZSwgKHZhbHVlKSA9PiB0aGlzLmV4ZWN1dGVDb21tYW5kKHZhbHVlKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwLnN0YW1wKGtlcm5lbFVyaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBUcnlpbmcgdG8gc3RhbXAgJHtjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGV9IGFzIGNvbXBsZXRlZCBidXQgdXJpICR7a2VybmVsVXJpfSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlQ29tbWFuZChjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuZ2V0T3JDcmVhdGVBbWJpZW50Q29udGV4dChjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c0hhbmRsaW5nS2VybmVsID0gY29udGV4dC5oYW5kbGluZ0tlcm5lbDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVDb21tYW5kKGNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmFpbCgoPGFueT5lKT8ubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldmlvdXNIYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tbWFuZEhhbmRsZXIoY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRUeXBlKTogSUtlcm5lbENvbW1hbmRIYW5kbGVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tbWFuZEhhbmRsZXJzLmdldChjb21tYW5kVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ29tbWFuZChjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuZ2V0T3JDcmVhdGVBbWJpZW50Q29udGV4dChjb21tYW5kRW52ZWxvcGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdWRIZW5kbGluZ0tlcm5lbCA9IGNvbnRleHQuaGFuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgICAgIGNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgaXNSb290Q29tbWFuZCA9IGFyZUNvbW1hbmRzVGhlU2FtZShjb250ZXh0LmNvbW1hbmRFbnZlbG9wZSwgY29tbWFuZEVudmVsb3BlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudFN1YnNjcmlwdGlvbjogcnhqcy5TdWJzY3JpcHRpb24gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7Ly8/XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSb290Q29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2VybmVsVHlwZSA9ICh0aGlzLmtlcm5lbEluZm8uaXNQcm94eSA/IFwicHJveHlcIiA6IFwiXCIpICsgKHRoaXMua2VybmVsSW5mby5pc0NvbXBvc2l0ZSA/IFwiY29tcG9zaXRlXCIgOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbCAke3RoaXMubmFtZX0gb2YgdHlwZSAke2tlcm5lbFR5cGV9IHN1YnNjcmliaW5nIHRvIGNvbnRleHQgZXZlbnRzYCk7XHJcbiAgICAgICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbiA9IGNvbnRleHQua2VybmVsRXZlbnRzLnBpcGUocnhqcy5tYXAoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBrZXJuZWwgJHt0aGlzLm5hbWV9IG9mIHR5cGUgJHtrZXJuZWxUeXBlfSBzYXcgZXZlbnQgJHtlLmV2ZW50VHlwZX0gd2l0aCB0b2tlbiAke2UuY29tbWFuZD8uZ2V0T3JDcmVhdGVUb2tlbigpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTsvLz9cclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbFVyaSA9IGdldEtlcm5lbFVyaSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWUucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnJvdXRpbmdTbGlwLnN0YW1wKGtlcm5lbFVyaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG91bGQgbm90IGdldCBoZXJlXCI7Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLnB1Ymxpc2hFdmVudC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzLmdldENvbW1hbmRIYW5kbGVyKGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbCAke3RoaXMubmFtZX0gYWJvdXQgdG8gaGFuZGxlIGNvbW1hbmQ6ICR7SlNPTi5zdHJpbmdpZnkoY29tbWFuZEVudmVsb3BlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBoYW5kbGVyLmhhbmRsZSh7IGNvbW1hbmRFbnZlbG9wZTogY29tbWFuZEVudmVsb3BlLCBjb250ZXh0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29tcGxldGUoY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldmlvdWRIZW5kbGluZ0tlcm5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSb290Q29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbCAke3RoaXMubmFtZX0gZG9uZSBoYW5kbGluZyBjb21tYW5kOiAke0pTT04uc3RyaW5naWZ5KGNvbW1hbmRFbnZlbG9wZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZhaWwoKDxhbnk+ZSk/Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSBwcmV2aW91ZEhlbmRsaW5nS2VybmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1Jvb3RDb21tYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpb3VkSGVuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSb290Q29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgTm8gaGFuZGxlciBmb3VuZCBmb3IgY29tbWFuZCB0eXBlICR7Y29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlfWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVRvS2VybmVsRXZlbnRzKG9ic2VydmVyOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlT2JzZXJ2ZXIpOiBkaXNwb3NhYmxlcy5EaXNwb3NhYmxlU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9ldmVudFN1YmplY3Quc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcG9zZTogKCkgPT4geyBzdWIudW5zdWJzY3JpYmUoKTsgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbkhhbmRsZShjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgICAgIGlmIChjb21tYW5kRW52ZWxvcGUuY29tbWFuZC50YXJnZXRLZXJuZWxOYW1lICYmIGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUgIT09IHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmkgPSByb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkoY29tbWFuZEVudmVsb3BlLmNvbW1hbmQuZGVzdGluYXRpb25VcmkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXJuZWxJbmZvLnVyaSAhPT0gbm9ybWFsaXplZFVyaSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdXBwb3J0c0NvbW1hbmQoY29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0c0NvbW1hbmQoY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRUeXBlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbW1hbmRIYW5kbGVycy5oYXMoY29tbWFuZFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoaGFuZGxlcjogSUtlcm5lbENvbW1hbmRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gV2hlbiBhIHJlZ2lzdHJhdGlvbiBhbHJlYWR5IGV4aXN0ZWQsIHdlIHdhbnQgdG8gb3ZlcndyaXRlIGl0IGJlY2F1c2Ugd2Ugd2FudCB1c2VycyB0b1xyXG4gICAgICAgIC8vIGJlIGFibGUgdG8gZGV2ZWxvcCBoYW5kbGVycyBpdGVyYXRpdmVseSwgYW5kIGl0IHdvdWxkIGJlIHVuaGVscGZ1bCBmb3IgaGFuZGxlciByZWdpc3RyYXRpb25cclxuICAgICAgICAvLyBmb3IgYW55IHBhcnRpY3VsYXIgY29tbWFuZCB0byBiZSBjdW11bGF0aXZlLlxyXG5cclxuICAgICAgICBjb25zdCBzaG91bGROb3RpZnkgPSAhdGhpcy5fY29tbWFuZEhhbmRsZXJzLmhhcyhoYW5kbGVyLmNvbW1hbmRUeXBlKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbFJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoaGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkID0ge1xyXG4gICAgICAgICAgICAgICAga2VybmVsSW5mbzogdGhpcy5fa2VybmVsSW5mbyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZW52ZWxvcGUgPSBuZXcgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZShcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQ/LmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgZW52ZWxvcGUucm91dGluZ1NsaXAuc3RhbXAoZ2V0S2VybmVsVXJpKHRoaXMpKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZW52ZWxvcGUuY29tbWFuZCA9IGNvbnRleHQuY29tbWFuZEVudmVsb3BlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHQucHVibGlzaChlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hFdmVudChlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxSZWdpc3RlckNvbW1hbmRIYW5kbGVyKGhhbmRsZXI6IElLZXJuZWxDb21tYW5kSGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbW1hbmRIYW5kbGVycy5zZXQoaGFuZGxlci5jb21tYW5kVHlwZSwgaGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsSW5mby5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcyA9IEFycmF5LmZyb20odGhpcy5fY29tbWFuZEhhbmRsZXJzLmtleXMoKSkubWFwKGNvbW1hbmROYW1lID0+ICh7IG5hbWU6IGNvbW1hbmROYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SGFuZGxpbmdLZXJuZWwoY29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGNvbnRleHQ/OiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB8IG51bGwpOiBLZXJuZWwgfCBudWxsIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5IYW5kbGUoY29tbWFuZEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250ZXh0Py5mYWlsKGBDb21tYW5kICR7Y29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlfSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEtlcm5lbCAke3RoaXMubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwdWJsaXNoRXZlbnQoa2VybmVsRXZlbnQ6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUpIHtcclxuICAgICAgICB0aGlzLl9ldmVudFN1YmplY3QubmV4dChrZXJuZWxFdmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRDb21tYW5kQW5kR2V0UmVzdWx0PFRFdmVudCBleHRlbmRzIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50PihrZXJuZWw6IEtlcm5lbCwgY29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGV4cGVjdGVkRXZlbnRUeXBlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudFR5cGUpOiBQcm9taXNlPFRFdmVudD4ge1xyXG4gICAgbGV0IGNvbXBsZXRpb25Tb3VyY2UgPSBuZXcgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VEV2ZW50PigpO1xyXG4gICAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcclxuICAgIGxldCBkaXNwb3NhYmxlID0ga2VybmVsLnN1YnNjcmliZVRvS2VybmVsRXZlbnRzKGV2ZW50RW52ZWxvcGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudEVudmVsb3BlLmNvbW1hbmQ/LmdldE9yQ3JlYXRlVG9rZW4oKSA9PT0gY29tbWFuZEVudmVsb3BlLmdldE9yQ3JlYXRlVG9rZW4oKSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50RW52ZWxvcGUuZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRGYWlsZWRUeXBlOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVyciA9IDxjb21tYW5kc0FuZEV2ZW50cy5Db21tYW5kRmFpbGVkPmV2ZW50RW52ZWxvcGUuZXZlbnQ7Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25Tb3VyY2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjb21tYW5kc0FuZEV2ZW50cy5Db21tYW5kU3VjY2VlZGVkVHlwZTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJlQ29tbWFuZHNUaGVTYW1lKGV2ZW50RW52ZWxvcGUuY29tbWFuZCEsIGNvbW1hbmRFbnZlbG9wZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKGV2ZW50RW52ZWxvcGUuY29tbWFuZD8uaWQgPT09IGNvbW1hbmRFbnZlbG9wZS5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkKSB7Ly8/ICgkID8gZXZlbnRFbnZlbG9wZSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uU291cmNlLnJlamVjdCgnQ29tbWFuZCB3YXMgaGFuZGxlZCBiZWZvcmUgcmVwb3J0aW5nIGV4cGVjdGVkIHJlc3VsdC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudEVudmVsb3BlLmV2ZW50VHlwZSA9PT0gZXhwZWN0ZWRFdmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IDxURXZlbnQ+ZXZlbnRFbnZlbG9wZS5ldmVudDsvLz8gKCQgPyBldmVudEVudmVsb3BlIDoge30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZShldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBrZXJuZWwuc2VuZChjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsZXRpb25Tb3VyY2UucHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEtlcm5lbFVyaShrZXJuZWw6IEtlcm5lbCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4ga2VybmVsLmtlcm5lbEluZm8udXJpID8/IGBrZXJuZWw6Ly9sb2NhbC8ke2tlcm5lbC5rZXJuZWxJbmZvLmxvY2FsTmFtZX1gO1xyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHJvdXRpbmdzbGlwIGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmltcG9ydCAqIGFzIGNvbW1hbmRzQW5kRXZlbnRzIGZyb20gXCIuL2NvbW1hbmRzQW5kRXZlbnRzXCI7XHJcbmltcG9ydCB7IGdldEtlcm5lbFVyaSwgSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uLCBLZXJuZWwgfSBmcm9tIFwiLi9rZXJuZWxcIjtcclxuaW1wb3J0IHsgS2VybmVsSG9zdCB9IGZyb20gXCIuL2tlcm5lbEhvc3RcIjtcclxuaW1wb3J0IHsgS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVLZXJuZWwgZXh0ZW5kcyBLZXJuZWwge1xyXG4gICAgcHJpdmF0ZSBfaG9zdDogS2VybmVsSG9zdCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGVmYXVsdEtlcm5lbE5hbWVzQnlDb21tYW5kVHlwZTogTWFwPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGRlZmF1bHRLZXJuZWxOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9jaGlsZEtlcm5lbHM6IEtlcm5lbENvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5rZXJuZWxJbmZvLmlzQ29tcG9zaXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMgPSBuZXcgS2VybmVsQ29sbGVjdGlvbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2hpbGRLZXJuZWxzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2NoaWxkS2VybmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvc3QoKTogS2VybmVsSG9zdCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBob3N0KGhvc3Q6IEtlcm5lbEhvc3QgfCBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXJuZWxJbmZvLnVyaSA9IHRoaXMuX2hvc3QudXJpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMubm90aWZ5VGhhdEhvc3RXYXNTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGFzeW5jIGhhbmRsZVJlcXVlc3RLZXJuZWxJbmZvKGludm9jYXRpb246IElLZXJuZWxDb21tYW5kSW52b2NhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICBjb25zdCBldmVudEVudmVsb3BlID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoXHJcbiAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgIDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+eyBrZXJuZWxJbmZvOiB0aGlzLmtlcm5lbEluZm8gfSxcclxuICAgICAgICAgICAgaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGVcclxuICAgICAgICApOy8vP1xyXG5cclxuICAgICAgICBpbnZvY2F0aW9uLmNvbnRleHQucHVibGlzaChldmVudEVudmVsb3BlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2VybmVsIG9mIHRoaXMuX2NoaWxkS2VybmVscykge1xyXG4gICAgICAgICAgICBpZiAoa2VybmVsLnN1cHBvcnRzQ29tbWFuZChpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tbWFuZCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdEtlcm5lbEluZm9UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0S2VybmVsTmFtZToga2VybmVsLmtlcm5lbEluZm8ubG9jYWxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZENvbW1hbmQucm91dGluZ1NsaXAuY29udGludWVXaXRoKGludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGtlcm5lbC5oYW5kbGVDb21tYW5kKGNoaWxkQ29tbWFuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGtlcm5lbDogS2VybmVsLCBhbGlhc2VzPzogc3RyaW5nW10pIHtcclxuICAgICAgICBpZiAoIWtlcm5lbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJrZXJuZWwgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRLZXJuZWxOYW1lKSB7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gZmlyc3Qga2VybmVsXHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdEtlcm5lbE5hbWUgPSBrZXJuZWwubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGtlcm5lbC5wYXJlbnRLZXJuZWwgPSB0aGlzO1xyXG4gICAgICAgIGtlcm5lbC5yb290S2VybmVsID0gdGhpcy5yb290S2VybmVsO1xyXG4gICAgICAgIGtlcm5lbC5rZXJuZWxFdmVudHMuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudDsvLz9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbFVyaSA9IGdldEtlcm5lbFVyaSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnJvdXRpbmdTbGlwLnN0YW1wKGtlcm5lbFVyaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBldmVudDsvLz9cclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWxpYXNlcykge1xyXG4gICAgICAgICAgICBsZXQgc2V0ID0gbmV3IFNldChhbGlhc2VzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXJuZWwua2VybmVsSW5mby5hbGlhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhbGlhcyBpbiBrZXJuZWwua2VybmVsSW5mby5hbGlhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0LmFkZChhbGlhcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtlcm5lbC5rZXJuZWxJbmZvLmFsaWFzZXMgPSBBcnJheS5mcm9tKHNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMuYWRkKGtlcm5lbCwgYWxpYXNlcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25Db250ZXh0ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuY3VycmVudDtcclxuXHJcbiAgICAgICAgaWYgKGludm9jYXRpb25Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmNvbW1hbmRFbnZlbG9wZTsvLz9cclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZShcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgICAgICA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkPntcclxuICAgICAgICAgICAgICAgICAgICBrZXJuZWxJbmZvOiBrZXJuZWwua2VybmVsSW5mb1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICApOy8vP1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5wdWJsaXNoKGV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSxcclxuICAgICAgICAgICAgICAgIDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+e1xyXG4gICAgICAgICAgICAgICAgICAgIGtlcm5lbEluZm86IGtlcm5lbC5rZXJuZWxJbmZvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7Ly8/XHJcbiAgICAgICAgICAgIHRoaXMucHVibGlzaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEtlcm5lbEJ5VXJpKHVyaTogc3RyaW5nKTogS2VybmVsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gcm91dGluZ3NsaXAuY3JlYXRlS2VybmVsVXJpKHVyaSk7XHJcbiAgICAgICAgaWYgKHRoaXMua2VybmVsSW5mby51cmkgPT09IG5vcm1hbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZEtlcm5lbHMudHJ5R2V0QnlVcmkobm9ybWFsaXplZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEtlcm5lbEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmtlcm5lbEluZm8ubG9jYWxOYW1lID09PSBuYW1lIHx8IHRoaXMua2VybmVsSW5mby5hbGlhc2VzLmZpbmQoYSA9PiBhID09PSBuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkS2VybmVscy50cnlHZXRCeUFsaWFzKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRLZXJuZWxzKHByZWRpY2F0ZTogKGtlcm5lbDogS2VybmVsKSA9PiBib29sZWFuKTogS2VybmVsW10ge1xyXG4gICAgICAgIHZhciByZXN1bHRzOiBLZXJuZWxbXSA9IFtdO1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUodGhpcykpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrZXJuZWwgb2YgdGhpcy5jaGlsZEtlcm5lbHMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShrZXJuZWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goa2VybmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBmaW5kS2VybmVsKHByZWRpY2F0ZTogKGtlcm5lbDogS2VybmVsKSA9PiBib29sZWFuKTogS2VybmVsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAocHJlZGljYXRlKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZEtlcm5lbHMuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmF1bHRUYXJnZXRLZXJuZWxOYW1lRm9yQ29tbWFuZChjb21tYW5kVHlwZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZFR5cGUsIGtlcm5lbE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRLZXJuZWxOYW1lc0J5Q29tbWFuZFR5cGUuc2V0KGNvbW1hbmRUeXBlLCBrZXJuZWxOYW1lKTtcclxuICAgIH1cclxuICAgIG92ZXJyaWRlIGhhbmRsZUNvbW1hbmQoY29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBpbnZvY2F0aW9uQ29udGV4dCA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGxldCBrZXJuZWwgPSBjb21tYW5kRW52ZWxvcGUuY29tbWFuZC50YXJnZXRLZXJuZWxOYW1lID09PSB0aGlzLm5hbWVcclxuICAgICAgICAgICAgPyB0aGlzXHJcbiAgICAgICAgICAgIDogdGhpcy5nZXRIYW5kbGluZ0tlcm5lbChjb21tYW5kRW52ZWxvcGUsIGludm9jYXRpb25Db250ZXh0KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZpdXNvSGFuZGxpbmdLZXJuZWwgPSBpbnZvY2F0aW9uQ29udGV4dD8uaGFuZGxpbmdLZXJuZWwgPz8gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGtlcm5lbCA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICBpZiAoaW52b2NhdGlvbkNvbnRleHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmhhbmRsaW5nS2VybmVsID0ga2VybmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5oYW5kbGVDb21tYW5kKGNvbW1hbmRFbnZlbG9wZSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkNvbnRleHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpdXNvSGFuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2VybmVsKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSBrZXJuZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qga2VybmVsVXJpID0gZ2V0S2VybmVsVXJpKGtlcm5lbCk7XHJcbiAgICAgICAgICAgIGlmICghY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwLmNvbnRhaW5zKGtlcm5lbFVyaSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcC5zdGFtcEFzQXJyaXZlZChrZXJuZWxVcmkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQud2FybihgVHJ5aW5nIHRvIHN0YW1wICR7Y29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlfSBhcyBhcnJpdmVkIGJ1dCB1cmkgJHtrZXJuZWxVcml9IGlzIGFscmVhZHkgcHJlc2VudC5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ga2VybmVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZEVudmVsb3BlKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldml1c29IYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwLmNvbnRhaW5zKGtlcm5lbFVyaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuc3RhbXAoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQud2FybihgVHJ5aW5nIHRvIHN0YW1wICR7Y29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlfSBhcyBjb21wbGV0ZWQgYnV0IHVyaSAke2tlcm5lbFVyaX0gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpdXNvSGFuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJLZXJuZWwgbm90IGZvdW5kOiBcIiArIGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBvdmVycmlkZSBnZXRIYW5kbGluZ0tlcm5lbChjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSwgY29udGV4dD86IEtlcm5lbEludm9jYXRpb25Db250ZXh0IHwgbnVsbCk6IEtlcm5lbCB8IG51bGwge1xyXG5cclxuICAgICAgICBsZXQga2VybmVsOiBLZXJuZWwgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAoY29tbWFuZEVudmVsb3BlLmNvbW1hbmQuZGVzdGluYXRpb25VcmkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHJvdXRpbmdzbGlwLmNyZWF0ZUtlcm5lbFVyaShjb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaSk7XHJcbiAgICAgICAgICAgIGtlcm5lbCA9IHRoaXMuX2NoaWxkS2VybmVscy50cnlHZXRCeVVyaShub3JtYWxpemVkKSA/PyBudWxsO1xyXG4gICAgICAgICAgICBpZiAoa2VybmVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2VybmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0S2VybmVsTmFtZSA9IGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWU7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRLZXJuZWxOYW1lID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0S2VybmVsTmFtZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5IYW5kbGUoY29tbWFuZEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRhcmdldEtlcm5lbE5hbWUgPSB0aGlzLl9kZWZhdWx0S2VybmVsTmFtZXNCeUNvbW1hbmRUeXBlLmdldChjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGUpID8/IHRoaXMuZGVmYXVsdEtlcm5lbE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0S2VybmVsTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRhcmdldEtlcm5lbE5hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAga2VybmVsID0gdGhpcy5fY2hpbGRLZXJuZWxzLnRyeUdldEJ5QWxpYXModGFyZ2V0S2VybmVsTmFtZSkgPz8gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRLZXJuZWxOYW1lICYmICFrZXJuZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYEtlcm5lbCBub3QgZm91bmQ6ICR7dGFyZ2V0S2VybmVsTmFtZX1gO1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgha2VybmVsKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2hpbGRLZXJuZWxzLmNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBrZXJuZWwgPSB0aGlzLl9jaGlsZEtlcm5lbHMuc2luZ2xlKCkgPz8gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFrZXJuZWwpIHtcclxuICAgICAgICAgICAga2VybmVsID0gY29udGV4dD8uaGFuZGxpbmdLZXJuZWwgPz8gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtlcm5lbCA/PyB0aGlzO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgS2VybmVsQ29sbGVjdGlvbiBpbXBsZW1lbnRzIEl0ZXJhYmxlPEtlcm5lbD4ge1xyXG5cclxuICAgIHByaXZhdGUgX2NvbXBvc2l0ZUtlcm5lbDogQ29tcG9zaXRlS2VybmVsO1xyXG4gICAgcHJpdmF0ZSBfa2VybmVsczogS2VybmVsW10gPSBbXTtcclxuICAgIHByaXZhdGUgX25hbWVBbmRBbGlhc2VzQnlLZXJuZWw6IE1hcDxLZXJuZWwsIFNldDxzdHJpbmc+PiA9IG5ldyBNYXA8S2VybmVsLCBTZXQ8c3RyaW5nPj4oKTtcclxuICAgIHByaXZhdGUgX2tlcm5lbHNCeU5hbWVPckFsaWFzOiBNYXA8c3RyaW5nLCBLZXJuZWw+ID0gbmV3IE1hcDxzdHJpbmcsIEtlcm5lbD4oKTtcclxuICAgIHByaXZhdGUgX2tlcm5lbHNCeUxvY2FsVXJpOiBNYXA8c3RyaW5nLCBLZXJuZWw+ID0gbmV3IE1hcDxzdHJpbmcsIEtlcm5lbD4oKTtcclxuICAgIHByaXZhdGUgX2tlcm5lbHNCeVJlbW90ZVVyaTogTWFwPHN0cmluZywgS2VybmVsPiA9IG5ldyBNYXA8c3RyaW5nLCBLZXJuZWw+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tcG9zaXRlS2VybmVsOiBDb21wb3NpdGVLZXJuZWwpIHtcclxuICAgICAgICB0aGlzLl9jb21wb3NpdGVLZXJuZWwgPSBjb21wb3NpdGVLZXJuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8S2VybmVsPiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2tlcm5lbHNbY291bnRlcisrXSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lOiBjb3VudGVyID4gdGhpcy5fa2VybmVscy5sZW5ndGggLy8/XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaW5nbGUoKTogS2VybmVsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2VybmVscy5sZW5ndGggPT09IDEgPyB0aGlzLl9rZXJuZWxzWzBdIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWRkKGtlcm5lbDogS2VybmVsLCBhbGlhc2VzPzogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fa2VybmVsc0J5TmFtZU9yQWxpYXMuaGFzKGtlcm5lbC5uYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGtlcm5lbCB3aXRoIG5hbWUgJHtrZXJuZWwubmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVLZXJuZWxJbmZvQW5kSW5kZXgoa2VybmVsLCBhbGlhc2VzKTtcclxuICAgICAgICB0aGlzLl9rZXJuZWxzLnB1c2goa2VybmVsKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUtlcm5lbEluZm9BbmRJbmRleChrZXJuZWw6IEtlcm5lbCwgYWxpYXNlcz86IHN0cmluZ1tdKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChhbGlhc2VzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGFsaWFzIG9mIGFsaWFzZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9rZXJuZWxzQnlOYW1lT3JBbGlhcy5oYXMoYWxpYXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBrZXJuZWwgd2l0aCBhbGlhcyAke2FsaWFzfSBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX25hbWVBbmRBbGlhc2VzQnlLZXJuZWwuaGFzKGtlcm5lbCkpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGFsaWFzIG9mIGtlcm5lbC5rZXJuZWxJbmZvLmFsaWFzZXMpIHtcclxuICAgICAgICAgICAgICAgIHNldC5hZGQoYWxpYXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXJuZWwua2VybmVsSW5mby5hbGlhc2VzID0gQXJyYXkuZnJvbShzZXQpO1xyXG5cclxuICAgICAgICAgICAgc2V0LmFkZChrZXJuZWwua2VybmVsSW5mby5sb2NhbE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbmFtZUFuZEFsaWFzZXNCeUtlcm5lbC5zZXQoa2VybmVsLCBzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWxpYXNlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhbGlhcyBvZiBhbGlhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lQW5kQWxpYXNlc0J5S2VybmVsLmdldChrZXJuZWwpIS5hZGQoYWxpYXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9uYW1lQW5kQWxpYXNlc0J5S2VybmVsLmdldChrZXJuZWwpPy5mb3JFYWNoKGFsaWFzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fa2VybmVsc0J5TmFtZU9yQWxpYXMuc2V0KGFsaWFzLCBrZXJuZWwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYmFzZVVyaSA9IHRoaXMuX2NvbXBvc2l0ZUtlcm5lbC5ob3N0Py51cmkgfHwgdGhpcy5fY29tcG9zaXRlS2VybmVsLmtlcm5lbEluZm8udXJpO1xyXG5cclxuICAgICAgICBpZiAoIWJhc2VVcmkhLmVuZHNXaXRoKFwiL1wiKSkge1xyXG4gICAgICAgICAgICBiYXNlVXJpICs9IFwiL1wiO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAga2VybmVsLmtlcm5lbEluZm8udXJpID0gcm91dGluZ3NsaXAuY3JlYXRlS2VybmVsVXJpKGAke2Jhc2VVcml9JHtrZXJuZWwua2VybmVsSW5mby5sb2NhbE5hbWV9YCk7Ly8/XHJcbiAgICAgICAgdGhpcy5fa2VybmVsc0J5TG9jYWxVcmkuc2V0KGtlcm5lbC5rZXJuZWxJbmZvLnVyaSwga2VybmVsKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChrZXJuZWwua2VybmVsSW5mby5pc1Byb3h5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tlcm5lbHNCeVJlbW90ZVVyaS5zZXQoa2VybmVsLmtlcm5lbEluZm8ucmVtb3RlVXJpISwga2VybmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUdldEJ5QWxpYXMoYWxpYXM6IHN0cmluZyk6IEtlcm5lbCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbHNCeU5hbWVPckFsaWFzLmdldChhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUdldEJ5VXJpKHVyaTogc3RyaW5nKTogS2VybmVsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQga2VybmVsID0gdGhpcy5fa2VybmVsc0J5TG9jYWxVcmkuZ2V0KHVyaSkgfHwgdGhpcy5fa2VybmVsc0J5UmVtb3RlVXJpLmdldCh1cmkpO1xyXG4gICAgICAgIHJldHVybiBrZXJuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5VGhhdEhvc3RXYXNTZXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2VybmVsIG9mIHRoaXMuX2tlcm5lbHMpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVLZXJuZWxJbmZvQW5kSW5kZXgoa2VybmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZUtlcm5lbCB9IGZyb20gJy4vY29tcG9zaXRlS2VybmVsJztcclxuaW1wb3J0ICogYXMgY29tbWFuZHNBbmRFdmVudHMgZnJvbSAnLi9jb21tYW5kc0FuZEV2ZW50cyc7XHJcbmltcG9ydCAqIGFzIGRpc3Bvc2FibGVzIGZyb20gJy4vZGlzcG9zYWJsZXMnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlIH0gZnJvbSAnLi9kaXNwb3NhYmxlcyc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcclxuXHJcbmV4cG9ydCB0eXBlIEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUgPSBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUgfCBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlO1xyXG5cclxuZXhwb3J0IHR5cGUgS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZU1vZGVsID0gY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlTW9kZWwgfCBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlTW9kZWw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXJuZWxDb21tYW5kRW52ZWxvcGUoY29tbWFuZE9yRXZlbnQ6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpOiBjb21tYW5kT3JFdmVudCBpcyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUge1xyXG4gICAgcmV0dXJuICg8YW55PmNvbW1hbmRPckV2ZW50KS5jb21tYW5kVHlwZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbChjb21tYW5kT3JFdmVudDogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZU1vZGVsKTogY29tbWFuZE9yRXZlbnQgaXMgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlTW9kZWwge1xyXG4gICAgcmV0dXJuICg8YW55PmNvbW1hbmRPckV2ZW50KS5jb21tYW5kVHlwZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXJuZWxFdmVudEVudmVsb3BlKGNvbW1hbmRPckV2ZW50OiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKTogY29tbWFuZE9yRXZlbnQgaXMgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSB7XHJcbiAgICByZXR1cm4gKDxhbnk+Y29tbWFuZE9yRXZlbnQpLmV2ZW50VHlwZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXJuZWxFdmVudEVudmVsb3BlTW9kZWwoY29tbWFuZE9yRXZlbnQ6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGVNb2RlbCk6IGNvbW1hbmRPckV2ZW50IGlzIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGVNb2RlbCB7XHJcbiAgICByZXR1cm4gKDxhbnk+Y29tbWFuZE9yRXZlbnQpLmV2ZW50VHlwZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciBleHRlbmRzIHJ4anMuU3Vic2NyaWJhYmxlPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyIHtcclxuICAgIHNlbmQoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZTogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciBpbXBsZW1lbnRzIElLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciB7XHJcbiAgICBwcml2YXRlIF9vYnNlcnZhYmxlOiByeGpzLlN1YnNjcmliYWJsZTxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPjtcclxuICAgIHByaXZhdGUgX2Rpc3Bvc2FibGVzOiBkaXNwb3NhYmxlcy5EaXNwb3NhYmxlW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKG9ic2VydmVyOiByeGpzLk9ic2VydmFibGU8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4pIHtcclxuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlID0gb2JzZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBQYXJ0aWFsPHJ4anMuT2JzZXJ2ZXI8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4+KTogcnhqcy5VbnN1YnNjcmliYWJsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBkaXNwb3NhYmxlIG9mIHRoaXMuX2Rpc3Bvc2FibGVzKSB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2FibGUuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEZyb21PYnNlcnZhYmxlKG9ic2VydmFibGU6IHJ4anMuT2JzZXJ2YWJsZTxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPik6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlcihvYnNlcnZhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEZyb21FdmVudExpc3RlbmVyKGFyZ3M6IHsgbWFwOiAoZGF0YTogRXZlbnQpID0+IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUsIGV2ZW50VGFyZ2V0OiBFdmVudFRhcmdldCwgZXZlbnQ6IHN0cmluZyB9KTogSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyIHtcclxuICAgICAgICBsZXQgc3ViamVjdCA9IG5ldyByeGpzLlN1YmplY3Q8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4oKTtcclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWFwcGVkID0gYXJncy5tYXAoZSk7XHJcbiAgICAgICAgICAgIHN1YmplY3QubmV4dChtYXBwZWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXJncy5ldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGFyZ3MuZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgICAgICBjb25zdCByZXQgPSBuZXcgS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIoc3ViamVjdCk7XHJcbiAgICAgICAgcmV0Ll9kaXNwb3NhYmxlcy5wdXNoKHtcclxuICAgICAgICAgICAgZGlzcG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXJncy5ldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGFyZ3MuZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFyZ3MuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhcmdzLmV2ZW50LCBsaXN0ZW5lcik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHNvdXJjZTogYW55KTogc291cmNlIGlzIHJ4anMuT2JzZXJ2ZXI8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4ge1xyXG4gICAgcmV0dXJuICg8YW55PnNvdXJjZSkubmV4dCAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyIGltcGxlbWVudHMgSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciB7XHJcbiAgICBwcml2YXRlIF9zZW5kZXI/OiByeGpzLk9ic2VydmVyPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+IHwgKChrZXJuZWxFdmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKSA9PiB2b2lkKTtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICBzZW5kKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5fc2VuZGVyKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZSA9IGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc2VuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZW5kZXIoY2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc09ic2VydmFibGUodGhpcy5fc2VuZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0tlcm5lbENvbW1hbmRFbnZlbG9wZShrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZW5kZXIubmV4dChjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VuZGVyLm5leHQoY2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlNlbmRlciBpcyBub3Qgc2V0XCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU2VuZGVyIGlzIG5vdCBzZXRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRnJvbU9ic2VydmVyKG9ic2VydmVyOiByeGpzLk9ic2VydmVyPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+KTogSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciB7XHJcbiAgICAgICAgY29uc3Qgc2VuZGVyID0gbmV3IEtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlcigpO1xyXG4gICAgICAgIHNlbmRlci5fc2VuZGVyID0gb2JzZXJ2ZXI7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEZyb21GdW5jdGlvbihzZW5kOiAoa2VybmVsRXZlbnRFbnZlbG9wZTogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkgPT4gdm9pZCk6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIge1xyXG4gICAgICAgIGNvbnN0IHNlbmRlciA9IG5ldyBLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIoKTtcclxuICAgICAgICBzZW5kZXIuX3NlbmRlciA9IHNlbmQ7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRlcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0T2ZTdHJpbmcoY29sbGVjdGlvbjogYW55KTogY29sbGVjdGlvbiBpcyBTZXQ8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIChjb2xsZWN0aW9uKSAhPT0gdHlwZW9mIChuZXcgU2V0PHN0cmluZz4oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTdHJpbmcoY29sbGVjdGlvbjogYW55KTogY29sbGVjdGlvbiBpcyBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSAmJiBjb2xsZWN0aW9uLmxlbmd0aCA+IDAgJiYgdHlwZW9mIChjb2xsZWN0aW9uWzBdKSA9PT0gdHlwZW9mIChcIlwiKTtcclxufVxyXG5cclxuY29uc3Qgb25LZXJuZWxJbmZvVXBkYXRlczogKChjb21wb3NpdGVLZXJuZWw6IENvbXBvc2l0ZUtlcm5lbCkgPT4gdm9pZClbXSA9IFtdO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJGb3JLZXJuZWxJbmZvVXBkYXRlcyhjYWxsYmFjazogKGNvbXBvc2l0ZUtlcm5lbDogQ29tcG9zaXRlS2VybmVsKSA9PiB2b2lkKSB7XHJcbiAgICBvbktlcm5lbEluZm9VcGRhdGVzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcbmZ1bmN0aW9uIG5vdGlmeU9mS2VybmVsSW5mb1VwZGF0ZXMoY29tcG9zaXRlS2VybmVsOiBDb21wb3NpdGVLZXJuZWwpIHtcclxuICAgIGZvciAoY29uc3QgdXBkYXRlciBvZiBvbktlcm5lbEluZm9VcGRhdGVzKSB7XHJcbiAgICAgICAgdXBkYXRlcihjb21wb3NpdGVLZXJuZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlT3JVcGRhdGVQcm94eUZvcktlcm5lbEluZm8oa2VybmVsSW5mbzogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mbywgY29tcG9zaXRlS2VybmVsOiBDb21wb3NpdGVLZXJuZWwpIHtcclxuICAgIGlmIChrZXJuZWxJbmZvLmlzUHJveHkpIHtcclxuICAgICAgICBjb25zdCBob3N0ID0gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShrZXJuZWxJbmZvLnJlbW90ZVVyaSEpO1xyXG4gICAgICAgIGlmIChob3N0ID09PSBleHRyYWN0SG9zdEFuZE5vbWFsaXplKGNvbXBvc2l0ZUtlcm5lbC5rZXJuZWxJbmZvLnVyaSkpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQud2Fybihgc2tpcHBpbiBjcmVhdGlvbiBvZiBwcm94eSBmb3IgYSBwcm94eSBrZXJuZWwgOiBbJHtKU09OLnN0cmluZ2lmeShrZXJuZWxJbmZvKX1dYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmlUb0xvb2t1cCA9IGtlcm5lbEluZm8uaXNQcm94eSA/IGtlcm5lbEluZm8ucmVtb3RlVXJpISA6IGtlcm5lbEluZm8udXJpO1xyXG4gICAgaWYgKHVyaVRvTG9va3VwKSB7XHJcbiAgICAgICAgbGV0IGtlcm5lbCA9IGNvbXBvc2l0ZUtlcm5lbC5maW5kS2VybmVsQnlVcmkodXJpVG9Mb29rdXApO1xyXG4gICAgICAgIGlmICgha2VybmVsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZFxyXG4gICAgICAgICAgICBpZiAoY29tcG9zaXRlS2VybmVsLmhvc3QpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGNyZWF0aW5nIHByb3h5IGZvciB1cmlbJHt1cmlUb0xvb2t1cH1dd2l0aCBpbmZvICR7SlNPTi5zdHJpbmdpZnkoa2VybmVsSW5mbyl9YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgY2xhc2ggd2l0aCBga2VybmVsSW5mby5sb2NhbE5hbWVgXHJcbiAgICAgICAgICAgICAgICBrZXJuZWwgPSBjb21wb3NpdGVLZXJuZWwuaG9zdC5jb25uZWN0UHJveHlLZXJuZWwoa2VybmVsSW5mby5sb2NhbE5hbWUsIHVyaVRvTG9va3VwLCBrZXJuZWxJbmZvLmFsaWFzZXMpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlS2VybmVsSW5mbyhrZXJuZWwua2VybmVsSW5mbywga2VybmVsSW5mbyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGtlcm5lbCBob3N0IGZvdW5kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBwYXRjaGluZyBwcm94eSBmb3IgdXJpWyR7dXJpVG9Mb29rdXB9XXdpdGggaW5mbyAke0pTT04uc3RyaW5naWZ5KGtlcm5lbEluZm8pfSBgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChrZXJuZWwua2VybmVsSW5mby5pc1Byb3h5KSB7XHJcbiAgICAgICAgICAgIC8vIHBhdGNoXHJcbiAgICAgICAgICAgIHVwZGF0ZUtlcm5lbEluZm8oa2VybmVsLmtlcm5lbEluZm8sIGtlcm5lbEluZm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm90aWZ5T2ZLZXJuZWxJbmZvVXBkYXRlcyhjb21wb3NpdGVLZXJuZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXJuZWxJbmZvRm9yUHJveHkoa2VybmVsSW5mbzogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mbyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGtlcm5lbEluZm8uaXNQcm94eTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUtlcm5lbEluZm8oZGVzdGluYXRpb246IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm8sIHNvdXJjZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mbykge1xyXG4gICAgZGVzdGluYXRpb24ubGFuZ3VhZ2VOYW1lID0gc291cmNlLmxhbmd1YWdlTmFtZSA/PyBkZXN0aW5hdGlvbi5sYW5ndWFnZU5hbWU7XHJcbiAgICBkZXN0aW5hdGlvbi5sYW5ndWFnZVZlcnNpb24gPSBzb3VyY2UubGFuZ3VhZ2VWZXJzaW9uID8/IGRlc3RpbmF0aW9uLmxhbmd1YWdlVmVyc2lvbjtcclxuICAgIGRlc3RpbmF0aW9uLmRpc3BsYXlOYW1lID0gc291cmNlLmRpc3BsYXlOYW1lO1xyXG4gICAgZGVzdGluYXRpb24uaXNDb21wb3NpdGUgPSBzb3VyY2UuaXNDb21wb3NpdGU7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5kaXNwbGF5TmFtZSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uLmRpc3BsYXlOYW1lID0gc291cmNlLmRpc3BsYXlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1cHBvcnRlZERpcmVjdGl2ZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIGNvbnN0IHN1cHBvcnRlZENvbW1hbmRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gICAgaWYgKCFkZXN0aW5hdGlvbi5zdXBwb3J0ZWREaXJlY3RpdmVzKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb24uc3VwcG9ydGVkRGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGVzdGluYXRpb24uc3VwcG9ydGVkS2VybmVsQ29tbWFuZHMpIHtcclxuICAgICAgICBkZXN0aW5hdGlvbi5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qgc3VwcG9ydGVkRGlyZWN0aXZlIG9mIGRlc3RpbmF0aW9uLnN1cHBvcnRlZERpcmVjdGl2ZXMpIHtcclxuICAgICAgICBzdXBwb3J0ZWREaXJlY3RpdmVzLmFkZChzdXBwb3J0ZWREaXJlY3RpdmUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBzdXBwb3J0ZWRDb21tYW5kIG9mIGRlc3RpbmF0aW9uLnN1cHBvcnRlZEtlcm5lbENvbW1hbmRzKSB7XHJcbiAgICAgICAgc3VwcG9ydGVkQ29tbWFuZHMuYWRkKHN1cHBvcnRlZENvbW1hbmQubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBzdXBwb3J0ZWREaXJlY3RpdmUgb2Ygc291cmNlLnN1cHBvcnRlZERpcmVjdGl2ZXMpIHtcclxuICAgICAgICBpZiAoIXN1cHBvcnRlZERpcmVjdGl2ZXMuaGFzKHN1cHBvcnRlZERpcmVjdGl2ZS5uYW1lKSkge1xyXG4gICAgICAgICAgICBzdXBwb3J0ZWREaXJlY3RpdmVzLmFkZChzdXBwb3J0ZWREaXJlY3RpdmUubmFtZSk7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnN1cHBvcnRlZERpcmVjdGl2ZXMucHVzaChzdXBwb3J0ZWREaXJlY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHN1cHBvcnRlZENvbW1hbmQgb2Ygc291cmNlLnN1cHBvcnRlZEtlcm5lbENvbW1hbmRzKSB7XHJcbiAgICAgICAgaWYgKCFzdXBwb3J0ZWRDb21tYW5kcy5oYXMoc3VwcG9ydGVkQ29tbWFuZC5uYW1lKSkge1xyXG4gICAgICAgICAgICBzdXBwb3J0ZWRDb21tYW5kcy5hZGQoc3VwcG9ydGVkQ29tbWFuZC5uYW1lKTtcclxuICAgICAgICAgICAgZGVzdGluYXRpb24uc3VwcG9ydGVkS2VybmVsQ29tbWFuZHMucHVzaChzdXBwb3J0ZWRDb21tYW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25uZWN0b3IgaW1wbGVtZW50cyBEaXNwb3NhYmxlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xpc3RlbmVyOiByeGpzLlVuc3Vic2NyaWJhYmxlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmVjZWl2ZXI6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NlbmRlcjogSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3JlbW90ZVVyaXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gICAgcHVibGljIGdldCByZW1vdGVIb3N0VXJpcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fcmVtb3RlVXJpcy52YWx1ZXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzZW5kZXIoKTogSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlY2VpdmVyKCk6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlY2VpdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IHsgcmVjZWl2ZXI6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciwgc2VuZGVyOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyLCByZW1vdGVVcmlzPzogc3RyaW5nW10gfSkge1xyXG4gICAgICAgIHRoaXMuX3JlY2VpdmVyID0gY29uZmlndXJhdGlvbi5yZWNlaXZlcjtcclxuICAgICAgICB0aGlzLl9zZW5kZXIgPSBjb25maWd1cmF0aW9uLnNlbmRlcjtcclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5yZW1vdGVVcmlzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVtb3RlVXJpIG9mIGNvbmZpZ3VyYXRpb24ucmVtb3RlVXJpcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJpID0gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShyZW1vdGVVcmkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVyaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW90ZVVyaXMuYWRkKHVyaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gdGhpcy5fcmVjZWl2ZXIuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0tlcm5lbEV2ZW50RW52ZWxvcGUoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5ldmVudFR5cGUgPT09IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkPmtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUuZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnQua2VybmVsSW5mby5yZW1vdGVVcmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVyaSA9IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUoZXZlbnQua2VybmVsSW5mby51cmkhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdGVVcmlzLmFkZCh1cmkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50Um91dGluZ1NsaXAgPSBrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLnJvdXRpbmdTbGlwLnRvQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGV2ZW50Um91dGluZ1NsaXAubGVuZ3RoID8/IDApID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudE9yaWdpbiA9IGV2ZW50Um91dGluZ1NsaXAhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmkgPSBleHRyYWN0SG9zdEFuZE5vbWFsaXplKGV2ZW50T3JpZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVyaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3RlVXJpcy5hZGQodXJpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRSZW1vdGVIb3N0VXJpKHJlbW90ZVVyaTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgdXJpID0gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShyZW1vdGVVcmkpO1xyXG4gICAgICAgIGlmICh1cmkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3RlVXJpcy5hZGQodXJpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblJlYWNoKHJlbW90ZVVyaTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaG9zdCA9IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUocmVtb3RlVXJpKTsvLz9cclxuICAgICAgICBpZiAoaG9zdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3RlVXJpcy5oYXMoaG9zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIb3N0QW5kTm9tYWxpemUoa2VybmVsVXJpOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZmlsdGVyOiBSZWdFeHAgPSAvKD88aG9zdD4uKzpcXC9cXC9bXlxcL10rKShcXC9bXlxcL10pKi9naTtcclxuICAgIGNvbnN0IG1hdGNoID0gZmlsdGVyLmV4ZWMoa2VybmVsVXJpKTsgLy8/XHJcbiAgICBpZiAobWF0Y2g/Lmdyb3Vwcz8uaG9zdCkge1xyXG4gICAgICAgIGNvbnN0IGhvc3QgPSBtYXRjaC5ncm91cHMuaG9zdDtcclxuICAgICAgICByZXR1cm4gaG9zdDsvLz9cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VyaWFsaXplPFQ+KHNvdXJjZTogVCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc291cmNlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIC8vaGFuZGxpbmcgTmFOLCBJbmZpbml0eSBhbmQgLUluZmluaXR5XHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gU2VyaWFsaXplTnVtYmVyTGl0ZXJhbHModmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBwcm9jZXNzZWQ7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlcmlhbGl6ZU51bWJlckxpdGVyYWxzKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBcIk5hTlwiO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICByZXR1cm4gXCJJbmZpbml0eVwiO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLUluZmluaXR5XCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXNlcmlhbGl6ZShqc29uOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbiwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAvL2hhbmRsaW5nIE5hTiwgSW5maW5pdHkgYW5kIC1JbmZpbml0eVxyXG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZCA9IERlc2VyaWFsaXplTnVtYmVyTGl0ZXJhbHModmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZWQ7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZXNlcmlhbGl6ZU51bWJlckxpdGVyYWxzKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSBcIk5hTlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiSW5maW5pdHlcIikge1xyXG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiLUluZmluaXR5XCIpIHtcclxuICAgICAgICByZXR1cm4gLUluZmluaXR5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCJ1dGlsXCI7XHJcbmltcG9ydCAqIGFzIGNvbm5lY3Rpb24gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tIFwiLi9jb21tYW5kc0FuZEV2ZW50c1wiO1xyXG5pbXBvcnQgeyBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB9IGZyb20gXCIuL2tlcm5lbEludm9jYXRpb25Db250ZXh0XCI7XHJcbmltcG9ydCAqIGFzIGRpc3Bvc2FibGVzIGZyb20gXCIuL2Rpc3Bvc2FibGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZUNhcHR1cmUgaW1wbGVtZW50cyBkaXNwb3NhYmxlcy5EaXNwb3NhYmxlIHtcclxuICAgIHByaXZhdGUgb3JpZ2luYWxDb25zb2xlOiBDb25zb2xlO1xyXG4gICAgcHJpdmF0ZSBfa2VybmVsSW52b2NhdGlvbkNvbnRleHQ6IEtlcm5lbEludm9jYXRpb25Db250ZXh0IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlID0gY29uc29sZTtcclxuICAgICAgICBjb25zb2xlID0gPENvbnNvbGU+PGFueT50aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBrZXJuZWxJbnZvY2F0aW9uQ29udGV4dCh2YWx1ZTogS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLl9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2VydCh2YWx1ZTogYW55LCBtZXNzYWdlPzogc3RyaW5nLCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5hc3NlcnQodmFsdWUsIG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcclxuICAgIH1cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBjb3VudChsYWJlbD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmNvdW50KGxhYmVsKTtcclxuICAgIH1cclxuICAgIGNvdW50UmVzZXQobGFiZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5jb3VudFJlc2V0KGxhYmVsKTtcclxuICAgIH1cclxuICAgIGRlYnVnKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmRlYnVnKG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcclxuICAgIH1cclxuICAgIGRpcihvYmo6IGFueSwgb3B0aW9ucz86IHV0aWwuSW5zcGVjdE9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5kaXIob2JqLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGRpcnhtbCguLi5kYXRhOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmRpcnhtbChkYXRhKTtcclxuICAgIH1cclxuICAgIGVycm9yKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RBbmRQdWJsaXNoKHRoaXMub3JpZ2luYWxDb25zb2xlLmVycm9yLCAuLi5bbWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXNdKTtcclxuICAgIH1cclxuXHJcbiAgICBncm91cCguLi5sYWJlbDogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5ncm91cChsYWJlbCk7XHJcbiAgICB9XHJcbiAgICBncm91cENvbGxhcHNlZCguLi5sYWJlbDogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5ncm91cENvbGxhcHNlZChsYWJlbCk7XHJcbiAgICB9XHJcbiAgICBncm91cEVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgfVxyXG4gICAgaW5mbyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0QW5kUHVibGlzaCh0aGlzLm9yaWdpbmFsQ29uc29sZS5pbmZvLCAuLi5bbWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXNdKTtcclxuICAgIH1cclxuICAgIGxvZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0QW5kUHVibGlzaCh0aGlzLm9yaWdpbmFsQ29uc29sZS5sb2csIC4uLlttZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtc10pO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlKHRhYnVsYXJEYXRhOiBhbnksIHByb3BlcnRpZXM/OiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLnRhYmxlKHRhYnVsYXJEYXRhLCBwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICAgIHRpbWUobGFiZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS50aW1lKGxhYmVsKTtcclxuICAgIH1cclxuICAgIHRpbWVFbmQobGFiZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS50aW1lRW5kKGxhYmVsKTtcclxuICAgIH1cclxuICAgIHRpbWVMb2cobGFiZWw/OiBzdHJpbmcsIC4uLmRhdGE6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUudGltZUxvZyhsYWJlbCwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICB0aW1lU3RhbXAobGFiZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS50aW1lU3RhbXAobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgdHJhY2UobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdEFuZFB1Ymxpc2godGhpcy5vcmlnaW5hbENvbnNvbGUudHJhY2UsIC4uLlttZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtc10pO1xyXG4gICAgfVxyXG4gICAgd2FybihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS53YXJuKG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9maWxlKGxhYmVsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUucHJvZmlsZShsYWJlbCk7XHJcbiAgICB9XHJcbiAgICBwcm9maWxlRW5kKGxhYmVsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUucHJvZmlsZUVuZChsYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlID0gdGhpcy5vcmlnaW5hbENvbnNvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWRpcmVjdEFuZFB1Ymxpc2godGFyZ2V0OiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2tlcm5lbEludm9jYXRpb25Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXJnIG9mIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtaW1lVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoYXJnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlID0gJ3RleHQvcGxhaW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYXJnPy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbm5lY3Rpb24uU2VyaWFsaXplKGFyZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkVmFsdWU6IGNvbW1hbmRzQW5kRXZlbnRzLkRpc3BsYXllZFZhbHVlUHJvZHVjZWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzc0Rpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRFbnZlbG9wZSA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLkRpc3BsYXllZFZhbHVlUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tlcm5lbEludm9jYXRpb25Db250ZXh0LmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5wdWJsaXNoKGV2ZW50RW52ZWxvcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0KC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tIFwiLi9jb21tYW5kc0FuZEV2ZW50c1wiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgS2VybmVsLCBJS2VybmVsQ29tbWFuZEhhbmRsZXIsIElLZXJuZWxDb21tYW5kSW52b2NhdGlvbiwgZ2V0S2VybmVsVXJpIH0gZnJvbSBcIi4va2VybmVsXCI7XHJcbmltcG9ydCAqIGFzIGNvbm5lY3Rpb24gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyByb3V0aW5nU2xpcCBmcm9tIFwiLi9yb3V0aW5nc2xpcFwiO1xyXG5pbXBvcnQgeyBQcm9taXNlQ29tcGxldGlvblNvdXJjZSB9IGZyb20gXCIuL3Byb21pc2VDb21wbGV0aW9uU291cmNlXCI7XHJcbmltcG9ydCB7IEtlcm5lbEludm9jYXRpb25Db250ZXh0IH0gZnJvbSBcIi4va2VybmVsSW52b2NhdGlvbkNvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm94eUtlcm5lbCBleHRlbmRzIEtlcm5lbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3ZlcnJpZGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nLCBwcml2YXRlIHJlYWRvbmx5IF9zZW5kZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciwgcHJpdmF0ZSByZWFkb25seSBfcmVjZWl2ZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyLCBsYW5ndWFnZU5hbWU/OiBzdHJpbmcsIGxhbmd1YWdlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGxhbmd1YWdlTmFtZSwgbGFuZ3VhZ2VWZXJzaW9uKTtcclxuICAgICAgICB0aGlzLmtlcm5lbEluZm8uaXNQcm94eSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcnJpZGUgZ2V0Q29tbWFuZEhhbmRsZXIoY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRUeXBlKTogSUtlcm5lbENvbW1hbmRIYW5kbGVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb21tYW5kVHlwZSxcclxuICAgICAgICAgICAgaGFuZGxlOiAoaW52b2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbW1hbmRIYW5kbGVyKGludm9jYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGVnYXRlUHVibGljYXRpb24oZW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUsIGludm9jYXRpb25Db250ZXh0OiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBhbHJlYWR5QmVlblNlZW4gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkodGhpcyk7XHJcbiAgICAgICAgaWYgKGtlcm5lbFVyaSAmJiAhZW52ZWxvcGUucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICBlbnZlbG9wZS5yb3V0aW5nU2xpcC5zdGFtcChrZXJuZWxVcmkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFscmVhZHlCZWVuU2VlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNTYW1lT3JpZ2luKGVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFscmVhZHlCZWVuU2Vlbikge1xyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQucHVibGlzaChlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYXNTYW1lT3JpZ2luKGVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmRPcmlnaW5VcmkgPSBlbnZlbG9wZS5jb21tYW5kPy5jb21tYW5kPy5vcmlnaW5VcmkgPz8gdGhpcy5rZXJuZWxJbmZvLnVyaTtcclxuICAgICAgICBpZiAoY29tbWFuZE9yaWdpblVyaSA9PT0gdGhpcy5rZXJuZWxJbmZvLnVyaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21tYW5kT3JpZ2luVXJpID09PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlS2VybmVsSW5mb0Zyb21FdmVudChrZXJuZWxJbmZvUHJvZHVjZWQ6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZCkge1xyXG4gICAgICAgIGNvbm5lY3Rpb24udXBkYXRlS2VybmVsSW5mbyh0aGlzLmtlcm5lbEluZm8sIGtlcm5lbEluZm9Qcm9kdWNlZC5rZXJuZWxJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb21tYW5kSGFuZGxlcihjb21tYW5kSW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgY29tbWFuZFRva2VuID0gY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmdldE9yQ3JlYXRlVG9rZW4oKTtcclxuICAgICAgICBjb25zdCBjb21tYW5kSWQgPSBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuaWQ7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGlvblNvdXJjZSA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlPigpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGU7XHJcbiAgICAgICAgLy8gZml4IDogaXMgdGhpcyB0aGUgcmlnaHQgd2F5PyBXZSBhcmUgdHJ5aW5nIHRvIGF2b2lkIGZvcndhcmRpbmcgZXZlbnRzIHdlIGp1c3QgZGlkIGZvcndhcmRcclxuICAgICAgICBsZXQgZXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLl9yZWNlaXZlci5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoZW52ZWxvcGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmlzS2VybmVsRXZlbnRFbnZlbG9wZShlbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW52ZWxvcGUuZXZlbnRUeXBlID09PSBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbnZlbG9wZS5jb21tYW5kID09PSBudWxsIHx8IGVudmVsb3BlLmNvbW1hbmQgPT09IHVuZGVmaW5lZCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9Qcm9kdWNlZCA9IDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+ZW52ZWxvcGUuZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlcm5lbEluZm9Qcm9kdWNlZC5rZXJuZWxJbmZvOy8vP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtlcm5lbEluZm87Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXJuZWxJbmZvUHJvZHVjZWQua2VybmVsSW5mby51cmkgPT09IHRoaXMua2VybmVsSW5mby5yZW1vdGVVcmkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUtlcm5lbEluZm9Gcm9tRXZlbnQoa2VybmVsSW5mb1Byb2R1Y2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSwgeyBrZXJuZWxJbmZvOiB0aGlzLmtlcm5lbEluZm8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW52ZWxvcGUuY29tbWFuZCEuZ2V0T3JDcmVhdGVUb2tlbigpID09PSBjb21tYW5kVG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5IG5hbWU9JHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIHByb2Nlc3NpbmcgZXZlbnQsIGVudmVsb3BlaWQ9JHtlbnZlbG9wZS5jb21tYW5kIS5pZH0sIGNvbW1hbmRpZD0ke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgbmFtZT0ke3RoaXMubmFtZX1bbG9jYWwgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnVyaX0sIHJlbW90ZSB1cmk6JHt0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpfV0gcHJvY2Vzc2luZyBldmVudCwgJHtKU09OLnN0cmluZ2lmeShlbnZlbG9wZSl9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBbLi4uY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlPy5yb3V0aW5nU2xpcC50b0FycmF5KCkgPz8gW11dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwLmNvbnRpbnVlV2l0aChlbnZlbG9wZS5jb21tYW5kIS5yb3V0aW5nU2xpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VudmVsb3BlLmNvbW1hbmQhLnJvdXRpbmdTbGlwID0gWy4uLmNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcCA/PyBbXV07Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBwcm94eSBuYW1lPSR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgY29tbWFuZCByb3V0aW5nU2xpcCA6JHtvcmlnaW5hbH1dIGhhcyBjaGFuZ2VkIHRvOiAke0pTT04uc3RyaW5naWZ5KGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcCA/PyBbXSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuZXJyb3IoYHByb3h5IG5hbWU9JHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCBlcnJvciAke2U/Lm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZW52ZWxvcGUuZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXJuZWxJbmZvUHJvZHVjZWQgPSA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkPmVudmVsb3BlLmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2VybmVsSW5mb1Byb2R1Y2VkLmtlcm5lbEluZm8udXJpID09PSB0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUtlcm5lbEluZm9Gcm9tRXZlbnQoa2VybmVsSW5mb1Byb2R1Y2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtlcm5lbEluZm86IHRoaXMua2VybmVsSW5mbyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5yb3V0aW5nU2xpcC5jb250aW51ZVdpdGgoZW52ZWxvcGUucm91dGluZ1NsaXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVQdWJsaWNhdGlvbihldmVudCwgY29tbWFuZEludm9jYXRpb24uY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlUHVibGljYXRpb24oZW52ZWxvcGUsIGNvbW1hbmRJbnZvY2F0aW9uLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZVB1YmxpY2F0aW9uKGVudmVsb3BlLCBjb21tYW5kSW52b2NhdGlvbi5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZFR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRTdWNjZWVkZWRUeXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5IG5hbWU9JHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIGZpbmlzaGVkLCBlbnZlbG9wZWlkPSR7ZW52ZWxvcGUuY29tbWFuZCEuaWR9LCBjb21tYW5kaWQ9JHtjb21tYW5kSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudmVsb3BlLmNvbW1hbmQhLmlkID09PSBjb21tYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgbmFtZT0ke3RoaXMubmFtZX1bbG9jYWwgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnVyaX0sIHJlbW90ZSB1cmk6JHt0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpfV0gcmVzb2x2aW5nIHByb21pc2UsIGVudmVsb3BlaWQ9JHtlbnZlbG9wZS5jb21tYW5kIS5pZH0sIGNvbW1hbmRpZD0ke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvblNvdXJjZS5yZXNvbHZlKGVudmVsb3BlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBwcm94eSBuYW1lPSR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSBub3QgcmVzb2x2aW5nIHByb21pc2UsIGVudmVsb3BlaWQ9JHtlbnZlbG9wZS5jb21tYW5kIS5pZH0sIGNvbW1hbmRpZD0ke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZVB1YmxpY2F0aW9uKGVudmVsb3BlLCBjb21tYW5kSW52b2NhdGlvbi5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVQdWJsaWNhdGlvbihlbnZlbG9wZSwgY29tbWFuZEludm9jYXRpb24uY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaSB8fCAhY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmQub3JpZ2luVXJpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5vcmlnaW5VcmkgPz89IHRoaXMua2VybmVsSW5mby51cmk7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaSA/Pz0gdGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwOy8vP1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZSA9PT0gY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdEtlcm5lbEluZm9UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvblVyaSA9IHRoaXMua2VybmVsSW5mby5yZW1vdGVVcmkhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcC5jb250YWlucyhkZXN0aW5hdGlvblVyaSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgJHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIGZvcndhcmRpbmcgY29tbWFuZCAke2NvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX0gdG8gJHtjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaX1gKTtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZGVyLnNlbmQoY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgJHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIGFib3V0IHRvIGF3YWl0IHdpdGggdG9rZW4gJHtjb21tYW5kVG9rZW59IGFuZCAgY29tbWFuZGlkICR7Y29tbWFuZElkfWApO1xyXG4gICAgICAgICAgICBjb25zdCBlbnZlbnRFbnZlbG9wZSA9IGF3YWl0IGNvbXBsZXRpb25Tb3VyY2UucHJvbWlzZTtcclxuICAgICAgICAgICAgaWYgKGVudmVudEVudmVsb3BlLmV2ZW50VHlwZSA9PT0gY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRJbnZvY2F0aW9uLmNvbnRleHQuZmFpbCgoPGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRGYWlsZWQ+ZW52ZW50RW52ZWxvcGUuZXZlbnQpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5ICR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSBkb25lIGF3YWl0aW5nIHdpdGggdG9rZW4gJHtjb21tYW5kVG9rZW59fSBhbmQgIGNvbW1hbmRpZCAke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29udGV4dC5mYWlsKCg8YW55PmUpLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IENvbXBvc2l0ZUtlcm5lbCB9IGZyb20gJy4vY29tcG9zaXRlS2VybmVsJztcclxuaW1wb3J0ICogYXMgY29tbWFuZHNBbmRFdmVudHMgZnJvbSAnLi9jb21tYW5kc0FuZEV2ZW50cyc7XHJcbmltcG9ydCAqIGFzIGNvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuaW1wb3J0ICogYXMgcm91dGluZ1NsaXAgZnJvbSAnLi9yb3V0aW5nc2xpcCc7XHJcbmltcG9ydCB7IEtlcm5lbCB9IGZyb20gJy4va2VybmVsJztcclxuaW1wb3J0IHsgUHJveHlLZXJuZWwgfSBmcm9tICcuL3Byb3h5S2VybmVsJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5pbXBvcnQgeyBLZXJuZWxTY2hlZHVsZXIgfSBmcm9tICcuL2tlcm5lbFNjaGVkdWxlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgS2VybmVsSG9zdCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZW1vdGVVcmlUb0tlcm5lbCA9IG5ldyBNYXA8c3RyaW5nLCBLZXJuZWw+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91cmlUb0tlcm5lbCA9IG5ldyBNYXA8c3RyaW5nLCBLZXJuZWw+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXJuZWxUb0tlcm5lbEluZm8gPSBuZXcgTWFwPEtlcm5lbCwgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mbz4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3VyaTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2NoZWR1bGVyOiBLZXJuZWxTY2hlZHVsZXI8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPjtcclxuICAgIHByaXZhdGUgX2tlcm5lbDogQ29tcG9zaXRlS2VybmVsO1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdENvbm5lY3RvcjogY29ubmVjdGlvbi5Db25uZWN0b3I7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25uZWN0b3JzOiBjb25uZWN0aW9uLkNvbm5lY3RvcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2VybmVsOiBDb21wb3NpdGVLZXJuZWwsIHNlbmRlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyLCByZWNlaXZlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIsIGhvc3RVcmk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbCA9IGtlcm5lbDtcclxuICAgICAgICB0aGlzLl91cmkgPSByb3V0aW5nU2xpcC5jcmVhdGVLZXJuZWxVcmkoaG9zdFVyaSB8fCBcImtlcm5lbDovL3ZzY29kZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fa2VybmVsLmhvc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3NjaGVkdWxlciA9IG5ldyBLZXJuZWxTY2hlZHVsZXI8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPigpO1xyXG5cclxuICAgICAgICB0aGlzLl9zY2hlZHVsZXIuc2V0TXVzdFRyYW1wb2xpbmUoKGMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGMuY29tbWFuZFR5cGUgPT09IGNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RJbnB1dFR5cGUpIHx8IChjLmNvbW1hbmRUeXBlID09PSBjb21tYW5kc0FuZEV2ZW50cy5TZW5kRWRpdGFibGVDb2RlVHlwZSk7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29ubmVjdG9yID0gbmV3IGNvbm5lY3Rpb24uQ29ubmVjdG9yKHsgc2VuZGVyLCByZWNlaXZlciB9KTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0b3JzLnB1c2godGhpcy5fZGVmYXVsdENvbm5lY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkZWZhdWx0Q29ubmVjdG9yKCk6IGNvbm5lY3Rpb24uQ29ubmVjdG9yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENvbm5lY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVyaSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91cmk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBrZXJuZWwoKTogQ29tcG9zaXRlS2VybmVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2VybmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlHZXRLZXJuZWxCeVJlbW90ZVVyaShyZW1vdGVVcmk6IHN0cmluZyk6IEtlcm5lbCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW90ZVVyaVRvS2VybmVsLmdldChyZW1vdGVVcmkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlnZXRLZXJuZWxCeU9yaWdpblVyaShvcmlnaW5Vcmk6IHN0cmluZyk6IEtlcm5lbCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VyaVRvS2VybmVsLmdldChvcmlnaW5VcmkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlHZXRLZXJuZWxJbmZvKGtlcm5lbDogS2VybmVsKTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mbyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbFRvS2VybmVsSW5mby5nZXQoa2VybmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkS2VybmVsSW5mbyhrZXJuZWw6IEtlcm5lbCwga2VybmVsSW5mbzogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mbykge1xyXG4gICAgICAgIGtlcm5lbEluZm8udXJpID0gcm91dGluZ1NsaXAuY3JlYXRlS2VybmVsVXJpKGAke3RoaXMuX3VyaX0ke2tlcm5lbC5uYW1lfWApO1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbFRvS2VybmVsSW5mby5zZXQoa2VybmVsLCBrZXJuZWxJbmZvKTtcclxuICAgICAgICB0aGlzLl91cmlUb0tlcm5lbC5zZXQoa2VybmVsSW5mby51cmksIGtlcm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEtlcm5lbChrZXJuZWxDb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IEtlcm5lbCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVyaVRvTG9va3VwID0ga2VybmVsQ29tbWFuZEVudmVsb3BlLmNvbW1hbmQuZGVzdGluYXRpb25VcmkgPz8ga2VybmVsQ29tbWFuZEVudmVsb3BlLmNvbW1hbmQub3JpZ2luVXJpO1xyXG4gICAgICAgIGxldCBrZXJuZWw6IEtlcm5lbCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodXJpVG9Mb29rdXApIHtcclxuICAgICAgICAgICAga2VybmVsID0gdGhpcy5fa2VybmVsLmZpbmRLZXJuZWxCeVVyaSh1cmlUb0xvb2t1cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWtlcm5lbCkge1xyXG4gICAgICAgICAgICBpZiAoa2VybmVsQ29tbWFuZEVudmVsb3BlLmNvbW1hbmQudGFyZ2V0S2VybmVsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAga2VybmVsID0gdGhpcy5fa2VybmVsLmZpbmRLZXJuZWxCeU5hbWUoa2VybmVsQ29tbWFuZEVudmVsb3BlLmNvbW1hbmQudGFyZ2V0S2VybmVsTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGtlcm5lbCA/Pz0gdGhpcy5fa2VybmVsO1xyXG4gICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYFVzaW5nIEtlcm5lbCAke2tlcm5lbC5uYW1lfWApO1xyXG4gICAgICAgIHJldHVybiBrZXJuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbm5lY3RQcm94eUtlcm5lbE9uRGVmYXVsdENvbm5lY3Rvcihsb2NhbE5hbWU6IHN0cmluZywgcmVtb3RlS2VybmVsVXJpPzogc3RyaW5nLCBhbGlhc2VzPzogc3RyaW5nW10pOiBQcm94eUtlcm5lbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdFByb3h5S2VybmVsT25Db25uZWN0b3IobG9jYWxOYW1lLCB0aGlzLl9kZWZhdWx0Q29ubmVjdG9yLnNlbmRlciwgdGhpcy5fZGVmYXVsdENvbm5lY3Rvci5yZWNlaXZlciwgcmVtb3RlS2VybmVsVXJpLCBhbGlhc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5QWRkQ29ubmVjdG9yKGNvbm5lY3RvcjogeyBzZW5kZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciwgcmVjZWl2ZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyLCByZW1vdGVVcmlzPzogc3RyaW5nW10gfSkge1xyXG4gICAgICAgIGlmICghY29ubmVjdG9yLnJlbW90ZVVyaXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdG9ycy5wdXNoKG5ldyBjb25uZWN0aW9uLkNvbm5lY3Rvcihjb25uZWN0b3IpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZm91bmQgPSBjb25uZWN0b3IucmVtb3RlVXJpcyEuZmluZCh1cmkgPT4gdGhpcy5fY29ubmVjdG9ycy5maW5kKGMgPT4gYy5jYW5SZWFjaCh1cmkpKSk7XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RvcnMucHVzaChuZXcgY29ubmVjdGlvbi5Db25uZWN0b3IoY29ubmVjdG9yKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlSZW1vdmVDb25uZWN0b3IoY29ubmVjdG9yOiB7IHJlbW90ZVVyaXM/OiBzdHJpbmdbXSB9KSB7XHJcbiAgICAgICAgaWYgKCFjb25uZWN0b3IucmVtb3RlVXJpcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB1cmkgb2YgY29ubmVjdG9yLnJlbW90ZVVyaXMhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2Nvbm5lY3RvcnMuZmluZEluZGV4KGMgPT4gYy5jYW5SZWFjaCh1cmkpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25uZWN0UHJveHlLZXJuZWwobG9jYWxOYW1lOiBzdHJpbmcsIHJlbW90ZUtlcm5lbFVyaTogc3RyaW5nLCBhbGlhc2VzPzogc3RyaW5nW10pOiBQcm94eUtlcm5lbCB7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdG9yczsvLz9cclxuICAgICAgICBjb25zdCBjb25uZWN0b3IgPSB0aGlzLl9jb25uZWN0b3JzLmZpbmQoYyA9PiBjLmNhblJlYWNoKHJlbW90ZUtlcm5lbFVyaSkpO1xyXG4gICAgICAgIGlmICghY29ubmVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgY29ubmVjdG9yIHRvIHJlYWNoICR7cmVtb3RlS2VybmVsVXJpfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQga2VybmVsID0gbmV3IFByb3h5S2VybmVsKGxvY2FsTmFtZSwgY29ubmVjdG9yLnNlbmRlciwgY29ubmVjdG9yLnJlY2VpdmVyKTtcclxuICAgICAgICBrZXJuZWwua2VybmVsSW5mby5yZW1vdGVVcmkgPSByZW1vdGVLZXJuZWxVcmk7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsLmFkZChrZXJuZWwsIGFsaWFzZXMpO1xyXG4gICAgICAgIHJldHVybiBrZXJuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0UHJveHlLZXJuZWxPbkNvbm5lY3Rvcihsb2NhbE5hbWU6IHN0cmluZywgc2VuZGVyOiBjb25uZWN0aW9uLklLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIsIHJlY2VpdmVyOiBjb25uZWN0aW9uLklLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciwgcmVtb3RlS2VybmVsVXJpPzogc3RyaW5nLCBhbGlhc2VzPzogc3RyaW5nW10pOiBQcm94eUtlcm5lbCB7XHJcbiAgICAgICAgbGV0IGtlcm5lbCA9IG5ldyBQcm94eUtlcm5lbChsb2NhbE5hbWUsIHNlbmRlciwgcmVjZWl2ZXIpO1xyXG4gICAgICAgIGtlcm5lbC5rZXJuZWxJbmZvLnJlbW90ZVVyaSA9IHJlbW90ZUtlcm5lbFVyaTtcclxuICAgICAgICB0aGlzLl9rZXJuZWwuYWRkKGtlcm5lbCwgYWxpYXNlcyk7XHJcbiAgICAgICAgcmV0dXJuIGtlcm5lbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0Q29ubmVjdG9yKHJlbW90ZVVyaTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RvcnMuZmluZChjID0+IGMuY2FuUmVhY2gocmVtb3RlVXJpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNvbm5lY3QoKTogUHJvbWlzZTxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxSZWFkeT4ge1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbC5zdWJzY3JpYmVUb0tlcm5lbEV2ZW50cyhlID0+IHtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgS2VybmVsSG9zdCBmb3J3YXJkaW5nIGV2ZW50OiAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xyXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0Q29ubmVjdG9yLnNlbmRlci5zZW5kKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29ubmVjdG9yLnJlY2VpdmVyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlOiBjb25uZWN0aW9uLktlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5pc0tlcm5lbENvbW1hbmRFbnZlbG9wZShrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYEtlcm5lbEhvc3QgZGlzcGFjdGhpbmcgY29tbWFuZDogJHtKU09OLnN0cmluZ2lmeShrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZXIucnVuQXN5bmMoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSwgY29tbWFuZEVudmVsb3BlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2VybmVsID0gdGhpcy5fa2VybmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2VybmVsLnNlbmQoY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBrZXJuZWxJbmZvcyA9IFt0aGlzLl9rZXJuZWwua2VybmVsSW5mbywgLi4uQXJyYXkuZnJvbSh0aGlzLl9rZXJuZWwuY2hpbGRLZXJuZWxzLm1hcChrID0+IGsua2VybmVsSW5mbykuZmlsdGVyKGtpID0+IGtpLmlzUHJveHkgPT09IGZhbHNlKSldO1xyXG5cclxuICAgICAgICBjb25zdCBrZXJuZWtSZWFkeTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsUmVhZHkgPSB7XHJcbiAgICAgICAgICAgIGtlcm5lbEluZm9zOiBrZXJuZWxJbmZvc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZHNBbmRFdmVudHMuS2VybmVsUmVhZHlUeXBlLCBrZXJuZWtSZWFkeSk7XHJcbiAgICAgICAgZXZlbnQucm91dGluZ1NsaXAuc3RhbXAodGhpcy5fa2VybmVsLmtlcm5lbEluZm8udXJpISk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX2RlZmF1bHRDb25uZWN0b3Iuc2VuZGVyLnNlbmQoZXZlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4ga2VybmVrUmVhZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEtlcm5lbEluZm9zKCk6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9bXSB7XHJcbiAgICAgICAgbGV0IGtlcm5lbEluZm9zID0gW3RoaXMuX2tlcm5lbC5rZXJuZWxJbmZvXTtcclxuICAgICAgICBmb3IgKGxldCBrZXJuZWwgb2YgdGhpcy5fa2VybmVsLmNoaWxkS2VybmVscykge1xyXG4gICAgICAgICAgICBrZXJuZWxJbmZvcy5wdXNoKGtlcm5lbC5rZXJuZWxJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtlcm5lbEluZm9zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRLZXJuZWxJbmZvUHJvZHVjZWQoKTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZVtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlW10gPSBBcnJheS5mcm9tKHRoaXMuZ2V0S2VybmVsSW5mb3MoKS5tYXAoa2VybmVsSW5mbyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSwgPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZD57IGtlcm5lbEluZm86IGtlcm5lbEluZm8gfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnJvdXRpbmdTbGlwLnN0YW1wKGtlcm5lbEluZm8udXJpISk7XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9zaXRlS2VybmVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25uZWN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25zb2xlQ2FwdHVyZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tbWFuZHNBbmRFdmVudHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Rpc3Bvc2FibGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9rZXJuZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2tlcm5lbEhvc3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2tlcm5lbEludm9jYXRpb25Db250ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9rZXJuZWxTY2hlZHVsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2xvZ2dlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Byb3h5S2VybmVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9yb3V0aW5nc2xpcCc7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tIFwiLi9jb21tYW5kc0FuZEV2ZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aW9uIGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgQ29uc29sZUNhcHR1cmUgfSBmcm9tIFwiLi9jb25zb2xlQ2FwdHVyZVwiO1xyXG5pbXBvcnQgeyBLZXJuZWwsIElLZXJuZWxDb21tYW5kSW52b2NhdGlvbiB9IGZyb20gXCIuL2tlcm5lbFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0ICogYXMgcG9seWdsb3ROb3RlYm9va3NBcGkgZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSmF2YXNjcmlwdEtlcm5lbCBleHRlbmRzIEtlcm5lbCB7XHJcbiAgICBwcml2YXRlIHN1cHByZXNzZWRMb2NhbHM6IFNldDxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBjYXB0dXJlOiBDb25zb2xlQ2FwdHVyZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSA/PyBcImphdmFzY3JpcHRcIiwgXCJKYXZhU2NyaXB0XCIpO1xyXG4gICAgICAgIHRoaXMua2VybmVsSW5mby5kaXNwbGF5TmFtZSA9IGAke3RoaXMua2VybmVsSW5mby5sb2NhbE5hbWV9IC0gJHt0aGlzLmtlcm5lbEluZm8ubGFuZ3VhZ2VOYW1lfWA7XHJcbiAgICAgICAgdGhpcy5zdXBwcmVzc2VkTG9jYWxzID0gbmV3IFNldDxzdHJpbmc+KHRoaXMuYWxsTG9jYWxWYXJpYWJsZU5hbWVzKCkpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kSGFuZGxlcih7IGNvbW1hbmRUeXBlOiBjb21tYW5kc0FuZEV2ZW50cy5TdWJtaXRDb2RlVHlwZSwgaGFuZGxlOiBpbnZvY2F0aW9uID0+IHRoaXMuaGFuZGxlU3VibWl0Q29kZShpbnZvY2F0aW9uKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoeyBjb21tYW5kVHlwZTogY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdFZhbHVlSW5mb3NUeXBlLCBoYW5kbGU6IGludm9jYXRpb24gPT4gdGhpcy5oYW5kbGVSZXF1ZXN0VmFsdWVJbmZvcyhpbnZvY2F0aW9uKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoeyBjb21tYW5kVHlwZTogY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdFZhbHVlVHlwZSwgaGFuZGxlOiBpbnZvY2F0aW9uID0+IHRoaXMuaGFuZGxlUmVxdWVzdFZhbHVlKGludm9jYXRpb24pIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kSGFuZGxlcih7IGNvbW1hbmRUeXBlOiBjb21tYW5kc0FuZEV2ZW50cy5TZW5kVmFsdWVUeXBlLCBoYW5kbGU6IGludm9jYXRpb24gPT4gdGhpcy5oYW5kbGVTZW5kVmFsdWUoaW52b2NhdGlvbikgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdHVyZSA9IG5ldyBDb25zb2xlQ2FwdHVyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2VuZFZhbHVlKGludm9jYXRpb246IElLZXJuZWxDb21tYW5kSW52b2NhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHNlbmRWYWx1ZSA9IDxjb21tYW5kc0FuZEV2ZW50cy5TZW5kVmFsdWU+aW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZDtcclxuICAgICAgICBpZiAoc2VuZFZhbHVlLmZvcm1hdHRlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2VuZFZhbHVlLmZvcm1hdHRlZFZhbHVlLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9qc29uJzpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5nbG9iYWxUaGlzKVtzZW5kVmFsdWUubmFtZV0gPSBjb25uZWN0aW9uLkRlc2VyaWFsaXplKHNlbmRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pmdsb2JhbFRoaXMpW3NlbmRWYWx1ZS5uYW1lXSA9IHNlbmRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1hdHRlZFZhbHVlIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlU3VibWl0Q29kZShpbnZvY2F0aW9uOiBJS2VybmVsQ29tbWFuZEludm9jYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBzdWJtaXRDb2RlID0gPGNvbW1hbmRzQW5kRXZlbnRzLlN1Ym1pdENvZGU+aW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZDtcclxuICAgICAgICBjb25zdCBjb2RlID0gc3VibWl0Q29kZS5jb2RlO1xyXG5cclxuICAgICAgICBzdXBlci5rZXJuZWxJbmZvLmxvY2FsTmFtZTsvLz9cclxuICAgICAgICBzdXBlci5rZXJuZWxJbmZvLnVyaTsvLz9cclxuICAgICAgICBzdXBlci5rZXJuZWxJbmZvLnJlbW90ZVVyaTsvLz9cclxuICAgICAgICBjb25zdCBjb2RlU3VibWlzc2lvblJlY2VpdmVkRXZlbnQgPSBuZXcgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZShjb21tYW5kc0FuZEV2ZW50cy5Db2RlU3VibWlzc2lvblJlY2VpdmVkVHlwZSwgeyBjb2RlIH0sIGludm9jYXRpb24uY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICBpbnZvY2F0aW9uLmNvbnRleHQucHVibGlzaChjb2RlU3VibWlzc2lvblJlY2VpdmVkRXZlbnQpO1xyXG4gICAgICAgIGludm9jYXRpb24uY29udGV4dC5jb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXA7Ly8/XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlLmtlcm5lbEludm9jYXRpb25Db250ZXh0ID0gaW52b2NhdGlvbi5jb250ZXh0O1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgQXN5bmNGdW5jdGlvbiA9IGV2YWwoYE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpe30pLmNvbnN0cnVjdG9yYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2YWx1YXRvciA9IEFzeW5jRnVuY3Rpb24oXCJjb25zb2xlXCIsIFwicG9seWdsb3ROb3RlYm9va3NcIiwgY29kZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGV2YWx1YXRvcih0aGlzLmNhcHR1cmUsIHBvbHlnbG90Tm90ZWJvb2tzQXBpKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdFZhbHVlKHJlc3VsdCwgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50OiBjb21tYW5kc0FuZEV2ZW50cy5SZXR1cm5WYWx1ZVByb2R1Y2VkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlczogW2Zvcm1hdHRlZFZhbHVlXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlUHJvZHVjZWRFdmVudCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKGNvbW1hbmRzQW5kRXZlbnRzLlJldHVyblZhbHVlUHJvZHVjZWRUeXBlLCBldmVudCwgaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbi5jb250ZXh0LnB1Ymxpc2gocmV0dXJuVmFsdWVQcm9kdWNlZEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgZTsvLz9cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZS5rZXJuZWxJbnZvY2F0aW9uQ29udGV4dCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXF1ZXN0VmFsdWVJbmZvcyhpbnZvY2F0aW9uOiBJS2VybmVsQ29tbWFuZEludm9jYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZUluZm9zOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxWYWx1ZUluZm9bXSA9IHRoaXMuYWxsTG9jYWxWYXJpYWJsZU5hbWVzKCkuZmlsdGVyKHYgPT4gIXRoaXMuc3VwcHJlc3NlZExvY2Fscy5oYXModikpLm1hcCh2ID0+IChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdixcclxuICAgICAgICAgICAgICAgIHR5cGVOYW1lOiBnZXRUeXBlKHRoaXMuZ2V0TG9jYWxWYXJpYWJsZSh2KSksXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0VmFsdWUodGhpcy5nZXRMb2NhbFZhcmlhYmxlKHYpLCBcInRleHQvcGxhaW5cIiksXHJcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRNaW1lVHlwZXM6IFtdXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IGNvbW1hbmRzQW5kRXZlbnRzLlZhbHVlSW5mb3NQcm9kdWNlZCA9IHtcclxuICAgICAgICAgICAgdmFsdWVJbmZvc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlSW5mb3NQcm9kdWNlZEV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZHNBbmRFdmVudHMuVmFsdWVJbmZvc1Byb2R1Y2VkVHlwZSwgZXZlbnQsIGludm9jYXRpb24uY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICBpbnZvY2F0aW9uLmNvbnRleHQucHVibGlzaCh2YWx1ZUluZm9zUHJvZHVjZWRFdmVudCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUmVxdWVzdFZhbHVlKGludm9jYXRpb246IElLZXJuZWxDb21tYW5kSW52b2NhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RWYWx1ZSA9IDxjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0VmFsdWU+aW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZDtcclxuICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMuZ2V0TG9jYWxWYXJpYWJsZShyZXF1ZXN0VmFsdWUubmFtZSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXRWYWx1ZShyYXdWYWx1ZSwgcmVxdWVzdFZhbHVlLm1pbWVUeXBlIHx8ICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcmV0dXJuaW5nICR7SlNPTi5zdHJpbmdpZnkoZm9ybWF0dGVkVmFsdWUpfSBmb3IgJHtyZXF1ZXN0VmFsdWUubmFtZX1gKTtcclxuICAgICAgICBjb25zdCBldmVudDogY29tbWFuZHNBbmRFdmVudHMuVmFsdWVQcm9kdWNlZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogcmVxdWVzdFZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWVQcm9kdWNlZEV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZHNBbmRFdmVudHMuVmFsdWVQcm9kdWNlZFR5cGUsIGV2ZW50LCBpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgaW52b2NhdGlvbi5jb250ZXh0LnB1Ymxpc2godmFsdWVQcm9kdWNlZEV2ZW50KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsbExvY2FsVmFyaWFibGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGdsb2JhbFRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoPGFueT5nbG9iYWxUaGlzKVtrZXldICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmVycm9yKGBlcnJvciBnZXR0aW5nIHZhbHVlIGZvciAke2tleX0gOiAke2V9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmVycm9yKGBlcnJvciBzY2FubmluZyBnbG9ibGEgdmFyaWFibGVzIDogJHtlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9jYWxWYXJpYWJsZShuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAoPGFueT5nbG9iYWxUaGlzKVtuYW1lXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFZhbHVlKGFyZzogYW55LCBtaW1lVHlwZTogc3RyaW5nKTogY29tbWFuZHNBbmRFdmVudHMuRm9ybWF0dGVkVmFsdWUge1xyXG4gICAgbGV0IHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgc3dpdGNoIChtaW1lVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3RleHQvcGxhaW4nOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IGFyZz8udG9TdHJpbmcoKSB8fCAndW5kZWZpbmVkJztcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgWyR7dmFsdWV9XWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XHJcbiAgICAgICAgICAgIHZhbHVlID0gY29ubmVjdGlvbi5TZXJpYWxpemUoYXJnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBtaW1lIHR5cGU6ICR7bWltZVR5cGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtaW1lVHlwZSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBzdXBwcmVzc0Rpc3BsYXk6IGZhbHNlXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZShhcmc6IGFueSk6IHN0cmluZyB7XHJcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gYXJnID8gdHlwZW9mIChhcmcpIDogXCJcIjsvLz9cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XHJcbiAgICAgICAgdHlwZSA9IGAke3R5cGVvZiAoYXJnWzBdKX1bXWA7Ly8/XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZyA9PT0gSW5maW5pdHkgfHwgYXJnID09PSAtSW5maW5pdHkgfHwgKGFyZyAhPT0gYXJnKSkge1xyXG4gICAgICAgIHR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0eXBlOyAvLz9cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgQ29tcG9zaXRlS2VybmVsIH0gZnJvbSBcIi4uL2NvbXBvc2l0ZUtlcm5lbFwiO1xyXG5pbXBvcnQgeyBKYXZhc2NyaXB0S2VybmVsIH0gZnJvbSBcIi4uL2phdmFzY3JpcHRLZXJuZWxcIjtcclxuaW1wb3J0IHsgTG9nRW50cnksIExvZ2dlciB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgS2VybmVsSG9zdCB9IGZyb20gXCIuLi9rZXJuZWxIb3N0XCI7XHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi4vY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tIFwiLi4vY29tbWFuZHNBbmRFdmVudHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb3N0KFxyXG4gICAgZ2xvYmFsOiBhbnksXHJcbiAgICBjb21wb3NpdGVLZXJuZWxOYW1lOiBzdHJpbmcsXHJcbiAgICBjb25maWd1cmVSZXF1aXJlOiAoaW50ZXJhY3RpdmU6IGFueSkgPT4gdm9pZCxcclxuICAgIGxvZ01lc3NhZ2U6IChlbnRyeTogTG9nRW50cnkpID0+IHZvaWQsXHJcbiAgICBsb2NhbFRvUmVtb3RlOiByeGpzLk9ic2VydmVyPGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4sXHJcbiAgICByZW1vdGVUb0xvY2FsOiByeGpzLk9ic2VydmFibGU8Y29ubmVjdGlvbi5LZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPixcclxuICAgIG9uUmVhZHk6ICgpID0+IHZvaWQpIHtcclxuICAgIExvZ2dlci5jb25maWd1cmUoY29tcG9zaXRlS2VybmVsTmFtZSwgbG9nTWVzc2FnZSk7XHJcblxyXG4gICAgZ2xvYmFsLmludGVyYWN0aXZlID0ge307XHJcbiAgICBjb25maWd1cmVSZXF1aXJlKGdsb2JhbC5pbnRlcmFjdGl2ZSk7XHJcblxyXG4gICAgY29uc3QgY29tcG9zaXRlS2VybmVsID0gbmV3IENvbXBvc2l0ZUtlcm5lbChjb21wb3NpdGVLZXJuZWxOYW1lKTtcclxuICAgIGNvbnN0IGtlcm5lbEhvc3QgPSBuZXcgS2VybmVsSG9zdChjb21wb3NpdGVLZXJuZWwsIGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyLkZyb21PYnNlcnZlcihsb2NhbFRvUmVtb3RlKSwgY29ubmVjdGlvbi5LZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlci5Gcm9tT2JzZXJ2YWJsZShyZW1vdGVUb0xvY2FsKSwgYGtlcm5lbDovLyR7Y29tcG9zaXRlS2VybmVsTmFtZX1gKTtcclxuXHJcbiAgICBrZXJuZWxIb3N0LmRlZmF1bHRDb25uZWN0b3IucmVjZWl2ZXIuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAoZW52ZWxvcGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uaXNLZXJuZWxFdmVudEVudmVsb3BlKGVudmVsb3BlKSAmJiBlbnZlbG9wZS5ldmVudFR5cGUgPT09IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9Qcm9kdWNlZCA9IDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+ZW52ZWxvcGUuZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmVuc3VyZU9yVXBkYXRlUHJveHlGb3JLZXJuZWxJbmZvKGtlcm5lbEluZm9Qcm9kdWNlZC5rZXJuZWxJbmZvLCBjb21wb3NpdGVLZXJuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXNlIGNvbXBvc2l0ZSBrZXJuZWwgYXMgcm9vdFxyXG5cclxuICAgIGdsb2JhbC5rZXJuZWwgPSB7XHJcbiAgICAgICAgZ2V0IHJvb3QoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb3NpdGVLZXJuZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnbG9iYWxbY29tcG9zaXRlS2VybmVsTmFtZV0gPSB7XHJcbiAgICAgICAgY29tcG9zaXRlS2VybmVsLFxyXG4gICAgICAgIGtlcm5lbEhvc3QsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGpzS2VybmVsID0gbmV3IEphdmFzY3JpcHRLZXJuZWwoKTtcclxuICAgIGNvbXBvc2l0ZUtlcm5lbC5hZGQoanNLZXJuZWwsIFtcImpzXCJdKTtcclxuXHJcbiAgICBrZXJuZWxIb3N0LmNvbm5lY3QoKTtcclxuXHJcbiAgICBvblJlYWR5KCk7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIGZyb250RW5kSG9zdCBmcm9tICcuL2Zyb250RW5kSG9zdCc7XHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi4vY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEtlcm5lbEhvc3QgfSBmcm9tICcuLi9rZXJuZWxIb3N0JztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBLZXJuZWxJbmZvIH0gZnJvbSAnLi4vY29udHJhY3RzJztcclxuaW1wb3J0IHsgS2VybmVsQ29tbWFuZEVudmVsb3BlLCBLZXJuZWxFdmVudEVudmVsb3BlIH0gZnJvbSAnLi4vY29tbWFuZHNBbmRFdmVudHMnO1xyXG5cclxudHlwZSBLZXJuZWxNZXNzYWdpbmdBcGkgPSB7XHJcbiAgICBvbkRpZFJlY2VpdmVLZXJuZWxNZXNzYWdlOiAoYXJnOiBhbnkpID0+IGFueTtcclxuICAgIHBvc3RLZXJuZWxNZXNzYWdlOiAoZGF0YTogdW5rbm93bikgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShjb250ZXh0OiBLZXJuZWxNZXNzYWdpbmdBcGkpIHtcclxuICAgIGNvbmZpZ3VyZSh3aW5kb3csIGNvbnRleHQpO1xyXG4gICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgc2V0IHVwICd3ZWJ2aWV3JyBob3N0IG1vZHVsZSBjb21wbGV0ZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmUoZ2xvYmFsOiBhbnksIGNvbnRleHQ6IEtlcm5lbE1lc3NhZ2luZ0FwaSkge1xyXG4gICAgaWYgKCFnbG9iYWwpIHtcclxuICAgICAgICBnbG9iYWwgPSB3aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3RlVG9Mb2NhbCA9IG5ldyByeGpzLlN1YmplY3Q8Y29ubmVjdGlvbi5LZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPigpO1xyXG4gICAgY29uc3QgbG9jYWxUb1JlbW90ZSA9IG5ldyByeGpzLlN1YmplY3Q8Y29ubmVjdGlvbi5LZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPigpO1xyXG5cclxuICAgIGxvY2FsVG9SZW1vdGUuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiBlbnZlbG9wZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudmVsb3BlSnNvbiA9IGVudmVsb3BlLnRvSnNvbigpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnBvc3RLZXJuZWxNZXNzYWdlKHsgZW52ZWxvcGU6IGVudmVsb3BlSnNvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB3ZWJWaWV3SWQgPSB1dWlkKCk7XHJcbiAgICBjb250ZXh0Lm9uRGlkUmVjZWl2ZUtlcm5lbE1lc3NhZ2UoKGFyZzogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGFyZy5lbnZlbG9wZSAmJiBhcmcud2ViVmlld0lkID09PSB3ZWJWaWV3SWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZW52ZWxvcGUgPSA8Y29ubmVjdGlvbi5LZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlTW9kZWw+PGFueT4oYXJnLmVudmVsb3BlKTtcclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uaXNLZXJuZWxFdmVudEVudmVsb3BlTW9kZWwoZW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBjaGFubmVsIGdvdCAke2VudmVsb3BlLmV2ZW50VHlwZX0gd2l0aCB0b2tlbiAke2VudmVsb3BlLmNvbW1hbmQ/LnRva2VufSBhbmQgaWQgJHtlbnZlbG9wZS5jb21tYW5kPy5pZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gS2VybmVsRXZlbnRFbnZlbG9wZS5mcm9tSnNvbihlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdGVUb0xvY2FsLm5leHQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IEtlcm5lbENvbW1hbmRFbnZlbG9wZS5mcm9tSnNvbihlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdGVUb0xvY2FsLm5leHQoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmcud2ViVmlld0lkID09PSB3ZWJWaWV3SWQpIHtcclxuICAgICAgICAgICAgY29uc3Qga2VybmVsSG9zdCA9ICg8S2VybmVsSG9zdD4oZ2xvYmFsWyd3ZWJ2aWV3J10ua2VybmVsSG9zdCkpO1xyXG4gICAgICAgICAgICBpZiAoa2VybmVsSG9zdCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcmcucHJlbG9hZENvbW1hbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICcjIWNvbm5lY3QnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGNvbm5lY3RpbmcgdG8ga2VybmVscyBmcm9tIGV4dGVuc2lvbiBob3N0YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9zID0gPEtlcm5lbEluZm9bXT4oYXJnLmtlcm5lbEluZm9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXJuZWxJbmZvIG9mIGtlcm5lbEluZm9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVVcmkgPSBrZXJuZWxJbmZvLmlzUHJveHkgPyBrZXJuZWxJbmZvLnJlbW90ZVVyaSEgOiBrZXJuZWxJbmZvLnVyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2VybmVsSG9zdC50cnlHZXRDb25uZWN0b3IocmVtb3RlVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlcm5lbEhvc3QuZGVmYXVsdENvbm5lY3Rvci5hZGRSZW1vdGVIb3N0VXJpKHJlbW90ZVVyaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmVuc3VyZU9yVXBkYXRlUHJveHlGb3JLZXJuZWxJbmZvKGtlcm5lbEluZm8sIGtlcm5lbEhvc3Qua2VybmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZyb250RW5kSG9zdC5jcmVhdGVIb3N0KFxyXG4gICAgICAgIGdsb2JhbCxcclxuICAgICAgICAnd2VidmlldycsXHJcbiAgICAgICAgY29uZmlndXJlUmVxdWlyZSxcclxuICAgICAgICBlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQucG9zdEtlcm5lbE1lc3NhZ2UoeyBsb2dFbnRyeTogZW50cnkgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhbFRvUmVtb3RlLFxyXG4gICAgICAgIHJlbW90ZVRvTG9jYWwsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXJuZWxJbmZvcyA9ICg8S2VybmVsSG9zdD4oZ2xvYmFsWyd3ZWJ2aWV3J10ua2VybmVsSG9zdCkpLmdldEtlcm5lbEluZm9zKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvc3RVcmkgPSAoPEtlcm5lbEhvc3Q+KGdsb2JhbFsnd2VidmlldyddLmtlcm5lbEhvc3QpKS51cmk7XHJcbiAgICAgICAgICAgIGNvbnRleHQucG9zdEtlcm5lbE1lc3NhZ2UoeyBwcmVsb2FkQ29tbWFuZDogJyMhY29ubmVjdCcsIGtlcm5lbEluZm9zLCBob3N0VXJpLCB3ZWJWaWV3SWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlUmVxdWlyZShpbnRlcmFjdGl2ZTogYW55KSB7XHJcbiAgICBpZiAoKHR5cGVvZiAocmVxdWlyZSkgIT09IHR5cGVvZiAoRnVuY3Rpb24pKSB8fCAodHlwZW9mICgoPGFueT5yZXF1aXJlKS5jb25maWcpICE9PSB0eXBlb2YgKEZ1bmN0aW9uKSkpIHtcclxuICAgICAgICBsZXQgcmVxdWlyZV9zY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICByZXF1aXJlX3NjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZXF1aXJlLmpzLzIuMy42L3JlcXVpcmUubWluLmpzJyk7XHJcbiAgICAgICAgcmVxdWlyZV9zY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xyXG4gICAgICAgIHJlcXVpcmVfc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmUuY29uZmlndXJlUmVxdWlyZSA9IChjb25maW5nOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGFueT5yZXF1aXJlKS5jb25maWcoY29uZmluZykgfHwgcmVxdWlyZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHJlcXVpcmVfc2NyaXB0KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGludGVyYWN0aXZlLmNvbmZpZ3VyZVJlcXVpcmUgPSAoY29uZmluZzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGFueT5yZXF1aXJlKS5jb25maWcoY29uZmluZykgfHwgcmVxdWlyZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1dWlkLnBhcnNlIiwidXVpZC52NCIsIlN5bWJvbF9vYnNlcnZhYmxlIiwicnhqcy5TdWJqZWN0IiwiY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSIsImNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRTdWNjZWVkZWRUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZFR5cGUiLCJyb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkiLCJjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0S2VybmVsSW5mb1R5cGUiLCJjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlIiwicnhqcy5tYXAiLCJjb25uZWN0aW9uLlNlcmlhbGl6ZSIsImNvbW1hbmRzQW5kRXZlbnRzLkRpc3BsYXllZFZhbHVlUHJvZHVjZWRUeXBlIiwiY29ubmVjdGlvbi51cGRhdGVLZXJuZWxJbmZvIiwiY29ubmVjdGlvbi5pc0tlcm5lbEV2ZW50RW52ZWxvcGUiLCJyb3V0aW5nU2xpcC5jcmVhdGVLZXJuZWxVcmkiLCJjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0SW5wdXRUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuU2VuZEVkaXRhYmxlQ29kZVR5cGUiLCJjb25uZWN0aW9uLkNvbm5lY3RvciIsImNvbm5lY3Rpb24uaXNLZXJuZWxDb21tYW5kRW52ZWxvcGUiLCJjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxSZWFkeVR5cGUiLCJjb21tYW5kc0FuZEV2ZW50cy5TdWJtaXRDb2RlVHlwZSIsImNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RWYWx1ZUluZm9zVHlwZSIsImNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RWYWx1ZVR5cGUiLCJjb21tYW5kc0FuZEV2ZW50cy5TZW5kVmFsdWVUeXBlIiwiY29ubmVjdGlvbi5EZXNlcmlhbGl6ZSIsImNvbW1hbmRzQW5kRXZlbnRzLkNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuUmV0dXJuVmFsdWVQcm9kdWNlZFR5cGUiLCJjb21tYW5kc0FuZEV2ZW50cy5WYWx1ZUluZm9zUHJvZHVjZWRUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuVmFsdWVQcm9kdWNlZFR5cGUiLCJjb25uZWN0aW9uLktlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciIsImNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIiLCJjb25uZWN0aW9uLmVuc3VyZU9yVXBkYXRlUHJveHlGb3JLZXJuZWxJbmZvIiwidXVpZCIsImNvbm5lY3Rpb24uaXNLZXJuZWxFdmVudEVudmVsb3BlTW9kZWwiLCJmcm9udEVuZEhvc3QuY3JlYXRlSG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLGtFQUFrRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDhEQUE4RCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMElBQTBJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywySEFBMkgsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLDZCQUE2QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRzs7QUNBdnFYO0FBUU0sU0FBVSxlQUFlLENBQUMsU0FBaUIsRUFBQTtJQUU3QyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLElBQUEsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUNkLElBQUEsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNULElBQUEsSUFBSSxXQUFXLEdBQUcsQ0FBQSxFQUFHLEdBQUcsQ0FBQyxNQUFNLENBQU0sR0FBQSxFQUFBLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN2RSxPQUFPLFdBQVcsQ0FBQztBQUN2QixDQUFDO0FBRUssU0FBVSx3QkFBd0IsQ0FBQyxTQUFpQixFQUFBO0lBRXRELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBQSxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQ2QsSUFBQSxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ1QsSUFBQSxJQUFJLFdBQVcsR0FBRyxDQUFBLEVBQUcsR0FBRyxD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QyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ3pnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3ZCLElBQUksTUFBTSxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNuRCxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2Q7O0FDekJBLFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRTtBQUNyQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdkIsSUFBSSxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1IsRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvQjtBQUNBLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdkQsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDM0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDMUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkQsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNwQjtBQUNBO0FBQ0EsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDMUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDbkMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDNUIsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDNUIsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDM0IsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNyQixFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ2I7O0FDN0JBLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ2xDLEVBQUUsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDMUIsRUFBRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxJ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
