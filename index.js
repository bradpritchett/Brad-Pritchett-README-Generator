const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [{
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
        name: "use",
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
    let template = `# ${data.title}\n## Link to Repository\n[link to repository!](${data.repository})![screenshot](${data.screenshot})\n## Description\n${data.description}\n## Installation Instructions\n${data.instructions}\n## Usage\n${data.use}\n## Contributors\n${data.contributors}`

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