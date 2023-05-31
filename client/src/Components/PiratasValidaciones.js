const validate = (valores)=>{
    let errores={};
    if (!valores.treasureChests) {
        errores.treasureChests = 'Required';
    } 

    if (!valores.imagenUrl) {
        errores.imagenUrl = 'Required';
    } 
  
    if(valores.pirateName.length < 10){
        errores.pirateName= 'El Nombre del pirata Tiene que tener Minimo 10 Caracteres';
    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.pirateName)){
        errores.pirateName= 'El Nombre del pirata Solo Debe Contener Letras y Espacios'
    }

    if(valores.pirateCatch.length < 5){
        errores.pirateCatch= 'El Nombre del pirata Tiene que tener Minimo 5 Caracteres';
    }

 return errores;
}

export default validate;