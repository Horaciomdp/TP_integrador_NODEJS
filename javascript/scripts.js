/*inicio seccion shop que realiza la suma de productos*/
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
    
    if(num == '' || num == 0){
        num ="0";
        alert("No tiene items para quitar"); 
    }
   
    if(num > "0"){
        let restar = parseInt(num) -1;
        document.getElementById('num').value = restar;
    }
}

/*fin seccion shop que realiza la suma de productos*/
