const getStats = require("./src/getStats");
const app = require("express")();

const port = process.env.PORT || 3000;

app.get("/favicon.ico", (_, res) => res.status(204));
app.get("/", getStats);
app.listen(port, () =>
  console.info("Server running at: http://localhost:" + port)
);

module.exports = app;