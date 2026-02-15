export const STOP_LOSS_VALUES = [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5];
export const RISK_PRESETS = [500, 750, 1000, 1250, 1500];

export type ResultRow = {
  sl: number;
  capital: number;
  quantity: number;
};

export function formatNumber(value: number): string {
  return Math.ceil(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculateRows(risk: number, price: number): ResultRow[] {
  if (risk <= 0 || price <= 0) {
    return [];
  }

  return STOP_LOSS_VALUES.map((sl) => {
    const capital = Math.ceil(risk / (sl / 100));
    const quantity = Math.ceil(capital / price);

    return { sl, capital, quantity };
  });
}
