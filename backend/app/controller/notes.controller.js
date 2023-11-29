import { notes } from "../model/model.js"

class notesController{
    postNote = async(req,res)=>{
        try {
            let {title,category,deskripsi} = req.body
            let image = req.file.filename
            await notes.create({
                title:title,
                category:category,
                image:image,
                deskripsi:deskripsi,
                statusHide:0
            })
            return res.status(200).json({
                msg:"Create note successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    putNote = async(req,res)=>{
        try {
            let id = req.params
            let {title, category, deskripsi} = req.body
            await notes.update({
                title:title,category:category,deskripsi:deskripsi
            },{
                where:{id:id}
            })
            return res.status(200).json({
                msg:"Update note successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    getNotes = async(req,res)=>{
        try {
            let data = await notes.findAll({
                where:{statusHide:0},order:[
                    ['createdAt','DESC']
                ]
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    getHiddenNotes = async(req,res)=>{
        try {
            let data = await notes.findAll({
                where:{statusHide:1},
                order:[
                    ['createdAt','DESC']
                ]
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    findNote = async(req,res)=>{
        try {
            let data = await notes.findOne({
                where:{id:req.params.id}
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    destroyNote = async(req,res)=>{
        try {
            await notes.destroy({
                where:{id:req.params.id}
            })
            return res.status(200).json({
                msg:"Delete note succesfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    postNoteHidden = async(req,res)=>{
        try {
            await notes.update({
                statusHide:1
            },{
                where:{id:req.params.id}
            })
            return res.status(200).json({
                msg:"Hidden note successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
}

export default new notesController