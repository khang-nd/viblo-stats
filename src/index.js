const express = require("express");
const statistics = require("./getStats");

const app = express();
const port = process.env.PORT || 3000;

app.get("/favicon.ico", (_, res) => res.status(204));
app.route("/:username").get(statistics);
app.listen(port, () => console.info("Listening on port " + port));
