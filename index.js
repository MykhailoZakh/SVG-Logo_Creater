// initializing packages needed for the application
const inquirer = require("inquirer");
const fs = require("fs");
const Shape = require("./lib/shapes")

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
    let shapeObj;
    if(data.shape == "circle") shapeObj = new Shape[0](data.text, data.textColor, data.shapeColor);
    if(data.shape == "triangle") shapeObj = new Shape[1](data.text, data.textColor, data.shapeColor);
    if(data.shape == "square") shapeObj = new Shape[2](data.text, data.textColor, data.shapeColor);
    let shape = shapeObj.shape;
    console.log(shapeObj);
    fs.writeFile("./examples/logo.svg", shapeObj.render(shape), (err) => err ? console.error(err) : console.log("Generated logo.svg"));
}