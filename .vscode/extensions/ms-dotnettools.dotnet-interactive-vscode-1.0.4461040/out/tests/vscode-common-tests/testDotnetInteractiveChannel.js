"use strict";
// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDotnetInteractiveChannel = void 0;
const polyglot_notebooks_1 = require("../../src/vscode-common/polyglot-notebooks");
const commandsAndEvents = require("../../src/vscode-common/polyglot-notebooks/commandsAndEvents");
const rxjs = require("rxjs");
// Replays all events given to it
class TestDotnetInteractiveChannel {
    constructor(fakedEventEnvelopes) {
        this.fakedEventEnvelopes = fakedEventEnvelopes;
        this.fakedCommandCounter = new Map();
        this._senderSubject = new rxjs.Subject();
        this._receiverSubject = new rxjs.Subject();
        this.sender = polyglot_notebooks_1.KernelCommandAndEventSender.FromObserver(this._senderSubject);
        this.receiver = polyglot_notebooks_1.KernelCommandAndEventReceiver.FromObservable(this._receiverSubject);
        this._senderSubject.subscribe({
            next: (envelope) => {
                if ((0, polyglot_notebooks_1.isKernelCommandEnvelope)(envelope)) {
                    this.submitCommand(envelope);
                }
            }
        });
    }
    submitCommand(commandEnvelope) {
        // find bare fake command events
        let eventEnvelopesToReturn = this.fakedEventEnvelopes[commandEnvelope.commandType];
        if (!eventEnvelopesToReturn) {
            // check for numbered variants
            let counter = this.fakedCommandCounter.get(commandEnvelope.commandType);
            if (!counter) {
                // first encounter
                counter = 1;
            }
            // and increment for next time
            this.fakedCommandCounter.set(commandEnvelope.commandType, counter + 1);
            eventEnvelopesToReturn = this.fakedEventEnvelopes[`${commandEnvelope.commandType}#${counter}`];
            if (!eventEnvelopesToReturn) {
                // couldn't find numbered event names
                throw new Error(`Unable to find events for command '${commandEnvelope.commandType}'.`);
            }
        }
        for (let envelope of eventEnvelopesToReturn) {
            const event = new commandsAndEvents.KernelEventEnvelope(envelope.eventType, envelope.event, commandEnvelope);
            this._receiverSubject.next(event);
        }
    }
    waitForReady() {
        return Promise.resolve({ kernelInfos: [] });
    }
    dispose() {
        // noop
    }
}
exports.TestDotnetInteractiveChannel = TestDotnetInteractiveChannel;
//# sourceMappingURL=testDotnetInteractiveChannel.js.map