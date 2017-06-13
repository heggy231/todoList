// It should store the todos array on an object
// create addTodo method inside todosList that displays todos
var todosList = {
    // todos will have objects instead of simple values
    todos: [],
    displayTodos: function () {
        console.log ("MyTodos: ", this.todos);
    },
    addTodo: function (todoText) { // addTodo('hi') >> todoText === 'hi'
        // add new item inside array of todos
        this.todos.push({
            // key (name of property): value that user passes in
            // from earlier, todoText: 'hi'
            todoText: todoText,
            completed: false,
        });
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

// make addTodo objects
// {
//     todoText: 'item 1',
//     completed: false // Boolean value: true or false
// }

