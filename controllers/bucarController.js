import { Terreno } from "../models/Terrenos.js";
import Swal from 'sweetalert2'



const buscarTerreno = async (req, res, next) => {
    const { padron } = req.body
    const alertas = []
    
    try {
     
        
        const terrenos = await Terreno.findAll({
            where: {
                padron: padron
            }
        });
       

        if (padron.trim() === '') {//trim() elimina los espacios vacios al comienzo y al final
            alertas.push({ mensaje: 'Introduzca un numero de padron' })

        }else if(terrenos.length === 0) {
            alertas.push({ mensaje: 'El numero de padron no existe' })
        }

        if(alertas.length>0){

            // Mostrar la vista con erores
            res.render('inicio', {
                alertas
            })

        }else{
            const terrenosString = JSON.stringify(terrenos)

            const terreno = JSON.parse(terrenosString)

            const index = Object.keys(terreno)


            const id = (terreno[index].id).toString()


            let datos = []

            Object.keys(terreno[index]).forEach(e => {
                if (terreno[index][e] === '' || terreno[index][e] === null) {
                    datos.push(e + ":  No Registrado ")
                } else if (terreno[index][e] === 'on') {
                    datos.push(e + ":  si ")
                } else {
                    datos.push(e + ": " + terreno[index][e])
                }

            });

            datos.shift()
            datos.shift()

            res.render('inicio', {
                datos,
                padron,
                id
            })
           
            
        }

    } catch (error) {
        console.log(error);
    }


}

export {
    buscarTerreno
}