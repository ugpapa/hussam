// revise promises, recursive functions, async handling, functions, async methods, dtypes, user inputs, etc.

const readline = require("readline");

function downloadFiles() {
  return new Promise((resolve, reject) => {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    function downloadFilesRecursive(count) {
      console.log("Downloading file . . .");
      setTimeout(() => {
        console.log("File downloaded!");
        rl.question("Want to download another file? y/n ", (nextAnswer) => {
          let anotherDownload = nextAnswer.trim().toLowerCase();
          if (anotherDownload === "y") {
            anotherDownload = true;
          } else {
            anotherDownload = false;
          }
          if (anotherDownload) {
            downloadFilesRecursive(count + 1);
          } else {
            rl.close();
            if (count === 1) {
              resolve(`${count} file downloaded successfully!`);
            } else {
              resolve(`${count} files downloaded successfully!`);
            }
          }
        });
      }, 2000);
    }

    rl.question("Want to download a file? y/n ", (answer) => {
      let wantToDownload = answer.trim().toLowerCase();
      if (wantToDownload === "y") {
        wantToDownload = true;
      } else {
        wantToDownload = false;
      }
      if (wantToDownload) {
        downloadFilesRecursive(1);
      } else {
        rl.close();
        reject("Download cancelled!");
      }
    });
  });
}

downloadFiles()
  .then((message) => {
    console.log(message);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
