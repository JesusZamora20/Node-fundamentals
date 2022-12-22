const { resourceLimits } = require("worker_threads");

console.time('todo')
let suma = 0;
console.time('bucle')
for (let i =0;i<100000000;i++){
    suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2')

for (let j =0;j<1000000000;j++){
    suma2 += 1;
}

console.timeEnd('bucle2');
console.time('async');
console.log('Empieza el proceso asinc');

asincrona()
    .then(()=>{
        console.timeEnd('async');
    })
console.timeEnd('todo')

function asincrona(){
    return new Promise((resolve) =>{
        console.log('Termina el proceso asincrono');
        resolve();
    })
}