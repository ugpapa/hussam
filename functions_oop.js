// Imp point:
// Upon execution, arrow functions assume the scope of function definition and not the scope of function call.

// normal named function
function add(a,b){
    return a+b
}
result = add(3,5)
console.log(result)

// normal named function as an arrow function
let addArrow = (a,b) => a+b
console.log(addArrow(3,4))

// annoymous function as an arrow function
function add_delayed(a,b){
    setTimeout(()=>{
        console.log(a+b)
    },200)
}
add_delayed(3,3)

// Upon execution, arrow functions assume the scope of function definition and not the scope of function call.
class employee{
    constructor(firtName, lastName, salary){
        this.firtName= firtName
        this.lastName = lastName
        this.fullName = firtName+ ''+lastName
        this.email = firtName+'.'+lastName+'@company.com'
        this.salary = salary
    }
    printNameArrow(){
        setTimeout(()=>{
            console.log('Arrow: ' + this.email)
        }, 200)
    }

    printNameFunction(){
        setTimeout(function(){
            console.log('Normal Annonymous Function: ' + this.email)
        },200)
    }

}

let employee1 = new employee('hussam','haq',10000)
console.log(employee1.fullName)
employee1.printNameArrow()
employee1.printNameFunction()