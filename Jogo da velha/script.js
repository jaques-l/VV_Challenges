const P1 = "X"
const P2 = "O"
let vez = P1
let acabou = false
let emapte = false

quemJoga()
jogada()

function quemJoga()
{
    if(acabou){
        return;
    }
    if (vez == P1){
        let jogador = document.querySelectorAll('div#vez img')[0]
        jogador.setAttribute('src', 'img/x.png')
    } else{
        let jogador = document.querySelectorAll('div#vez img')[0]
        jogador.setAttribute('src', 'img/o.png')
    }

}

function jogada()
{
    let casa = document.getElementsByClassName('cell')
    for (let c = 0; c < casa.length; c++){
        casa[c].addEventListener('click', function(){
            if(acabou){
                return;
            }
            if(this.getElementsByTagName('img').length == 0){
                if(vez == P1){
                    this.innerHTML = '<img src="img/x.png" alt="" height="150" width="150">'
                    this.setAttribute('jogada', P1)
                    vez = P2

                } else{
                    this.innerHTML = '<img src="img/o.png" alt="" height="150" width="150">'
                    this.setAttribute('jogada', P2)
                    vez = P1
                }
                quemJoga()
                verificador()


            }
        })
    }
}



function verificador(){

    let a1 = document.getElementById('01').getAttribute('jogada')
    let a2 = document.getElementById('02').getAttribute('jogada')
    let a3 = document.getElementById('03').getAttribute('jogada')
    let b1 = document.getElementById('04').getAttribute('jogada')
    let b2 = document.getElementById('05').getAttribute('jogada')
    let b3 = document.getElementById('06').getAttribute('jogada')    
    let c1 = document.getElementById('07').getAttribute('jogada')
    let c2 = document.getElementById('08').getAttribute('jogada')
    let c3 = document.getElementById('09').getAttribute('jogada')

    let vencedor = ''

    if((a1 == b1 && a1 == c1 && a1 != '') || (a1 == a2 && a1 == a3 && a1 != '') ||  (a1 == b2 && a1 == c3 && a1 != '')){
        vencedor = a1
    } else if((b2 == b1 && b2 == b3 && b2 != '') || (b2 == a2 && b2 == c2 && b2 != '') ||  (b2 == a3 && b2 == c1 && b2 != '')){
        vencedor = b2
    } else if((c3 == c2 && c3 == c1 && c3 != '') || (c3 == a3 && c3 == b3 && c3 != '')){
        vencedor = c3
    } else if (a1 != '' &&
        a2 != '' &&
        a3 != '' &&
        b1 != '' &&
        b2 != '' &&
        b3 != '' &&
        c1 != '' &&
        c2 != '' &&
        c3 != '' ){            
            empate = true          
        }

    if (vencedor != '' ){
        acabou = true
        alert(`O vencedor é ${vencedor}`)
        if (acabou == true){
            resetar()
        } 
    } else if (empate == true){
        alert('Empate!')
        resetar()
    }
                    
}

function resetar(){
    let btn = document.createElement("button", 'btn');
    btn.innerHTML = "Resetar";
    btn.classList.add('btn-reset')
    document.body.appendChild(btn);
    btn.addEventListener('click', function(){
        document.location.reload(true)
    })
}