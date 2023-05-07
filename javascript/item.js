
function sumar(){
    let num = document.getElementById('num').value;
    
    if(num == ''){
        num ="0";
    }
   
    let sumar = parseInt(num) +1;
    document.getElementById('num').value = sumar;
}

function restar(){
    let num = document.getElementById('num').value;
    
    if(num == ''){
        num ="0";
    }
   
    let restar = parseInt(num) -1;
    document.getElementById('num').value = restar;
}

