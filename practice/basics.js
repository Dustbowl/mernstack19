/*  Question 1
 - literal: data entity that is represented as itself rather than a reference to another data entity. ex. s = "data" | "data" is a literal, s is a variable
 - data type: category or classification for a data entity. i.e. Integer, String, etc
 - function: a callable and repeatable block of code that can take inputs and return outputs
 - object: a encapsulated set of data entities and functions packaged as 1 'entity' or data structure
 - hoisting: a behavior where code will be moved to the top of the file before other blocks are executed in the situation where they are needed earlier than they are declared
 - module: exportable code of a file than can be imported and used in other files
 - prototype: an object that allows inheritance between objects
 - closure: a packaging of functions and its surrounding context
 - callback: a function executed on completetion of another function
 - overloading: declaration of an already declared function but with different parameters 
 - call and apply: the use and 'borrowing' of properties of one object to another
 - bind: the 'borrowing' of properties of one object to another where the borrower retains the property
 */

//  Question 2
    var data = "Robert "
    console.log(typeof data)
    data = .0266
    console.log(typeof data)
    data = false
    console.log(typeof data)
    data = {myname : "Test Me"}
    console.log(typeof data)
    data = 25166665
    console.log(typeof data)
    data = undefined
    console.log(typeof data)
    data = true
    console.log(typeof data)
    data = "Robert Jr."
    console.log(typeof data)
    data = null
    console.log(typeof data)
    data = {}
    console.log(typeof data)
    data = -32767
    console.log(typeof data)

//  Question 3
function showUserInfo(firstname, lastname, age) {
    console.log("First Name: "+firstname)
    console.log("Last Name: "+lastname)
    console.log("Age: "+age)
}
showUserInfo("Anthony", "Vuong", 78)

//  Question 4

//all of these will use the last declaration of the function, the rest will be 'overwritten'
function doaddition(x, y, z){
    return x+y+z;
}
console.log(doaddition(2,3,4)) // 5     normal addition 
console.log(doaddition("first", 2, "three")) // first2     autocasts 2 to a string, therefore concatenates params
function doaddition(x){
    return x
}
console.log(doaddition(2)) //NaN  returns itself
function doaddition(x, y) {
    return x+y
}
console.log(doaddition(2.3,3)) //5.3 casts to double

//  Question 5
function Person(name, age, species) {
    this.name=name;
    this.age=age;
    this.species=species;
    this.details = function() {
        return {
            name,
            age,
            species
        }
    }
}
var p1 = new Person("Anthony", 44, "Elephant")
console.log(p1.details());

//  Question 6
/*
    the purpose of call and apply is to let objects 'borrow' properties of other objects like functions even though they weren't declared with them
    bind vs apply
    bind gives the object a new property for later use
    apply just calls the former object/function for use once on the object
*/


//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
var User = {
    fname : "Arth",
    email : "yahoo@email.com",
    getName : function() {
        return this.fname
    }
}
var user1 = {
    fname : "Jared",
    email : "realemail@domain.ca"
}
let user1name = User.getName.bind(user1);
console.log(user1name())

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
//every object inherits from Prototype a set of values and properties
//a null prototype makes it so a created object can be 'fresh' so you don't inherit things you are not interested in 
let obj1 = Object.create(null)

//Q9. How do we merge different objects properties using Object class function
//Youcan use Object.assign() to merge objects or add properties to an object
let obj2 = {
    location : "Mythos"
}
let obj3 = Object.assign(obj1, obj2)

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned
module.exports = {
    native : {isNative : false}
}