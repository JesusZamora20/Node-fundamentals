const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf-8');
//stream de lectura
readableStream.on('data', (chunk)=>{
    data += chunk;
    console.log(chunk)
});

//stream terminado
readableStream.on('end',()=>{
    // console.log(data)
})

//stream de escritura
// process.stdout.write('Hola ');
// process.stdout.write('Como ');
// process.stdout.write('Estas ');

//buffer de transformacion
const transform = stream.Transform;

class Mayus extends stream.Transform{
    constructor(){
        super()
    }

    _transform(chunk, codif, callback){
        let chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        callback();
    }
}


let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);