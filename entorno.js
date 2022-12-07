//acceder al proceso
let saludo = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'Sin web';
//para definir las variables en la terminal
//$env:VARIABLE="value"

console.log('Hola ' + saludo)
console.log('Mi web es ' + web)