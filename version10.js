// It should store the todos array on an object
// create addTodo method inside todosList that displays todos
var todoList = {
  // todos will have objects instead of simple values
  todos: [],
  addTodo: function(todoText) {
    // debugger;
    // add new item inside array of todos
    this.todos.push({
      // key (name of property): value that user passes in
      // from earlier, todoText: 'hi'
      todoText: todoText,
      completed: false,
    });
  }, 
  // update parameter newValue > todoText
  changeTodo: function(position, todoText) {
    // this.todos[position] = todoText;
    // using dot notation to grab just todoText property to update its preexisting value to new todoText value
    var todo = this.todos[position];
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    // splice remove one item from index position
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    // here we use bracket notation since this.todos[position] position is variable
    // if you are refer to the key then use dot notation.
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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
  }
};

// 1. We want to get access to the display todos button.
// From JS document variable gives you access to document object inside of HTML (DOM)



// 2. We want to run displayTodos method, when someone clicks
//    the display todos button.


var handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    // resets addTodo text field
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
// changeTodo: function(position, todoText) note position is number .valueAsNumber
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

// view obj renders the data to the page which is not functional part of app
var view = {
// problem with this one is it is adding more and more at the current; we need to refactor to clear
// the item from previous
  displayTodos: function(){
    // debugger;
    // take out the .querySelector('ul'); since this only needs to happen only once
    var todosUl = document.querySelector('ul');
    // clear the inside of unordered list before it starts adding new <li> items
    todosUl.innerHTML = '';

    for(var i = 0; i < todoList.todos.length; i++){
      // creates output: <li> </li>
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      // var todoTextWithCompletion = '';
      // if (todo.completed === true)
        // (x) todoText
      // else
        // ( ) todoText
      // todoLi.textContent = todoTextWithCompletion;
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      // DOM manipulation: option to use .innerHTML to display text
      // note: .textContent is more efficient/secure way to display text
      // below replaces earlier line: todoLi.textContent = todoList.todos[i].todoText; 
      // now with completion info
      todoLi.textContent = todoTextWithCompletion;
      // Ul is parent of li element
      todosUl.appendChild(todoLi); 
    }
  },
  // view.displayTodos are creating DOM element but create
  // separate method since it is getting too long
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    // labeling the button itself
    deleteButton.textContent = 'Delete';
    // access to newly created not unique deleteButtons
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};
