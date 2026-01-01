

export default class DataHora {

    // TODO: No construcor manipulandoos elementos da "div #datetime".
    constructor(
        private elementoData: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
        private elemnetoHora: HTMLTimeElement | null = document.querySelector("#datetime time")

    ) {

        this.renderizar();
        setInterval(() => this.renderizar(), 1000);

    }

    renderizar() {

        const dataAtual = new Date();
        const dia = dataAtual.getDate().toString().padStart(2,'0');
        const mes = dataAtual.toLocaleString('pt-BR', { month: 'long' });
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours().toString().padStart(2, '0');
        const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ':' : ' ';

        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minutos}`
    }

    set data(conteudo: string) {

        if (this.elementoData) {
            this.elementoData.innerHTML = conteudo;
        }
    }

    set hora(conteudo: string) {

        if (this.elemnetoHora) {
            this.elemnetoHora.innerHTML = conteudo;
        }
    }
}