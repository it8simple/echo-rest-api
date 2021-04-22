const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.argv[2] || 3200;

app.use(bodyParser.text({"type": "*/*"}));

app.get("/echo", (req, res, next) => {
    res.status(200).send(req.body);
});

app.listen(port, () => {
    console.log("Echo server listening on port", port);
});
