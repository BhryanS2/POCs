import "./tracer";
import { Logger } from "./logger";

import express from "express";
import crypto from "node:crypto";

const app = express();

app.use(express.json());
const logger = new Logger();

app.post("/user", (req, res) => {
  logger.log("info", "Creating user");
  const { token } = req.headers;

  const { name, email } = req.body;

  if (!token) {
    logger.log("error", "Token not found");
    return res.status(401).end();
  }

  if (!name || !email) {
    logger.log("error", "Fields requireds");
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

  logger.log("info", "User created");

  return res.json(user).end();
});

app.get("/", (req, res) => {
  logger.log("info", "Hello World");
  return res.json({ message: "Hello World" });
});

app.listen(3333, () => {
  logger.log("info", "Server running on port 3333");
  console.log("Server running on port 3333");
});
