const https = require("https");

const rawURL =
  "https://raw.githubusercontent.com/olivierlacan/keep-a-changelog/master/CHANGELOG.md";

const call = _args => {
  https
    .get(rawURL, resp => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        console.log(data);
      });
    })
    .on("error", err => {
      console.log("Error: " + err.message);
    });
};

module.exports = {
  call
};
