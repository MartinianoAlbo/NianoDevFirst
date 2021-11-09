import express from 'express';

import {
    Inicio,
    datosRegistro,
    editarRegistro,
    eliminarRegistro
    
} from '../controllers/paginasController.js';

import { guardarDatos } from '../controllers/registroController.js';
import { buscarTerreno } from '../controllers/bucarController.js';
import { editarDatos } from '../controllers/editarController.js';


const router = express.Router()

// Rutas
router.get('/inicio', Inicio);
router.post('/inicio', buscarTerreno);

router.get('/inicio/:id', eliminarRegistro);

router.get('/editar-registro/:id', editarRegistro);
router.post('/editar-registro/:id', editarDatos);


router.get('/nuevo-registro', datosRegistro);
router.post('/nuevo-registro', guardarDatos);



export default router