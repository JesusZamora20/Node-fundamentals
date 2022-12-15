const { CONNREFUSED } = require('dns');
const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);

// console.log(os.constants);

const size = 1024;
function kb (bytes){return bytes/size;}
function mb (bytes){return kb(bytes)/size;}
function gb (bytes){return mb(bytes)/size;}

//cuanta memoria queda RAM
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));


// cuanto es la memoria total RAM
console.log(gb(os.totalmem()));

//mostrar el home
console.log(os.homedir())
//mostrar directorio de archivos temporales
console.log(os.tmpdir())

console.log(os.hostname());

//interfaces de red activas en la maquina
console.log(os.networkInterfaces())



