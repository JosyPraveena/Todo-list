class ToDo{
  constructor(){
    this.itemlist = [];
  }

  addItem(text) {
    const todo = document.querySelector("#todo-list");
    console.log("asdfasdfasdfasdf" + todo);
    const template = `<li class="list-item"><input class="item-checkbox" type="checkbox"/><div class="eachtext"><p>${text}</p></div><button class="delete-button"><i class="fas  fa-trash-alt fa-2x"></i></button></li>`;
    // const template = `<li class="list-item"><input class="item-checkbox" type="checkbox"/><div class="eachtext"><p>${text}</p></div></li>`;
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

  addListener(){
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
  };

  editItem(){
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

  putRemainingChars(event){
    characterCheck.innerHTML = limit - text.value.length + " characters more";
    if (text.value.length >= limit) {
      text.value = text.value.substring(0, limit);
      characterCheck.innerHTML = "0 Letters Remaining";
    }
  }

  handleDeleteOrEdit(event){
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
  }
  checkbox(){
    console.log("enter checkbox");
   const checkbox = document.querySelectorAll(".item-checkbox");
    console.log(checkbox);
   for (let eachcheck of checkbox) {
     console.log("hey");
     eachcheck.addEventListener('click' , () =>{
                console.log(event.currentTarget);
               let string = event.currentTarget.nextSibling.children[0].innerHTML.strike(); 
               event.currentTarget.nextSibling.children[0].innerHTML = stringStrike;
     });
   }
  }
 
}


const textInputField = document.querySelector(".add-todo-section");
const text = textInputField.children[1];
const characterCheck = document.querySelector("#character-check p");
const todo = document.querySelector("#todo-list");

const limit = 100;
let myTodo = new ToDo();


//textInputField.addEventListener("submit", myTodo.addItemToList(event));
textInputField.addEventListener("submit", event => {
  myTodo.addItemToList(event);
});

text.addEventListener("keyup", event => {
  myTodo.putRemainingChars(event);
});

todo.addEventListener("click", (event) => {
  myTodo.handleDeleteOrEdit(event)
});
