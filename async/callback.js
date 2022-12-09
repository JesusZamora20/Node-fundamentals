function Hi(name,callback){
    setTimeout(()=> {
        console.log(`Hi ${name}`);
        callback(name);
    },1000)
}

function Bye(name,callback){
    setTimeout(()=>{
        console.log(`Bye ${name}`);
        callback();
    },1000)
}

console.log('Starting process');
Hi('Juana',(name)=>{
    Bye(name,()=>{
        console.log('Ending Process');
    })
});