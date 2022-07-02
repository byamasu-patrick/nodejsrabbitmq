const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, connection) => {
    if(err){
        throw err;
    }
    connection.createChannel((error, channel) => {
        if(error){
            throw error;
        }
        const QUEUE = 'testqueue';
        channel.assertQueue(QUEUE)
      
        channel.consume(QUEUE, (msg) => {
            console.log(msg.content.toString());
        }, {
            noAck: true
        });
    });
});