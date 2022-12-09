async function Hi(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log(`Hi ${name}`);
            resolve(name);
            // reject('Error');
        },1000);
    });
}

async function talk(name){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('bla bla bla..');
            resolve(name);
        },1000);
    })
}

async function Bye(name){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(`Bye ${name}`);
            resolve();
        },1000)
    })
}

async function main(){
    let name = await Hi('Jesus');
    await talk();
    await talk();
    await Bye(name)
    console.log('Finishing')
}

console.log('Starting')
main()