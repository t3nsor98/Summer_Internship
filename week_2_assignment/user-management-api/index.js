const express = require("express");
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET: Fetch all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST: Add a new user
app.post("/users", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// PUT: Update a user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  res.json(user);
});

// DELETE: Remove a user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log("Server running on port 3000"));
