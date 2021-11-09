
import { Terreno } from "../models/Terrenos.js";


const editarDatos = async (req, res, next) => {

    const { id } = req.params
    try {
        const {
            padron,
            matricula,
            propietario,
            domicilio,
            responsable_fiscal,
            cloacas,
            gas,
            agua,
            alumbrado,
            accesibilidad,
            comisarias,
            salud,
            deporte,
            maternal,
            nivel_inicial,
            primario,
            secundario,
            terciarios,
            pasivo_urbano,
            industrias,
            contaminantes,
            planes_urbanos,
            programas,
            observaciones
        } = req.body

    
        // Actualizando
        await Terreno.update(

            {
                padron,
                matricula,
                propietario,
                domicilio,
                responsable_fiscal,
                cloacas,
                gas,
                agua,
                alumbrado,
                accesibilidad,
                comisarias,
                salud,
                deporte,
                maternal,
                nivel_inicial,
                primario,
                secundario,
                terciarios,
                pasivo_urbano,
                industrias,
                contaminantes,
                planes_urbanos,
                programas,
                observaciones

            },
            {
                where: {
                    id: id
                }
            }
        )



    } catch (error) {
        console.log(error)
    }


}

export {
    editarDatos
}