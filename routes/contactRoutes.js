import express from "express";
import { body, validationResult } from "express-validator";
import Message from "../models/Message.js";
const router = express.Router();

router.post(
  "/",
  body("name").notEmpty(),
  body("email").isEmail(),
  body("message").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const m = new Message(req.body);
    await m.save();
    res.status(201).json({ ok: true });
  }
);

export default router;
