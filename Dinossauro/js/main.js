jQuery(function($){
    const $btn = $('#btn')
    const result = $('#result')
    const insertTemplate = $('#insert-template')
    const resultTemplate = $('#result-template')

    $btn.on('click', function(e){
        e.preventDefault()
        const $input = $('#word').val().toLowerCase()

        if(/^[a-zA-Z-]*$/.test($input) == false) {
            removeHtml()
            alert('Apenas palavras, sem numeros ou caracteres especiais Vini');
            return false
        }

        removeHtml()

        if(!localStorage.getItem($input + '-01')){

            result.append(insertTemplate.html())

            $('#insert-btn').on('click', function(e){
                 e.preventDefault()
                 localStorage.setItem($input + '-01', $('#first-value').val())
                 localStorage.setItem($input + '-02', $('#second-value').val())
                 alert(`Você definiu novos significados para a palavra ${$input}.`)
                 location.reload()
            })
        }else{
            result.append(resultTemplate.html())
            let firstMeaning = localStorage.getItem($input + '-01')
            let secondMeaning = localStorage.getItem($input + '-02')

            $('#one').append(firstMeaning)
            $('#two').append(secondMeaning)
        }
    })

    function removeHtml(){
        $('#result-html').remove()
        $('#insert-html').remove()
    }
})
