const WebSocketServer = require('ws').Server;
const WSS =  new WebSocketServer({port: 4444});
const util = require('util');

WSS.on('connection', ws=>{

    ws.on('message', message=>{

        if(message === 'close'){
            ws.close();
        }else{
            WSS.clients.forEach( client=>{
                client.send(message);
            });
            util.log(message);
        }
        
    });

    util.log('Connected successfully...')
});


