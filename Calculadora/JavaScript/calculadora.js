class Calculadora {
    sumar(num1, num2){
        return num1 + num2;
    }

    restar(num1, num2){
        return num1 - num2;
    }

    multiplicar(num1, num2){
        return num1 * num2;
    }
    
    dividir(num1, num2){
        return num1 / num2;
    }

    raiz(num1, num2) {
        return Math.pow(num2, 1 / num1);
    }

    potencia(num1, num2) {
        return Math.pow(num1, num2)
    }
}