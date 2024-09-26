// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another
var Person = {
    name : 'Anthony',
    phone : 1412351245,
    print : function() {
        return {
            name : this.name,
            phone : this.phone
        }
    }
}

console.log(Person.print());
var student1 = Object.create(Person)
student1.school = "SynergisticIT"
student1.print = function(){
    return {
        name : this.name,
        phone : this.phone,
        school : this.school
    }
}
console.log(student1.print())
var location = "High School"

var student2 = Object.assign(Person, location)
console.log(student2.print())

var student3 = Object.assign(Person, student1, student2)
student3.print = function(){
    return {
        name : this.name,
        phone : this.phone,
        school : this.school,
        location : this.location
    }
}

console.log(student3.print());

module.exports = {
    Person,
    student1,
    student2,
    student3
}
