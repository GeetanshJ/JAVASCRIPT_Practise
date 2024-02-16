// DECLARE VS DEFINE  =>  declare means telling compiler that this is data type and name of the variable not necessarily allocating memory
// but in define both occurs i.e allocating and telling compiler

//  ASSIGNED VS INITIALIZE  =>  assigned means giving value to variable after declare but in INITIALIZE at time of declare



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




// Let is blocked scope :: var is function scoped
// Let cannot be redeclare :: var can be redeclare




// function x(a,c=b,b){
    
//     console.log(`${a} ${b} ${c}`); => 5 undefined 7
// }
// x(5,7);

// function x(a,b,c=b){
    
//     console.log(`${a} ${b} ${c}`); => 5 7 7
// }
// x(5,7);



// ARROW VS SIMPLE FUNCTION
// 1.  Arrow cannot be called before define but can happen in simple







// ARRAYS
// var x = [1,2,3,4,"h"];

// console.log(x) => [1,2,3,4];

// x[9] = 4;
// console.log(x) => [1,2,3,4,undefined,...x,9];


// PROPERTIES  => .length

// for(let i in x){
//     console.log(x[i])
// }

// for(let i of x){
//     console.log(i)
// }

// x.forEach(function(elem,index,array){
//     console.log("Element: " + elem + " index: " + index + " array:" + array)
// });

// for...in is used to iterate over object properties (keys).
// for...of is used to iterate over iterable object values.
// forEach is used specifically with arrays to apply a function to each element.


// SEARCHING  =>  indexOf(value,starting index)  by default start from 0  return -1 if not found  goes from starting index to last => forward search
// lastindexOf(value,ending index)  by default start from last return -1 if not found  goes from last to 0 => backward search
// .includes() => return boolean value true if contains and false if not   => forward search
// array_name.find(var => condition eg var < 100) => return value if not found return undefine

// all the function are fail in case of array of objects except find

// array = [{id1:200},{id1:300},{id3:400},{id4:500}]

// const x = array.find( curr => curr.id1 === 300)
// console.log(x)  =>  { id1: 300 }

//   problem => return only 1 value

//  findIndex() => same as find return index/-1




// filter  =>  return new array containing all the values of calling function

// array = [{id1:200},{id1:300},{id3:400},{id4:500}]
// const x = array.filter( curr => curr.id1 >= 100)
// console.log(x)   =>  [ { id1: 200 }, { id1: 300 } ]

// array = [{id1:200},{id1:300},{id3:400},{id4:500}]
// const x = array.find( curr => curr.id1 >= 100)
// console.log(x)  =>  {id1:200}


// arrays_name.sort()  applicable to string only in case of int convert to string then sort
// in case of string first sort according to capital then small characters

// const arr = ["A","a","B","b"]  =>  [ 'A', 'B', 'a', 'b' ]
// console.log(arr.sort())



// CRUD OPErATIONS

// push =>  add elements to end of array and return new length of the array
// const arr = [1,2,3,4];
// console.log(arr.push(5,6,7) + "    " + arr)

// unshift =>  add elements to start of array and return new length of the array
// const arr = [1,2,3,4];
// console.log(arr.unshift(3,3,4))


// pop =>  remove last element of array and return the element pop
// const arr = [1,2,3,4,5,6,7,"hh"];
// console.log(arr.pop() )

// shift =>  remove first element of array and return the element pop
// const arr = ["hh.",1,2,3,4,5,6,7,"hh"];
// console.log(arr.shift() )


// splice => used to add element at any index   parameters (index where to add,number of elements to be deleted,string)
// if we write(3,0,"h") then it will add "h" to 3rd index if other element is there at 3 it will shift that element to 4th index
// const arr = ["hh.",1,2,3,"ll",5,6,7,"hh"];
// console.log(arr.splice(4,0,"jj") + "   "+ arr)

// if we write number > 0 in deletion then will print all the numbers deleted and delete all the data in forward and if we write infinity then will delete 
//  all elements after specific index




// map is same as filter but return true or false in comparison
// array = [{id1:200},{id1:300},{id1:400},{id4:500}]
// const x = array.map( curr => curr.id1)
// const y = array.filter( curr =>  curr.id1)
// const z = array.forEach( curr => curr)
// console.log(array)
// console.log(x) [ 200, 300, 400, undefined ]
// console.log(y) [ { id1: 200 }, { id1: 300 }, { id1: 400 } ]
// console.log(z) undefined
// return new array without mutating



// REDUCE =>  to convert 2d array / 3d array to 1d
// array = [{id1:200},{id1:300},{id1:400},{id4:500}]
// var fi = 0;
// var ans = array.filter((curr) =>  curr.id1 );
// console.log(ans)








// STRING
// same as indexOf but not take starting index like in indexOf("gg",5)

// slice(start,end)  =>  extract a part of string and return it  goes from start to end - 1  in end if we pass -2 value it means do not include last 2 char same for -3 -4
// substring(start,end)   same as slice but not accept negative
// substr(start,length)   same as slice but end represent the length to be extracted

var str = "hello ji hello ji"
// console.log(str.slice(-8,-1))

// .toLowerCase()  .toUpperCase()  .trim() =>  to delete white space from both side    .split("") to convert string to array on basis of the parameter




// 4 ways to create date in js
// console.log(new Date()) 2024-02-14T11:06:35.411Z
// console.log(new Date().toLocaleString())  14/2/2024, 4:36:35 pm
// console.log(new Date().toString()) Wed Feb 14 2024 16:36:35 GMT+0530 (India Standard Time)


// Date.now() =>  returns time in ms from jan 1 1970 till now
// toLocaleTimeString , toLocaleDateString
// new Date(year,month,date,hour,min,sec,ms)
// console.log(new Date(2024,1,4,22,20,35,0).toLocaleString())


// CEIL VS ROUND  =>  ceil 99.01 ki 100 krdega round 99 krdega round means round off 

// console.log(Math.floor((Math.random()*10000) + (Math.random()*1000) + (Math.random()*100) + (Math.random()*10)));




// WINDOW  =>  window is main container or we can say the global object and any operations related to entire browser window can be part of window object
//  where document is child of window also not compulsory to refer window like window.location or window.alert just mention the name but in case of dom we need to refer like document .query selector also
//  dom is used to change only html properties of window cannot be used by dom

// bom => browser object model

// window has three child DOM => document ,  BOM => navigator,screen , location,frames,history,xml request and JAVASCRIPT => object,array,function


// ********   html is the root of the document
