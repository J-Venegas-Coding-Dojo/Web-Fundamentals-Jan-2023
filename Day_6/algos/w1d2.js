// what is a variable?
// a container that holds a value, box


//what is data? What types?
//Everything in programming is data
//All data has types
//JS has Strings (text), Numbers, Bollean (true/false)


//just like how boxes can be reused, so can variables
//They vary, meaning it's contents can change

//to be able to use the boxes and move them around properly,
//they need labels
//labels need to describe the contents of the box
// in the same way, variasble name need to describe he data inside them

//do the names of the variables matter to the comptuer? no
//to make a NEW variable in JS, we need the var keyword
//(special word that has a purpose. I.E. cannot be used for variable names)

var aaaa = "josh"

var instructor = "Christian"

var firstName = "Heidi"

var lastName = "Smith"

console.log(lastName)

//As engineers, we follow conventions for naming 
//In JS we use camelCase - first word is lower case and the following words are
//capitalized


//A change:
// lastName = "Smith"

//Loops
//What is an algorithm?
//We often need to repeat a set of instructions multiple times
//To help our code concise, and to help our sanity, we don't want to write out 
//each instruction one by one 50 billion times
//Algorithms allow us to write out a set of instructions that can be repeated as many
//times as needed



//For Loop
//What do we need?
//Loop variable, this sis a variable declared specifically for this loop
//A Condition: the loop will only run if the condition is true
//Increment/decrement step. This is to modify the loop variable in order to make the condition false
// Increment step always runs as the very last step, after the code block

for (var i=0; i<=10; i++){

 console.log(i)   
}
//curly braces denote a block of code
//where we put the code, or instructions, taht run when the loop runs
//I can put infinite lines of code in a code block

//can we use this loop varible somewehre else? In JS, as long as we use the var 
//keyword, yes
//is it good practice? no

//status check

//How to t diagram - variable, values

//1st t diagram - "hello hello"