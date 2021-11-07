// import express from "express";
import express from 'express'
// import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import colors from "colors";
import productRouter from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"


dotenv.config()

connectDB()

const app = express()


app.use("/api/products", productRouter)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})



