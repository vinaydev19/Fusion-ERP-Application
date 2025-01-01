import dotdev from "dotenv";
import connectDB from "./db/connectDB.js";
import app from "./app.js";

dotdev.config({
  path: "./env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`server is not running index.js ${error}`);
    });

    app.listen(port, () => {
      console.log(`server is running at port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`mongodb db connection failed || index.js ${error}`);
  });
