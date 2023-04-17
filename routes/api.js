const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");
const randomUuid = require("../public/assets/uuid.js"); //setting up to generate unique value

let db = require("../db/db.json");

router.get("/notes", (req, res) => {
  console.log(`${req.method} request recieved`);
  let notes = JSON.parse(fs.readFileSync("../db/db.json"));

  res.status(200).json(notes);
  console.log("received notes");
});

router.post("/notes", (req, res) => {
  console.log(`${req.method} request recieved`);

  const { title, text } = req.body;

  const newNote = {
    note_id: randomUuid(),
    title,
    text,
  };
  let notes = JSON.parse(fs.readFileSync("./db/db.json"));

  notes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2));

  res.json(notes);
  console.log("note created");
});

module.exports = router;
