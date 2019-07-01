
function atv2() {
    var acm2 = 0;
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var val3 = document.getElementById('valor3').value;
    var val4 = document.getElementById('valor4').value;
    
    if (val1 === "535") {
     acm2 = acm2 + 10;
    } else {
        acm2 = acm2 + 0;
    }
    
    if (val2 === "924") {
       acm2 = acm2 + 10;
    } else {
        acm2 = acm2 + 0;
    }
    if (val3 === "47"){
        acm2 = acm2 + 10;
    }else{
        acm2 = acm2 + 0;
    }
    if (val4 === "1211"){
        acm2 = acm2 + 10;
    } else{
        acm2 = acm2 +0;
    }
    
    alert('Seu total de pontos foi: ' +acm2);
    
    }
