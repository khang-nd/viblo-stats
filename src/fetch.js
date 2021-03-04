const https = require("https");
const API = "https://api.viblo.asia/users/";

module.exports = (username) => {
  return new Promise((resolve, reject) => {
    https
      .get(API + username, (response) => {
        let data = "";
        response.on("data", (chunk) => (data += chunk));
        response.on("end", () => resolve(JSON.parse(data)));
      })
      .on("error", reject);
  });
};
