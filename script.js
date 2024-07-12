document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('enviar1').addEventListener('click', function () {
        const age = document.getElementById('age').value;
        const answer = document.getElementById('answer1');

        if (isNaN(age)) {
            answer.textContent = 'Por favor, introduce un número válido.';
        } else if (age >= 18) {
            answer.textContent = 'Ya puedes conducir.';
        } else {
            answer.textContent = 'Aún no puedes conducir.';
        }
    }); //PRIMERO


    //SEGUNDO
    document.getElementById('enviar2').addEventListener('click', function () {
        const nota = document.getElementById('nota').value;
        const answer = document.getElementById('answer2');

        if (isNaN(nota) || nota < 0 || nota > 10) {
            answer.textContent = 'Por favor, introduce un número válido entre 0 y 10.';
        } else {
            let mensaje = '';
            if (nota >= 0 && nota < 3) {
                mensaje = 'Muy deficiente';
            } else if (nota >= 3 && nota < 5) {
                mensaje = 'Insuficiente';
            } else if (nota >= 5 && nota < 6) {
                mensaje = 'Suficiente';
            } else if (nota >= 6 && nota < 7) {
                mensaje = 'Bien';
            } else if (nota >= 7 && nota < 9) {
                mensaje = 'Notable';
            } else if (nota >= 9 && nota <= 10) {
                mensaje = 'Sobresaliente';
            }
            answer.textContent = mensaje;
        }
    }); //SEGUNDO


    //TERCERO
    let textos = [];
    const enviarButton = document.getElementById('enviar3');
    const cancelarButton = document.getElementById('cancelar3');
    const input = document.getElementById('texto');
    const answer = document.getElementById('answer3');

    enviarButton.addEventListener('click', () => {
        const texto = input.value.trim();
        if (texto !== '') {
            textos.push(texto);
            input.value = '';
        }
    });

    cancelarButton.addEventListener('click', () => {
        answer.textContent = textos.join(' - ');
        textos = []; 
    });




}); //final