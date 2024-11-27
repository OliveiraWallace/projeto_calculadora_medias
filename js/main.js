const form = document.getElementById('form-atividade')
const imgAprovado = `<img src="images/aprovado.png" alt="Emoji festejando" />`;
const imgReprovado = `<img src="images/reprovado.png" alt="Emoji triste" />`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`; 
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota minima: "));

let linhas = ''; // let global para a linha não seja resetada a cada novo dado inserido

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atualizaTabela();
    atualizaMediaFinal();
    calculoMediaFinal();
});

function addLinha() {
    const inputNomeAtiviade = document.getElementById('nome-atividade');
    const inputNotaAtiviade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtiviade.value)) {
        alert(`Atividade: ${inputNomeAtiviade.value} já inserida`);
    } else {

        atividades.push(inputNomeAtiviade.value);
        notas.push(parseFloat(inputNotaAtiviade.value));
    
    
        let linha =`<tr>`;
        linha += `<td>${inputNomeAtiviade.value}</td>`;
        linha += `<td>${inputNotaAtiviade.value}</td>`;
        linha += `<td>${inputNotaAtiviade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
        
    }


    // Limpa campos após o 'submit', function ter sido usada
    inputNomeAtiviade.value = '';
    inputNotaAtiviade.value = '';

    // retorna para o campo 'inputNomeAtiviade'
    inputNomeAtiviade.focus();
};

function atualizaTabela() {
    const corpoTabele = document.querySelector('tbody');
    corpoTabele.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculoMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculoMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}