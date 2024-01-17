
function myFunction(p1, p2){


return p1*p2;

//     let primNumbers = [2, 3, 5,7];
// let evenNumbers = [2, 4, 6, 8];
// let oddNumbers = [1, 3, 5, 7, 9];
// let joinArrays = primNumbers.concat(evenNumbers, oddNumbers);

}
let result = myFunction(10, 30);
document.getElementById("fst").innerHTML= result;

var langgues1 = ["javascript", "Python", "Java"];
var languse2 = ["c", "c++"];
var new_arr =  langgues1.concat(languse2);
document.getElementById("scnd").innerHTML = new_arr;

var new_arr1 = languse2.concat("Lua", langgues1);
document.getElementById("thrd").innerHTML=new_arr1;

// //Example 2: Concatenating nested arrays
// var randomList = [1, 2, 3];
// var randomNestedList = [[4, 5], [6, 7]];
// var combined = randomList.concat(randomNestedList); 
// ocument.getElementById("4th").innerHTML = combined;
// console.log(combined)// [1, 2, 3, [4, 5], [6, 7]]

// // changing the value 1 to 0
// randomList[0] = 5;
// console.log(randomList); // [5, 2, 3]

// // changes not reflected in concatenated array
// console.log(combined); // [1, 2, 3, [4, 5], [6, 7]]

// // modifying nested list (adding 6 to first element)
// randomNestedList[0].push(6);
// console.log(randomNestedList); // [[4, 5, 6], [6, 7]]

// console.log(combined)// [1, 2, 3, [4, 5, 6], [6, 7]]