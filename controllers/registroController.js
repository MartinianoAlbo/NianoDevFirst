
import Swal from 'sweetalert2'
import { Terreno } from '../models/Terrenos.js'


const guardarDatos = async (req, res, next) => {
    
    // Validar campo padron
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

    const padronTerreno = (parseInt(padron));

    try {
    
        // Arreglo para Errores
        const alertas = []


        if (padron.trim()) {//trim() elimina los espacios vacios al comienzo y al final

            alertas.push({ mensaje: 'paso la validacion' })


            //Comprobando si existe otro padron igual
            const padrones = await Terreno.findAll({
                attributes: ['padron']
            })

            const padsonesJSON = JSON.stringify(padrones)

            const padronArray = JSON.parse(padsonesJSON)


            let resultado = []

            Object.keys(padronArray).forEach(e => {
              
                if (padronArray[e].padron === padronTerreno){
                    resultado.push({exito: true});
                }
            })

            if(resultado.length === 0){
                // await Terreno.create({
                //     padron,
                //     matricula,
                //     propietario,
                //     domicilio,
                //     responsable_fiscal,
                //     cloacas,
                //     gas,
                //     agua,
                //     alumbrado,
                //     accesibilidad,
                //     comisarias,
                //     salud,
                //     deporte,
                //     maternal,
                //     nivel_inicial,
                //     primario,
                //     secundario,
                //     terciarios,
                //     pasivo_urbano,
                //     industrias,
                //     contaminantes,
                //     planes_urbanos,
                //     programas,
                //     observaciones
                // })

                alertas.push({ mensajeExito: 'El registro se agrego con exito' })

            }else {
               alertas.push({mensajeExiste: 'El numero de padron ya existe'})
            }


        } else {
            if (alertas.length === 0) {
                alertas.push({ mensajeError: 'El Numero de Padron esta Vacio' })
            }
        }

        res.render('nuevo-registro', {
            alertas
        })



    } catch (error) {
        console.log(error);
    }


}

export {
    guardarDatos
}