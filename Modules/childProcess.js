const {exec, spawn} = require('child_process');
// const exec = require('child_process').exec  <= the same as up

exec('node Modules/console.js',(err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout)
}) 

let process = spawn('dir')