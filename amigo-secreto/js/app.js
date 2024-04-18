let arrayNomes = []


function adicionar() {
    let nomes = document.getElementById('nome-amigo').value
    let listaAmigos = document.getElementById('lista-amigos')

    if (nomes == '') {
        alert('Insira um nome válido e não repita os nomes')
    }

    if (arrayNomes.includes(nomes)) {
        alert('Nome já adicionado!');
        return;
    }

    arrayNomes.push(nomes)
    listaAmigos.textContent = arrayNomes

    atualizaLista()
    atualizaSorteio()
}

function sortear() {
    let nomesSorteados = document.getElementById('lista-sorteio')
    nomesSorteados.innerHTML = ''
    embaralha(arrayNomes)
    if (arrayNomes.length < 3) {
        alert('Quantidade mínima de participantes: 3')
    } else {
        for (let i = 0; i < arrayNomes.length; i++) {
            if (i == arrayNomes.length - 1) {
                nomesSorteados.innerHTML = nomesSorteados.innerHTML + arrayNomes[i] + '->' + arrayNomes[0] + "<br>"

            } else {
                nomesSorteados.innerHTML = nomesSorteados.innerHTML + arrayNomes[i] + '->' + arrayNomes[i + 1] + "<br>"
            }
        }
    }
}

function embaralha(lista) { //função para embaralhar os elementos do array

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    arrayNomes = []
    let nomesSorteados = document.getElementById('lista-sorteio').innerHTML = ''
    let listaAmigos = document.getElementById('lista-amigos').innerHTML = ''

}

function removeAmigo(index) {
    arrayNomes.splice(index, 1);
    atualizaLista();
    atualizaSorteio();
}

function atualizaSorteio() {
    let nomesSorteados = document.getElementById('lista-sorteio').innerHTML = ''
}

function atualizaLista() {
    let listaAmigos = document.getElementById('lista-amigos'); listaAmigos.innerHTML = ''

    for (let i = 0; i < arrayNomes.length; i++) {
        let paragrafo = document.createElement('p')
        paragrafo.textContent = arrayNomes[i]

        paragrafo.addEventListener('click', function () {
            removeAmigo(i)
        });
        listaAmigos.appendChild(paragrafo);
    }
}




