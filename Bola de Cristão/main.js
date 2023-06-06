jQuery(function($){

    let easy = $("#easy")
    let medium = $("#medium")
    let hard = $("#hard")
    let attemptNumber = 1
    const attemptsTemplate = $("#attempt-template")
    const reset = $("#retry-template")
    const section = $("section")

    easy.on("click",function(){
        let max = 10
        const secretNumber = Math.floor(Math.random() * max) + 1
        let maxAttempts = 10
        $("#dificulty").remove()
        alert(secretNumber)
        // alert(msg)
        $("section").append(attemptsTemplate.html())
        $("#chances").text(`${maxAttempts}`)
        $("#max").text(`${max}`)
        attempt(secretNumber, maxAttempts, max)

    })
    medium.on("click",function(){
        let max = 50
        const secretNumber = Math.floor(Math.random() * max) + 1
        let maxAttempts = 5
        $("#dificulty").remove()
        alert(secretNumber)
        // alert(msg)
        $("section").append(attemptsTemplate.html())
        $("#chances").text(`${maxAttempts}`)
        $("#max").text(`${max}`)
        attempt(secretNumber, maxAttempts, max)

    })
    hard.on("click",function(){
        let max = 100
        const secretNumber = Math.floor(Math.random() * max) + 1
        let maxAttempts = 1
        $("#dificulty").remove()
        alert(secretNumber)
        // alert(msg)
        $("section").append(attemptsTemplate.html())
        $("#chances").text(`${maxAttempts}`)
        $("#max").text(`${max}`)
        attempt(secretNumber, maxAttempts, max)

    })

    function attempt(secretNumber, maxAttempts, max){
        $("#try").on("click", function(){
            let guess = $("#guess").val()
            if(guess <= 0 || guess > max){
                alert("Número invalidom, por favor, tente outro")
            }else if(maxAttempts > 0){
                if(guess < secretNumber){
                    $("#history").append(`<h1>Tentativa #${attemptNumber}, o número ${guess} foi muito baixo, tente um número maior`)
                    attemptNumber++
                }else if(guess > secretNumber){
                    $("#history").append(`<h1>Tentativa #${attemptNumber}, o número ${guess} foi muito baixo, tente um número maior`)
                    attemptNumber++
                }else{                    
                    newTry()
                }
                maxAttempts--
                $("#chances").text(`${maxAttempts}`)
            }else{
                alert("Acabaram suas tentativas.")
                newTry()
                $("#result").text(`O número secreto era ${secretNumber}`)
            }
        })
    }

    function newTry(){
        $("#attempts").remove()
        $("section").append(reset.html())
        $("#reset").on("click", function(){
            location.reload()
        })
    }

})