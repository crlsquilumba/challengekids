export default function validarCrearMision(valores) {

    let errores = {};

    // Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    // validar empresa
    if(!valores.edad) {
        errores.edad = "La edad del niño es obligatoria"
    }
    
    // validar la url
    if(!valores.url) {
        
        errores.url = 'La URL del producto es obligatoria';
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ) {
        errores.url = "URL mal formateada o no válida"
    }

    // validar descripción.
    if(!valores.descripcion) {
        errores.descripcion = "Agrega una descripción de tu producto"
    }
     // validar descripción.
     if(!valores.objetivo) {
        errores.objetivo = "Debe ingresar un objetivo"
    }


    return errores;
}