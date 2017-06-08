var todos = ['item 1', 'item 2', 'item 3'];
console.log('My Todos:', todos);

// It should have a way to add new todos
todos.push('item new');
todos.push('item 5');

// It should have a way to change a todo
todos[1] = 'I am new' 
// output: ["item 1", "I am new", "item 3", "item new", "item 5"]
