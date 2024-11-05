// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

 const heroes = [
   { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
   { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
   { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
   { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
   { name: 'Batman',         family: 'DC Comics', isEvil: false },
   { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
   { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
   { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
 ]

console.log(heroes.filter((hero)=>hero.isEvil==false));
console.log(heroes.map(hero=>hero.family).filter((family, i, self)=>self.indexOf(family) == i));
console.log(heroes.map((hero)=>"sir "+hero.name));
console.log(heroes.some((hero)=>hero.isEvil!=true))
console.log(heroes);


//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one
const arr = [1, 2, 3, 4, 5]
let multiplyAll = function(...restNumberList) { 
  let product = 1

  product = restNumberList.reduce((prevNum, currNum)=>{
      return prevNum * currNum 
  },1) 

  return product;
} 
console.log(multiplyAll.apply(null, arr))
//3. Print the last name through destructuring and add a contact number:9119119110 as well
 const person = {
     userDetails :{
         first: "FirstName",
         last: "LastName"
     }
 }
let {userDetails : {last, phone = 9119119110}} = person;
console.log(last)
console.log(phone)
//4. Give me an example of const data manipulation
const person1 = {}
person1.name = "Jeff"
//5. What is the difference between for-of and for-in show with examples
//for-of and for-in iterate over lists, but for-of iterates over list properties vs for-in which iterates over list values
for(const key in person.userDetails) { 
  console.log(key);
}
for(const num of arr) {
  console.log(num);
}
//6. Give me an example of bind and write its usage, comparison with arrow function
const func = {
  name:"name",
  getName: function() {
    console.log(this.name);
  }
}
const info = {name: "thisname"}
let bound = func.getName.bind(info)
bound();

const func1 = (name)=>name;
const info1 = {name: "name2"}
console.log(func1(info1.name))
//7. Create an example showing usage of event loop in concurrent execution cycle
let i = 0;
while(i<1){ 
  setTimeout(function(){
    console.log("firstTimeout")
  }, 3000)
  setTimeout(function(){
    console.log("secondTimeout")
  }, 2000)
  setTimeout(function(){
    console.log("thirdTimeout")
  }, 1000)
  i++;
}
//8. create an example showing usage of short hand and default param.
let symbol = "symbol", shape = "shape";
let geo = {
  symbol,
  shape
}
console.log(geo)
let func2 = (figure = "square")=>figure;
console.log(func2())
console.log(func2("triangle"))
//9. Create two objects with some properties and merge them using Object method and ES6 way
let person2 = {
  first: "first",
  last: "last"
}
let height = {
  unit: "cm", 
  value: 160
};
var merge = Object.assign(person2, height)
let person3 = {
  first: "second",
  last: "final"
}
console.log(merge);
let merge1 = {...person3, ...height}
console.log(merge1);
//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let map = new Map();
map.set("name", "anthony")
console.log(map.get("name"));
console.log(map.has("name"))
map.clear()
let set = new Set();
set.add("Anthony")
set.add("Ankit")
set.add("Nareej")
set.add("Nareej")
console.log(set.has("Jerry"))
console.log(set);
set.delete("Ankit")
console.log(set)
//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      features:[
        "ArrowFunctions",
        "SpreadRest",
        "ForIn - ForOf",
        "Destructuring",
        "Shorthand"
      ]
    })
  }, 2000);
  setTimeout(()=>{
    reject({
      status: "rejected"
    })
  }, 3000)
})
//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
const arr1 = [1, 2, 3, 4, 5]
let multiplyAll1 = function(...restNumberList) { 
  let product = 1

  product = restNumberList.reduce((prevNum, currNum)=>{
      return prevNum * currNum 
  },1) 

  return product;
} 
console.log(multiplyAll1(...arr1));
//13. Use the question #11 to build promises using async and await - with multithread

//14. Create an example of generator function of your choice
function* gen(num) {
  yield num;
  yield num*num;
}
let square = gen(2);
console.log(square.next().value)
console.log(square.next().value)
//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications

//statelessness is a property an app or program has when it executes independent and unaffected by previous requests, runtimes, etc.
//http is a protocol for transferring information between a server and client, like a common spoken language
//REST is a type of API archetype that represents data on a web server as http urls (or uris) that can be used
//SPA is a Single Page Application is a type of application that renders a single page that dynamically changes and updates itself with data from the web server instead of reloading
//Classical Application/Traditional Application - typically read-only applications or web servers. Requires reload on any change