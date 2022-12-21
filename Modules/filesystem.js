//file system allow us to access files in order to C.R.U.D them
const fs = require('fs');

//reading a file
function read(path,callback){
    fs.readFile(path, (error, data)=>{
        callback(data.toString());
    })
}

// read(__dirname + '/file.txt',console.log)


//writing a file
function write(path,content, callback){
    fs.writeFile(path, content, (error)=>{
        if(error){
            console.log('File cannot be edited ,', error);
        } else {
            console.log('text edited successfully')
        }
    })
}

// write(__dirname + '/file1.txt','Im a new file',console.log);

function killFile(path, callback){
    fs.unlink(path, callback )
}

killFile(__dirname + '/file1.txt',console.log)
