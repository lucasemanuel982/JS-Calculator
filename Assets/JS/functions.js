function insert(numbers){
    var numero = document.getElementById('valor').innerHTML;
    document.getElementById('valor').innerHTML = numero +numbers;
}

function cleanAll(){
    document.getElementById('valor').innerHTML = " ";
}

function clean(){
    var resultados = document.getElementById('valor').innerHTML;
    document.getElementById('valor').innerHTML = resultados.substring(0, resultados.length -1);
}

function calcular(){
    var resultados = document.getElementById('valor').innerHTML;

    if(resultados){
        document.getElementById('valor').innerHTML =eval(resultados);
    }else{
        document.getElementById('Valor').innerHTML = "informe valores";
    }
}