import mySql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mySql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  typecast: function (field, next) {
    if (field.type === "TINY" && field.length === 1) {
      return field.string() === "1"; // 1 = true, 0 = false
    }
    return next();
  },
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

export async function dbQuery(query, values) {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
}
