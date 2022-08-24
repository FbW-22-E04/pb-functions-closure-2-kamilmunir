//.1 with the help of closure function the state of a variable is perserved.which can be used
// at a lateral Stage.Normally when a function is executed its memory structure is wiped out.
//but in closure function this values is preserved providing the way to implement 
// the idea of  encapsulation.
//.2 The following closure function is generating the random number and preserving its 
// value 
function personalDice(name){//in this cae arg name appears closure
       // newRoll=100;      // because it is being accessed by inner function
        //console.log(newRoll)
    return function(){  
        
      let newRoll = Math.floor(Math.random() * 6) + 1;
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  const dansRoll = personalDice("Dan");
  //const zoesRoll = personalDice("Zoe");
  dansRoll();
  dansRoll();
  dansRoll()
  
  /* personalDice is outer function and creates an inner function newRoll
  if a variable is declared outside the newRoll function it will be available to newRoll
  but it should be part of personalDice.Both variables and the functions created in the main
  our outer function will remain the part of outer function.*/

  /*This is random function which limits the generation of number.*/

  /*The closure gets the variable from the lexical scop*/

  /*newRoll can be accessed by the outer function as well by any 
  function which will be defined with in inner function*/

  //Write a function that would allow you to do this using a closure.

 /* const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27*/

function base(arg){
  let vals=6   
    function adding(args){
    let val2=0
      val2=(args+vals)
     console.log(val2)
   }
    vals=50
    adding(arg*2)
  // return vals//+console.log(vals)
}
const dc=base(40)
//console.log(dc)
//dc(25)



console.log('************')
function test() {
  let a;
  console.log(a);
  console.log(foo());// difference is that its being called here ,so there is no
                      //need to adopt the procedure in line 51,52
   
  a = 1;
  function foo() {
     return 2;
  }
}

test();

console.log('/////////////////////')

let a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a*input;
  }
  a = 5;
  return otherFunction;//what happens here when we call somfunction,the returned
                      //value is assigned to firstResult,in this case returned
                      //value is function and firstResult becomes function.
                      //So when we call firstResult its actually a call to 
                      //returned function that is inner one.I have demonstrated
                      //it with two different arguments
}

const firstResult = someFunction(9);
const result = firstResult(2);
console.log(result)
console.log(firstResult(4))


//What is the result of the following code? Explain your answer.
let fullname = 'John Doe';
const obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
       getFullname: function() {
           return this.fullname;       
      }
   }
};

console.log(obj.prop.getFullname());
const test1 = obj.prop.getFullname;
console.log(test1());// because returned values is not function ,but a property
                      // therefore test1 is not function hence undefined

// What will you see in the console for the following example?
let h = 1; 
function b() { 
    h = 10; //We cant see the values of the function defined inside body of the
            //function without returning it,and its returned value is undefined
            //therefore it is displaying the globally set value of a variable
    return ; 
    function h() {} 
} 
b(); 
console.log(h);    
console.log('***************')
//Write a JavaScript program to compute the sum of an array of integers
function sum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[4] +sum(array.slice(1));
  }
}

console.log(sum([1, 2, 3, 4, 5])); // 15

//factorial
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));
