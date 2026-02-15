import { RISK_PRESETS } from "../lib/calculator";

type RiskFormProps = {
  risk: string;
  price: string;
  onRiskChange: (value: string) => void;
  onPriceChange: (value: string) => void;
};

export default function RiskForm({
  risk,
  price,
  onRiskChange,
  onPriceChange,
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
    </div>
  );
}
