jQuery(function($){
    const $insertBtn = $('#insertBtn')
    const $searchBtn = $('#searchBtn')
    const result = $('#result')
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','á','à','ã','â','é','ê','í','ó','ô','õ','ú','ç']

    $(document).ready(addAlphabet())

    $('#insert-form').on('submit', function(e){
        e.preventDefault()
        addAlphabet()

        const $insertiWord = $('#word').val().toLowerCase()

        if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ-]*$/.test($insertiWord) === false || $insertiWord === '-' || $insertiWord === 'ç') {
            alert('Apenas palavras, sem numeros ou caracteres especiais Vini');
            return false
        }else if($insertiWord.length === 1){
            alert('Letras já foram adicionadas pra te ajudar XD')
            return
        }
    
        if(localStorage.getItem($insertiWord)){
            alert('Palavra já consta')
            return
        }

        localStorage.setItem($insertiWord, $insertiWord)
        alert('Palavra inserida com sucesso')
    })

    $('#search-word').on('click', function(){
      getSotaredItems()
    })

    $('#search-form').on('submit', function(e){
        e.preventDefault()
        const $searchWord = $('#search-word').val().toLowerCase()

        if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ-]*$/.test($searchWord) === false || $searchWord === '-' || $searchWord === 'ç') {
            alert('Apenas palavras, sem numeros ou caracteres especiais Vini');
            return false
        }

        if(!localStorage.getItem($searchWord)){
            alert('Nenhuma palavra encontrada')
            return
        }


        $('#to-remove').remove()

        result.append(`<h1 id="to-remove" style="text-transform: capitalize;">${$searchWord}</h1>`)

    })

    function addAlphabet(){
        let $c = 0
        alphabet.forEach(function(){
            localStorage.setItem(alphabet[$c], alphabet[$c])
            $c++
        })

    }

    getSotaredItems()
      let allStored = getSotaredItems();
      $( "#search-word").autocomplete({
        minLength: 1,
        source: function(request, response) {
          let matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term) );
          console.log(matcher)
          response($.grep(allStored, function(item) {
            return matcher.test(item);
          }));
        }
        
        });
    
      function getSotaredItems() {

        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

            
            while ( i-- ) {
              values.push( localStorage.getItem(keys[i]) );
            }

    
        return values;
    }

    
})



