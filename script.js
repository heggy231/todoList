//This is Version 7
var todoList = {
  todos : [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log ('Your todo list is empty'); 
    } else {
      console.log ('My Todos:'); 
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText); 
        } else {
          console.log('( )', this.todos[i].todoText); 
        }
      }
    }
   },
  addTodo: function(todoText) {  
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position]; //reference to our todo
    todo.completed = !todo.completed; //flip false/true when called
    this.displayTodos();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // get number of completedTodos (all true)
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    //Case 1:  if everything true, make everything false
      //make all items false
    if(completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
    // Case 2: Otherwise, make everything true. 
      }
    } else {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;  
      }
    }
    this.displayTodos();
  }
};

// 1. We want to get access to the diplayTodos and toggleAll buttons.
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);
var toggleAllButton = document.getElementById('toggleAllButton');
console.log(toggleAllButton);

// 2. We want to run displayTodos and toggleAll methods, when someone clicks 
//    displayTodos and toggleAll buttons.

displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  }, 
  toggleAll: function(){
  todoList.toggleAll();
  },
}
















