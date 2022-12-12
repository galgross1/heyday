const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.static("public"));

interface File{
    name:string;
    file:string;
    id:string;
}

let files: Array<File> = [
  { name: "Moshe", file:"567", id: "yjnbcsgs" },
  { name: "Miriam", file:"234", id: "sgfdgdfg" },
  { name: "Aharon", file:"789", id: "jjghkgutyutyu" },
];




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

