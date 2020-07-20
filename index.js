const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [{
        type: "input",
        name: "github",
        message: "What is your GitHub name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "repository",
        message: "Enter the Repository URL here."
    },
    {
        type: "input",
        name: "screenshot",
        message: "Enter the URL of any screenshots (Leave blank if none)."
    },
    {
        type: "input",
        name: "description",
        message: "And what does your project do?"
    },
    {
        type: "input",
        name: "instructions",
        message: "Explain how to install the project (Leave blank if none)"
    },
    {
        type: "input",
        name: "use",
        message: "Please detail what - if any - limitation you've placed on the use of your application (Leave blank if none)"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter any contributors (Leave blank if none)"
    },
    {
        type: "input",
        name: "badges",
        message: "What, if any, licenses do you wish to display? (Leave blank if none)"
    }
];
// function to write README file
function writeToFile(fileName, data) {
    let template = `# ${data.title}\n<${data.repository}>\n${data.screenshot ? `![screenshot](${data.screenshot})`: ``}\n## Description\n${data.description}${data.instructions ? `\n## Installation Instructions\n${data.instructions}`: ``}${data.use ? `\n## Usage\n${data.use}`: ``}${data.contributors ? `\n## Contributors\n${data.contributors}`: ``}\n${data.badges ? `##License\n![License](https://img.shields.io/badge/License-${data.badges}-lightblue.svg)`:``}\n## Questions\nIf you have any questions, my github handle is <https:github.com/${data.github}> and I can be reached at <${data.email}>`

    ;
    fs.writeFile(fileName, template, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (questions) {
            writeToFile("README.md", questions);
        })
}

// function call to initialize program
init();