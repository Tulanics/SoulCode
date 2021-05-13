//estilização e estruturação do cabeçalho e rodapé;

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
                 //EVENTO toggle USADO AQUI
                 $("#menu").slideToggle(1000)
             }
         )
     }
 )


//-------------------------------------
// Ocultando e mostrando div gestante
// ------------------------------------

// AQUI USAMOS O CLICK()

$(document).ready(function(){
    $('#gestante').hide();
    $('#feminino').click(function(){
        $('#gestante').show();
    });   

    $('#masculino , #outros').click(
        function(){
            $('#gestante').hide();
        }
    )
});

// Progress bar


$(function() {

    var $progress         = $('#progress'), // Barra de Progresso.
        $progressElements = $('.progress'), // Elementos que devem ser checados
                                            // para modificar o valor da barra.
        TOTAL             = $progressElements.length; // Total de elementos.
  
    //EVENTO BLUR USADO AQUI
    $progressElements.on('blur, change', function() {
      
      // Faz um filtro com o total elementos válidos.
      // Nesse caso, campos que não estejam "em branco" e que não estejam marcados
      // como ':invalid'.
      var valid = $progressElements.filter(function() {
          return ($(this).val() || $(this).prop('checked')) && !$(this).is(':invalid');
        }).length;
        console.log(valid)
      
      // Calcula a porcentagem e altera o valor da barra.
      var percent = (valid * 100) / TOTAL,
          current = $progress.val();
      
      var increase = percent > current;
          
      var transition = setInterval(function(){
        if((increase && current >= percent) ||
          (!increase && current <= percent))
            clearInterval(transition);
        
        var value = $progress.val();
        value = increase ? value+1 : value-1;
        current = value;
        
        $progress.val(current);
      }, 10);    
    });
  });





/* DATA NASCIMENTO */
function validarIdade(){
    var anoNasc = Number(document.getElementById('anoNasc').value.slice(0,4))
    console.log(anoNasc);

}   

// ------------------------
// Função que calcula IMC
// ------------------------

function imc(){
    var peso=Number(document.getElementById('peso').value);
    var altura=Number(document.getElementById('altura').value);

    var imc;
    var resposta="";
    imc = peso/(altura*altura);

    if (imc < 18) {
      aux2=document.getElementById('cal_imc')  
      aux2.innerHTML="O seu imc é "+imc.toFixed(2)+ " e você está abaixo do peso.";
    }
    if (imc < 25 && imc >19) {
      aux2 = document.getElementById('cal_imc')  
      aux2.innerHTML="O seu imc é "+imc.toFixed(2)+ " e você está no peso normal.";
    }
    if (imc < 30 && imc >26) {
      aux2 = document.getElementById('cal_imc')  
      aux2.innerHTML="O seu imc é "+imc.toFixed(2)+ " e você está acima do peso.";
    }
    if (imc > 30 ) {
      aux2 = document.getElementById('cal_imc')  
      aux2.innerHTML="O seu imc é "+imc.toFixed(2)+ " e você está obeso.";
    }

}



/* Trabalhador de saúde, indígenas e quilombolas*/

function fases(){

    var res_etnia=document.querySelector('#etnia').value;
    
    // -------------------------------
    // Função que calcula a idade
    // -------------------------------

    function calculaIdade(){
        var data = document.getElementById("calendario").value; 
        var parts =data.split('-');
        data = new Date(parts[0], parts[1]-1, parts[2]); 
    
        // Pegue a data de hoje
        var hoje = new Date();
    
        var nasc  = data;
        var idade = hoje.getFullYear() - nasc.getFullYear();
        console.log(idade);
        var m = hoje.getMonth() - nasc.getMonth();
        console.log(m);
        var dia=hoje.getDate() - nasc.getDate();
        console.log(dia);
    
        if(m<0){
            idade=idade-1;
        } else if(m>0){
            idade=idade;
        }
        else {
                if(dia<0){
                    idade=idade-1;
                    } else{
                        idade=idade;
                    }
                }    
        console.log(idade);
        return idade;
        
    }


    // -----------------------------------------------
    // Função que checa qual profissão foi selecionada
    // -----------------------------------------------

    var checa_prof=document.querySelector('#profissao').value;

    // -----------------------------------------------
    // Função que checa qual comorbidade foi selecionada
    // -----------------------------------------------

    var checa_com=document.querySelector('#comorbidade').value;

    // -------------------------------
    //    Prioridade de profissão
    // -------------------------------
    var age=calculaIdade();
    var aux=document.getElementById('faseVacina');

    if(checa_prof=="saude" || res_etnia=="ind" || res_etnia=="qui"){       
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 17 de Janeiro!";
     }else if(age>=90){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 08 de fevereiro!";
     } else if(age>=85 && age<=89){
         aux.innerHTML="Você é prioridade! Sua data de vacinação é 12 de fevereiro!";
     }else if(age>=80 && age<=84){
         aux.innerHTML="Você é prioridade! Sua data de vacinação é 27 de fevereiro!";
     }else if(age>=77 && age<=79){
         aux.innerHTML="Você é prioridade! Sua data de vacinação é 03 de Março!";
     }else if(age>=75 && age<=76){
         aux.innerHTML="Você é prioridade! Sua data de vacinação é 15 de Março!";
     }else if(age>=72 && age<=74){
         aux.innerHTML="Você é prioridade! Sua data de vacinação é 19 de Março!";
     }else if(age>=69 && age<=71){
         aux.innerHTML="Você é prioridade! Sua data de vacinação é 26 de Março!";
     }else if(age==68){
         aux.innerHTML="Você é prioridade! Sua data de vacinação é 2 de Abril!";
     }else if(checa_prof=="seguranca"){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 05 de Abril!";
     }else if(checa_prof=="educacao"){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 10 de Abril!";
     }else if(age==67){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 12 de Abril!";
    }else if(age>=65 && age<=66){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 21 de Abril!";
    }else if(age==64){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 23 de Abril!";
    }else if(age==63){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 29 de Abril!";
    }else if(age>=60 && age<=62){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 06 de Maio!";
    }else if((checa_com=="down" && age>=18 && age<=59) || (checa_com=="dialise" && age>=18 && age<=59) || (checa_com=="imuno" && age>=18 && age<=59) || (checa_com == "obeso" && age>=18 && age<=59)){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 10 de Maio!"; 
    }else if(checa_prof=="metro"){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 11 de Maio!";
     }else if(checa_prof=="onibus"){
        aux.innerHTML="Você é prioridade! Sua data de vacinação é 18 de Maio!";
     }else{
        aux.innerHTML="Você não é prioridade!";
     }
  };

//   $(function(){
//        $('#cpfFocus').focus().css('background','papayawhip')
//   })
     

  $(document).ready(function(){
    $("input").focus(function(){
       $("#cpfFocus").css('background','lightgray')
    });
})


