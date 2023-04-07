import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MOGODB_ADDRESS)
        console.log("databae connected")

    }catch (err) {
        console.log(err)
    }
}

export default connectDB