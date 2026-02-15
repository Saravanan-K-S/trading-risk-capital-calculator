export const STOP_LOSS_VALUES = [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5];
export const RISK_PRESETS = [500, 750, 1000, 1250, 1500];

export type ResultRow = {
  sl: number;
  capital: number;
  quantity: number;
  slPrice: number;
  tp1Price: number;
  tp2Price: number;
};

export function formatNumber(value: number): string {
  return Math.ceil(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculateRows(
  risk: number,
  price: number,
  tp1Ratio: number,
  tp2Ratio: number,
): ResultRow[] {
  if (risk <= 0 || price <= 0) {
    return [];
  }

  const normalizedTp1 = Number.isFinite(tp1Ratio) ? tp1Ratio : 0;
  const normalizedTp2 = Number.isFinite(tp2Ratio) ? tp2Ratio : 0;

  return STOP_LOSS_VALUES.map((sl) => {
    const capital = Math.ceil(risk / (sl / 100));
    const quantity = Math.ceil(capital / price);
    const slPrice = price * (1 - sl / 100);
    const riskPerShare = price - slPrice;
    const tp1Price = price + riskPerShare * normalizedTp1;
    const tp2Price = price + riskPerShare * normalizedTp2;

    return { sl, capital, quantity, slPrice, tp1Price, tp2Price };
  });
}
