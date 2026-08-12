import { body } from "express-validator";

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),

    ];