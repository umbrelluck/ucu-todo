
export default class Stepan {
  static createElement(element, parent, attributes = {}) {

    const newElement = document.createElement(element);
    // if (newElement.toString() == "[object HTMLUnknownElement]")
    if (!(newElement instanceof HTMLElement))
      throw new StepanError("Invalid tag name");

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {
      if (!(parent instanceof HTMLElement))
        throw new StepanError("Invalid DOM element");
      else if (parent == null)
        throw new StepanError(`Parent is ${parent}`);
      else this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}

class StepanError extends Error {
  constructor(message) {
    super(message);
    this.name = "StepanError"
  }
}
