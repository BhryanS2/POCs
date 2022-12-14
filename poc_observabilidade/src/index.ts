import "./tracer";

import express from "express";
import crypto from "node:crypto";

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
  const { token } = req.headers;

  const { name, email } = req.body;

  if (!token) {
    return res.status(401).end();
  }

  if (!name || !email) {
    return res.status(400).json({
      error: "fields requireds",
      fields: {
        name: name ? "Name is required" : "",
        email: email ? "Email is required" : "",
      },
    });
  }

  const user = {
    id: crypto.randomBytes(8).toString("hex"),
    name,
    email,
  };

  return res.json(user).end();
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3333, () => {
  console.log("Server running on port 3333");
});
