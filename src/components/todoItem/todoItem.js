// Will render
// <li class="">
//   <div class="view">
//     <input class="toggle" type="checkbox">
//     <label>TODO 1</label>
//     <button class="destroy"></button>
//   </div>
//   <input class="edit" value="TODO 1">
// </li>

import Stepan from '/src/lib/stepan.js';

export default class TodoItem extends Stepan.Component {
  render({ isDone, title }) { // render will always accept data to render
    const rootElement = Stepan.createElement('li', this.parent, { class: isDone && 'completed' });
    const todoViewContainer = Stepan.createElement('div', rootElement, { class: 'view' });

    try {
      for (let elem of this.parent.querySelectorAll(".completed").values())
        if (elem.getElementsByTagName("label")[0] != undefined && elem.getElementsByTagName("label")[0].innerText == title)
          throw new Error("Task with such name is already done");

      Stepan.createElement('input', todoViewContainer, { class: "toggle", type: "checkbox" });
      Stepan.createElement('label', todoViewContainer, { innerText: title });
      Stepan.createElement('button', todoViewContainer, { class: "destroy" });
      Stepan.createElement('input', todoViewContainer, { class: "edit", value: title });

      return rootElement

    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
