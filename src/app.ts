import handleError from './Middlewares/handleGlobalException'
import express, { Request, Response } from 'express'
import router from './Routes/api'
import dotenv from 'dotenv'
import { warning } from './Constants/Warnings'
dotenv.config()
const now = new Date()
const app = express()
app.use(express.json())

// ROTAS DA API
app.use('/api', router)

app.use(handleError)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000} - ${now.getHours()}:${now.getMinutes()}`)
})