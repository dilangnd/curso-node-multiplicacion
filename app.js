const fs = require('fs')

console.clear();
let base =5 
console.log('======================================')
console.log('============= Tabla del '+base+' =============')
console.log('======================================')

let salida ='';


for (let j = 1; j <= 10; j++) {

    for (let i = 1; i <= 10; i++) {
        console.log(j+' x '+i+' = '+(j*i))
        salida += `${j} x ${i} = ${j*i} \n`
    }

    fs.writeFile(`tabla-del-${j}.txt`,salida,(err) => {
        console.log(err)
        console.log('Error al escribir en archivo')
    })

    salida='';
}

