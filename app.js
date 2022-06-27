import colors from 'colors';
import { inquirerMenu, pausa } from './helpers/inquirer.js';
import Tareas from  './models/tareas.js'

const main = async () => {
    
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        console.log('\n');

/*         const tareas = new Tareas();
        const tarea = new Tarea('Comer Comida');
        tareas._listado[tarea.id] = tarea;
        console.log(tareas); */

        await pausa();
        
    } while ( opt !== 0 );
}

main();