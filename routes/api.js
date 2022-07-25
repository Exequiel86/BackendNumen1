const express = require('express');
const router = express.Router(); 
const {vistaUno, vistaVinos, vistaUnVino, crearVino, editarVino, borrarVino, consultaAxios} = require('../controller/controller.js');
const {validarId} = require('../middleware/validarId')

/* GET users listing. */
router.get('/ver', vistaVinos);
router.get("/cocktails", consultaAxios)
router.get("/ver/:id", validarId, vistaUnVino);
router.post('/crear', crearVino);
router.put("/editar/:id", validarId, editarVino);
router.delete("/eliminar/:id", validarId, borrarVino);

module.exports = router;

