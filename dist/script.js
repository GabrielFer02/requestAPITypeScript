import fetchData from "./fetchData.js";
import { normalizeTransiction, } from "./normalizeAPI.js";
import Statistics from "./statistics.js";
function completeTable(transactions) {
    const table = document.querySelector("#transactions tbody");
    if (table && table instanceof HTMLTableElement) {
        transactions.forEach((transaction) => {
            table.innerHTML += `
      <tr>
        <td>${transaction.nome}</td>
        <td>${transaction.email}</td>
        <td>R$${transaction.moeda}</td>
        <td>${transaction.pagamento}</td>
        <td>${transaction.status}</td>
      </tr>
      `;
        });
    }
}
function completeList(list, element) {
    const containerElement = document.getElementById(element);
    if (containerElement) {
        Object.keys(list).forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
        });
    }
}
function completeStatistics(transactions) {
    const data = new Statistics(transactions);
    completeList(data.pagamento, "pagamento");
    completeList(data.status, "status");
    const totalElement = document.querySelector("#total span");
    if (totalElement) {
        totalElement.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const diaElement = document.querySelector("#dia span");
    if (diaElement) {
        diaElement.innerText = data.melhorDia[0];
    }
}
async function handleData() {
    const data = await fetchData("");
    if (data) {
        const transactions = data.map(normalizeTransiction);
        completeTable(transactions);
        completeStatistics(transactions);
    }
}
handleData();
//# sourceMappingURL=script.js.map