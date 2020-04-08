const text = document.querySelector(".add-todo-section").children[1];
const click = document.querySelector(".add-todo-section");

console.log(click);

function addItem(text) {
  const template = `<input class="item-checkbox" type="checkbox"/><li>${text}</li><button class="edit-button"><i class="fas  fa-pencil-alt fa-2x"></i></button>`;
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
