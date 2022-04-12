function darkmode(){
    window.document.body.style.backgroundColor = 'gray';
    window.document.body.style.color = 'white';
    window.document.h2.style.color = 'white';
    window.document.h1.style.color = 'white';

}
function lightmode(){
    window.document.body.style.backgroundColor = 'white';
    window.document.body.style.color = 'black';
}



var myVar = setInterval(myTimer ,1000);
    function myTimer() {
        var d = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = d.toLocaleTimeString('pt-BR');
       } else {
          displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
       }
          document.getElementById("demo").innerHTML = displayDate;
    }