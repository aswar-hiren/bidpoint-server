const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("(server response) BidPoint ds!"));

app.listen(port, () => console.log(`bidpoint server listening on port ${port}!`));
