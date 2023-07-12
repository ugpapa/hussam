// Handling async ops using callbacks

// setTimeout is async 
function getData(callback){
  setTimeout(function (){
    var data = 'Some data from server';
    callback(data);
  }, 2000)
  
}
function processData(data){
  console.log(`Processing data: ${data}`)
}

getData(processData)