// Arrow Fuction - son otra forma de declarar funciones

const aprendiendo = function(){
    console.log(`Aprendiendo JavaScript`);
}

const aprendiendo2 = () =>
    console.log(`Aprendiendo JavaScript`); //Cuando es una linea de funcion se pueden eliminar las llaves, e incluso el return (esta claro que es el console.log en este caso ya que estas pollito) se da por implicito.


aprendiendo();
aprendiendo2();
