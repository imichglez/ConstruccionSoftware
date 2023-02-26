function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "ajax.txt");
  xhttp.send();
}

window.onload = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("picture").src = this.responseText;
  }
  xhttp.open("GET", "piolin.jpg");
  xhttp.send();
}

function loadHtmlPage() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("web").innerHTML = this.responseText;
  }
  xhttp.open("GET", "hola.html");
  xhttp.send();
}