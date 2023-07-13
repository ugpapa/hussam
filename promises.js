let p = new Promise((resolve, reject) => {
    let a = 2
    if (a===2){
        resolve('Success')
    }else{
        reject('Failure')
    }
})

p.then((message)=>{
    console.log('We are in then '+ message)
}).catch((message)=>{
    console.log('We are in the catch '+ message)
})

// rewrite to memorize syntax

let p2 = new Promise((resolve, reject) => {
    let b =8
    if (b===8){
        resolve('Succes')
    }else{
        reject('Failure')
    }
})

p2.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})


let p3 = new Promise((resolve, reject) => {
    let a =11
    if(a===10){
        resolve('Success')
    }else{
        reject('Failure')
    }
})

p3.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})


// callbacks versus promises
