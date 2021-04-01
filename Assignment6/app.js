// Grab the id of the input box
// const todoInput = document.getElementById("todo-input");

// Grab the button to listen click event.
const itemAddBtn = document.getElementById("item-add-btn");

// grab ul list to add li elements
ulList = document.getElementById("todo-list");

// Grab clear-all
const clearAll = document.getElementById("clear-all");

// Edit item
const editItem = document.getElementById("");


//event listeners
itemAddBtn.addEventListener("click", handleSubmit);
ulList.addEventListener("click", checkEditDeleteTodo);
clearAll.addEventListener("click", handleClearAll);
// Option.addEventListener("click", editTodo);

function handleSubmit(event) {
    // stop browser default behaviour
    event.preventDefault();
    // Get the input text from input field
    const todoInput = document.getElementById("todo-input")
    if (todoInput.value !== "") {
        addTodo(todoInput.value);
    }

    // clear input field
    todoInput.value = "";

}


function checkEditDeleteTodo ( event ) {
    // check different events 
    if ( event.target.name === "check-button" ) {
        checkTodo(event);
    } else if ( event.target.name === "edit-button" ) {
        editTodo(event);
    } else if ( event.target.name === "delete-button" ) {
        deleteTodo(event);
    }
}


function handleClearAll (event) {
    document.querySelector('ul').innerHTML = "";
}

// Helper functions

function addTodo (taskItem) {
    // select ul element to add li items.
    const ul = document.querySelector('ul');
    // create li element for placing user todo.
    const li = document.createElement('li');
    // add 
    li.innerHTML = `
    <span class="todo-item">${taskItem}</span>
    <button name="check-button"><i class="fas fa-check-square"></i></button>
    <button name="edit-button"><i class="fas fa-edit"></i></button>
    <button name="delete-button" class="delete-button"><i class="fas fa-trash"></i></button>
    `;

    // add class to div element
    li.classList.add( "todo-list-item" );
    // Make above created li element to member of the ul element.
    ul.appendChild(li);
}


function deleteTodo ( event ) {
    const item = event.target.parentNode;
    item.addEventListener('transitionend', () => item.remove());
    item.classList.add('todo-list-item-fall');

}

function checkTodo (event) {
    const item = event.target.parentNode;
    if (item.style.textDecoration === "line-through") {
        item.style.textDecoration = 'none';
    
    } else {
        item.style.textDecoration = "line-through";
    }
}

function editTodo (event) {

}

