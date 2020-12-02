var cifra = "";
var contador = 0;
var esCero = false;
var igualPulsado = false;
var operacion = 0;
var resultado = 0;

function marcar_digito(num) {
    document.getElementById("suma").disabled = false;
    document.getElementById("resta").disabled = false;
    document.getElementById("multiplicacion").disabled = false;
    document.getElementById("division").disabled = false;
    document.getElementById("igual").disabled = false;

    if (contador != 0 || igualPulsado) {
        if (num == 0 && esCero == false) {
            esCero = true;
            document.getElementById("pantalla").value = "0";
        } else if (num != 0) {
            document.getElementById("pantalla").value = "";
            igualPulsado = false;
            contador = 0;
            // Al poner el contador a 0, entrará en el siguiente if, dentro del else anidado
        }
    }

    if (contador == 0) {
        if (num == 0 && cifra == "") {
            esCero = true;
        } else {
            document.getElementById("pantalla").value += num;
            cifra = document.getElementById("pantalla").value;
            esCero = false;
        }
    }
}

// Unifica todas las operaciones (+, -, x, / y =)
function marcar_operacion(op) {
    if (op == "=") {
        igualPulsado = true;
        document.getElementById("igual").disabled = true;
        document.getElementById("pantalla").value = cifra;

        if (operacion == 1) {
            document.getElementById("pantalla").value = resultado + parseInt(cifra);
        } else if (operacion == 2) {
            document.getElementById("pantalla").value = resultado - parseInt(cifra);
        } else if (operacion == 3) {
            document.getElementById("pantalla").value = resultado * parseInt(cifra);
        } else if (operacion == 4) {
            document.getElementById("pantalla").value = resultado / parseInt(cifra);
        }
    } else {
        contador = 1;
        cifra = parseInt(cifra);

        if (op == "+") {
            comprobar_op_anterior();
            operacion = 1;
            document.getElementById("suma").disabled = true;
        } else if (op == "-") {
            comprobar_op_anterior();
            operacion = 2;
            document.getElementById("resta").disabled = true;
        } else if (op == "x") {
            comprobar_op_anterior();
            operacion = 3;
            document.getElementById("multiplicacion").disabled = true;
        } else if (op == "/") {
            comprobar_op_anterior();
            operacion = 4;
            document.getElementById("division").disabled = true;
        }
    }
}

// Comprueba cuál la operación anterior a la que se está marcando
function comprobar_op_anterior() {
    if (operacion == 0) {
        resultado = cifra;
        document.getElementById("pantalla").value = cifra;
    } else if (operacion == 1) {
        resultado += cifra;
        document.getElementById("pantalla").value = resultado;
    } else if (operacion == 2) {
        resultado -= cifra;
        document.getElementById("pantalla").value = resultado;
    } else if (operacion == 3) {
        resultado *= cifra;
        document.getElementById("pantalla").value = resultado;
    } else if (operacion == 4) {
        resultado /= cifra;
        document.getElementById("pantalla").value = resultado;
    }
}



// TO DO LIST:
// - Que se pueda rectificar la operación seleccionada (operador?)
// - Posibilidad de operar con decimales
// - Si se pulsa una operación nada más cargar la ventana, que por defecto value = 0;
// - Poder introducir numeros y operaciones por teclado
// - Limitar los números de la pantalla


// function es_coma(param) {
//     if (document.getElementById("pantalla").value == "") {
//         document.getElementById("pantalla").value = 0;
//         document.getElementById("pantalla").value += param;
//         contador_coma = 1;
//     } else if (document.getElementById("pantalla").value != "" && contador_coma == 0) {
//         document.getElementById("pantalla").value += param;
//         contador_coma = 1;
//     }
// }