var cartasJogador = []
var cartasPc = []
var cartasEmpate = []
var vitoriasJogador = 0
var vitoriasComputador = 0
var empate = 0
var erro = 0
var vezDaMaquina = 0
var resultadoFinal = ""
var intervalo
var tempo = 5
var gsMedio = 0
var attackpowerMedio = 0
var spellpowerMedio = 0
var vidaMedio = 0
var conquistasMedio = 0
var valorMaior = 0
var statusSelecionadoMaquina = ""
var valorCartaJogador
var valorCartaPc

window.onload = function () {
    var botaoJogar = document.getElementById("btnJogar");

    console.log(botaoJogar)
}


var players = [{
        nick: "1",
        imagem: "https://cdn.discordapp.com/attachments/863259740808806421/1025239624035086426/unknown.png",
        status: {
            Gs: 1,
            Attackpower: 4,
            Spellpower: 5,
            Vida: 1050,
            Conquistas: 400
        }
    }, {
        nick: "Nidoran",
        imagem: "https://cdn.discordapp.com/attachments/863259740808806421/1025212818884149328/unknown.png",
        status: {
            Gs: 2,
            Attackpower: 4,
            Spellpower: 5,
            Vida: 1010,
            Conquistas: 400
        }
    }, {
        nick: "3",
        imagem: "https://cdn.discordapp.com/attachments/863259740808806421/1025212818884149328/unknown.png",
        status: {
            Gs: 3,
            Attackpower: 4,
            Spellpower: 5,
            Vida: 10,
            Conquistas: 400
        }
    }, {
        nick: "4",
        imagem: "https://cdn.discordapp.com/attachments/863259740808806421/1025212818884149328/unknown.png",
        status: {
            Gs: 4,
            Attackpower: 4,
            Spellpower: 5,
            Vida: 100,
            Conquistas: 400
        }
    }, {
        nick: "5",
        imagem: "https://cdn.discordapp.com/attachments/863259740808806421/1025212818884149328/unknown.png",
        status: {
            Gs: 5,
            Attackpower: 4,
            Spellpower: 5,
            Vida: 1,
            Conquistas: 400
        }
    },
    {
        nick: "6",
        imagem: "https://cdn.discordapp.com/attachments/863259740808806421/1025212818884149328/unknown.png",
        status: {
            Gs: 6,
            Attackpower: 4,
            Spellpower: 5000,
            Vida: 1050,
            Conquistas: 400
        }
    }

]
// console.log(players[0].status.gs)

var numeroDeCartas = parseInt(players.length / 2) * 2

function sortearCarta() {

    var cartasSorteadas = []

    for (var i = 0; numeroDeCartas > i; i) {
        if (i == 0) {
            var numeroCartaSorteada = parseInt(Math.random() * (players.length))
            cartasSorteadas.push(numeroCartaSorteada)

            cartasPc.push(players[numeroCartaSorteada])



            i++
        } else {
            var erro = 0
            numeroCartaSorteada = parseInt(Math.random() * (players.length))

            for (var k = 0; cartasSorteadas.length > k; k++) {
                if (numeroCartaSorteada == cartasSorteadas[k]) {
                    erro = 1
                }
            }
            if (erro == 0) {

                if ((i % 2) != 0) {
                    cartasSorteadas.push(numeroCartaSorteada)
                    cartasJogador.push((players[numeroCartaSorteada]))



                } else {
                    cartasPc.push(players[numeroCartaSorteada])
                    cartasSorteadas.push(numeroCartaSorteada)
                }




                i++
            }







        }

    }
    botaoJogar = document.getElementById("btnJogar");
    botaoJogar.style.display = "inline";
    console.log(botaoJogar)
    console.log(cartasJogador)
    console.log(cartasPc)

    mediaGs(cartasSorteadas)
    mediaAttackpower(cartasSorteadas)
    mediaSpellpower(cartasSorteadas)
    mediaVida(cartasSorteadas)
    mediaConquistas(cartasSorteadas)
    // exibirOpcoes()
    placarJogo()
    exibirCartaJogador(0)
    cartasRestantesTela()
}





function cartasRestantesTela() {
    console.log('aasdadad')
    var cartasRestantesJogador = document.getElementById("numeroCartasRestantesJogador")
    var cartasRestantesPc = document.getElementById("numeroCartasRestantesPc")
    var versoCarta = "<img src='https://i.ibb.co/SKcVz9C/sdfsd.png' width = '45 %' position='relative';'>"

    // numeroVersoCartaJogador = "<div id='numeroVersoJogador' class='numeroVersoJogador'>"
    cartasRestantesJogador.innerHTML = versoCarta + "<div class='estiloVerso'>" + cartasJogador.length + "</div>" + "<div class='escritoCartasRestantes'>Número de Cartas Jogador</div>"
    cartasRestantesPc.innerHTML = versoCarta + "<div class='estiloVerso'>" + cartasPc.length + "</div>" + "<div class='escritoCartasRestantes'>Número de Cartas Computador</div>"

}

function mediaGs(cartasSorteadas) {
    var mediaGs = 0
    for (var i = 0; cartasSorteadas.length > i; i++) {
        mediaGs += (players[i].status.Gs)

    }
    gsMedio = mediaGs / cartasSorteadas.length
    console.log("a media e gs é", gsMedio)
}

function mediaAttackpower(cartasSorteadas) {
    var mediaAttackpower = 0
    for (var i = 0; cartasSorteadas.length > i; i++) {
        mediaAttackpower += (players[i].status.Attackpower)

    }
    attackpowerMedio = mediaAttackpower / cartasSorteadas.length
}

function mediaSpellpower(cartasSorteadas) {
    var mediaSpellpower = 0
    for (var i = 0; cartasSorteadas.length > i; i++) {
        mediaSpellpower += (players[i].status.Spellpower)

    }
    spellpowerMedio = mediaSpellpower / cartasSorteadas.length
}

function mediaVida(cartasSorteadas) {
    var mediaVida = 0
    for (var i = 0; cartasSorteadas.length > i; i++) {
        mediaVida += (players[i].status.Vida)

    }
    vidaMedio = mediaVida / cartasSorteadas.length
}

function mediaConquistas(cartasSorteadas) {
    var mediaConquistas = 0
    for (var i = 0; cartasSorteadas.length > i; i++) {
        mediaConquistas += (players[i].status.Conquistas)
    }
    conquistasMedio = mediaConquistas / cartasSorteadas.length
}


function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""

    for (var status in cartasJogador[0].status) {

        opcoesTexto += "<input type='radio' name='status' value='" + status + "'/>" + status;
        opcoes.innerHTML = opcoesTexto
    }
}


function obtemStatusSelecionado() {
    var radioStatus = document.getElementsByName("status");
    console.log(radioStatus)
    erro = 0
    if (erro == 0) {
        for (var i = 0; radioStatus.length > i; i++) {

            if (radioStatus[i].checked == true) {
                return radioStatus[i].value;
                erro = 1
            }
        }
    }
    if (erro == 0) {
        alert("Selecione um status")
        return 0
    }
}





console.log(cartasJogador)
console.log(cartasPc)

function jogar() {


    console.log(botaoJogar, "botao jogar 2")
    var statusSelecionado = obtemStatusSelecionado()
    console.log("status selecionado", statusSelecionado)
    var resultadoDaRodada = document.getElementById("resultado")
    if (statusSelecionado == 0) {
        console.log("bug")
    } else {
        botaoJogar = document.getElementById("btnJogar");
        console.log(botaoJogar, "botao jogar em cima")
        botaoJogar.style.display = "none";
        exibirCartaPc(0)
        //Desseleciona a bolinha do input radio
        var desselecionar = document.getElementsByName("status");
        for (var i = 0; i < desselecionar.length; i++) {
            if (desselecionar[i].type == "radio") {
                desselecionar[i].checked = false;
            }
        }

        valorCartaJogador = cartasJogador[0].status[statusSelecionado]
        valorCartaPc = cartasPc[0].status[statusSelecionado]

        if (valorCartaJogador > valorCartaPc) {
            if (empate == 1) {
                cartasJogador = cartasJogador.concat(cartasEmpate)
                cartasEmpate = []
                empate = 0
            }
            cartasJogador.push(cartasPc[0])
            cartasJogador.push(cartasJogador[0])
            cartasJogador.shift()
            cartasPc.shift()

            console.log(cartasJogador)
            console.log(cartasPc)
            vezDaMaquina = 0
            resultadoDaRodada.innerHTML = "Você venceu esta rodada <br> Jogue novamente"
        }

        if (valorCartaJogador < valorCartaPc) {
            if (empate == 1) {
                cartasPc = cartasPc.concat(cartasEmpate)
                cartasEmpate = []
                empate = 0
            }
            cartasPc.push(cartasPc[0])
            cartasPc.push(cartasJogador[0])
            cartasJogador.shift()
            cartasPc.shift()
            console.log(cartasJogador)
            console.log(cartasPc)
            vezDaMaquina = 1
            resultadoDaRodada.innerHTML = "Você perdeu esta rodada <br> Agora é a vez da maquina"



        }



        if (valorCartaJogador == valorCartaPc) {

            cartasEmpate.push(cartasJogador[0])
            cartasEmpate.push(cartasPc[0])
            cartasPc.shift()
            cartasJogador.shift()
            empate = 1
            // console.log(cartasEmpate)
            console.log(cartasJogador)
            console.log(cartasPc)
            console.log(cartasEmpate)
            if (cartasJogador.length == 0) {
                cartasJogador.push(cartasEmpate[cartasEmpate.length - 2])
                cartasEmpate.splice((cartasEmpate.length - 2), 1)
                console.log(cartasJogador)
                console.log(cartasEmpate)
            }
            if (cartasPc.length == 0) {
                cartasPc.push(cartasEmpate[cartasEmpate.length - 1])
                cartasEmpate.splice((cartasEmpate.length - 1), 1)
                console.log(cartasPc)
                console.log(cartasEmpate)
            }
            resultadoDaRodada.innerHTML = "Esta rodada deu empate, jogue novamente"
        }
        if (vezDaMaquina == 1) {
            //Faz demorar 4s para executar a função jogarMaquina
            tempo = 5
            intervalo = setInterval(tempoTela, 1000);
            intervalo
            var botaoParar = document.getElementById('botaoParar')
            botaoParar.style.display = "inline";

            function tempoTela() {

                if (tempo >= 1) {

                    document.getElementById("tempo").innerHTML = tempo
                    tempo -= 1

                } else {
                    myStop()
                    // clearInterval(intervalo)
                    document.getElementById("tempo").innerHTML = ""
                    tempo = 5
                    var botaoParar = document.getElementById('botaoParar')
                    resultadoDaRodada.innerHTML = ""
                    botaoParar.style.display = "none";
                    jogarMaquina()
                    vezDaMaquina = 0
                }
            }


        }

        // var timeOutJogarMaquina = setTimeout(jogarMaquina, 6300);
        //    timeOutJogarMaquina
        //    vezDaMaquina = 0


        if (cartasJogador.length == 0) {


            // botaoJogar = document.getElementById("btnJogar");

            // botaoJogar.style.display = "none";
            resultadoFinal = document.getElementById("resultadoFinalJogo")
            resultadoFinal.innerHTML = "O jogo acabou, você perdeu"
            vitoriasComputador += 1
            placarJogo()

        }
        if (cartasPc.length == 0) {

            // botaoJogar = document.getElementById("btnJogar");
            // botaoJogar.style.display = "none";
            // console.log(botaoJogar, "botao jogar em baixos")
            resultadoFinal = document.getElementById("resultadoFinalJogo")
            resultadoFinal.innerHTML = "O jogo acabou, você venceu"
            vitoriasJogador += 1
            placarJogo()

        }
        if ((valorCartaJogador > valorCartaPc || valorCartaJogador == valorCartaPc) && (cartasJogador.length != 0 && cartasPc.length != 0)) {
            delayMostrarCartaJogador()
        }

    }

    cartasRestantesTela()

}

function myStop() {
    clearInterval(intervalo);

}
console.log("o gs medio é ", gsMedio)

function melhorStatusMaquina() {
    statusSelecionadoMaquina = document.getElementById("statusMaquina")

    var cartaPcGs = cartasPc[0].status.Gs
    var cartaPcAttackpower = cartasPc[0].status.Attackpower
    var cartaPcSpellpower = cartasPc[0].status.Spellpower
    var cartaPcVida = cartasPc[0].status.Vida
    var cartaPcConquista = cartasPc[0].status.Conquistas

    var testeGs = cartaPcGs / gsMedio
    var testeAttackpower = cartaPcAttackpower / attackpowerMedio
    var testeSpellpower = cartaPcSpellpower / spellpowerMedio
    var testeVida = cartaPcVida / vidaMedio
    var testeConquista = cartaPcConquista / conquistasMedio

    valorMaior = Math.max(testeGs, testeAttackpower, testeSpellpower, testeVida, testeConquista)
    console.log(valorMaior)
    if (valorMaior == testeGs) {
        statusSelecionadoMaquina.innerHTML = "O status selecionado pela maquina foi o Gs"
        valorCartaJogador = cartasJogador[0].status.Gs
        valorCartaPc = cartasPc[0].status.Gs

    } else if (valorMaior == testeAttackpower) {
        statusSelecionadoMaquina.innerHTML = "O status selecionado pela maquina foi o Attackpower"
        valorCartaJogador = cartasJogador[0].status.Attackpower
        valorCartaPc = cartasPc[0].status.Attackpower

    } else if (valorMaior == testeSpellpower) {
        statusSelecionadoMaquina.innerHTML = "O status selecionado pela maquina foi o Spellpower"
        valorCartaJogador = cartasJogador[0].status.Spellpower
        valorCartaPc = cartasPc[0].status.Spellpower

    } else if (valorMaior == testeVida) {
        statusSelecionadoMaquina.innerHTML = "O status selecionado pela maquina foi a Vida"
        valorCartaJogador = cartasJogador[0].status.Vida
        valorCartaPc = cartasPc[0].status.Vida

    } else if (valorMaior == testeConquista) {
        statusSelecionadoMaquina.innerHTML = "O status selecionado pela maquina foi Conquistas"
        valorCartaJogador = cartasJogador[0].status.Conquistas
        valorCartaPc = cartasPc[0].status.Conquistas
    }


}


function jogarMaquina() {
    exibirCartaJogador(0)
    exibirCartaPc(0)
    melhorStatusMaquina()
    var resultadoDaRodada = document.getElementById("resultado")
    // var valorCartaJogador = cartasJogador[0].status[statusSelecionado]
    // var valorCartaPc = cartasPc[0].status[statusSelecionado]
    botaoJogar = document.getElementById("btnJogar");
    botaoJogar.style.display = "none";


    if (valorCartaJogador > valorCartaPc) {
        if (empate == 1) {
            cartasJogador = cartasJogador.concat(cartasEmpate)
            cartasEmpate = []
            empate = 0
        }
        cartasJogador.push(cartasPc[0])
        cartasJogador.push(cartasJogador[0])
        cartasJogador.shift()
        cartasPc.shift()

        console.log(cartasJogador)
        console.log(cartasPc)
        vezDaMaquina = 0
        resultadoDaRodada.innerHTML = "Você venceu esta rodada <br> Agora é a sua vez"
    }

    if (valorCartaJogador < valorCartaPc) {
        if (empate == 1) {
            cartasPc = cartasPc.concat(cartasEmpate)
            cartasEmpate = []
            empate = 0
        }
        cartasPc.push(cartasPc[0])
        cartasPc.push(cartasJogador[0])
        cartasJogador.shift()
        cartasPc.shift()
        console.log(cartasJogador)
        console.log(cartasPc)
        vezDaMaquina = 1
        resultadoDaRodada.innerHTML = "Você perdeu esta rodada <br> A maquina joga de novo"








    }















    if (valorCartaJogador == valorCartaPc) {

        cartasEmpate.push(cartasJogador[0])
        cartasEmpate.push(cartasPc[0])
        cartasPc.shift()
        cartasJogador.shift()
        empate = 1
        vezDaMaquina = 1
        // console.log(cartasEmpate)
        console.log(cartasJogador)
        console.log(cartasPc)
        console.log(cartasEmpate)
        if (cartasJogador.length == 0) {
            cartasJogador.push(cartasEmpate[cartasEmpate.length - 2])
            cartasEmpate.splice((cartasEmpate.length - 2), 1)
            console.log(cartasJogador)
            console.log(cartasEmpate)
        }
        if (cartasPc.length == 0) {
            cartasPc.push(cartasEmpate[cartasEmpate.length - 1])
            cartasEmpate.splice((cartasEmpate.length - 1), 1)
            console.log(cartasPc)
            console.log(cartasEmpate)
        }
        resultadoDaRodada.innerHTML = "Esta rodada deu empate"
    }
    if (vezDaMaquina == 1 && (cartasJogador != 0 || cartasPc != 0)) {
        //Faz demorar 4s para executar a função jogarMaquina
        tempo = 5
        intervalo = setInterval(tempoTela, 1000);
        intervalo
        var botaoParar = document.getElementById('botaoParar')
        botaoParar.style.display = "inline";

        function tempoTela() {

            if (tempo >= 1) {

                document.getElementById("tempo").innerHTML = tempo
                tempo -= 1

            } else {
                myStop()
                // clearInterval(intervalo)
                document.getElementById("tempo").innerHTML = ""
                tempo = 5
                var botaoParar = document.getElementById('botaoParar')
                resultadoDaRodada.innerHTML = ""
                botaoParar.style.display = "none";

                jogarMaquina()
                vezDaMaquina = 0
            }
        }


    }

    // var timeOutJogarMaquina = setTimeout(jogarMaquina, 6300);
    //    timeOutJogarMaquina
    //    vezDaMaquina = 0


    if (cartasJogador.length == 0) {


        botaoJogar = document.getElementById("btnJogar");
        botaoJogar.style.display = "none";
        console.log(botaoJogar, "botao jogar em baixo 2")
        resultadoFinal = document.getElementById("resultadoFinalJogo")
        resultadoFinal.innerHTML = "O jogo acabou, você perdeu"
        vitoriasComputador += 1
        placarJogo()

    }
    if (cartasPc.length == 0) {

        botaoJogar = document.getElementById("btnJogar");
        botaoJogar.style.display = "none";
        resultadoFinal = document.getElementById("resultadoFinalJogo")
        resultadoFinal.innerHTML = "O jogo acabou, você venceu"
        vitoriasJogador += 1
        placarJogo()

    }
    if (valorCartaJogador > valorCartaPc || valorCartaJogador == valorCartaPc) {
        delayMostrarCartaJogador()
    }



































    cartasRestantesTela()

}

function delayMostrarCartaPc() {



    tempo = 5
    intervalo = setInterval(tempoTelaDois, 1000);
    intervalo

    function tempoTelaDois() {

        if (tempo >= 1) {

            document.getElementById("tempo").innerHTML = tempo
            tempo -= 1

        } else {
            myStop()
            // clearInterval(intervalo)
            document.getElementById("tempo").innerHTML = ""
            tempo = 5


            if (cartasJogador.length != 0 && cartasJogador.length != 0) {

                console.log("mostrando a carta")
                exibirCartaJogador(0)
            }
        }
    }


}




function delayMostrarCartaJogador() {



    tempo = 5
    intervalo = setInterval(tempoTelaDois, 1000);
    intervalo

    function tempoTelaDois() {

        if (tempo >= 1) {

            document.getElementById("tempo").innerHTML = tempo
            tempo -= 1

        } else {
            myStop()
            // clearInterval(intervalo)
            document.getElementById("tempo").innerHTML = ""
            tempo = 5

            var divCartaPc = document.getElementById("carta-maquina")
            divCartaPc.style.backgroundImage = ""
            divCartaPc.innerHTML = ""
            if (cartasJogador.length != 0 && cartasJogador.length != 0) {
                botaoJogar = document.getElementById("btnJogar");
                botaoJogar.style.display = "inline";
                console.log("mostrando a carta")
                exibirCartaJogador(0)
            }
        }
    }


}

function exibirCartaJogador(numero) {
    var divCartaJogador = document.getElementById("carta-jogador")
    // var opcoes = document.getElementById("opcoes");
    divCartaJogador.style.backgroundImage = "url(" + cartasJogador[numero].imagem + ")"
    // divCartaJogador.style.backgroundImage = 'url(${cartaJogador.imagem})'

    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style = 'width: inherit; height: inherit; position: absolute;'>"
    var tagHtml = "<div id='opcoesTag' class='carta-status'>"

    var opcoesTexto = ""

    for (var status in cartasJogador[numero].status) {
        //todo arrumar o tamanho desse input a caixa dele ta muito grande
        opcoesTexto += "<input  type='radio'  name='status' value='" + status + "'/>" + status + ": " + cartasJogador[numero].status[status] + "<br style='height:1px'>";

    }

    var nickPersonagem = " <p class='carta-subtitle'>" + cartasJogador[numero].nick + "</p>"
    // var nickPersonagem = '<p class="carta-subtitle">${cartasJogador[0].nick}</p>'

    divCartaJogador.innerHTML = moldura + nickPersonagem + tagHtml + opcoesTexto + "</div>"

}

function exibirCartaPc(numero) {
    var divCartaPc = document.getElementById("carta-maquina")
    // var opcoes = document.getElementById("opcoes");
    console.log(divCartaPc)
    // console.log(opcoes)
    console.log(cartasPc[numero].nick)
    divCartaPc.style.backgroundImage = "url(" + cartasPc[numero].imagem + ")"
    // divCartaJogador.style.backgroundImage = 'url(${cartaJogador.imagem})'

    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style = 'width: inherit; height: inherit; position: absolute;'>"
    var tagHtml = "<div id='opcoesTag' class='carta-status'>"

    var opcoesTexto = ""

    for (var status in cartasPc[numero].status) {

        opcoesTexto += "<input type='radio' name='status' value='" + status + "'/>" + status + ": " + cartasPc[numero].status[status] + "<br style='height:1px'>";

    }

    var nickPersonagem = " <p class='carta-subtitle'>" + cartasPc[numero].nick + "</p>"
    // var nickPersonagem = '<p class="carta-subtitle">${cartasJogador[0].nick}</p>'
    console.log(cartasPc[numero].nick)
    console.log(nickPersonagem)
    divCartaPc.innerHTML = moldura + nickPersonagem + tagHtml + opcoesTexto + "</div>"

}



function reiniciar() {

    var btn = document.getElementById("botãoSortear");
    var btnReiniciar = document.getElementById('reiniciarTudo');
    btnReiniciar.style.display = 'none';
    btn.style.display = "inline";
    botaoJogar = document.getElementById("btnJogar");
    botaoJogar.style.display = "none";
    cartasJogador = []
    cartasPc = []
    cartasEmpate = []
    // var opcoes = document.getElementById("opcoes");
    // opcoes.innerHTML = ""
    var resultadoDaRodada = document.getElementById("resultado")
    resultadoDaRodada.innerHTML = ""

    resultadoFinal = document.getElementById("resultadoFinalJogo")
    resultadoFinal.innerHTML = ""
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = ""
    divCartaJogador.innerHTML = ""
    var divCartaPc = document.getElementById("carta-maquina")
    divCartaPc.style.backgroundImage = ""
    divCartaPc.innerHTML = ""
    gsMedio = 0
    attackpowerMedio = 0
    spellpowerMedio = 0
    vidaMedio = 0
    conquistasMedio = 0
    statusSelecionadoMaquina = document.getElementById("statusMaquina")
    statusSelecionadoMaquina.innerHTML = ""
    var cartasRestantesJogador = document.getElementById("numeroCartasRestantesJogador")
    var cartasRestantesPc = document.getElementById("numeroCartasRestantesPc")
    cartasRestantesJogador.innerHTML = ""
    cartasRestantesPc.innerHTML = ""
    console.log(botaoJogar)
}






function placarJogo() {
    var placar = "<tr><td>" +
        vitoriasJogador + "</td>" +
        "<td>" +
        vitoriasComputador + "</td></tr>";
    var aaa = document.getElementById("tabelaVitorias");
    aaa.innerHTML = placar;

}