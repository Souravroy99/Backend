import dotenv from "dotenv"
dotenv.config({path: "./.env"})
import connect_database from "./db/index.js"

 
connect_database()
.then(()=> {

})
.catch()





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