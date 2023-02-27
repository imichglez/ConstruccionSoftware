function redirect(){
    window.location.href="ponies.html";
}

function redirectHome(){
    window.location.href="index.html";
}

function redirectPlay(){
    window.location.href="playset.html";
}

function redirectPromo(){
    window.location.href="promo.html";
}

function loadMore() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("web").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax.txt");
    xhttp.send();
}