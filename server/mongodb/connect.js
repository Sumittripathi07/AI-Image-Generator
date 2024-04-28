import mongoose from "mongoose";

const connectDb = (uri) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Mongodb connection established successfully");
    })
    .catch((err) =>
      console.error(`Error occurred while connecting to mongodb: ${err}`)
    );
};

export default connectDb;
