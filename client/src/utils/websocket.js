import io from 'socket.io-client';
export function createSocket () {
    const socket = io.connect('http://127.0.0.1:8082');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
    return socket;
}