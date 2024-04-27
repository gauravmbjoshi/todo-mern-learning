const express = require("express"); //initialixe express app
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express(); //execute the express function
const port = 3000; //defining the port value
const cors = require("cors");
app.use(express.json()); //using express json format
app.use(
  cors({
    origin: "http://localhost:5173",
  })
); //using cors to send requests from diffrent frontend url to backend url
app.listen(port, () => {
  console.log(`TODO-Backend listening at http://localhost:${port}`);
});
//a simple console.log to know that express is working fine

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body; // take the data from the body fill the data in the createPayload veriable
  const parsedPayload = createTodo.safeParse(createPayLoad); //push that data to the schema using createTodo.safeParse(createPayload)
  if (!parsedPayload.success) {
    res.status(411).json({ message: "you have sent the wrong input" }); //The 411 status code, also known as "Length Required", means the server has rejected a request because it doesn't have a defined Content-Length header.
    return;
  }
  //   put the thing in mongo db
  await todo.create({
    title: parsedPayload.data.title,
    description: parsedPayload.data.description,
    completed: false,
  });
  res.json({ msg: "todo Created" });
});
app.get("/todo", async (req, res) => {
  const todos = await todo.find({});
  res.json(todos);
});
app.put("/complete", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "you have sent the wrong input",
    });
    return;
    // it works same as above but for updating the payload
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({ msg: "todo completed" });
});
