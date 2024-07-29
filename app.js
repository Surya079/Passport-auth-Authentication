import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home Page
app.get("/", (req, res) => {
  res.send("welcome");
});

// Login Page
app.get("/login", (req, res) => {
  res.send("Login");
});

// Register Page
app.get("/Register", (req, res) => {
  res.send("Register");
});

app.listen(port, (req, res) => {
  console.log(`Server run ${port}`);
});
