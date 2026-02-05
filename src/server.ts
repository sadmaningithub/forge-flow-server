import mongoose from "mongoose";
import { Server } from "node:http";
import app from "./app";
require('dotenv').config()


let server: Server;

const PORT = 5000;

// console.log(process.env.DB_USER);

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2vtceto.mongodb.net/?appName=Cluster0`)

        console.log('Connected to mongodb successfully');
        server = app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

main()