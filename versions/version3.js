// It should store the todos array on an object
// create addTodo method inside todosList that displays todos
var todosList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
        console.log ("MyTodos: ", this.todos);
    },
    addTodo: function (todo) {
        // add new item inside array of todos
        this.todos.push(todo);
        this.displayTodos();
    }, 
    changeTodo: function (position, newTodo) {
        this.todos[position] = newTodo;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        // splice remove one item from index position
        this.todo.splice(position, 1);
        this.displayTodos();
    }
};



