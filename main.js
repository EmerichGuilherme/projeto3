$(document).ready(function (){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            texto: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, o insira seu nome',
            email: 'Por favor, o insira seu email',
            telefone: 'Por favor, o insira seu telefone',
            texto: 'Por favor, insira sua mensagem',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})