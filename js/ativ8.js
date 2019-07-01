
function atv8() {
    var acm8 = 0;
    var subb1 = document.getElementById('sub1').value;
    var subb2 = document.getElementById('sub2').value;
    var subb3 = document.getElementById('sub3').value;
    var subb4 = document.getElementById('sub4').value;
    
    if (subb1 === "5") {
     acm8 = acm8 + 10;
    } else {
        acm8 = acm8 + 0;
    }
    
    if (subb2 === "20") {
       acm8 = acm8 + 10;
    } else {
        acm8 = acm8 + 0;
    }
    if (subb3 === "14"){
        acm8 = acm8 + 10;
    }else{
        acm8 = acm8 + 0;
    }
    if (subb4 === "2"){
        acm8 = acm8 + 10;
    } else{
        acm8 = acm8 +0;
    }
    
    alert('Sua pontuação foi de: ' +acm8);
    
    }
