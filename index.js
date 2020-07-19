const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


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
    let template = `# ${data.title}\n![screenshot](${data.screenshot})\n## Description\n${data.description}\n## Table of Contentsn\*[link text](#installation)Installationn\*[link text](#usage)Usage\n*[link text](#contributors)Contributors\n## <a name="installation"></a>Installation Instructions\n${data.instructions}\n## <a name="usage"></a>Usage \n${data.use}\n## <a name="contributors"></a>Contributors\n${data.contributors}`

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