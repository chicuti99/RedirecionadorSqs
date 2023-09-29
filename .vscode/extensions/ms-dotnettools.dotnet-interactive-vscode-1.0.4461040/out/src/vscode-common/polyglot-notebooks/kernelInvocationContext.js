"use strict";
// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.areCommandsTheSame = exports.KernelInvocationContext = void 0;
const rxjs = require("rxjs");
const commandsAndEvents = require("./commandsAndEvents");
const kernel_1 = require("./kernel");
const promiseCompletionSource_1 = require("./promiseCompletionSource");
const tokenGenerator_1 = require("./tokenGenerator");
class KernelInvocationContext {
    constructor(kernelCommandInvocation) {
        this._childCommands = [];
        this._eventSubject = new rxjs.Subject();
        this._isComplete = false;
        this._handlingKernel = null;
        this.completionSource = new promiseCompletionSource_1.PromiseCompletionSource();
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
            let eventEnvelope = new commandsAndEvents.KernelEventEnvelope(commandsAndEvents.CommandSucceededType, succeeded, this._commandEnvelope);
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
        let eventEnvelope = new commandsAndEvents.KernelEventEnvelope(commandsAndEvents.CommandFailedType, failed, this._commandEnvelope);
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
            const kernelUri = (0, kernel_1.getKernelUri)(this.handlingKernel);
            if (!kernelEvent.routingSlip.contains(kernelUri)) {
                kernelEvent.routingSlip.stamp(kernelUri);
                kernelEvent.routingSlip; //?
            }
            else {
                "should not be here"; //?
            }
        }
        else {
            kernelEvent; //?
        }
        this._commandEnvelope; //?
        if (command === null ||
            command === undefined ||
            areCommandsTheSame(command, this._commandEnvelope) ||
            this._childCommands.includes(command)) {
            this._eventSubject.next(kernelEvent);
        }
        else if ((0, tokenGenerator_1.isSelforDescendantOf)(command, this._commandEnvelope)) {
            this._eventSubject.next(kernelEvent);
        }
        else if ((0, tokenGenerator_1.hasSameRootCommandAs)(command, this._commandEnvelope)) {
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
exports.KernelInvocationContext = KernelInvocationContext;
KernelInvocationContext._current = null;
function areCommandsTheSame(envelope1, envelope2) {
    envelope1; //?
    envelope2; //?
    envelope1 === envelope2; //?
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
exports.areCommandsTheSame = areCommandsTheSame;
//# sourceMappingURL=kernelInvocationContext.js.map