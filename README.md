# todoList # watchandcode
(practical javascript gordon watch and code)

Vanilla Javascript: TodoList App
Live Demo link: https://heggy231.github.io/todoList/todo.html

V1 Requirements:
- It should have a place to store todos
- It should have a way to display todos
- It should have a way to add new todos
- It should have a way to change a todos
- It should have a way to delete a todos


V2 Requirements:
- It should have a function to display todos
- It should have a function to add todos
- It should have a function to change todos
- It should have a function to delete todos

V3 Requirements:
- It should store the todos array on an object
- It should have a displyTodos method
- It should have an addTodo method
- It should have a changeTodo method
- It should have a deleteTodo method

Overall lesson from V3:
- We moved from stand alone function to stand alone object.  This is great since everything that is related to todoList is on todoList object.  There is an organizational benefit you get from grouping things inside of an object.  
- We learned to create method inside object.  One key note: this inside of method refers to object name.  You may use '.' to reference to the object's property key name.  ex) this.addTodo  (object.propertyKeyName)

V4 Requirements:
- todoList.addTodo should add objects
- todoList.changeTodo should change the todoText property
- todoList.toggleCompleted should change the completed property

Overall lesson from V4: 
- Why object?  Object is a great way to represent more complicated data with properties on it.  
- Using dot notation: 
this.todos[position].todoText = todoText;
- Toggling boolean value T/F by using bang operator (!) (which gives opposite of what comes after it)
- true, !true > false

Lesson on forLoop:
- We may loop through using i. ex: for(var i = 0; i <3; i++) { 
    console.log(testArray[i]) }

V5 Requirements:
- .displayTodos should show .todoText (done)
- .displayTodos should tell you if .todos is empty (todo)**
- .displayTodos sould show .completed

Overall lesson from V5:
- We applied for loop to iterate through Todos array
