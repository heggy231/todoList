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

function addTodo() {
    todos.push('new todo');
}

todos // to see 'new todo' element is added to the array

