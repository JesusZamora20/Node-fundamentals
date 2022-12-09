function Hi(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log(`Hi ${name}`);
            // resolve(name);
            reject('Error');
        },1000);
    });
        
}

function talk(name){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('bla bla bla..');
            resolve(name);
        },1000);
    })
}

function Bye(name){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(`Bye ${name}`);
            resolve();
        },1000)
    })
}

//-- excecution

console.log('Starting Process')
Hi('Jesus')
    .then(talk)
    .then(talk)
    .then(talk)
    .then(Bye)
    .then((nombre)=>{
        console.log('process finished')
    })
    .catch(error => {
        console.error(error);
    })