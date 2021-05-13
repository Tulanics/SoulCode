//Começar escondido e ao clicar aparecer, vice-versa. Scroll para rolar o conteúdo que aparece
//EVENTO CLICK USADO AQUI
$(document).ready(function () {
  $("#div1_2").hide();
  $("#div1_1").click(function () {
    //EVENTO SCROLL USADO AQUI
    $("#div1_2").show().scrollTop();
    $("#div1_1").hide();
    $("#div1_2").click(function () {
      $("#div1_1").show();
      $("#div1_2").hide();
    });
  });
  $("#div2_2").hide();
  $("#div2_1").click(function () {
    $("#div2_2").show().scrollTop();
    $("#div2_1").hide();
    $("#div2_2").click(function () {
      $("#div2_1").show();
      $("#div2_2").hide();
    });
  });
  $("#div3_2").hide();
  $("#div3_1").click(function () {
    $("#div3_2").show().scrollTop();
    $("#div3_1").hide();
    $("#div3_2").click(function () {
      $("#div3_1").show();
      $("#div3_2").hide();
    });
  });

  $("#div4_2").hide();
  $("#div4_1").click(function () {
    $("#div4_2").show().scrollTop();;
    $("#div4_1").hide();
    $("#div4_2").click(function () {
      $("#div4_1").show();
      $("#div4_2").hide();
    });
});
});


