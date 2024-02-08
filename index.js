//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //what kindof data is being passed ; since its html urlencoded

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["password"];
  console.log(bandName);
  next();
}

function allower() {
  if (bandName === "ILoveProgramming") {
    app.post("/check", (req, res) => {
      res.sendFile(join(__dirname, "/public/secret.html"));
    });
  }
}
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// app.post("/check", (req, res) => {
//   console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
