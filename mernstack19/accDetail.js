function call(account) {
    console.log("Sessions:" + account.session)
}
function login(acc, func){
    login = true;
    console.log("Login successful")
    console.log("name:"+acc.name)
    console.log("password:"+ acc.password)
    acc.session++;
    func(acc);
}

let a = {
    name : "anthony",
    password : "Securepassword",
    session : 0
}
login(a, call)