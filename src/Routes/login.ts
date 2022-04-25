import express from 'express'
import { login } from '../Controllers/loginController'
const router = express.Router()

export default router
    .post('/', login)