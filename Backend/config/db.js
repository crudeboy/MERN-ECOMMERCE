import mongoose from "mongoose"
import color from "colors"

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DATABASE_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)//exit with an error code of one
    }
}

export default connectDB;