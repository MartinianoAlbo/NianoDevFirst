import  Sequelize  from "sequelize";
import db from "../config/db.js";

export const Terreno = db.define('terrenos',{
    padron: {
        type: Sequelize.STRING
    },
    matricula: {
        type: Sequelize.STRING
    },
    propietario: {
        type: Sequelize.STRING
    },
    domicilio:{
        type: Sequelize.STRING
    },
    responsable_fiscal: {
        type: Sequelize.STRING
    },
    cloacas: {
        type: Sequelize.STRING
    },
    gas: {
        type: Sequelize.STRING
    },
    agua: {
        type: Sequelize.STRING
    },
    alumbrado: {
        type: Sequelize.STRING
    },
    accesibilidad: {
        type: Sequelize.STRING
    },
    comisarias: {
        type: Sequelize.STRING
    },
    salud: {
        type: Sequelize.STRING
    },
    deporte: {
        type: Sequelize.STRING
    },
    maternal: {
        type: Sequelize.STRING
    },
    nivel_inicial: {
        type: Sequelize.STRING
    },
    primario: {
        type: Sequelize.STRING
    },
    secundario: {
        type: Sequelize.STRING
    },
    terciarios: {
        type: Sequelize.STRING
    },
    pasivo_urbano: {
        type: Sequelize.STRING
    },
    industrias: {
        type: Sequelize.STRING
    },
    contaminantes: {
        type: Sequelize.STRING
    },
    planes_urbanos: {
        type: Sequelize.STRING
    },
    observaciones: {
        type: Sequelize.TEXT
    }

})