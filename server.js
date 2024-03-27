const express = require("express");
const studentRoutes = require("./src/student/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("some req was made here");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
