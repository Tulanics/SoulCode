/* --------------------------------HEADER----------------------------------------- */
//botao de acessibilidade
function aumentar(){
    $(document).ready(
        function(){
           var corpo = $("body").css("font-size", "30px");
        }
    )
 }
 function diminuir(){
     $(document).ready(
         function(){
             var corpo = $("body").css("font-size","20px"); 
         }
     )
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
 

/* ------------------------------------------MAIN---------------------------------------- */

$(document).ready(function(){

    // Taxa de Ocupação de Leitos de UTI
    $("#ocupa-uti").blur(function(){
        var leitos = Number(document.getElementById("ocupa-uti").value);
        console.log(leitos);

        if (leitos > 80) {
            $("#containerGeral").css("display", "none");
            $("#containerLaran").css("display", "none");
            $("#containerAmare").css("display", "none");
            $("#containerVerd").css("display", "none");
            $("#containerVerm").css("display", "block");

        } else if (leitos > 70 && leitos <= 80) {

            $("#containerGeral").css("display", "none");
            $("#containerVerm").css("display", "none");
            $("#containerLaran").css("display", "block");
            $("#containerAmare").css("display", "none");
            $("#containerVerd").css("display", "none");
        } else if (leitos <= 70 && leitos > 60) {

            $("#containerGeral").css("display", "none");
            $("#containerVerm").css("display", "none");
            $("#containerLaran").css("display", "none");
            $("#containerAmare").css("display", "block");
            $("#containerVerd").css("display", "none");

        } else if (leitos <= 60) {

            $("#containerGeral").css("display", "none");
            $("#containerVerm").css("display", "none");
            $("#containerLaran").css("display", "none");
            $("#containerAmare").css("display", "none");
            $("#containerVerd").css("display", "block");

        }
    })

    // Leitos de UTI por habitantes:
    $("#leitos-enferm").blur(function(){
        var leitos = Number(document.getElementById("leitos-enferm").value);
        console.log(leitos)

        if (leitos < 3) {

            $("#containerGeral").css("display", "none");
            $("#containerVerm").css("display", "block");
            $("#containerLaran").css("display", "none");
            $("#containerAmare").css("display", "none");
            $("#containerVerd").css("display", "none");


        } else if (leitos > 3 && leitos < 5) {

            $("#containerGeral").css("display", "none");
            $("#containerVerm").css("display", "none");
            $("#containerLaran").css("display", "block");
            $("#containerAmare").css("display", "none");
            $("#containerVerd").css("display", "none");
        } else if (leitos >= 5) {

            $("#containerGeral").css("display", "none");
            $("#containerVerm").css("display", "none");
            $("#containerLaran").css("display", "none");
            $("#containerAmare").css("display", "none");
            $("#containerVerd").css("display", "block");
        }
    })

})