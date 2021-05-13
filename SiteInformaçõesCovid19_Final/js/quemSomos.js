//botao de acessibilidade
i = 0
function acessivel() {
    if (i == 0) {
        document.getElementById("cabecalho").style.fontSize = "150%"; 
        document.getElementById("site").style.fontSize = "30px";       
        document.getElementById("rodape").style.fontSize = "30px";
        i = 1;
    } else if (i == 1) {
        document.getElementById("cabecalho").style.fontSize = "100%"; 
        document.getElementById("site").style.fontSize = "22px";
        document.getElementById("rodape").style.fontSize = "18px";
        i = 0;
    }

}
 
 //funcao data e hora:
 
 var arrayDia = new Array(7);
 
 arrayDia[0] = "Domingo";
 
 arrayDia[1] = "Segunda";
 
 arrayDia[2] = "Terça";
 
 arrayDia[3] = "Quarta";
 
 arrayDia[4] = "Quinta";
 
 arrayDia[5] = "Sexta";
 
 arrayDia[6] = "Sábado";
 
 
 var arrayMes = new Array(12);
 
 arrayMes[0] = "Janeiro";
 
 arrayMes[1] = "Fevereiro";
 
 arrayMes[2] = "Março";
 
 arrayMes[3] = "Abril";
 
 arrayMes[4] = "Maio";
 
 arrayMes[5] = "Junho";
 
 arrayMes[6] = "Julho";
 
 arrayMes[7] = "Agosto";
 
 arrayMes[8] = "Setembro";
 
 arrayMes[9] = "Outubro";
 
 arrayMes[10] = "Novembro";
 
 arrayMes[11] = "Dezembro";
 
 function mostrarDataHora(hora, diaSemana, dia, mes, ano){
     
     retorno = "" + hora + ""
     
     retorno += "" + diaSemana + ", " + dia + " de " + mes + " de " + ano;
     
     document.getElementById("datahora").innerHTML = retorno;

 }
 function atualizarDataHora(){
     
     var dataAtual = new Date();
     
     var dia = dataAtual.getDate();
     
     var diaSemana = getDiaExtenso(dataAtual.getDay());
     
     var mes = getMesExtenso(dataAtual.getMonth());
     
     var ano = dataAtual.getFullYear();
     
     var hora = dataAtual.getHours();
     
     var minuto = dataAtual.getMinutes();
     
     var segundo = dataAtual.getSeconds();
     
     var horaImprimivel = hora + ":" + minuto + ":" + segundo;
     
     mostrarDataHora(horaImprimivel+ " ", diaSemana, dia, mes, ano);
     
     setTimeout("atualizarDataHora()", 1000);
     
 }
 function getMesExtenso(mes){
     
     return this.arrayMes[mes];
     
 }
 function getDiaExtenso(dia){
     
     return this.arrayDia[dia];
     
 } 


 //botao de menu

 $(document).ready(
     function(){
         $("#menu").hide()
     }
 )
 $(document).ready(
     function(){
         //EVENTO CLICK USADO AQUI
         $("#botaoMenu").click(
             function(){
                 $("#menu").slideToggle(1000)
             }
         )
     }
 )




$(document).ready(function(){

    // accordion()
    $('#part3').accordion();

    // click() 
    $('#b1').click(function(){
    $('#p1').slideToggle('fast')
});

// slide() 
$('#b2').click(function(){
$('#p2').slideToggle('fast')
});

// slide() 
$('#b3').click(function(){
    $('#p3').slideToggle('fast')
});

$('#logo,#h2_logo').hide();       
});



// fade() e slide() 
$(function(){
$('#part8').mousemove(function(){
    $('#part8').fadeTo(500,0.2).slideUp();
    $('#logo,#h2_logo').fadeIn();
});
});

//caixa de diálogo :

$(document).ready(function(){
    $('#dialog').hide();
})
$(function(){
    $('#botaoDeContato').click(
    function(){
        $( "#dialog" ).dialog().prev(".ui-dialog-titlebar").css("background","black");
    }
)
})

