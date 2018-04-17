var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function GetClock() {
  var d = new Date();
  var nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();

  var nhour = d.getHours(),
    nmin = d.getMinutes();
  if (nmin <= 9) nmin = "0" + nmin

  document.getElementById('clock').innerHTML = "" + tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + "";
}

window.onload = function () {
  GetClock();
  setInterval(GetClock, 1000);
}