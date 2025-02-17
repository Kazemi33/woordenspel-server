import { dbQuery } from "../db/connect.js";

export const seasons = async (req, res) => {
  try {
    const result = await dbQuery("SELECT * FROM seasons");
    return res.status(200).json({ seasons: result, message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const clothes = async (req, res) => {
  try {
    const result = await dbQuery("SELECT * FROM clothes");
    return res.status(200).json({ clothes: result, message: "Success" });
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
