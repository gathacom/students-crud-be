import express from "express";
import { 
    create, 
    index, 
    show, 
    update, 
    destroy 
} from "../controllers/Product.js";
const router = express.Router();

router.get("/students", index);
router.get("/students/:id", show);
router.post("/students", create);
router.patch("/students/:id", update);
router.delete("/students/:id", destroy);


export default router