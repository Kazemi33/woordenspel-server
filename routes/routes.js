import { Router } from "express";
import {
  clothes,
  seasons,
  setImageClothes,
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
router.get("/clothes", clothes);
router.get("/words", words);

//post request for image upload

router.post("/clothes/:id", upload.single("image"), setImageClothes);
router.post("/words/:id", upload.single("image"), setImageWords);
