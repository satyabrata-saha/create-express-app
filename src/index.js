import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on http://localhost:${process.env.PORT}`);
})


