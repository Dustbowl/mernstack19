function add(a, b){
    return a+b;
}
console.log(add(1,2));

var square = function(i){
    return i*i;
}
console.log(square(3));

(function now(){
    console.log("Printing something now");
})()

function Employee(id, name, position, salary){
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary; 
    this.getId= function(){
        return this.id;
    }
}
var obj = new Employee(1, 'Anthony', 'DBA', 99999);
console.log(obj.getId());

obj.shares = 40;
obj.getShares = function() {
    return this.shares;
}
console.log(obj.getShares());