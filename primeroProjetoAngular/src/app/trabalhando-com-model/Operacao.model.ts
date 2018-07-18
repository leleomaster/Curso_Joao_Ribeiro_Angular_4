export class cl_operacao {

    public valor1: number;
    public valor2: number;

    public tipo_operacao: number;
    public resultado: number;

    public str_operacao: string;

    constructor() {
        // criar uma operação matemática aleatório.
        this.valor1 = this.gerarValorAleatorio(1, 10);
        this.valor2 = this.gerarValorAleatorio(1, 10);
        this.tipo_operacao = this.gerarValorAleatorio(1, 4);

        switch (this.tipo_operacao) {
            case 1:
                this.resultado = this.valor1 + this.valor2;
                this.str_operacao = `${this.valor1} + ${this.valor2} = `;
                break;
            case 2:
                this.resultado = this.valor1 - this.valor2;
                this.str_operacao = `${this.valor1} - ${this.valor2} = `;
                break;
            case 3:
                this.resultado = this.valor1 * this.valor2;
                this.str_operacao = `${this.valor1} x ${this.valor2} = `;
                break;
            case 4:
                this.resultado = this.valor1 / this.valor2;
                this.str_operacao = `${this.valor1} : ${this.valor2} = `;
                break;

            default:
                break;
        }

    }

    gerarValorAleatorio(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}