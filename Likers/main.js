jQuery(function($){

    const $continer = $('#container');

    $('#form').on('submit', function(e){
        e.preventDefault();
        const names = $('#names-input').val();  
        
        const patt = /^([, ])\1+$/;
        const result = patt.test(names);

        if(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ, ]*$/.test(names) === false || result === true || names === ' ' || names === ','){
            alert('porra vini, nome próprio não tem número nem caractere especial')
            return false
        }
        const myArray = names.split(",");

        $(this).remove()
        
        if(names === ''){
            $continer.append(`<h1>no one likes this</h1>`)
        }else if(myArray.length === 1){
            $continer.append(`<h1>${myArray[0]}  likes this</h1>`)
        }else if(myArray.length === 2){
            $continer.append(`<h1>${myArray[0]} and ${myArray[1]} likes this</h1>`)
        }else if(myArray.length === 3){
            $continer.append(`<h1>${myArray[0]}, ${myArray[1]} and ${myArray[2]} likes this</h1>`)
        }else{
            $continer.append(`<h1>${myArray[0]}, ${myArray[1]} and ${myArray.length - 2} others like this</h1>`)
        }
                
    })

})