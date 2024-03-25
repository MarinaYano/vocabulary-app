import mongoose, { Error } from "mongoose"

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI as string)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to MongoDB: ", (error as Error).message)
  }
}

export default connectToMongoDB