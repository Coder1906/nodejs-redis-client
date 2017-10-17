import {createSocket} from './websocket';
export default {
    install (Vue, option) {
        Vue.prototype.socket = createSocket();
    }
}