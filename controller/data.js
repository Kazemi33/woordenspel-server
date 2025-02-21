import { dbQuery } from "../db/connect.js";

export const seasons = async (req, res) => {
  try {
    const result = await dbQuery("SELECT * FROM seasons");
    return res.status(200).json({ seasons: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const categorys = async (req, res) => {
  try {
    const result = await dbQuery("SELECT * FROM category");
    return res.status(200).json({ seasons: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const words = async (req, res) => {
  try {
    const result = await dbQuery("SELECT * FROM words");
    return res.status(200).json({ words: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

//Update words image upload functionality
export const setImageWords = async (req, res) => {
  const { id } = req.body;
  const image = req.file.filename;
  try {
    const result = await dbQuery(
      "UPDATE words SET image_url = ? WHERE id = ?",
      [image, id]
    );
    return res
      .status(200)
      .json({ data: result, message: "word image has been saved" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
