function Hi(name,callback){
    setTimeout(()=> {
        console.log(`Hi ${name}`);
        callback(name);
    },1000)
}

function talk(callback){
    setTimeout(()=>{
        console.log('bla bla bla..');
        callback();
    },1000);
}

function conversation(name, times, callback){
    if(times > 0){
        talk(()=>{
            conversation(name, --times, callback);
        })
    } else{
        Bye(name,callback);
    }
}

function Bye(name,callback){
    setTimeout(()=>{
        console.log(`Bye ${name}`);
        callback();
    },1000)
}

console.log('Starting process');
Hi('Jesus', (name)=>{
    conversation(name, 3, ()=>{
        console.log('finish');
    });
})
// Hi('Juana',(name)=>{
//     talk(()=>{
//         talk(()=>{
//             Bye(name,()=>{
//                 console.log('Ending Process');
//             })
//         })
//     })
// });