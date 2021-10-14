const template = require("./lib/htmlTemplate");

const util = require("util");
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");

let employees = [];

const questions = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "Choose a position",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee e-mail"
        },
        {
            type: "input",
            name: "github",
            message: "Enter employee Github username",
            when: (answers) => {
                if (answers.position === "Engineer") {
                    return true;
                }
                // addEngineer();
            }
        },
        {
            type: "input",
            name: "office",
            message: "Enter Manager's office number",
            when: (answers) => {
                if (answers.position === "Manager") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter Intern's school",
            when: (answers) => {
                if (answers.position === "Intern") {
                    return true;
                }
            }
        }
    ])
}
// -- Pushes to an array for multiple employees -- //
// const addEngineer = (answers) => {
//     employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
// }
// console.log(employees);

const writeToHTML = util.promisify(fs.writeFile);

const init = () => {
    questions().then((answers) => writeToHTML("index.html", template(answers)));
};

init();