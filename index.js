const express = require('express');
// import express from "express";

const app = express();
const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});

app.listen(port, () => {
  console.log(`Starting Server at http://localhost:${port}`);
});
