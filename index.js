const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fileName = "README.me";
// array of questions for user
const questions = [{
        type: "input",
        name: "gitname",
        message: "What is your github handle?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "screenshot",
        message: "Enter the URL of any screenshots."
    },
    {
        type: "input",
        name: "description",
        message: "And what does your project do?"
    },
    {
        type: "input",
        name: "instructions",
        message: "Explain how to install the project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please detail what - if any - limitation you've placed on the use of your application."
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter any contributors."
    }
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(questions)
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (questions) {
            writeToFile(fileName, questions);
        })
}

// function call to initialize program
init();