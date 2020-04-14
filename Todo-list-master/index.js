const textInputField = document.querySelector(".add-todo-section");
const text = textInputField.children[1];
const characterCheck = document.querySelector("#character-check p");
const todo = document.querySelector("#todo-list");

const limit = 100;

const addItem = (text) => {
  const template = `<li class="list-item"><input class="item-checkbox" type="checkbox"/><div class="eachtext"><p>${text}</p></div><button class="delete-button"><i class="fas  fa-trash-alt fa-2x"></i></button></li>`;
  // const template = `<li class="list-item"><input class="item-checkbox" type="checkbox"/><div class="eachtext"><p>${text}</p></div></li>`;
  todo.insertAdjacentHTML("afterbegin", template);
  addListener();
};

const editItem = () => {
  const editInput = document.querySelectorAll(".forms");

  for (let item of editInput) {
    item.addEventListener("submit", (event) => {
      const submitText = event.currentTarget.children[0].value;
      const template = `<p>${submitText}</p>`;
      event.currentTarget.parentNode.innerHTML = template;
      event.preventDefault();
      addListener();
    });
  }
};

const addListener = () => {
  const listItems = document.querySelectorAll("p");

  for (let item of listItems) {
    console.log(item);
    item.addEventListener("click", (event) => {
      console.log("hey");
      const currentText = event.currentTarget.textContent;
      console.log(event.currentTarget.parentNode);

      const insertForm = `<form class="forms"><input type="text" value="${currentText}"></form>`;
      event.currentTarget.parentNode.innerHTML = insertForm;
      editItem();
    });
  }
};

textInputField.addEventListener("submit", (event) => {
  const messageText = text.value;
  if (messageText) {
    addItem(messageText);
    text.value = "";
  }
  event.preventDefault();
});

text.addEventListener("keyup", (event) => {
  characterCheck.innerHTML = limit - text.value.length + " characters more";
  if (text.value.length >= limit) {
    text.value = text.value.substring(0, limit);
    characterCheck.innerHTML = "0 Letters Remaining";
  }
});

todo.addEventListener("click", (event) => {
  if (event.target.closest(".delete-button") != null) {
    console.log("hey");
    let removeElement = event.target.closest("li");
    removeElement.remove();
  } else if (event.target.closest(".edit-button") != null) {
    let editText = event.target
      .closest(".eachtext")
      .getElementsByTagName("p")[0];
    editText.contentEditable = true;
  }
});
