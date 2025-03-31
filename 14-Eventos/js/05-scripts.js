


window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // Al parecer da la ubicacion mediante el scroll algo asi
    if(ubicacion.top < 90) {
    console.log('El elemento ya esta visible'); 
    } else {
        console.log('Aun no da mas scroll')
    }
})