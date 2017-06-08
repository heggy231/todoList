// It should store the todos array on an object
// create addTodo method inside todosList that displays todos
var todosList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
        console.log ("MyTodos: ", this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    }
};

todos.todos // ["item 1", "item 2", "item 3"]

function displayTodos() {
    console.log("MyTodos: ", todos);
}

// run the displayTodos() function
todosList.displayTodos();
// Output: MyTodos:  (3) ["item 1", "item 2", "item 3"]


// addTodo stand alone function > addTodo Method
function addTodo(todo) {
    todos.push(todo);
    displayTodos()
}
