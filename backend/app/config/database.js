import { Sequelize } from "sequelize";

const database = new Sequelize('daily-activity-app','root','',{
    host:'localhost',dialect:'mysql'
})

export default database