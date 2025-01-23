import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // File System

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null ;
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log(`File is uploaded successfully: ${res.url}`)
        return res 
    }
    catch(err) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export default uploadOnCloudinary