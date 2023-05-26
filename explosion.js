//função em javascript usando if e else para a última página
function perguntar() {
  var pergunta;
  pergunta = prompt("você gosta de gatos?");
  if (pergunta == "sim") {
    document.getElementById("p").innerHTML = "que bom, eu também!";
  } else {
    document.getElementById("p").innerHTML = "VAI EMBORA!!!!!!!!!!";
  }
}
