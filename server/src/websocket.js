/**
 * Date: 2017/10/16
 * Author: Zn
 * Email: 312073339@qq.com
 */
import socketIo from 'socket.io';
import redis from 'lib/redis';

export function webSocketServer(server){
    const io = new socketIo(server);
    io.use ( (socket, next) => {
        const query = socket.query;
        console.log(query);
        next();
    }) 
    io.on('connection', socket => {
        socket.on('disconnect', () => {

        })
    })
};