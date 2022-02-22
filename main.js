// ESCUCHAMOS EL EVENTO DE CARGADO
window.addEventListener('load', () => {

    // CREAMOS LAS CONSTANTES QUE MANEJAREMOS
    const DAYS = document.querySelector('#days');
    const HOURS = document.querySelector('#hours');
    const MINUTES = document.querySelector('#minutes');
    const SECONDS = document.querySelector('#seconds');
    const finalMsj = document.querySelector('.final-msj');


    // INSTANCIAMOS UNA FECHA A FUTURO
    const countdownDate = new Date('Mar 21, 2022, 00:00:00').getTime();



    // CREAMOS UN INTERVALO PARA CADA ACTUALIZACION
    let interval = setInterval(function(){

        // OBTENEMOS LA FECHA ACTUAL EN MILISEGUNDOS
        const now = new Date().getTime();


        // OBTENEMOS LA DISTANCIA ENTRE AMBAS FECHAS
        let distance = countdownDate - now;


        // CALCULAMOS DIAS, HORAS, MINUTOS Y SEGUNDOS
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));

        let hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );

        let minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));

        let seconds = Math.floor ((distance % (1000 * 60)) / (1000) );



        // PINTAMOS LOS RESULTADOS
        DAYS.innerHTML = days;
        HOURS.innerHTML = hours;
        MINUTES.innerHTML = minutes;
        SECONDS.innerHTML = ('0' + seconds).slice(-2);



        // AL LLEGAR A CERO
        if(distance < 0) {
            clearInterval(interval);

            finalMsj.style.transform = 'translateY(0)';
        }

    }, 1000);

});