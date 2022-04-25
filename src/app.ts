import express from 'express'
import api from './Routes/api'
import login from './Routes/login'
import dotenv from 'dotenv'
import handleError from './Middlewares/handleGlobalException'
dotenv.config()
const app = express()
app.use(express.json())

// ROTAS DA API
app.use('/login', login)
app.use('/api', api)

app.use(handleError)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
})