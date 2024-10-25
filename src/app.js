import express from "express";
import { testRouter } from "./controllers/test.controllers.js";

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));





//routes 
app.use("/", testRouter)




export { app }