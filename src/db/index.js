import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connect_database = async() => {
    try {
        const connected_DB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongodb Connected: ${connected_DB.connection.host}`)
    } 
    catch(err) { 
        console.log(`Database connection failed: ${err}`)
        process.exit(1)
    }
}

export default connect_database;