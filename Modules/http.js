const http = require('http');

function router (req, res){
    console.log('new request');
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write('Hey whats up');
            res.end();
            break;
        
        default:
            res.write('Error 404: idk what are you looking for')
            res.end();
    }

    // res.writeHead(201, {'Content-Type': 'Text/plain'})
    // //answer to the user
    // res.write('HI, im using http from Nodejs');

    // res.end();
};

http.createServer(router).listen(3000,(err)=>{
    if(err){
        console.info('could not establish a connection to the server');
        console.error(err.message);
    }
    console.info(`> Ready on port 3000`);
});

console.log('Listening nodejs on port 3000');