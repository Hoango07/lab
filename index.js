// var $1 = 1
// console.log($1);

// var here = "is here"; //globaly
// function thisIsFunctionScope(){
//     var inside = "inside";
//     var myObject = {
//         myFunc: function () {
//             var deepInside = 1;
//             console.log(inside);
//         }
//     }
//     console.log(deepInside);
// }

// console.log(here);
var x = 10;

function calculate() {
    console.log(x);
}
calculate();

// var 
// for (let index = 0; index < 10; index++) {
//     const element = array[index];
//     console.log("inside", index);

// }
console.log("--------------------", index)
// hoisting
var x;
console.log(x);
var x = 10;
function haha() {
    var x;
    console.log(x);
    var x = 20;
    console.log(x);
}
function two() {
    console.log(x);
    return x;
}
console.log(two())
haha();

function outer() {
    var a = 1;
    inner();
    console.log('in here 1')
    function inner() {
        console.log('in here')
        var b = 2;
        console.log(a + b);
    }
}

function outer() {
    var a = 1;
    if (x % 2 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
    var x = a + 1;
    console.log(x)
}

var haha = [];
console.log(haha == true);
// if the variable is truthy
if(haha){
// if the variable is truthy doesnt have to be == to value cheat
    console.log("true");
}

var studentScore1 = 8;
var studentScore2 = 10;
var studentScore3 = 9;
var studentScore4 = 7;

var studentScores=[
    8, // studentScore1, //0 
    10, // studentScore2, //1
    9, // studentScore3, //2
    7, // studentScore4, //3
    ];
    console.log(studentScores.length) ;
var haha = [1 ,3 ,5 ,6];
/////index 0, 1, 2, 3
    console.log(studentScores[0]);
    console.log(studentScores[1]);
    console.log(studentScores[2]);
    console.log(studentScores[3]);
console.log(haha)
for (var index=0;index< studentScores.length;index++ ) {
    var studentScore=studentScores[index]
    console.log(studentScore);
}
// loop over an array
    


var inside = ["a", "b", "c"];
var nestedArray = [1, 2, inside]; //["a", "b", "c"]];
// 0, 1, 2
console.log(nestedArray);
console.log(nestedArray.length);
// console.log(temp);
// console.log(temp[1]);

var haha = {
    index0: 123,
    index1: "tuan",
    index2: "123"
};
// var hahahahha = ["123"]
// console.log(haha["index0"]);
console.log(typeof haha["index0"]);

var haha = {
    a: 123,
    b: "Hoang",
}
var a = "b";
console.log(haha["a"]);
console.log(haha[a]);
console.log(haha["b"]);

var charater ={
    health: 100,
    damage: 9000,
    inflictDamage: function () {

    }
}





var ZiffZubb = ( 1 , 20 ) ;
    if (ZiffZubb%3==0) {
        console.log("Ziff");
    } else (ZiffZubb%5==0) ;{
        console.log("Zubb");
    } (ZiffZubb%3==0,ZiffZubb%5==0) ;{
        console.log("ZiffZubb");
    } (ZiffZubb%3!==0,ZiffZubb%5!==0) ;{ 
        console.log("1");
    }



function ZiffZubb (start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("ZiffZubb");
        } 
        else if (i % 3 === 0) {
            console.log("Ziff");
        }
        else if (i % 5 === 0) {
            console.log("Zubb");
        } else {
            console.log(i);
        }
    }
}

// // greatest common divison write
// function gcd (num1, num2) {
//     let j = 1;
//     let min = num1 > num2 ? num2 : num1;
//     }
//    for (let i = 1; i < ; i++); {
//        if (num1%i===0 && num2%i===0);{
//                j = i;
//            }
//        }
//    return j;

// console.log(gcd(8, 6));
 
// Least common multiple
// example: `lcm(15, 20)`
// This should return 60;


// prime number
// nthPrime(0);
// nthPrime(1);
// nthPrime(2);
// nthPrime(3);

// nthPrime(n);

// // luba del 

function isPrime(n) {
    for (let i = 0; i < n; i++) {
        if (n % 1 === 0){
            console.log(1);
            return false;

        }
    }
    return n > 1;
}

console.log(isPrime(10));

// Capture time
let yourAgeInMilliseconds = Date.now("2021-10-05") - new Date("2002-11-21");
console.log(yourAgeInMilliseconds);

// Advanced Random Number

// console.log(getRandomInt("0","1"));

for (var i = 0; i < 10; i++) {
    var s = "";
    for (var j = 0; j < 10; j++) {
      s = `${s} outer ${i} inner ${j}`;
    }
    console.log(s);
  }
var fruits = ["apples", "oranges", "bananas"];

function listFruits() {
  for (var i = 0; i < fruits.length; i++) {
    console.log("I have some " + fruits[i]);
  } 
}   
listFruits()

var workingHour = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function workingHours(hours) {
    console.log(hours)
    var total = 0;
    for (let i = 0; i < hours.length; i++) {
        hours[i];
        total = total + hours[i];
    }
    console.log(total)
    
}
workingHours(workingHour)
workingHours([1,2,4,5])
workingHours([2,3,5,6])

const one = 1;

if (one) {
  console.log("Is truthy");
}
const zero = 0;

if (zero) {
  console.log("Is truthy");
} else {
  console.log("Isn't truth");
}