export default class DataHora {
    constructor(elementoData = document.querySelector("#datetime > div:nth-child(2)"), elemnetoHora = document.querySelector("#datetime time")) {
        this.elementoData = elementoData;
        this.elemnetoHora = elemnetoHora;
        this.renderizar();
        setInterval(() => this.renderizar(), 1000);
    }
    renderizar() {
        const dataAtual = new Date();
        const dia = dataAtual.getDate().toString().padStart(2, '0');
        const mes = dataAtual.toLocaleString('pt-BR', { month: 'long' });
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours().toString().padStart(2, '0');
        const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ':' : ' ';
        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minutos}`;
    }
    set data(conteudo) {
        if (this.elementoData) {
            this.elementoData.innerHTML = conteudo;
        }
    }
    set hora(conteudo) {
        if (this.elemnetoHora) {
            this.elemnetoHora.innerHTML = conteudo;
        }
    }
}
//# sourceMappingURL=DataHora.js.map