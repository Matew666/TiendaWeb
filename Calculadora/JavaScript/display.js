class Display {
    constructor(displayValorAnterior, displayValorActual, displayValorRedondeo){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;

        this.displayValorRedondeo = displayValorRedondeo;
        this.ValorRedondeo = '';

        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
            raiz: '√',
            potencia: '^'
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
        this.displayValorActual.textContent = '0';
    }

    limpiar(){
      this.displayValorRedondeo.textContent = '0';   
    }

    techo() {
        this.valorTecho = parseFloat(this.ValorRedondeo) + 1;
        this.displayValorRedondeo.textContent = `${Math.trunc(this.valorTecho)}`;   
    }

    piso() {
        this.valorPiso = parseFloat(this.ValorRedondeo);
        this.displayValorRedondeo.textContent = `${Math.trunc(this.valorPiso)}`;   
    }

    redondeo() {
        this.ValorRedondeo1 = parseFloat(this.ValorRedondeo);
        this.displayValorRedondeo.textContent = `${Math.round(this.ValorRedondeo1)}`;   
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.ValorRedondeo = this.valorActual;
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        if (this.tipoOperacion === 'igual')
                this.displayValorRedondeo.textContent = `${this.valorAnterior}`;
                this.ValorRedondeo = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
