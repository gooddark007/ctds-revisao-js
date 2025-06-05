function somar(){
    var valor1 = parseFloat(document.getElementById("valor1").value)
    var valor2 = parseFloat(document.getElementById("valor2").value)
    soma = valor1 + valor2
    document.getElementById("resultado").textContent = soma
}

function subtrair(){
    var valor1 = parseFloat(document.getElementById("valor1").value)
    var valor2 = parseFloat(document.getElementById("valor2").value)
    soma = valor1 - valor2
    document.getElementById("resultado").textContent = soma
}

function multiplicar(){
    var valor1 = parseFloat(document.getElementById("valor1").value)
    var valor2 = parseFloat(document.getElementById("valor2").value)
    soma = valor1 * valor2
    document.getElementById("resultado").textContent = soma
}

function dividir(){
    var valor1 = parseFloat(document.getElementById("valor1").value)
    var valor2 = parseFloat(document.getElementById("valor2").value)
    soma = (valor1 / valor2).toFixed(2)
    document.getElementById("resultado").textContent = soma
}




    
