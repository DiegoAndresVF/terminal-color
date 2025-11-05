
// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
/* console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.')); */


function simularError() {
  console.warn(chalk.yellow('⚠️ Advertencia: Algo podría salir mal...'));
  console.error(chalk.red('❌ Error: Se produjo un fallo en la operación.'));
  console.info(chalk.green('✅ Recuperado: El sistema se ha recuperado correctamente.'));
}

// Prueba de función

function mostrarEstado(estado) {
    switch(estado) {
        case "inicio":
            console.log(chalk.blue('👋Iniciaste el programa!'));           
             break;
        case "proceso":
        simularError();
            console.log(chalk.grey('⏰ Ejecutanding...'));
            break;
        case "final":
            console.log(chalk.magenta('💡 Listo! terminamos :D'));
            break;
        default:
            console.log(chalk.cyan(`Jjajaj te equivocaste! Opcion invalida 👨‍🦽 `));
}
    }


mostrarEstado("inicio")
mostrarEstado("proceso")
mostrarEstado("final")
mostrarEstado("asdf")
