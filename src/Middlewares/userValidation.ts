import {body} from 'express-validator'
import { warning } from '../Constants/Warnings'

export const userValidation = () =>{
    return [
        body('user.name')
        .isLength({ min: 3, max: 50})
        .withMessage(warning.nameLenght)
        .notEmpty().withMessage(warning.emptyName)
        .not().isNumeric().withMessage(warning.noNumberName),

        body('user.surname')
        .isLength({ min: 3, max: 50})
        .withMessage(warning.surnameLenght)
        .notEmpty().withMessage(warning.emptySurname)
        .not().isNumeric().withMessage(warning.noNumberSurname),

        body("user.email")
        .isEmail().withMessage(warning.mailIncorrect)
        .isLength({ min: 10, max: 100}).withMessage(warning.mailIncorrect),

        body('user.cellphone')
        .isLength({ min: 10, max: 11}).withMessage(warning.invalidPhone)
        .notEmpty()
        .isNumeric()
        .withMessage(warning.invalidPhone),

        body('user.birthDate')
        .isDate().withMessage(warning.invalidDate),

        body('user.password')
        .custom(pass => pass == "" || (pass.length >= 6 && pass.search(/[0-9]/)))
        .withMessage(warning.passwordFormat),

        body('user.status')
        .isBoolean().withMessage(warning.invalidStatus)
    ]
}