// in browser

// import {add, a, b} from './modularization_1.js';
// console.log(add(a,b)); // 59

// in node.js env
// if (module.name === require.main.name) {
  
//   const imports = require("./modularization_1.js");
//   console.log(imports.add(imports.a, b));
// }

if (module.name ===require.main.name) {
  const {add,a,b} = require("./modularization_1.js");
  console.log(add(a,b));
}