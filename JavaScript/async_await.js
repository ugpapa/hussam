function makeRequest(webPage) {
  return new Promise((resolve, reject) => {
    console.log(`Making a request to ${webPage} . . .`);
    setTimeout(() => {
      if (webPage == "Google") {
        resolve("Welcome to Google");
      } else {
        reject("Web page not supported");
      }
    }, 1000);
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = " : How can i help?";
      resolve(response + message);
    }, 2000);
  });
}

// p.then and p.catch way
function withoutAsyncAwait() {
  return new Promise((resolve, reject) => {
    makeRequest("Facebook")
      .then((response) => {
        console.log(response);
        return processRequest(response); // return the promise of second func. into the chained .then method
      })
      .then((processedResponse) => {
        console.log(processedResponse);
        resolve();
      })
      .catch((err) => {
        console.log(err);
        resolve();
      });
  });
}

// async await way

async function main() {
  try {
    const firstRun = await withoutAsyncAwait();
    const response = await makeRequest("Google");
    console.log(response);
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

main();
