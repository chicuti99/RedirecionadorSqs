"use strict";
// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootToken = exports.hasSameRootCommandAs = exports.isSelforDescendantOf = void 0;
function isSelforDescendantOf(thisCommand, otherCommand) {
    const otherToken = otherCommand.getOrCreateToken();
    const thisToken = thisCommand.getOrCreateToken();
    if (thisToken && otherToken) {
        return thisToken.startsWith(otherToken);
    }
    throw new Error('both commands must have tokens');
}
exports.isSelforDescendantOf = isSelforDescendantOf;
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
exports.hasSameRootCommandAs = hasSameRootCommandAs;
function getRootToken(token) {
    const parts = token.split('.');
    return parts[0];
}
exports.getRootToken = getRootToken;
//# sourceMappingURL=tokenGenerator.js.map