function calcularNotas() {
    const numEstudantes = document.querySelector("#numEstudantes").value;
    const notasForm = document.querySelector("#notasForm");

    if (numEstudantes > 0) {
        notasForm.innerHTML = ''; 
        document.querySelector("#notasInput").hidden = false;

        for (let i = 0; i < numEstudantes; i++) {
            notasForm.innerHTML += `
                <label>Nota do aluno ${i + 1}:</label>
                <input type="number" class="nota" min="0" max="10" step="0.01"><br>
            `;
        }
    } else {
        alert("Insira um número válido de estudantes.");
    }
}

function calcularEstatisticas() {
    const notas = document.querySelectorAll(".nota");
    let somaNotas = 0;
    let maiorNota = -Infinity;
    let menorNota = Infinity;

    for (let i = 0; i < notas.length; i++) {
        const nota = parseFloat(notas[i].value);

        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert(`Por favor, insira uma nota válida para o aluno ${i + 1}.`);
            return;
        }

        somaNotas += nota;

        if (nota > maiorNota) {
            maiorNota = nota;
        }

        if (nota < menorNota) {
            menorNota = nota;
        }
    }

    const media = somaNotas / notas.length;

    document.querySelector("#media").innerText = `Média da turma: ${media.toFixed(2)}`;
    document.querySelector("#maiorNota").innerText = `Maior nota: ${maiorNota}`;
    document.querySelector("#menorNota").innerText = `Menor nota: ${menorNota}`;
}