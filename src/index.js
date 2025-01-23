import dotenv from "dotenv"
dotenv.config({path: "./.env"})
import connect_database from "./db/index.js"
import app from "./app.js"
 
connect_database()
.then(()=> {
    const PORT = process.env.PORT || 5001

    app.on("error", (err) => {
        console.log(`App error: ${err}`)
        throw err
    })

    app.listen(PORT, ()=> {
        console.log(`Server is running at: ${PORT}`)
    })
})
.catch((err) => {
    console.log("DB Connection error")
})





/*
import express from "express"
const app = express()
 
;(async() => {
    try {
        const database = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("DATABASE: ", database)

        app.on("error", (err) => {
            console.log("ERR: ", err);
            throw err ; 
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`) ;
        })


    }
    catch(err){
        console.log("ERROR: ", err);
        process.exit(0) ;
    }
})()
*/