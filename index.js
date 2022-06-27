// Add Express
const express = require("express");
// import express from "express";

const port = 9000;

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  // res.send("Express on Vercel");
  res.json({ message: "Hello From Express App" });
});

// Initialize server
app.listen(5000, () => {
  console.log(`Starting Server at http://localhost:${port}`);
});