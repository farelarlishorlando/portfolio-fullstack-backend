import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";
dotenv.config();

const data = [
  {
    title: "Neon UI Kit",
    description: "Colorful UI kit with motion",
    stack: "Next.js, Tailwind",
    url: "#",
  },
  {
    title: "Dashboard Pro",
    description: "Analytics dashboard with charts",
    stack: "React, Node, Mongo",
    url: "#",
  },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Project.deleteMany({});
  await Project.insertMany(data);
  console.log("seed done");
  process.exit(0);
});
