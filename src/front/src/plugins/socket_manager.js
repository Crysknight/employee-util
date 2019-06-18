import { KeyedSet } from 'shared/utils';
import { SOCKET_ADDRESS } from 'constants';

class EUSocketManager {
    constructor(address) {
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.delayedSend = this.delayedSend.bind(this);
        this.tryReconnect = this.tryReconnect.bind(this);

        this.address = address;

        this.isOpened = false;
        this.messageBuffer = new Set();
        this.listenersBuffer = {};
        this.timeout = null;

        this.socket = new WebSocket(address);
        this.setEvents();
    }

    setEvents() {
        this.addEventListener('open', this.handleOpen);
        this.addEventListener('close', this.handleClose);
    }

    getMessageHandler(func) {
        return ({ data: message }) => {
            let messageObj;
            try {
                messageObj = JSON.parse(message);
            } catch (_error) {}

            if (!messageObj) {
                func(message);
                return;
            }

            func(messageObj);
        };
    }

    resetEvents() {
        Object.keys(this.listenersBuffer).forEach(eventName => {
            const functions = this.listenersBuffer[eventName];
            functions.forEach(funcObj => {
                this.socket.addEventListener(
                    eventName,
                    (funcObj.decoratedFunc || funcObj.func)
                );
            });
        });
    }

    handleOpen() {
        this.isOpened = true;
        this.timeout = null;
    }

    handleClose() {
        this.isOpened = false;
        this.socket = null;

        this.timeout = setTimeout(this.tryReconnect, 10000);
    }

    addEventListener(eventName, func) {
        const funcObj = {
            func,
            decoratedFunc: null
        };

        if (eventName === 'message') {
            funcObj.decoratedFunc = this.getMessageHandler(func);
        }

        if (!this.listenersBuffer[eventName]) {
            this.listenersBuffer[eventName] = new KeyedSet('func');
        }

        this.listenersBuffer[eventName].add(funcObj);

        if (this.socket) {
            this.socket.addEventListener(
                eventName,
                (funcObj.decoratedFunc || funcObj.func)
            );
        }
    }

    removeEventListener(eventName, func) {
        const eventBuffer = this.listenersBuffer[eventName];
        if (eventBuffer) {
            const funcObj = eventBuffer.find(func);

            if (this.socket) {
                this.socket.removeEventListener(
                    eventName,
                    (funcObj.decoratedFunc || funcObj.func)
                );
            }

            eventBuffer.delete(funcObj);
        }
    }

    delayedSend() {
        this.messageBuffer.forEach(message => {
            this.send(message);
        });

        this.messageBuffer = new Set();

        this.removeEventListener('open', this.delayedSend);
    }

    tryReconnect() {
        this.socket = new WebSocket(this.address);
        this.resetEvents();
    }

    send(message) {
        if (this.isOpened) {
            this.socket.send(message);
        } else {
            this.messageBuffer.add(message);
            this.addEventListener('open', this.delayedSend);
        }
    }

    close(...args) {
        this.socket.close(...args);
    }
}

const socket = new EUSocketManager(SOCKET_ADDRESS);

window.$socket = socket;

export default socket;
