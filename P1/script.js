const disciplinaInput = document.getElementById('disciplina');
const nota1Input = document.getElementById('nota1');
const nota2Input = document.getElementById('nota2');
const calcularButton = document.getElementById('calcular');
const resultadoModal = document.getElementById('resultado');
const fecharButton = document.getElementById('fechar');

calcularButton.addEventListener('click', function() {
    const disciplina = disciplinaInput.value;
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('As notas devem ser números.');
        return;
    }

    const media = (nota1 * 0.4) + (nota2 * 0.6) / 2;

    const resultado = document.getElementById('media-resultado');
    resultado.textContent = media.toFixed(2);

    const disciplinaResultado = document.getElementById('disciplina-resultado');
    disciplinaResultado.textContent = disciplina;

    const nota1Resultado = document.getElementById('nota1-resultado');
    nota1Resultado.textContent = nota1.toFixed(2);

    const nota2Resultado = document.getElementById('nota2-resultado');
    nota2Resultado.textContent = nota2.toFixed(2);

    resultadoModal.classList.add('ativo');

    if (media >= 6) {
        resultadoModal.classList.add('aprovado');
    } else {
        resultadoModal.classList.add('reprovado');
    }
});

fecharButton.addEventListener('click', function() {
    resultadoModal.classList.remove('ativo');
    resultadoModal.classList.remove('aprovado');
    resultadoModal.classList.remove('reprovado');
});