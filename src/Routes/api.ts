import {Router} from 'express'
import {listAll, getById, addUser, updateUser, deleteUser} from '../Controllers/usersController'
import { userValidation } from '../Middlewares/userValidation'
import { validate } from '../Middlewares/handleValidation'
import { warning } from '../Constants/Warnings'

const router = Router()

export default router
    .get('/listAll/:qnt?', listAll)
    .get('/getById/:id', getById)
    .post('/addUser', userValidation(), validate, addUser)
    .put('/updateUser/:id?', userValidation(), validate, updateUser)
    .delete('/deleteUser/:id', deleteUser)
    .all('/', (req, res)=>{
        return res.status(404).send({message: warning.routeNotFound})
    })
