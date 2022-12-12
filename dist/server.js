var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
var files = [
    { name: "Moshe", file: "567", id: "yjnbcsgs" },
    { name: "Miriam", file: "234", id: "sgfdgdfg" },
    { name: "Aharon", file: "789", id: "jjghkgutyutyu" },
];
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
