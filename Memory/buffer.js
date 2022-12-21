let buffer = Buffer.alloc(4);
// let bufer = Buffer.alloc(4);
// let bufer = Buffer.from([1,2,3]);
let bufer = Buffer.from('Hola');

// console.log(bufer.toString());/

//- making an alphabet

let abc = Buffer.alloc(26);

for(let i= 0; i < 26 ; i++){
    abc[i] = i+97;
}
console.log(abc.toString());
