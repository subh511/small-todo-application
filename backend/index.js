// write basic express boilerplate code,
// with express.json() middleware;

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

const port = 3000;

app.use(express.json());

/**
 * we have created a http server;
 * we have added a right set of validation;
 * at last creating a mongodb schema
 * actually putting something in mongodb,getting something lastly updating;
 */

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you have sent the wrong inputs",
    });
    return;
  }
  //put it on mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos
  })
});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you have sent the wrong inputs",
    });
    return;
  }
});

app.listen(port, function () {
  console.log(`app listening on ${port}`);
});
