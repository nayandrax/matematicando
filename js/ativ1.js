
function atv1() {
    var acm = 0;
    var pin = document.getElementById('pinguin').value;
    var ele = document.getElementById('elefante').value;
    var est = document.getElementById('estrela').value;
    var bal = document.getElementById('baloes').value;
    
    if ( pin === "sexta") {
     acm = acm + 10;
    } else {
        acm = acm + 1;
    }
    
    if (ele === "setima") {
       acm = acm + 10;
    } else {
        acm = amc + 1;
    }
    if (est === "segunda"){
        acm = acm + 10;
    }else{
        acm =  acm + 1;
    }
    if (bal === "oitava"){
        acm = acm + 10;
    }else{
        acm = acm + 1;
    }
    
    alert('Seu total de pontos foi: ' +acm);
    
    }
