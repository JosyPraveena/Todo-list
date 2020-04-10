const text = document.querySelector(".add-todo-section").children[1];
const click = document.querySelector(".add-todo-section");

console.log(click);

function addItem(text) {
  const template = `<input class="item-checkbox" type="checkbox"/><li>${text}</li><button class="edit-button"><i class="fas  fa-pencil-alt fa-2x"></i></button><button class="delete-button"><i class="fas  fa-trash-alt fa-2x"></i></button>`;
  document.querySelector(".todo").innerHTML += template;
}

click.addEventListener("submit", (event) => {
  const messageText = text.value;
  console.log(messageText);
  if (messageText) {
    console.log(messageText);
    addItem(messageText);
    text.value = "";
  }
  event.preventDefault();
});


const characterCheck = document.querySelector("#character-check p");
console.log(characterCheck);
let limit = 100;

text.addEventListener("keyup", (event) => {
  characterCheck.innerHTML = limit - text.value.length + " characters more";
  if (text.value.length >= limit) {
    text.value = text.value.substring(0, limit);
    characterCheck.innerHTML = "0 Letters Remaining";
  }
});

