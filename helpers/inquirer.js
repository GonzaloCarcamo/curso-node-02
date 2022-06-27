import colors from 'colors';
import inquirer from 'inquirer';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'What task would you like to perform?',
        choices: [
            {
                value: 1,
                name: '1. Crear Tarea'
            },
            {
                value: 2,
                name: '2. Listar Tareas'
            },
            {
                value: 3,
                name: '3. Listar Tareas Completadas'
            },
            {
                value: 4,
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: 5,
                name: '5. Completar Tareas'
            },
            {
                value: 6,
                name: '6. Borrar Tareas'
            },
            {
                value: 0,
                name: '0. Salir'
            },
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('======================'.green);
    console.log('Select an option'.green);
    console.log('====================== \n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`
        }
    ]

    await inquirer.prompt(question);
}

export { inquirerMenu, pausa };