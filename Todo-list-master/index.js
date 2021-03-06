class ToDo {
  constructor() {
    this.itemlist = [];
  }

  addItem(text) {
    const todo = document.querySelector(".todo-list");
    const template = `<li class="list-item"><input class="item-checkbox" type="checkbox"/><div class="eachtext"><p>${text}</p></div><button class="delete-button">X</button></li>`;
    todo.insertAdjacentHTML("afterbegin", template);
    this.addListener();
    this.checkbox();
  }

  addItemToList(event) {
    const messageText = text.value;
    if (messageText) {
      this.addItem(messageText);
      text.value = "";
    }
    event.preventDefault();
  }

  addListener() {
    const listItems = document.querySelectorAll("p");

    for (let item of listItems) {
      item.addEventListener("click", (event) => {
        const currentText = event.currentTarget.textContent;
        console.log(event.currentTarget.parentNode);

        const insertForm = `<form class="forms"><input type="text" value="${currentText}"></form>`;
        event.currentTarget.parentNode.innerHTML = insertForm;
        this.editItem();
      });
    }
  }

  editItem() {
    const editInput = document.querySelectorAll(".forms");

    for (let item of editInput) {
      item.addEventListener("submit", (event) => {
        const submitText = event.currentTarget.children[0].value;
        const template = `<p>${submitText}</p>`;
        event.currentTarget.parentNode.innerHTML = template;
        event.preventDefault();
        this.addListener();
      });
    }
  }

  putRemainingChars(event) {
    characterCheck.innerHTML = limit - text.value.length + "/100";
    if (text.value.length >= limit) {
      text.value = text.value.substring(0, limit);
      characterCheck.innerHTML = "0 Letters Remaining";
    }
    characterCheck.innerHTML = limit - text.value.length + "/100";
  }

  handleDeleteOrEdit(event) {
    if (event.target.closest(".delete-button") != null) {
      console.log("hey");
      let removeElement = event.target.closest("li");
      removeElement.remove();
    } else if (event.target.closest(".edit-button") != null) {
      let editText = event.target.closest(".eachtext").getElementsByTagName("p")[0];
      editText.contentEditable = true;
    }
  }
  checkbox() {
    const checkbox = document.querySelectorAll(".item-checkbox");
    for (let eachcheck of checkbox) {
      eachcheck.addEventListener("click", () => {
        let strikeString = event.currentTarget.nextSibling.children[0].innerHTML.strike();
        event.currentTarget.nextSibling.children[0].innerHTML = strikeString;
        todo.append(event.target.closest("li"));
      });
    }
  }
}

const textInputField = document.querySelector(".add-todo-section");
const text = textInputField.children[0];
const characterCheck = document.querySelector("#character-check p");
const todo = document.querySelector(".todo-list");

const limit = 100;
let myTodo = new ToDo();

//textInputField.addEventListener("submit", myTodo.addItemToList(event));
textInputField.addEventListener("submit", (event) => {
  myTodo.addItemToList(event);
});

text.addEventListener("keyup", (event) => {
  myTodo.putRemainingChars(event);
  document.querySelector("#character-check").style.color = "white";

  setTimeout(() => {
    document.querySelector("#character-check").style.color = "black";
  }, 100);
});

todo.addEventListener("click", (event) => {
  myTodo.handleDeleteOrEdit(event);
});
