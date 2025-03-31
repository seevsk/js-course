const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);

//Cuanto mide el arreglo
console.log(meses.length); //Indidca cuantos elementos tiene, inicia desde 1 no desde 0.

//Interadores
for(let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}