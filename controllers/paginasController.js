import { Terreno } from "../models/Terrenos.js";
import Swal from "sweetalert2";



const Inicio = async (req, res) => {

    res.render('inicio', {

     }); 

}

const datosRegistro = ( req, res,next ) => {
    const pagina = 'Nuevo Registro'


    res.render('nuevo-registro', {
        pagina,
    
    }); 

}

const editarRegistro = async (req, res, next) => {

    const pagina = 'Editar Registro'
 
    
    const {id} = req.params


    try {
        const info = await Terreno.findOne({
            where:{
                id                
            }
        }); 

        const infoString = JSON.stringify(info)

        const dato = JSON.parse(infoString)

       
        // cambia el valor de los check de on a si     
        let servicios = []
        //cloacas
        if(dato.cloacas === 'on'){
            const cloaca = {cloaca: 'si'}
            servicios.push(cloaca)
        } else {
            const cloaca = { cloaca: 'no' }
            servicios.push(cloaca)
        }
        //agua
        if (dato.agua === 'on') {
            const agua = { agua: 'si' }
            servicios.push(agua)
        }else{
            const agua = { agua: 'no' }
            servicios.push(agua)
        }
        //gas
        if (dato.gas === 'on') {
            const gas = { gas: 'si' }
            servicios.push(gas)
        } else {
            const gas = { gas: 'no' }
            servicios.push(gas)
        }
        //alumbrado
        if (dato.alumbrado === 'on') {
            const alumbrado = { alumbrado: 'si' }
            servicios.push(alumbrado)
        } else {
            const alumbrado = { alumbrado: 'no' }
            servicios.push(alumbrado)
        }

        
        const cloacas = servicios[0].cloaca
        const agua = servicios[1].agua
        const gas = servicios[2].gas
        const alumbrado = servicios[3].alumbrado

        

        res.render('editar-registro', {
            pagina,
            dato,
            cloacas,
            agua,
            gas,
            alumbrado
        })
    

    } catch (error) {
        console.log(error);
    }


}

const eliminarRegistro = async(req, res, next) => {
    const { id } = req.params

   
   
   try {

   
        await Terreno.destroy({
            where: {
                id
            }
        })
      
       setTimeout(() => {
           res.redirect('/inicio')
       }, 4000);
           
       

   } catch (error) {
       console.log(error);
   }
    
}

export {
    Inicio,
    datosRegistro,
    editarRegistro,
    eliminarRegistro,
}


//.send() se utiliza para mostrar algo en pantalla
//.render() ya espera la vista de un archivo html