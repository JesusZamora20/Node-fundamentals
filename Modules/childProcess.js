const {exec, spawn} = require('child_process');
// const exec = require('child_process').exec  <= the same as up

// exec('node Modules/console',(err, stdout, sterr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout)
// }) 

let process = spawn('ls',['-al']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (dato)=>{
    console.log('process dead?')
    console.log(process.killed)
    console.log(dato.toString())
});

process.on('exit', () =>{
    console.log('process finished')
    console.log(process.killed);
})