'use strict';

function DomElement(selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
}

DomElement.prototype.createElement = function () {
    if (this.selector.slice(0, 1) === '.') {
        let newElem = document.createElement('div');
        newElem.classList.add(`${this.selector.slice(1)}`);
        newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-Size: ${this.fontSize}`;
        newElem.textContent = `${this.text}`;
        document.body.append(newElem);
    } else if (this.selector[0] === '#') {
        let newElemP = document.createElement('p');
        newElemP.id = `${this.selector.slice(1)}`;
        newElemP.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-Size: ${this.fontSize}`;
        newElemP.textContent = `${this.text}`;
        document.body.append(newElemP);
    }
};

const someText = new DomElement('#test', '150px', '900px', '#5a18c4', '100px', 'someText');


someText.createElement();