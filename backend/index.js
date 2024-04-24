const express = require("express"); //initialixe express app
const { createTodo } = require("./types");
const app = express(); //execute the express function
const port = 3000; //defining the port value

app.use(express.json()); //using express json format

app.listen(port, () => {
  console.log(`TODO-Backend listening at http://localhost:${port}`);
});
//a simple console.log to know that express is working fine

app.get("/todo", (req, res) => {
  const createPayLoad = req.body; // take the data from the body fill the data in the createPayload veriable
  const parsedPayload = createTodo.safeParse(createPayLoad); //push that data to the schema using createTodo.safeParse(createPayload)
  if (!parsedPayload.success) {
    res.status(411).json({ message: "you have sent the wrong input" }); //The 411 status code, also known as "Length Required", means the server has rejected a request because it doesn't have a defined Content-Length header.
    return;
  }
  //   put the thing in mongo db
});
app.post("/todo", (req, res) => {});
app.put("/complete", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = createTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ message: "you have sent the wrong input" });
    return;
    // it works same as above but for updating the payload
  }
});
