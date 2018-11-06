const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', {
                base: {
                    demand:true,
                    alias:'b'
                },
                limite:{
                    alias: 'l',
                    default: 50
                }
            })
            .help()
            .argv;

const { crearArchivo } = require('./multiplicar/multiplicar.js')

//let parametro = argv[2];
// console.log(parametro);
// let base = parametro.split('=')[1];

//console.log(argv);
console.log(argv.limite);

// crearArchivo(base)
// .then( archivo => console.log(`Archivo creado ${archivo}`))
// .catch( err => console.log(err));