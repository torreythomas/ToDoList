let todoItems = [];

function addTodo(text){
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    console.log(todoItems);
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