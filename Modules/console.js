console.log('Hola')
console.info('Hola')
console.error('error')
console.warn('warning')

var tabla =[
    {
        a:1,
        b: 'z'
    },
    {
        a:2,
        b:'y'
    }
]

console.table(tabla)

console.group('conversacion:')
console.log('Hola')
console.log('bla bla bla')
console.log('Adios')
console.groupEnd('conversacion:')


function function1(){
    console.group('fun1');
    console.log('This is the function 1')
    console.log('This is also the function 1')
    console.log('This is alsoooo the function 1')
    function2()
    console.log('now back to the function 1')
    console.groupEnd('fun1');
}

function function2() {
    console.group('fun2');
    console.log('now we are in function 2');
    console.groupEnd('fun2');
}

function1();

// contador

console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.countReset('times')
console.count('times')


console.time()
console.timeEnd()