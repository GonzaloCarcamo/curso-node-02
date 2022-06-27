import colors from 'colors';
import { inquirerMenu, pausa } from './helpers/inquirer.js';

const main = async () => {
    
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        console.log('\n');

        await pausa();
        
    } while ( opt !== 0 );
}

main();