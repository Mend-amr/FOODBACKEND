const connectURI = `mongodb+srv://Mendee:nQCRV6sloAMwFIs0@mendee.60tp4ln.mongodb.net/`;
import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connectToMongoDB;
