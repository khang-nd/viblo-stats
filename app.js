const statistics = require("./src/getStats");
const app = require("express")();

const port = process.env.PORT || 3000;

app.get("/favicon.ico", (_, res) => res.status(204));
app.route("/:username").get(statistics);
app.listen(port, () =>
  console.info("Server is running at: http://localhost:" + port)
);

module.exports = app;
