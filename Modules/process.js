process.on('beforeExit',()=>{
    console.log('Process going to end')
})


process.on('exit',()=>{
    console.log('Process finished')
    setTimeout(()=>{
        console.log('invisible');
    },0)
})

setTimeout(()=>{
    console.log('visible');
},0)

process.on('uncaughtException',(err, origen)=>{
    console.error('i forgot to capture this error')
    // console.error(err);
    setTimeout(()=>{
        console.log('this come from exception');
    },0)
})

funcion();

console.log('');