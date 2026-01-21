const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

app.post("/add", (req, res) => {
  todos.push(req.body.task);
  res.send("Added");
});

app.get("/all", (req, res) => res.json(todos));

app.listen(3000);
