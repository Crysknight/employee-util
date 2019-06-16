import { SOCKET_ADDRESS } from 'constants';

class EUSocketManager {
    constructor(address) {
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.delayedSend = this.delayedSend.bind(this);
        this.readdEventListeners = this.readdEventListeners.bind(this);
        this.tryReconnect = this.tryReconnect.bind(this);

        this.address = address;

        this.isOpened = false;
        this.messageBuffer = [];
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
            }

            func(messageObj);
        };
    }

    resetEvents() {
        Object.keys(this.listenersBuffer).forEach(eventName => {
            const functions = this.listenersBuffer[eventName];
            functions.forEach(func => {
                if (eventName === 'message') {
                    this.socket.addEventListener(eventName, this.getMessageHandler(func));
                } else {
                    this.socket.addEventListener(eventName, func);
                }
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
        if (!this.listenersBuffer[eventName]) {
            this.listenersBuffer[eventName] = new Set();
        }
        this.listenersBuffer[eventName].add(func);

        if (this.socket) {
            if (eventName === 'message') {
                this.socket.addEventListener(eventName, this.getMessageHandler(func));
            } else {
                this.socket.addEventListener(eventName, func);
            }
        }
    }

    delayedSend() {
        this.messageBuffer.forEach(messagePack => {
            this.send(...messagePack);
        });

        this.messageBuffer = [];

        this.socket.removeEventListener('open', this.delayedSend);
    }

    readdEventListeners() {
        this.listenersBuffer.forEach(listenerPack => {
            this.socket.addEventListener(...listenerPack);
        });
    }

    tryReconnect() {
        this.socket = new WebSocket(this.address);
        this.resetEvents();
    }

    send(...args) {
        if (this.isOpened) {
            this.socket.send(...args);
        } else {
            this.messageBuffer.push(args);
            this.socket.addEventListener('open', this.delayedSend);
        }
    }

    close(...args) {
        this.socket.close(...args);
    }
}

const socket = new EUSocketManager(SOCKET_ADDRESS);

window.$socket = socket;

export default socket;
