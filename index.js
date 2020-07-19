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
    let template = `
    #${data.title}
    ![screenshot](${data.screenshot})"
    ##Description
    ${data.description}
    ##Table of Contents
    *[link text](#installation)Installation
    *[link text](#usage)Usage
    *[link text](#contributors)Contributors
    ## <a name="installation"></a>Installation Instructions
    ${data.instructions}
    ## <a name="usage"></a>Usage 
    ${data.use}
    ## <a name="contributors"></a>Contributors
    ${data.contributors}
    `

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
            writeToFile("README.me", questions);
        })
}

// function call to initialize program
init();