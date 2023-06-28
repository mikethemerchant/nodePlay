import inquirer from "inquirer";

function getUserInput() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        }
    ]).then(function (response) {
        console.log(response.name)
    })
}
getUserInput();
