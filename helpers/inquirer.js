import colors from 'colors';
import inquirer from 'inquirer';

const preguntas = [
    {
        type: 'list',
        name: 'Opción',
        message: 'What task would you like to perform?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('======================'.green);
    console.log('Select an option'.green);
    console.log('====================== \n'.green);

    const opt = await inquirer.prompt(preguntas);

    return opt;
}

export { inquirerMenu };