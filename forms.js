
let todo = [];

var list = document.getElementById('toDoList');
  let todoList = ["cut the grass", "wash the car", "do homework", "play golf"];
  const todoField = document.querySelector("#todoField");
  const todoListField = document.querySelector("#todoListField");
  const ul = document.querySelector('ul');
  
  
   
  document.querySelector('#todoForm').addEventListener("submit", function(event) {
    console.log("Submitting the form");  
    event.preventDefault ();
  
 
 todo = todoField.value;
    let template = 
    `
      <h2>Todo: ${todo}</h2>
    
    `
    ul.innerHTML = template;
})  