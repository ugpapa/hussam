const readline = require('readline');

let cart = [];

function addItems() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const addItemRecursive = () => {
      rl.question('Item Name: ', function (itemName) {
        const item = {};
        item.name = itemName;

        rl.question('Price: ', function (priceString) {
          const price = parseFloat(priceString);
          item.price = price;

          rl.question('Quantity: ', function (quantityString) {
            const quantity = parseFloat(quantityString);
            item.quantity = quantity;

            cart.push(item);

            rl.question('Another item? y/n: ', function (anotherItem) {
                if (anotherItem!=='y' && anotherItem!=='n'){
                    rl.close();
                    reject('Wrong key pressed') // reject promise with an error message
                }else if (anotherItem === 'y') {
                addItemRecursive(); // Recursive call
              } else {
                rl.close();
                resolve(cart); //resolve promise with cart array
              }
            });
          });
        });
      });
    };

    addItemRecursive(); // Initial call to start adding items
  });
}

// use promise methods .then and .catch
addItems().then((cart) => {
    for(var i=0; i<cart.length;i++){
        console.log(cart[i]);
    }
}).catch((error)=>{
    console.log(error)
});

