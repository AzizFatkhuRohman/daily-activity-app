import { activity } from "../model/model.js"

class activityController {
    postActivity = async(req,res)=>{
        try {
            let {title,category,deskripsi} = req.body
            let image = req.file.filename
            await activity.create({
                title:title,category:category,
                image:image,deskripsi:deskripsi,
                statusHide:0
            })
            return res.status(200).json({
                msg:"Create Activity Successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    putActivity = async(req,res)=>{
        try {
            let {title,category,deskripsi} = req.body
            await activity.update({
                title:title,category:category,deskripsi:deskripsi
            },{
                where:{id:req.params.id}
            })
            return res.status(200).json({
                msg:"Update Activity Successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    getActivity = async(req,res)=>{
        try {
            let data = await activity.findAll({
                where:{statusHide:0},
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
    findActivity = async(req,res)=>{
        try {
            let data = await activity.findOne({
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
    getActivityHidden = async(req,res)=>{
        try {
            let data = await activity.findAll({
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
    postActivityHidden = async(req,res)=>{
        try {
            await activity.update({
                statusHide:1
            },{
                where:{id:req.params.id}
            })
            return res.status(200).json({
                msg:"Hidden Activity Successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
    destroyActivity = async(req,res)=>{
        try {
            await activity.destroy({
                where:{id:req.params.id}
            })
            return res.status(200).json({
                msg:"Delete Activity successfully"
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Internal server error"
            })
        }
    }
}
export default new activityController