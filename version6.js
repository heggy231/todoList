// It should store the todos array on an object
// create addTodo method inside todosList that displays todos
var todoList = {
    // todos will have objects instead of simple values
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todos: ');
            for (var i = 0; i < this.todos.length; i++) {
                // check if .completed is true
                if (this.todos[i].completed === true){
        // completed; print with (x) only todoText property ith element
                    console.log ('(x)', this.todos[i].todoText);
                } else {
        // not completed; print with ( ) only todoText property ith element
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) { 
        // add new item inside array of todos
        this.todos.push({
            // key (name of property): value that user passes in
            // from earlier, todoText: 'hi'
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    }, 
    // update parameter newValue > todoText
    changeTodo: function(position, todoText) {
        // this.todos[position] = todoText;
        // using dot notation to grab just todoText property to update its preexisting value to new todoText value
        var todo = this.todos[position];
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        // splice remove one item from index position
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function(){
        var completedTodos = 0;
        var totalTodos = this.todos.length;

        // Get number of completed todos.
        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        
        // case 1: If all compTodos T > Make all false.
        if (completedTodos === totalTodos) {
            // Make all false
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        } 

    }
};
