import express from "express";
import { Login, logOut, Me } from "../controllers/Auth.js";

const router = express.Router();

router.post("/login", Login);
router.delete("/logout", logOut);
router.get("/me", Me);

export default router;
