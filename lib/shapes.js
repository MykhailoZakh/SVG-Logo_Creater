// parrent class for shape
class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape;
        this.text;
    }

    render(shape){
        let svgValue = ` 
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

${this.shape}
        
${this.text}
        
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
        this.text = `<text x="150" y="120" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        this.shape = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
 
},

// triangle class
class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        this.text = `<text x="150" y="140" font-size="38" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

},

// square class
class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.shape = `<rect x="70" y="30" width="160" height="160"  fill="${this.shapeColor}" />`;
        this.text = `<text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

}]


module.exports = classArray;
