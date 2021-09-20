const {check, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('email')
    .isEmail().withMessage('Debe ingresar un email válido'),
    
    check('color')
    .isString('on').withMessage('Debes aceptar los términos y condiciones')
]