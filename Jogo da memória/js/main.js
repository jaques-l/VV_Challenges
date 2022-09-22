let primeiraCarta = ''
let segundaCarta = ''
let mesa = document.querySelector('.mesa')
let init = document.getElementById('comeca')

init.addEventListener('click', function(){
	let quantidadeJogadores = document.getElementById('jogadores')
	let jogador = Number(quantidadeJogadores.value)	
	if ( jogador === 1){	
		inicio()
		escondeBotao()
	}else if (jogador === 2){
		inicio()
		escondeBotao()
	}else if (jogador === 3){
		inicio()
		escondeBotao()
	}else if (jogador === 4){
		inicio()
		escondeBotao()
	}else if(jogador === 5){
		inicio()
		escondeBotao()
	}else{
		alert('Número de jogadores inválido')
	}
})

let quemJoga = () => {
    if (vez == P1){
        let jogador = document.querySelectorAll('h2 .vez')[0]
        jogador.setAttribute('src', 'img/x.png')
    } else{
        let jogador = document.querySelectorAll('h2 .vez')[0]
        jogador.setAttribute('src', 'img/o.png')
    }
}

let escondeBotao = () => {
	init.style.display = 'none';
}

let inicio = () => {

    let duplica = [...cartas, ...cartas]
    let embaralhar  = duplica.sort(() => Math.random() - 0.5)

    embaralhar.forEach((item) => {
        let carta = criaCarta(item)
        mesa.appendChild(carta)
    })
}

let cartas = [
    'coracao',
    'espadas',
    'paus',
    'ouro',
    'naipes'
]

let criarElemento = (tag, className) => {
    let element = document.createElement(tag)
    element.className = className

    return element
}

let validador = () => {
	let valorUm = primeiraCarta.getAttribute('data-value')
    let valorDois = segundaCarta.getAttribute('data-value')
	
    if (valorUm === valorDois) {
		primeiraCarta.classList.add('par')
        segundaCarta.classList.add('par')
		
        primeiraCarta = ''
        segundaCarta = ''
		
        fim()
    } else {
		setTimeout(() => {
			primeiraCarta.classList.remove('selected')
            segundaCarta.classList.remove('selected')
			
            primeiraCarta = ''
            segundaCarta = ''
        }, 500)
    }
}

let revealcarta = ({target}) => {
    let carta = target.parentNode
    if (carta.className.includes('selected')) {
		return
    }
	
    if (primeiraCarta === '') {
		carta.classList.add('selected')
        primeiraCarta = carta
    } else if (segundaCarta === '') {
		carta.classList.add('selected')
        segundaCarta = carta
		
        validador()
    } else {
		
	}
	
    carta.classList.add('selected')
}

let criaCarta = (item) => {
	let carta   = criarElemento('div', 'carta')
    let frente  = criarElemento('div', 'frente')
    let verso   = criarElemento('div', 'verso')
	
    frente.style.background = `url('../img/${item}.png')`
	
    carta.appendChild(frente)
    carta.appendChild(verso)
	
    carta.addEventListener('click', revealcarta)
    carta.setAttribute('data-value', item)
	
    return carta
}

let fim = () => {
	let pairedcartas = document.querySelectorAll('.par')

	if (pairedcartas.length === 10) {
		setTimeout(() => {
			alert('Jogo encerrado!')
			document.location.reload(true)
		}, 500)
	}
}