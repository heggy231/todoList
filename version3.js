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
    }, 
    changeTodo: function (position, newTodo) {
        this.todos[position] = newTodo;
        this.displayTodos();
    }
};

function changeTodo(position, newTodo){
    todos[position] = newTodo;
    displayTodos();
}

