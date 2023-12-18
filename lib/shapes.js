// parrent class for shape
class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape;
    }

    render(shape){
        let svgValue = ` 
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

${shape}
        
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
</svg>`
        return svgValue;
    }
}

// child classes 
// circle class
const classArray = [
class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.shape = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
 
},

// triangle class
class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }

},

// square class
class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.shape = `<rect x="150" y="100" width="160" height="160"  fill="${this.shapeColor}" />`
    }

}]


module.exports = classArray;
// circle  <circle cx="150" cy="100" r="80" fill="green"/>
// triangle <polygon points="150, 18 244, 182 56, 182" fill="green" />
// square <rect x="150" y="100" width="160" height="160" stroke="black" fill="green" stroke-width="5"/>