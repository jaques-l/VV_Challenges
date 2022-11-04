const vogal_a = ['a', 'ã', 'â', 'á', 'à']
const vogal_e = ["e", "ê", "é", "è"]
const vogal_i = ['i', 'î', 'í', 'ì']
const vogal_o = ['o', 'ô', 'õ', 'ó', 'ò']
const vogal_u = ['u','û', 'ú', 'ù']
const tot_vogal = document.getElementById('tot-vogal')
const vogal_mais_repetida = document.getElementById('most-repeated')

ready.addEventListener('click', function(){

const string = document.getElementById('input'); 
const result = countVowel(string.value); 

})

function countVowel(str) {  
    let count_a = 0; 
    let count_e = 0; 
    let count_i = 0; 
    let count_o = 0; 
    let count_u = 0; 
    
    for (let letter of str.toLowerCase()) { 
        if (vogal_a.includes(letter)) { 
            count_a++; 
        }else if (vogal_e.includes(letter)) { 
            count_e++; 
        }else if (vogal_i.includes(letter)) { 
            count_i++; 
        }else if (vogal_o.includes(letter)) { 
            count_o++; 
        }else if (vogal_u.includes(letter)) { 
            count_u++; 
        }
    }  

    const tot = count_a + count_e + count_i + count_o + count_u
    let most_repeated
    if((count_a > count_e) && (count_a > count_i) && (count_a > count_o) && (count_a > count_u)){
        most_repeated = "A"
    }else if(((count_e > count_a) && (count_e > count_i) && (count_e > count_o) && (count_e > count_u))){
        most_repeated = "E"
    }else if(((count_i > count_a) && (count_i > count_e) && (count_i > count_o) && (count_i > count_u))){
        most_repeated = "I"
    }else if(((count_o > count_a) && (count_o > count_e) && (count_o > count_i) && (count_o > count_u))){
        most_repeated = "O"
    }else if(((count_u > count_a) && (count_u > count_e) && (count_u > count_i) && (count_u > count_o))){
        most_repeated = "U"
    }else {
        most_repeated = 'Nenhuma vogal aparece mais.'
    }

    tot_vogal.innerText = `Quantidade de vogais :
    ${tot}`
    vogal_mais_repetida.innerText = `Vogal que mais se repete :
    ${most_repeated}`

    return tot
    } 
