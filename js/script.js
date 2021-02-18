'use strict';


// function DomElement(selector, height, width, bg, fontSize) {
//     this.selector = selector;
//     this.height = height;
//     this.width = width;
//     this.bg = bg;
//     this.fontSize = fontSize;
//     console.log(this);
// }

// DomElement.prototype.createElement = function () {
//     if (this.selector.slice(0, 1) === '.') {
//         let text = document.createElement('div');
//         text.classList.add('someText');
//         text.textContent = 'some text lies here';
//         document.body.insertAdjacentElement('afterbegin', text);
//     } else if (this.selector[0] === '#') {
//         document.body.insertAdjacentHTML('beforeend', '<p id="someParagraph">some Paragraph lies here</p>');
//     }
//     console.log(this);
// };

// const divText = new DomElement('.test1', '150px', '800px', '#5a18c4', '100px');
// const paragraphText = new DomElement('#test2', '250px', '800px', '#8c469e', '100px');

// divText.createElement();
// paragraphText.createElement();

// document.querySelector('.someText').style.cssText = `
// height: ${divText.height}; 
// width: ${divText.width}; 
// background: ${divText.bg}; 
// font-size: ${divText.fontSize}`;

// document.getElementById('someParagraph').style.cssText = `
// height: ${paragraphText.height}; 
// width: ${paragraphText.width}; 
// background: ${paragraphText.bg}; 
// font-size: ${paragraphText.fontSize}`;


function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height; 
    this.width = width; 
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.addNewText = function(){
    if(this.selector[0] === '.'){
        let text = document.createElement('div');
        text.classList.add('someText');
        text.textContent = 'some text lies here';
        document.body.insertAdjacentElement('afterbegin', text);
    }else if(this.selector[0] === '#'){
        document.body.insertAdjacentHTML('beforeend','<p id="someParagraph">some Paragraph lies here</p>');
    }
};

const textDiv = new DomElement('.test1', '150px', '800px', '#5a18c4', '100px');
const paragraphText = new DomElement('#test2', '250px', '800px', '#8c469e', '100px');

textDiv.addNewText();
paragraphText.addNewText();

document.querySelector('.someText').style.cssText = `
height: ${textDiv.height};
width: ${textDiv.width};
background-color: ${textDiv.bg};
font-size: ${textDiv.fontSize}`;

document.getElementById('someParagraph').style.cssText = `
height: ${paragraphText.height};
width: ${paragraphText.width};
background-color: ${paragraphText.bg};
font-size: ${paragraphText.fontSize}`;

