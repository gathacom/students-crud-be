import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/Product.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running");
})
app.use(productRoute);

app.listen (process.env.PORT || 3000, () => {
    console.log("Server running");
})