const vogal_a = ['a', 'ã', 'â', 'á', 'à']
const vogal_e = ["e", "ê", "é", "è"]
const vogal_i = ['i', 'î', 'í', 'ì']
const vogal_o = ['o', 'ô', 'õ', 'ó', 'ò']
const vogal_u = ['u','û', 'ú', 'ù']
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z', 'ç']
const tot_vogal = document.getElementById('tot-vogal')
const letra_mais_repetida = document.getElementById('most-repeated')

ready.addEventListener('click', function(){

const string = document.getElementById('input'); 
const result = countVowel(string.value); 

})

function countVowel(str) {  
    let count_a = 0; 
    let count_b = 0; 
    let count_c = 0; 
    let count_ç = 0; 
    let count_d = 0; 
    let count_e = 0; 
    let count_f = 0; 
    let count_g = 0; 
    let count_h = 0; 
    let count_i = 0; 
    let count_j = 0; 
    let count_k = 0; 
    let count_l = 0; 
    let count_m = 0; 
    let count_n = 0; 
    let count_o = 0; 
    let count_p = 0; 
    let count_q = 0; 
    let count_r = 0; 
    let count_s = 0; 
    let count_t = 0; 
    let count_u = 0; 
    let count_v = 0; 
    let count_x = 0; 
    let count_y = 0; 
    let count_z = 0; 
    
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
        }else if (consonants[0].includes(letter)) { 
            count_b++; 
        }else if (consonants[1].includes(letter)) { 
            count_c++; 
        }else if (consonants[2].includes(letter)) { 
            count_d++; 
        }else if (consonants[3].includes(letter)) { 
            count_f++; 
        }else if (consonants[4].includes(letter)) { 
            count_g++; 
        }else if (consonants[5].includes(letter)) { 
            count_h++; 
        }else if (consonants[6].includes(letter)) { 
            count_j++; 
        }else if (consonants[7].includes(letter)) { 
            count_k++; 
        }else if (consonants[8].includes(letter)) { 
            count_l++; 
        }else if (consonants[9].includes(letter)) { 
            count_m++; 
        }else if (consonants[10].includes(letter)) { 
            count_n++; 
        }else if (consonants[11].includes(letter)) { 
            count_p++; 
        }else if (consonants[12].includes(letter)) { 
            count_q++; 
        }else if (consonants[13].includes(letter)) { 
            count_r++; 
        }else if (consonants[14].includes(letter)) { 
            count_s++; 
        }else if (consonants[15].includes(letter)) { 
            count_t++; 
        }else if (consonants[16].includes(letter)) { 
            count_v++; 
        }else if (consonants[17].includes(letter)) { 
            count_x++; 
        }else if (consonants[18].includes(letter)) { 
            count_y++; 
        }else if (consonants[19].includes(letter)) { 
            count_z++; 
        }else if (consonants[20].includes(letter)) { 
            count_ç++; 
        }
    }  
    const tot = count_a + count_e + count_i + count_o + count_u   

    let most_repeated
    if((count_a > count_b) && (count_a > count_c) && (count_a > count_d) && (count_a > count_e) && (count_a > count_f) && (count_a > count_g) && (count_a > count_h) && (count_a > count_i) && (count_a > count_j) && (count_a > count_k) && (count_a > count_l) && (count_a > count_m) && (count_a > count_n) && (count_a > count_o) && (count_a > count_p) && (count_a > count_q) && (count_a > count_r) && (count_a > count_s) && (count_a > count_t) && (count_a > count_u) && (count_a > count_v) && (count_a > count_x) && (count_a > count_y) && (count_a > count_z) && (count_a > count_ç)){
        most_repeated = "A"
    }else if((count_b > count_a) && (count_b > count_c) && (count_b > count_d) && (count_b > count_e) && (count_b > count_f) && (count_b > count_g) && (count_b > count_h) && (count_b > count_i) && (count_b > count_j) && (count_b > count_k) && (count_b > count_l) && (count_b > count_m) && (count_b > count_n) && (count_b > count_o) && (count_b > count_p) && (count_b > count_q) && (count_b > count_r) && (count_b > count_s) && (count_b > count_t) && (count_b > count_u) && (count_b > count_v) && (count_b > count_x) && (count_b > count_y) && (count_b > count_z) && (count_b > count_ç)){
        most_repeated = "B"
    }else if((count_c > count_b) && (count_c > count_a) && (count_c > count_d) && (count_c > count_e) && (count_c > count_f) && (count_c > count_g) && (count_c > count_h) && (count_c > count_i) && (count_c > count_j) && (count_c > count_k) && (count_c > count_l) && (count_c > count_m) && (count_c > count_n) && (count_c > count_o) && (count_c > count_p) && (count_c > count_q) && (count_c > count_r) && (count_c > count_s) && (count_c > count_t) && (count_c > count_u) && (count_c > count_v) && (count_c > count_x) && (count_c > count_y) && (count_c > count_z) && (count_c > count_ç)){
        most_repeated = "C"
    }else if((count_d > count_b) && (count_d > count_c) && (count_d > count_a) && (count_d > count_e) && (count_d > count_f) && (count_d > count_g) && (count_d > count_h) && (count_d > count_i) && (count_d > count_j) && (count_d > count_k) && (count_d > count_l) && (count_d > count_m) && (count_d > count_n) && (count_d > count_o) && (count_d > count_p) && (count_d > count_q) && (count_d > count_r) && (count_d > count_s) && (count_d > count_t) && (count_d > count_u) && (count_d > count_v) && (count_d > count_x) && (count_d > count_y) && (count_d > count_z) && (count_d > count_ç)){
        most_repeated = "D"
    }else if((count_e > count_b) && (count_e > count_c) && (count_e > count_d) && (count_e > count_a) && (count_e > count_f) && (count_e > count_g) && (count_e > count_h) && (count_e > count_i) && (count_e > count_j) && (count_e > count_k) && (count_e > count_l) && (count_e > count_m) && (count_e > count_n) && (count_e > count_o) && (count_e > count_p) && (count_e > count_q) && (count_e > count_r) && (count_e > count_s) && (count_e > count_t) && (count_e > count_u) && (count_e > count_v) && (count_e > count_x) && (count_e > count_y) && (count_e > count_z) && (count_e > count_ç)){
        most_repeated = "E"
    }else if((count_f > count_b) && (count_f > count_c) && (count_f > count_d) && (count_f > count_e) && (count_f > count_a) && (count_f > count_g) && (count_f > count_h) && (count_f > count_i) && (count_f > count_j) && (count_f > count_k) && (count_f > count_l) && (count_f > count_m) && (count_f > count_n) && (count_f > count_o) && (count_f > count_p) && (count_f > count_q) && (count_f > count_r) && (count_f > count_s) && (count_f > count_t) && (count_f > count_u) && (count_f > count_v) && (count_f > count_x) && (count_f > count_y) && (count_f > count_z) && (count_f > count_ç)){
        most_repeated = "F"
    }else if((count_g > count_b) && (count_g > count_c) && (count_g > count_d) && (count_g > count_e) && (count_g > count_f) && (count_g > count_a) && (count_g > count_h) && (count_g > count_i) && (count_g > count_j) && (count_g > count_k) && (count_g > count_l) && (count_g > count_m) && (count_g > count_n) && (count_g > count_o) && (count_g > count_p) && (count_g > count_q) && (count_g > count_r) && (count_g > count_s) && (count_g > count_t) && (count_g > count_u) && (count_g > count_v) && (count_g > count_x) && (count_g > count_y) && (count_g > count_z) && (count_g > count_ç)){
        most_repeated = "G"
    }else if((count_h > count_b) && (count_h > count_c) && (count_h > count_d) && (count_h > count_e) && (count_h > count_f) && (count_h > count_g) && (count_h > count_a) && (count_h > count_i) && (count_h > count_j) && (count_h > count_k) && (count_h > count_l) && (count_h > count_m) && (count_h > count_n) && (count_h > count_o) && (count_h > count_p) && (count_h > count_q) && (count_h > count_r) && (count_h > count_s) && (count_h > count_t) && (count_h > count_u) && (count_h > count_v) && (count_h > count_x) && (count_h > count_y) && (count_h > count_z) && (count_h > count_ç)){
        most_repeated = "H"
    }else if((count_i > count_b) && (count_i > count_c) && (count_i > count_d) && (count_i > count_e) && (count_i > count_f) && (count_i > count_g) && (count_i > count_h) && (count_i > count_a) && (count_i > count_j) && (count_i > count_k) && (count_i > count_l) && (count_i > count_m) && (count_i > count_n) && (count_i > count_o) && (count_i > count_p) && (count_i > count_q) && (count_i > count_r) && (count_i > count_s) && (count_i > count_t) && (count_i > count_u) && (count_i > count_v) && (count_i > count_x) && (count_i > count_y) && (count_i > count_z) && (count_i > count_ç)){
        most_repeated = "I"
    }else if((count_j > count_b) && (count_j > count_c) && (count_j > count_d) && (count_j > count_e) && (count_j > count_f) && (count_j > count_g) && (count_j > count_h) && (count_j > count_i) && (count_j > count_a) && (count_j > count_k) && (count_j > count_l) && (count_j > count_m) && (count_j > count_n) && (count_j > count_o) && (count_j > count_p) && (count_j > count_q) && (count_j > count_r) && (count_j > count_s) && (count_j > count_t) && (count_j > count_u) && (count_j > count_v) && (count_j > count_x) && (count_j > count_y) && (count_j > count_z) && (count_j > count_ç)){
        most_repeated = "J"
    }else if((count_k > count_b) && (count_k > count_c) && (count_k > count_d) && (count_k > count_e) && (count_k > count_f) && (count_k > count_g) && (count_k > count_h) && (count_k > count_i) && (count_k > count_j) && (count_k > count_a) && (count_k > count_l) && (count_k > count_m) && (count_k > count_n) && (count_k > count_o) && (count_k > count_p) && (count_k > count_q) && (count_k > count_r) && (count_k > count_s) && (count_k > count_t) && (count_k > count_u) && (count_k > count_v) && (count_k > count_x) && (count_k > count_y) && (count_k > count_z) && (count_k > count_ç)){
        most_repeated = "K"
    }else if((count_l > count_b) && (count_l > count_c) && (count_l > count_d) && (count_l > count_e) && (count_l > count_f) && (count_l > count_g) && (count_l > count_h) && (count_l > count_i) && (count_l > count_j) && (count_l > count_k) && (count_l > count_a) && (count_l > count_m) && (count_l > count_n) && (count_l > count_o) && (count_l > count_p) && (count_l > count_q) && (count_l > count_r) && (count_l > count_s) && (count_l > count_t) && (count_l > count_u) && (count_l > count_v) && (count_l > count_x) && (count_l > count_y) && (count_l > count_z) && (count_l > count_ç)){
        most_repeated = "L"
    }else if((count_m > count_b) && (count_m > count_c) && (count_m > count_d) && (count_m > count_e) && (count_m > count_f) && (count_m > count_g) && (count_m > count_h) && (count_m > count_i) && (count_m > count_j) && (count_m > count_k) && (count_m > count_l) && (count_m > count_a) && (count_m > count_n) && (count_m > count_o) && (count_m > count_p) && (count_m > count_q) && (count_m > count_r) && (count_m > count_s) && (count_m > count_t) && (count_m > count_u) && (count_m > count_v) && (count_m > count_x) && (count_m > count_y) && (count_m > count_z) && (count_m > count_ç)){
        most_repeated = "M"
    }else if((count_n > count_b) && (count_n > count_c) && (count_n > count_d) && (count_n > count_e) && (count_n > count_f) && (count_n > count_g) && (count_n > count_h) && (count_n > count_i) && (count_n > count_j) && (count_n > count_k) && (count_n > count_l) && (count_n > count_m) && (count_n > count_a) && (count_n > count_o) && (count_n > count_p) && (count_n > count_q) && (count_n > count_r) && (count_n > count_s) && (count_n > count_t) && (count_n > count_u) && (count_n > count_v) && (count_n > count_x) && (count_n > count_y) && (count_n > count_z) && (count_n > count_ç)){
        most_repeated = "N"
    }else if((count_o > count_b) && (count_o > count_c) && (count_o > count_d) && (count_o > count_e) && (count_o > count_f) && (count_o > count_g) && (count_o > count_h) && (count_o > count_i) && (count_o > count_j) && (count_o > count_k) && (count_o > count_l) && (count_o > count_m) && (count_o > count_n) && (count_o > count_a) && (count_o > count_p) && (count_o > count_q) && (count_o > count_r) && (count_o > count_s) && (count_o > count_t) && (count_o > count_u) && (count_o > count_v) && (count_o > count_x) && (count_o > count_y) && (count_o > count_z) && (count_o > count_ç)){
        most_repeated = "O"
    }else if((count_p > count_b) && (count_p > count_c) && (count_p > count_d) && (count_p > count_e) && (count_p > count_f) && (count_p > count_g) && (count_p > count_h) && (count_p > count_i) && (count_p > count_j) && (count_p > count_k) && (count_p > count_l) && (count_p > count_m) && (count_p > count_n) && (count_p > count_o) && (count_p > count_a) && (count_p > count_q) && (count_p > count_r) && (count_p > count_s) && (count_p > count_t) && (count_p > count_u) && (count_p > count_v) && (count_p > count_x) && (count_p > count_y) && (count_p > count_z) && (count_p > count_ç)){
        most_repeated = "P"
    }else if((count_q > count_b) && (count_q > count_c) && (count_q > count_d) && (count_q > count_e) && (count_q > count_f) && (count_q > count_g) && (count_q > count_h) && (count_q > count_i) && (count_q > count_j) && (count_q > count_k) && (count_q > count_l) && (count_q > count_m) && (count_q > count_n) && (count_q > count_o) && (count_q > count_p) && (count_q > count_a) && (count_q > count_r) && (count_q > count_s) && (count_q > count_t) && (count_q > count_u) && (count_q > count_v) && (count_q > count_x) && (count_q > count_y) && (count_q > count_z) && (count_q > count_ç)){
        most_repeated = "Q"
    }else if((count_r > count_b) && (count_r > count_c) && (count_r > count_d) && (count_r > count_e) && (count_r > count_f) && (count_r > count_g) && (count_r > count_h) && (count_r > count_i) && (count_r > count_j) && (count_r > count_k) && (count_r > count_l) && (count_r > count_m) && (count_r > count_n) && (count_r > count_o) && (count_r > count_p) && (count_r > count_q) && (count_r > count_a) && (count_r > count_s) && (count_r > count_t) && (count_r > count_u) && (count_r > count_v) && (count_r > count_x) && (count_r > count_y) && (count_r > count_z) && (count_r > count_ç)){
        most_repeated = "R"
    }else if((count_s > count_b) && (count_s > count_c) && (count_s > count_d) && (count_s > count_e) && (count_s > count_f) && (count_s > count_g) && (count_s > count_h) && (count_s > count_i) && (count_s > count_j) && (count_s > count_k) && (count_s > count_l) && (count_s > count_m) && (count_s > count_n) && (count_s > count_o) && (count_s > count_p) && (count_s > count_q) && (count_s > count_r) && (count_s > count_a) && (count_s > count_t) && (count_s > count_u) && (count_s > count_v) && (count_s > count_x) && (count_s > count_y) && (count_s > count_z) && (count_s > count_ç)){
        most_repeated = "S"
    }else if((count_t > count_b) && (count_t > count_c) && (count_t > count_d) && (count_t > count_e) && (count_t > count_f) && (count_t > count_g) && (count_t > count_h) && (count_t > count_i) && (count_t > count_j) && (count_t > count_k) && (count_t > count_l) && (count_t > count_m) && (count_t > count_n) && (count_t > count_o) && (count_t > count_p) && (count_t > count_q) && (count_t > count_r) && (count_t > count_s) && (count_t > count_a) && (count_t > count_u) && (count_t > count_v) && (count_t > count_x) && (count_t > count_y) && (count_t > count_z) && (count_t > count_ç)){
        most_repeated = "T"
    }else if((count_u > count_b) && (count_u > count_c) && (count_u > count_d) && (count_u > count_e) && (count_u > count_f) && (count_u > count_g) && (count_u > count_h) && (count_u > count_i) && (count_u > count_j) && (count_u > count_k) && (count_u > count_l) && (count_u > count_m) && (count_u > count_n) && (count_u > count_o) && (count_u > count_p) && (count_u > count_q) && (count_u > count_r) && (count_u > count_s) && (count_u > count_t) && (count_u > count_a) && (count_u > count_v) && (count_u > count_x) && (count_u > count_y) && (count_u > count_z) && (count_u > count_ç)){
        most_repeated = "U"
    }else if((count_v > count_b) && (count_v > count_c) && (count_v > count_d) && (count_v > count_e) && (count_v > count_f) && (count_v > count_g) && (count_v > count_h) && (count_v > count_i) && (count_v > count_j) && (count_v > count_k) && (count_v > count_l) && (count_v > count_m) && (count_v > count_n) && (count_v > count_o) && (count_v > count_p) && (count_v > count_q) && (count_v > count_r) && (count_v > count_s) && (count_v > count_t) && (count_v > count_u) && (count_v > count_a) && (count_v > count_x) && (count_v > count_y) && (count_v > count_z) && (count_v > count_ç)){
        most_repeated = "V"
    }else if((count_x > count_b) && (count_x > count_c) && (count_x > count_d) && (count_x > count_e) && (count_x > count_f) && (count_x > count_g) && (count_x > count_h) && (count_x > count_i) && (count_x > count_j) && (count_x > count_k) && (count_x > count_l) && (count_x > count_m) && (count_x > count_n) && (count_x > count_o) && (count_x > count_p) && (count_x > count_q) && (count_x > count_r) && (count_x > count_s) && (count_x > count_t) && (count_x > count_u) && (count_x > count_v) && (count_x > count_a) && (count_x > count_y) && (count_x > count_z) && (count_x > count_ç)){
        most_repeated = "X"
    }else if((count_y > count_b) && (count_y > count_c) && (count_y > count_d) && (count_y > count_e) && (count_y > count_f) && (count_y > count_g) && (count_y > count_h) && (count_y > count_i) && (count_y > count_j) && (count_y > count_k) && (count_y > count_l) && (count_y > count_m) && (count_y > count_n) && (count_y > count_o) && (count_y > count_p) && (count_y > count_q) && (count_y > count_r) && (count_y > count_s) && (count_y > count_t) && (count_y > count_u) && (count_y > count_v) && (count_y > count_x) && (count_y > count_a) && (count_y > count_z) && (count_y > count_ç)){
        most_repeated = "Y"
    }else if((count_z > count_b) && (count_z > count_c) && (count_z > count_d) && (count_z > count_e) && (count_z > count_f) && (count_z > count_g) && (count_z > count_h) && (count_z > count_i) && (count_z > count_j) && (count_z > count_k) && (count_z > count_l) && (count_z > count_m) && (count_z > count_n) && (count_z > count_o) && (count_z > count_p) && (count_z > count_q) && (count_z > count_r) && (count_z > count_s) && (count_z > count_t) && (count_z > count_u) && (count_z > count_v) && (count_z > count_x) && (count_z > count_y) && (count_z > count_a) && (count_z > count_ç)){
        most_repeated = "Z"
    }else if((count_ç > count_b) && (count_ç > count_c) && (count_ç > count_d) && (count_ç > count_e) && (count_ç > count_f) && (count_ç > count_g) && (count_ç > count_h) && (count_ç > count_i) && (count_ç > count_j) && (count_ç > count_k) && (count_ç > count_l) && (count_ç > count_m) && (count_ç > count_n) && (count_ç > count_o) && (count_ç > count_p) && (count_ç > count_q) && (count_ç > count_r) && (count_ç > count_s) && (count_ç > count_t) && (count_ç > count_u) && (count_ç > count_v) && (count_ç > count_x) && (count_ç > count_y) && (count_ç > count_z) && (count_ç > count_a)){
        most_repeated = "Ç"
    }else {
        most_repeated = 'Nenhuma letra aparece mais.'
    }
        
    letra_mais_repetida.innerText = `Letra que mais se repete :
    ${most_repeated}`
    tot_vogal.innerText = `Quantidade de vogais :
    ${tot}`
    
    return tot
} 

    
