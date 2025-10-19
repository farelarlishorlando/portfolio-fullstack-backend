import express from "express";
import Project from "../models/Project.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const list = await Project.find().sort({ createdAt: -1 });
  res.json(list);
});

router.post("/", async (req, res) => {
  try {
    const p = new Project(req.body);
    await p.save();
    res.status(201).json(p);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
