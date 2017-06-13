// LEARN for loop
var testArray = ["item 1", "item 2", "item 3"];

// using i to loop through testArray items.
for (var i = 0; i < 3; i++) {
    console.log(testArray[i]);
}

// dynamic testArray.length: if you add another item you may print out other items

for (var i =0; i < testArray.length; i++) {
    console.log(testArray[i]);
}