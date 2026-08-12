import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";
import {validateMyUserRequest} from "../middleware/validation";

const router = express.Router();


router.get("/", jwtCheck, MyUserController.getCurrentUser)
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/", jwtCheck, validateMyUserRequest, MyUserController.updateCurrentUser);

export default router;
