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
        document.createElement('div');
        document.body.insertAdjacentHTML('afterbegin', '<div class=' + `${this.selector.slice(1)}>` + `${this.text}` + '</div>');
        document.querySelector(`${this.selector}`).style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-Size: ${this.fontSize}`;
    } else if (this.selector[0] === '#') {
        document.createElement('p');
        document.body.insertAdjacentHTML('afterbegin', '<p id=' + `${this.selector.slice(1)}>` + `${this.text}` + '</p>');
        document.querySelector(`${this.selector}`).style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-Size: ${this.fontSize}`;
    }
};

const someText = new DomElement('#efesa', '150px', '900px', '#5a18c4', '100px', 'someText');


someText.createElement();