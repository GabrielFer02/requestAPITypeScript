import { countBy } from "./countBy.js";
function filterValue(transaction) {
    return transaction.valor !== null;
}
export default class Statistics {
    transactions;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        return this.transactions
            .filter(filterValue)
            .reduce((previousValue, value) => {
            return previousValue + value.valor;
        }, 0);
    }
    setPagamento() {
        return countBy(this.transactions.map(({ pagamento }) => {
            return pagamento;
        }));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => {
            return status;
        }));
    }
    setSemana() {
        const semana = {
            ["Domingo"]: 0,
            ["Segunda"]: 0,
            ["Terça"]: 0,
            ["Quarta"]: 0,
            ["Quinta"]: 0,
            ["Sexta"]: 0,
            ["Sábado"]: 0,
        };
        for (let index = 0; index < this.transactions.length; index++) {
            const day = this.transactions[index].data.getDay();
            if (day === 0)
                semana["Domingo"] += 1;
            if (day === 1)
                semana["Segunda"] += 1;
            if (day === 2)
                semana["Terça"] += 1;
            if (day === 3)
                semana["Quarta"] += 1;
            if (day === 4)
                semana["Quinta"] += 1;
            if (day === 5)
                semana["Sexta"] += 1;
            if (day === 6)
                semana["Sábado"] += 1;
        }
        return semana;
    }
    setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
//# sourceMappingURL=statistics.js.map