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

// rewrite twice to memorize syntax

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


function errorCheck(){

}

// Promises verus callback

// Handling via callbacks
const isHot = 1;
const isRaining = true;

function weatherCheck(callback, errorCallback) {
    if (typeof isHot !== 'boolean' || typeof isRaining !== 'boolean') {
        let message = {
            name: 'Type',
            message: 'Error'
        };
        errorCallback(message);
    } else if (isHot && isRaining) {
        let message = 'It is humid';
        callback(message);
    } else if (!isHot && isRaining) {
        let message = 'It is cold weather';
        callback(message);
    } else if (!isHot && !isRaining) {
        let message = 'It is pleasant weather';
        callback(message);
    } else if (isHot && !isRaining) {
        let message = 'It is hot weather';
        callback(message);
    }
}

weatherCheck(
    (message) => {
        console.log(message);
    },
    (message) => {
        console.log(message.name + message.message);
    }
);

// Handling via promises

const isHotPromise = false;
const isRainingPromise = true;

function weatherCheckPromises() {
    return new Promise((resolve, reject) => {
        if (typeof isHotPromise !== 'boolean' || typeof isRainingPromise !== 'boolean') {
            let message = {
                name: 'Type',
                message: 'Error'
            };
            reject(message);
        } else if (isHotPromise && isRainingPromise) {
            let message = 'It is humid';
            resolve(message);
        } else if (!isHotPromise && isRainingPromise) {
            let message = 'It is cold weather';
            resolve(message);
        } else if (!isHotPromise && !isRainingPromise) {
            let message = 'It is pleasant weather';
            resolve(message);
        } else if (isHotPromise && !isRainingPromise) {
            let message = 'It is hot weather';
            resolve(message);
        }
        
    })

}

weatherCheckPromises().then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message.name+message.message)
})


// promises' methods

const downloadFileOne = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Downloaded file one')

    }, 2000)
    
})

const downloadFileTwo = new Promise((resolve, reject) => {
    resolve('Downloaded file two')
})

const downloadFileThree = new Promise((resolve, reject) => {
    resolve('Downloaded file three')
})

// returns a message as soon as the first promise resolves
Promise.race([
    downloadFileOne,
    downloadFileTwo,
    downloadFileThree
]).then((message)=>{
    console.log(message)
})

// waits for all the promises to get resolved and returns an array of messages
Promise.all([
    downloadFileOne,
    downloadFileTwo,
    downloadFileThree
]).then((messages)=>{
    console.log(messages)
})