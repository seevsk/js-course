const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM D YYYY h:mm:ss a'));

console.log(moment().format('LLLL', diaHoy));

console.log(moment().add(3, 'days').calendar());

// https://momentjs.com/ libreria 