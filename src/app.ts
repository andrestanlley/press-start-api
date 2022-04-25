import handleError from './Middlewares/handleGlobalException'
import authVerify from './Middlewares/authVerify'
import login from './Routes/login'
import express from 'express'
import api from './Routes/api'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

app.use(morgan('tiny'))

// ROTAS DA API
app.use('/login', login)
app.use('/api', authVerify, api)

app.use(handleError)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
})