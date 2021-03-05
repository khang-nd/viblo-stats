const axios = require("axios").default;
const API = "https://api.viblo.asia/users/";

module.exports = (username) =>
  axios.get(API + username).then((response) => response.data);
