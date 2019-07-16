// requires

//const fs = require('fs');
//const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 'ABC';

//console.log(process.argv);
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${ i } = ${base * i}\n`;
// }


// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ha sido creado`);
// });



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(err => console.log(err));


//recibir argumentos de consola
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}

//let argv = process.argv;

//let parametro = argv[2];

//let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log('Limite', argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(err => console.log(err));