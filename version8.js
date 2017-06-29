// It should store the todos array on an object
// create addTodo method inside todosList that displays todos
var todoList = {
  // todos will have objects instead of simple values
  todos: [],
  displayTodos: function() {
    // debugger;
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
    // debugger;
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
    // here we use bracket notation since this.todos[position] position is variable
    // if you are refer to the key then use dot notation.
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    // debugger;
    var completedTodos = 0;
    var totalTodos = this.todos.length;
    
    // get number of completed todos
    for (var i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }

    // case 1: If All true, make all false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// 1. We want to get access to the display todos button.
// From JS document variable gives you access to document object inside of HTML (DOM)



// 2. We want to run displayTodos method, when someone clicks
//    the display todos button.


var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    // resets addTodo text field
    addTodoTextInput.value = '';
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    // view if I correctly grabbing changeTodoPosition
    // console.log(changeTodoPosition);
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');

  // changeTodo: function(position, todoText)
  // position is a number use valueAsNumber
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
  // reset value
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  }
}