jQuery(function($){
    
  
    var $jaquesInputs = $("#jaques :input")
    var $tonolliInputs = $("#tonolli :input")
    var $guilhermeInputs = $("#guilherme :input")
    var $deiseInputs = $("#deise :input")
    var $viniciusInputs = $("#vinicius :input")
    var $jaineInputs = $("#jaine :input")

    getAverage($jaquesInputs, "Jaques")
    getAverage($tonolliInputs, "Tonolli")
    getAverage($guilhermeInputs, "Guilherme")
    getAverage($deiseInputs, "Deise")
    getAverage($viniciusInputs, "Vinicius")
    getAverage($jaineInputs, "Jaine")

    function getAverage($inputs, userName){
        $("#average").on("click", function(){
        
            let validGrade  = 0
            let invalidGrade = 0

            var values = [];
    
            $inputs.each(function() {
                if($(this).val() > 100 || $(this).val() < 0){
                    alert(`${$(this).val()} é uma nota invalida, e será considerada como 0 para ${userName}.`)
                    values.push(0)
                    invalidGrade++
                }else if($(this).val() === ""){
                    alert(`Uma nota não inseria pra ${userName}, será considerada 0.`)
                    values.push(0)
                    invalidGrade++
                }else{
                    values.push(parseInt($(this).val()));
                    validGrade++
                }
            });
    
            var sum = 0;
    
            for(var i =0;i<values.length;i++){
            sum+=values[i];
            }
            $inputs.remove()
            $("#average").remove()
            let divName = userName.toLowerCase()
            $(`#${divName}Div`).append(`<h2>A média de ${userName} é ${sum/5}<h2>`)
            $(`#${divName}Div`).append(`<h3>Sendo ${validGrade} nota(s) válidas e ${invalidGrade} nota(s) inválidas!<h3>`)
            $("#remake").removeClass('hidden')
            $("#remake").on("click", function(){
                location.reload()
            })
    
        })
    }
    

})