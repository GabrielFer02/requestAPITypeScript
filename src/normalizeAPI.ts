import currencyToNumber from "./numberConverter.js";
import stringToDate from "./stringToDate.js";

type TransacaoStatus = "Paga" | "Recusada" | "Aguardando Pagamento";
type TransacaoPagamento = "Boleto" | "Cartão de Crédito" | "PIX";

export interface TransacaoAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  ["Cliente Novo"]: number;
}

export interface Transacao {
  nome: string;
  id: number;
  data: Date;
  status: TransacaoStatus;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TransacaoPagamento;
  novo: boolean;
}

export function normalizeTransiction(data: TransacaoAPI): Transacao {
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
