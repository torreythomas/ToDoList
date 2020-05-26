let todoItems = [];

function renderTodo(todo) {
    const list = document.querySelector("#to-do-list-container");
    list.insertAdjacentHTML('beforeend', `
    <li style="list-style:none; margin:10px;" class="todo-item" data-key="${todo.id}">
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span class="to-do-text"> ${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    X
    </button>
    </li>
    `);
}


function addTodo(text){
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    renderTodo(todo);
}


const form = document.querySelector("#to-do-list-survey-form");
console.log(form);
form.addEventListener('submit', evt => {
    evt.preventDefault();  
    const input = document.querySelector('#to-do-list-field');

    const text = input.value.trim();
    if (text !== ''){
        addTodo(text);
        input.value = '';
        input.focus();
    }
})