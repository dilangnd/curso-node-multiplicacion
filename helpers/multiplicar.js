const fs = require('fs')

const crearArchivo = async (base=5, listar=false, hasta=10) => {

    try {
        console.log('======================================')
        console.log('============= Tabla del '+base+' =============')
        console.log('======================================')

        let salida= '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`
        }

        (listar)
            ? console.log(salida)
            : console.log('\n')

        fs.writeFileSync(`tabla-${base}.txt`,salida);

        return `./salida/tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

    
}

module.exports = {
    crearArchivo
}