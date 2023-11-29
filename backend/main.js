import express from 'express'
import database from './app/config/database.js'
import route from './app/route/api.route.js'
const app = express()
const port = 8080
app.listen(port,()=>{
    console.log('Server Running on port: ',port)
})

try {
    await database.authenticate()
    console.log('Database Connected')
} catch (error) {
    console.log(error)
}

app.use(express.json())
app.use(route)