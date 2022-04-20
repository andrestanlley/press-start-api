import {Router} from 'express'
import {listAll, addUser, updateUser, deleteUser} from '../Controllers/usersController'
import { userValidation } from '../Middlewares/userValidation'
import { validate } from '../Middlewares/handleValidation'
import { warning } from '../Constants/Warnings'
import handleError from '../Middlewares/handleGlobalException'

const router = Router()

export default router
    .get('/listAll', listAll)
    .post('/addUser', userValidation(), validate, addUser)
    .put('/updateUser', userValidation(), validate, updateUser)
    .delete('/deleteUser', deleteUser)
    .all('/', (req, res)=>{
        return res.status(404).send({message: warning.routeNotFound})
    })
