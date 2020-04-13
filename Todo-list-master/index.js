const text = document.querySelector(".add-todo-section").children[1];
const click = document.querySelector(".add-todo-section");

function addItem(text) {
  const template = `<li><input class="item-checkbox" type="checkbox"/><div class="eachtext"><p>${text}</p><button class="edit-button"><i class="fas  fa-pencil-alt fa-2x"></i></button></div><button class="delete-button"><i class="fas  fa-trash-alt fa-2x"></i></button></li>`;
  document.querySelector(".todo").innerHTML += template;
}

click.addEventListener("submit", (event) => {
  const messageText = text.value;
  if (messageText) {
    addItem(messageText);
    text.value = "";
  }
  event.preventDefault();
});

const characterCheck = document.querySelector("#character-check p");
let limit = 100;

text.addEventListener("keyup", (event) => {
  characterCheck.innerHTML = limit - text.value.length + " characters more";
  if (text.value.length >= limit) {
    text.value = text.value.substring(0, limit);
    characterCheck.innerHTML = "0 Letters Remaining";
  }
});

const todo = document.getElementsByClassName("todo")[0];

todo.addEventListener("click", (event) => {
  if (event.target.closest(".delete-button") != null) {
    let removeElement = event.target.closest("li");
    removeElement.remove();
  } else if (event.target.closest(".edit-button") != null) {
    let editText = event.target
      .closest(".eachtext")
      .getElementsByTagName("p")[0];
    editText.contentEditable = true;
  }
});
