document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('enviar4').addEventListener('click', function () {
        const dni = parseInt(document.getElementById('dni').value, 10);
        const answer = document.getElementById('answer4');
        
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        if (dni >= 0 && dni <= 99999999) {
            const resto = dni % 23;
            const letra = letras[resto];
            answer.textContent = `La letra correspondiente a su DNI es: ${letra}`;
        } else {
            answer.textContent = 'Inserte un número entre 0 y 99999999';
        }
    });
});
