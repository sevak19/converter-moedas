$(document).ready(function() {
    $('#valorOrigem, #moedaOrigem, #moedaDestino').on('input change', function() {
        converterMoeda();
    });
});

function converterMoeda() {
    
    var moedaOrigem = $('#moedaOrigem').val();
    var moedaDestino = $('#moedaDestino').val();
    var valorOrigem = parseFloat($('#valorOrigem').val());

    if (moedaOrigem == 'real') {
        $('#moedaorigem').text("R$");
    } else if (moedaOrigem == 'dolar') {
        $('#moedaorigem').text("$");
    } else if (moedaOrigem == 'euro') {
        $('#moedaorigem').text("€");
    }


    if (moedaDestino == 'real') {
        $('#moedaresultado').text("R$");
    } else if (moedaDestino == 'dolar') {
        $('#moedaresultado').text("$");
    } else if (moedaDestino == 'euro') {
        $('#moedaresultado').text("€");
    }


    
    var taxaDolarParaReal = 5.3;
    var taxaDolarParaEuro = 0.8;
    var taxaEuroParaReal = 6.6;
    var taxaEuroParaDolar = 1.25;
    var taxaRealParaDolar = 0.19;
    var taxaRealParaEuro = 0.15;

    
    var resultado;

    if (moedaOrigem === 'dolar' && moedaDestino === 'real') {
        resultado = valorOrigem * taxaDolarParaReal;
    } else if (moedaOrigem === 'dolar' && moedaDestino === 'euro') {
        resultado = valorOrigem * taxaDolarParaEuro;
    } else if (moedaOrigem === 'euro' && moedaDestino === 'real') {
        resultado = valorOrigem * taxaEuroParaReal;
    } else if (moedaOrigem === 'euro' && moedaDestino === 'dolar') {
        resultado = valorOrigem * taxaEuroParaDolar;
    } else if (moedaOrigem === 'real' && moedaDestino === 'dolar') {
        resultado = valorOrigem * taxaRealParaDolar;
    } else if (moedaOrigem === 'real' && moedaDestino === 'euro') {
        resultado = valorOrigem * taxaRealParaEuro;
    } else {
        resultado = valorOrigem;
    }

    if (valorOrigem) {
        $('#resultado').val(resultado.toFixed(2));
    }
}