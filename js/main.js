<!--  -->

window.onload=function() {
  horloge('div_horloge');
};

function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }
  function actualiser() {
    var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
    el.innerHTML = str;
  }
  actualiser();
  setInterval(actualiser,1000);
}

<!--  -->

var seconde=0;
document.write("Temps passé sur notre site : ");
function chrono()
{
  document.getElementById("mychrono").innerHTML=seconde;
  seconde++;
}
setInterval(chrono, 1000);

<!--  -->


  <!--  -->
