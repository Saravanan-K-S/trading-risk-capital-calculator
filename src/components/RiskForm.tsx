import { RISK_PRESETS } from "../lib/calculator";

type RiskFormProps = {
  risk: string;
  price: string;
  tp1: string;
  tp2: string;
  onRiskChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onTp1Change: (value: string) => void;
  onTp2Change: (value: string) => void;
};

export default function RiskForm({
  risk,
  price,
  tp1,
  tp2,
  onRiskChange,
  onPriceChange,
  onTp1Change,
  onTp2Change,
}: RiskFormProps) {
  return (
    <div className="card">
      <label htmlFor="risk">Risk Amount (₹)</label>
      <input
        id="risk"
        type="number"
        value={risk}
        onChange={(event) => onRiskChange(event.target.value)}
      />

      <div className="buttons">
        {RISK_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => onRiskChange(String(preset))}
          >
            {preset}
          </button>
        ))}
      </div>

      <div className="spacer" />

      <label htmlFor="price">Stock Price (₹)</label>
      <input
        id="price"
        type="number"
        value={price}
        onChange={(event) => onPriceChange(event.target.value)}
      />

      <div className="spacer" />

      <label htmlFor="tp1">TP1 Ratio</label>
      <input
        id="tp1"
        type="number"
        value={tp1}
        onChange={(event) => onTp1Change(event.target.value)}
      />

      <div className="spacer" />

      <label htmlFor="tp2">TP2 Ratio</label>
      <input
        id="tp2"
        type="number"
        value={tp2}
        onChange={(event) => onTp2Change(event.target.value)}
      />
    </div>
  );
}
