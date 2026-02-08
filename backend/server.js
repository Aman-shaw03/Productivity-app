import express from "express";
import "dotenv/config";
// import dotenv from 'dotenv'
// dotenv.config({path: '/.env'})
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world this is a Express Backend");
});

app.listen(PORT, () => {
//   console.log(process.env);
  console.log(`Port is listening on ${PORT} localhost`);
});

app.get("/new", (req, res) => {
  console.log("bacchi bamai!!!");
});
