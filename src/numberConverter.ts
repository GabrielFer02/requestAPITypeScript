export default function currencyToNumber(currency: string): number | null {
  const number = Number(currency.replaceAll(".", "").replace(",", ""));
  return isNaN(number) ? null : number;
}
