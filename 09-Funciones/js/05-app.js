function sumar(a, b) {
    console.log(a+b); // a y b son parametros de funcion

}

sumar(2,3); // 2 y 3 son argumentos
sumar(223,344);

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Sebastian', 'Salas');
saludar('Sebastian');
saludar();

// En el siguiente ejercicio veremos los parametros por default, en caso no complenten los argumentos 