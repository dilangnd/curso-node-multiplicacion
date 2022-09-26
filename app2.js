const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe:'Base de la multiplicacion'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe:'Muestra en pantalla la tabla a imprimir'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: 'false',
                        default: 10,
                        describe:'hasta que dígito se hace la multiplicacion'
                    })
                    .check((argv, options,) => {
                        if (isNaN(argv.base)) {
                            throw 'La base debe ser numérica';
                        }
                        if (argv.hasta<1) {
                            throw 'Las iteraciones deben ser mayor o igual a 1'
                        }

                        return true;
                    })
                    .argv;

console.clear();

console.log(argv);
// console.log(process.argv) deprecated

// const base = 6;

//comandos:
// node app2 --version
// node app2 --help

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then((nombreArchivo) => console.log(nombreArchivo,'creado'))
    .catch((err) => console.log(err));