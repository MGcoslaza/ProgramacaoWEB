function buscaValorHotel(valor) {	
   return  $('.product-card__link')[valor].children[2].children[2].children[2].innerText;
}

function buscaNomeHotel(index) {	
    return  $('.product-card__title')[index].innerText;
}

function buscaDescontoHotel(index) {
    return $('.promotion__tag-discount')[index].innerText;
}

var i = 0;
for (i; i < 16; i++){
    var nome = buscaNomeHotel(i);
    var valor = buscaValorHotel(i);
    var desconto = buscaDescontoHotel(i);

    console.log(" ");
    console.log("Nome: " + nome);
    console.log("Valor: R$" + valor);
    console.log("Desconto: " + desconto);
}