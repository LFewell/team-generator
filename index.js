const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

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
            message: "What is the employees name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employees ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employees e-mail"
        },
    ])
}

questions();