document.getElementById("encuesta").onsubmit = function () {
    1 = parseInt(document.querySelector('input[name = "1"]:checked').value);
	  2 = parseInt(document.querySelector('input[name = "2"]:checked').value);
	  3 = parseInt(document.querySelector('input[name = "3"]:checked').value);
    4 = parseInt(document.querySelector('input[name = "4"]:checked').value);
	  5 = parseInt(document.querySelector('input[name = "5"]:checked').value);
    resultado = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 +15;

  document.getElementById("grade").innerHTML = resultado;
  if (resultado = 5) {alert("sos un genio");};
  if (resultado < 5 && resultado > 3) {alert("muy bien");};
  if (resultado = 3) {alert("estubiste cerca");};
  if (resultado < 3 && resultado >0) {alert("ponete a estudiar");}
  if (resultado = 0) {alert("sos un burro");}
  return false;
}
