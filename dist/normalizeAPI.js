import currencyToNumber from "./numberConverter.js";
import stringToDate from "./stringToDate.js";
export function normalizeTransiction(data) {
    return {
        nome: data.Nome,
        id: data.ID,
        data: stringToDate(data.Data),
        status: data.Status,
        email: data.Email,
        moeda: data["Valor (R$)"],
        valor: currencyToNumber(data["Valor (R$)"]),
        pagamento: data["Forma de Pagamento"],
        novo: Boolean(data["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizeAPI.js.map