
function KvadratCAL(){
    
    var Kv1 = document.getElementById("Kv1").value; 
    var Kv2 = document.getElementById("Kv2").value;  
    var Kv3 = document.getElementById("Kv3").value;

    const D = Kv2**2-4 * Kv1 * Kv3 
    console.log(D)
    document.getElementById("result").innerText = (parseInt(-Kv2,10)+parseInt(Math.sqrt(D),10))/(2*parseInt(Kv1,10));
    document.getElementById("result2").innerText = (parseInt(-Kv2,10)-parseInt(Math.sqrt(D),10))/(2*parseInt(Kv1,10));
  
}   

function SinCosTg(){
    var SKTValue = document.getElementById("selectvalueSKT").value;
    if(SKTValue = 1){

    }
}
