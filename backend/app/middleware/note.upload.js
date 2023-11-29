import multer from "multer"

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/note')
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
})
const filter = (req,file,cb)=>{
    let fileType = ['image/png','image/jpg','image,jpeg']
    if (fileType.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const noteUpload = multer({
    storage:storage,
    filter
})
export default noteUpload