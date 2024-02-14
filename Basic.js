// SIX DATATYPES :
// undefined
// boolean
// Number
// BigInt
// String
// Symbol


// typeof() => tells the data type

// string - string = NaN :: string  - number = number :: true + true = 2 :: string + string = string

// Null Vs Undefined => undefined means a variable has been declared but not defined yet and null is assigned value :: null data type is object and undefined datatype is undefined

// isNan() => return true if a number and false if not a number

// NaN === NaN :-> false :: Number.NaN === NaN :-> false :: isNaN(NaN) :-> true :: isNaN(Number.NaN) :-> true :: Number.isNaN(NaN) :-> true

// Number() => used to convert string data type to int
// Number(true) => 1 :: (false) => 0 :: undefined => NaN :: null => 0



// isNaN() method returns true if a value is Not-a-Number.
// Number.isNaN() returns true if a number is Not-a-Number.
// In other words: isNaN() converts the value to a number before testing it.
// isNan("Hello") => true :: Number.isNaN("hello") => false



// OPERATORS :
// Assignment : =   eg : x = 5 y = 8
// Arithmetic : + - * / x++ ++x x-- --x
// Comparison : == >= <= !=
// Logical : || && !
// String
// Conditional / Ternary


// console.log(0 || 3 && 7) here && priority > || so 0 && 7 return 7 as it returns right side and 0 || 7 return 7
// first of all || && in the digit compare if two numbers are  > 0 if yes then return right side if not return 0
// console.log(0 && 3) => 0 :: console.log(0 || 3) => 3


// 5 falsy value => 0 , "" , undefined , null , NaN , false** is false anyway

// if(score = 10) console.log(9) => 9 if(score = 0) return nothing

// function sum (int a,int b) {} sum(4,3)  here a,b are parameters and 3,4 are arguments
// var x = sum()
// x;
// above x is function expression


// var x = function(){};

// here above code is called anonymous function expression and after = it is anonymous function