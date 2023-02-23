const express = require("express");
const router = express.Router();
const Alien = require("../models/model"); //path of the schema doc

/*router.get("/", async (req, res) => {
  //GET all Students
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:name", async (req, res) => {
  //GET particular Student
  try {
    const alien = await Alien.findById(req.params.name);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  //POST insert a student
  const alien = new Alien({
    name: req.body.name,
    course: req.body.course,
    id: req.body.id,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send(err + "Error");
  }
});

router.patch("/:id", async (req, res) => {
  //PATCH update a particular student
  try {
    const alien = await Alien.findById(req.params.id);
    alien.name = req.body.name;
    alien.course = req.body.course;
    alien.id = req.body.id;
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send(err + "Error");
  }
});

router.delete("/:id", async (req, res) => {
  //DELETE a particular student
  try {
    const alien = await Alien.findById(req.params.id);
    alien.name = req.body.name;
    const a1 = await alien.remove();
    res.json(a1);
  } catch (err) {
    res.send(err + "Error");
  }
});

router.delete("/", async (req, res) => {
  //DELETE all students
  try {
    const alien = await Alien.remove();
    res.json(alien);
  } catch (err) {
    res.send(err + "Error");
  }
});*/

router.get("/", async (req, res) => {
  //GET all todo list
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:todo", async (req, res) => {
  //GET particular todo
  try {
    const alien = await Alien.findById(req.params.todo);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  //POST insert a student
  const alien = new Alien({
    todo: req.body.todo,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send(err + "Error");
  }
});

router.patch("/:id", async (req, res) => {
  //PATCH update a particular todo
  try {
    const alien = await Alien.findById(req.params.id);
    alien.todo = req.body.todo;
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send(err + "Error");
  }
});

router.delete("/:id", async (req, res) => {
  //DELETE a particular student
  try {
    const alien = await Alien.findById(req.params.id);
    alien.name = req.body.name;
    const a1 = await alien.remove();
    res.json(a1);
  } catch (err) {
    res.send(err + "Error");
  }
});

router.delete("/", async (req, res) => {
  //DELETE all todo
  try {
    const alien = await Alien.remove();
    res.json(alien);
  } catch (err) {
    res.send(err + "Error");
  }
});

module.exports = router;
