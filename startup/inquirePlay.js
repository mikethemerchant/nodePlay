

const inquirer = require('inquirer');
// Q: inquirer is installed why is this require statement not working?
// Q: how do I install inquirer globally?
// A: npm install -g inquirer

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name please: '
    },
];


inquirer.prompt(questions).then(answers => {
    console.log(`Welcome ${answers['name']}!`);
});