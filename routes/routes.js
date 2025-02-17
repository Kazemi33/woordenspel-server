import { Router } from "express";
import { clothes, seasons, words } from "../controller/data.js";

export const router = Router();
router.get("/seasons", seasons);
router.get("/clothes", clothes);
router.get("/words", words);
