const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/v1/checkout", stripeRoute);

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Backend server is running!");
// });

app.listen(5003, () => {
  console.log("Backend payment server is running!");
});
