function add(a,b){
    return a+b;
}

const a= 29;
const b= 30;

// // in browser
// export {add, a, b}

// in node.js env
module.exports = {add, a, b}