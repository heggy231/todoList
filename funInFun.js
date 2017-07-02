function logTenNumbers(){
	for (var i = 0; i < 10; i++){
		console.log(i);
	}
}

debugger;
logTenNumbers();

// create a function that runs debugger when passing my function

// outline: 
runWithDebugger(ourFunction);

// debugger;
// ourFunction();

function runWithDebugger(ourFunction) {
	debugger;
	ourFunction();
}

// paste inside of ourFunction the logTenNumbers()
// we expect debugger to run first > funtion
runsWithDebugger(function logTenNumbers(){
	for (var i = 0; i < 10; i++){
		console.log(i);
	}
});

// setTimeout enhances the function that is passed in by turning it into alarm clock
setTimeout(function() {
	console.log('Wake up Gordon!');
}, 5000);

// output: Wake up Gordon! runs after 5 seconds

// forEach
var students = ['jonathan', 'jenny', 'elliot'];

function logName (name) {
	console.log(name);
}

logName(student[0]);

for(var i = 0; i < students.length; i++) {
	logName(students[i]);
}

// option 1 use forEach instead of for-loop
students.forEach(logName); // prints out each name

// option 2
students.forEach(function logName (name) {
	console.log(name);
});

// option 3
students.forEach(function (name) {
	console.log(name);
});

// write my own forEach function
function forEach (myArray, myFunction) {
	for(var i = 0; i < myArray.length; i++){
		// run myFunction for every ith myArray
		myFunction(myArray[i]);
	}
}

// test out
forEach(students, logName);
// or we can call it this way
forEach(students, function logName (name) {
	console.log(name);
});
// or test this way
forEach(students, function (name) {
	console.log(name);
});

// function that enhances other functions
// when .addEventListener it add a behavior only when tutorial element is clicked function that console logs name.

// selected element on DOM (page)
$0;
// grab $0 and set equal to tutorialElement
var tutorialsElement = $0;
// also add .addEventListener for ‘click’ and console log ‘The tutorials element was clicked!’
tutorialsElement.addEventListener('click', function(){
	console.log('The tutorials element was clicked!');
});

// addEventListener has event object
tutorialsElement.addEventListener('click', function(event) {
	console.log(event);
	alert('hello wonderful!');
});

// ouput of event: MouseEvent {isTrusted: true, screenX: 1570, screenY: 1527, clientX: 325, clientY: 275…}



