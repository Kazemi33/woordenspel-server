import express from "express";
import { router } from "./routes/routes.js";
import cors from "cors";

const app = express();

const options = {
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
};

app.use(cors(options));
app.use(express.json());
app.use("/", router);

// const uploadFiles = () => {
//   return '<form action="/profile" method="post" enctype="multipart/form-data">  <input type="file" name="avatar" /></form>';
// };

// app.get("/", (req, res) => {
//   res.send(uploadFiles());
// });

const PORT = 5000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
