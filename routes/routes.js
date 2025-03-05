import { Router } from "express";
import {
  categorys,
  getWordsCategory,
  getWordsSeasons,
  seasons,
  setImageWords,
  words,
} from "../controller/data.js";

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const filename = file.originalname.split(".")[0];
    cb(null, `${filename}-${Date.now()}.${ext}`);
  },
});
const upload = multer({
  storage: storage,
});

export const router = Router();
router.get("/seasons", seasons);
router.get("/category", categorys);
router.get("/words", words);
router.get("/words/category/:category_id", getWordsCategory);
router.get("/words/seasons/:seasons_id", getWordsSeasons);

//post request for image upload

router.post("/words/:id", upload.single("image"), setImageWords);
