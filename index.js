const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const { createUser, loginUser, getUsers } = require("./src/service/users");
const { createIdea } = require("./src/service/createIdea")
const{ getIdeabyId, getAllideas} = require ("./src/service/getAllideas")

const app = express();
app.use(express.json());
app.use(cors());

app.post("/ideas", createIdea);
app.post("/users", createUser);
app.post("/users/login", loginUser);
app.get("/users", getUsers);
app.get("/ideas/:ideaId", getIdeabyId);
app.get("/ideas", getAllideas);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
