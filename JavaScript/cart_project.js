// Project: Shopping Cart

// Create a simple shopping cart application that allows users to add and remove items
// from their cart. Each item will have properties such as name, price, and quantity.

const readline = require('readline');

// Implement a function to add items to the cart as a list of objects
const cart = [];

function addItems(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // item
  rl.question('Item Name: ', function(itemName) {
    const item = {};
    item.name = itemName;

    // price
    rl.question('Price: ', function(priceString) {
      const price = parseFloat(priceString);
      item.price = price;

      // quantity
      rl.question('Quantity: ', function(quantityString) {
        const quantity = parseFloat(quantityString);
        item.quantity = quantity;

        cart.push(item);

        // another item
        rl.question('Another item? y/n: ', function(anotherItem) {
          if (anotherItem === 'y') {
            // recursive call to base function
            rl.close();
            addItems(callback);
          } else {
            rl.close();
            callback(cart);
          }
        });
      });
    });
  });
}



// a callback function to display cart items and totals
addItems((cart) => {
    var totalPrice =0;
    
  for(var i =0; i<cart.length; i++){
    console.log(`\nItem: ${i+1}`)
    console.log(cart[i])
    itemPrice=cart[i].price*cart[i].quantity
    console.log(`Price for item ${i+1}: ${itemPrice}`)
    totalPrice+=cart[i].price*cart[i].quantity

  }
  console.log(`\nTotal Price ${totalPrice}`)
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('\nDo you want to remove an item? y/n ', function(string){
    let removeItem = string
    if (removeItem=='y'){
        rl.question('Which item you want to remove? ', function(string){
            rl.close()
            let itemToRemove = parseFloat(string)
            cart.splice(itemToRemove-1, 1)
            console.log('\nCart updated!')
            var remainingTotal = 0
            for(var i=0; i<cart.length; i++){
                console.log(`Remaining Item: ${i+1}`)
                console.log(cart[i])
                remainingTotal+=cart[i].quantity*cart[i].price
                
            }
            console.log(`\nRemaining Price ${remainingTotal}`)
            
        })
    }
  })
});