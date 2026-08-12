import express from "express";
import MyUserController from "../controllers/MyUserController";
import {jwtCheck, jwtParse} from "../middleware/auth";

const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/", jwtParse, MyUserController.updateCurrentUser)
export default router;