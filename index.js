// initializing packages needed for the application
const inquirer = require("inquirer");
const fs = require("fs");

// function to initialize app
const init = function(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What is your logo text(max 3 letters)?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want for the text?',
        },
        {
            type: 'list',
            message: 'What is a shape of the logo?',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color do you want for the shape?',
        },
    ])
    .then((data) =>{
        fileCreate(data);
    })
}

init();

// function to create file with logo data

function fileCreate(data) {
    console.log(data);
}