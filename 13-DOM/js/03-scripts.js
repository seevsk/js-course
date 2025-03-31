// Como seleccionar elementos por su id - recuerda que los id solo se utilizan una ves por documento 

const formulario = document.getElementById('formulario');
console.log(formulario);

const noExiste = document.getElementById('no-existe');
console.log(noExiste);

// Si en caso se repitiera el id, cosa que es algo raro, el getElementById seleccionaria el primero que este arriba, solo selecciona una vez no multiples como el de clases.

// los get estan fuera de moda, el nuevo selector es querySelector