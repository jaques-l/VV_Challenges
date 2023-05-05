const searchForm = document.getElementById('search-form');
const result = document.getElementById('result');
const insertTemplate = document.getElementById('insert-template');
const resultTemplate = document.getElementById('result-template');

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    
    
    const $input = document.getElementById('word').value;
    
    if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ-]*$/.test($input) === false || $input === '-' || $input === 'ç') {
            alert('Apenas palavras, sem numeros ou caracteres especiais Vini');
            return false;
        };

        
    if(!localStorage.getItem($input + '-01')){

        var clon = insertTemplate.content.cloneNode(true);
        result.appendChild(clon);

        const insertForm = document.getElementById('insert-form');
        insertForm.addEventListener('submit', function(e){
            e.preventDefault;
            const firstValue = document.getElementById('first-value').value;
            const secondValue = document.getElementById('second-value').value;
            localStorage.setItem($input + '-01', firstValue);
            localStorage.setItem($input + '-02', secondValue);

            alert(`Você definiu novos significados para a palavra ${$input}.`)

        })

    }else{
        var clon = resultTemplate.content.cloneNode(true);
        result.appendChild(clon);
        
        const firstMeaning = localStorage.getItem($input + '-01');
        const secondMeaning = localStorage.getItem($input + '-02');
        const one = document.getElementById('one');
        const two = document.getElementById('two');
        var pOne = document.createElement('p')
        var pTwo = document.createElement('p')
        pOne.style.paddingBottom = '30px'
        pOne.appendChild(document.createTextNode(firstMeaning));
        pTwo.appendChild(document.createTextNode(secondMeaning));
        one.appendChild(pOne);
        two.appendChild(pTwo);


    }
});

let removeHtml = () => {
    const myDiv = document.getElementById("result-html");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
};

// jQuery(function($){
//     const $btn = $('#btn')
//     const result = $('#result')
//     const insertTemplate = $('#insert-template')
//     const resultTemplate = $('#result-template')

//     $btn.on('click', function(e){
//         e.preventDefault()
//         const $input = $('#word').val().toLowerCase()

//         if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ-]*$/.test($input) === false || $input === '-' || $input === 'ç') {
//             removeHtml()
//             alert('Apenas palavras, sem numeros ou caracteres especiais Vini');
//             return false
//         }

//         removeHtml()

//         if(!localStorage.getItem($input + '-01')){

//             result.append(insertTemplate.html())

//             $('#insert-form').on('submit', function(e){
//                  e.preventDefault()
//                  localStorage.setItem($input + '-01', $('#first-value').val())
//                  localStorage.setItem($input + '-02', $('#second-value').val())
//                  alert(`Você definiu novos significados para a palavra ${$input}.`)
//                  location.reload()
//             })
//         }else{
//             result.append(resultTemplate.html())
//             let firstMeaning = localStorage.getItem($input + '-01')
//             let secondMeaning = localStorage.getItem($input + '-02')

//             $('#one').append(`<p style="padding-bottom:30px">${firstMeaning}</p>`)
//             $('#two').append(`<p>${secondMeaning}</p>`)
//         }
//     })

//     function removeHtml(){
//         $('#result-html').remove()
//         $('#insert-html').remove()
//     }
// })

