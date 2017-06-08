var todos = ['item 1', 'item 2', 'item 3'];
console.log('My Todos:', todos);

// It should have a way to add new todos
todos.push('item new');
todos.push('item 5');

// It should have a way to change a todo
todos[1] = 'I am new' 
// output: ["item 1", "I am new", "item 3", "item new", "item 5"]

// delete todos (remove 1 item starting position 0)
todos.splice(0, 1) // todos now has
todos.splice(2, 2)

// v2 function to display todos
function displayTodos () {
    console.log("Todos: ", todos);
}

// v2 function to add new todos
// add new todos and combine earlier function to display todo
function addTodo(todo) {
    todos.push(todo);
    displayTodos()
}

// Todos:  (7) ["item 1", "item 2", "item 3", "new todo", "new todo", "new todo", "just arrived"]

// v2 change todo
function changeTodo(){
    todos[0] = "I got changed";
    displayTodos();
}