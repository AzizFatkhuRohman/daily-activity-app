import { Sequelize } from "sequelize";
import database from "../config/database.js";
const {DataTypes} = Sequelize
const notes = database.define('notes',{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    category:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    image:{
        type:DataTypes.STRING(50),
        allowNull:true
    },
    deskripsi:{
        type:DataTypes.STRING(1000),
        allowNull:false
    },
    statusHide:{
        type:DataTypes.INTEGER(5)
    }
},{
    freezeTableName:true
})
const activity = database.define('activity',{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    category:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    image:{
        type:DataTypes.STRING(50),
        allowNull:true
    },
    deskripsi:{
        type:DataTypes.STRING(1000),
        allowNull:false
    },
    statusHide:{
        type:DataTypes.INTEGER(5)
    }
},{
    freezeTableName:true
})

const finance = database.define('finance',{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    category:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    deskripsi:{
        type:DataTypes.STRING(1000)
    }
},{
    freezeTableName:true
})

export {notes,activity,finance}