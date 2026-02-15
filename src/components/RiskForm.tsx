import { RISK_PRESETS } from "../lib/calculator";

type RiskFormProps = {
  risk: string;
  price: string;
  tp1: string;
  tp2: string;
  locked: boolean;
  onRiskChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onTp1Change: (value: string) => void;
  onTp2Change: (value: string) => void;
  onLockClick: () => void;
};

export default function RiskForm({
  risk,
  price,
  tp1,
  tp2,
  locked,
  onRiskChange,
  onPriceChange,
  onTp1Change,
  onTp2Change,
  onLockClick,
}: RiskFormProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Inputs</h2>
        <button
          type="button"
          className="lock-button"
          onClick={onLockClick}
          aria-label={locked ? "Unlock inputs" : "Lock inputs"}
          title={locked ? "Unlock inputs" : "Lock inputs"}
        >
          {locked ? (
            <svg
              className="lock-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="5" y="10" width="14" height="10" rx="2" ry="2" />
              <path d="M8 10V7a4 4 0 1 1 8 0v3" />
            </svg>
          ) : (
            <svg
              className="lock-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="5" y="10" width="14" height="10" rx="2" ry="2" />
              <path d="M16 10V7a4 4 0 0 0-7.5-2" />
            </svg>
          )}
        </button>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="risk">Risk Amount (₹)</label>
          <input
            id="risk"
            type="number"
            value={risk}
            disabled={locked}
            onChange={(event) => onRiskChange(event.target.value)}
          />
          <div className="buttons">
            {RISK_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                disabled={locked}
                onClick={() => onRiskChange(String(preset))}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label htmlFor="tp1">TP1 Ratio</label>
          <input
            id="tp1"
            type="number"
            value={tp1}
            disabled={locked}
            onChange={(event) => onTp1Change(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="tp2">TP2 Ratio</label>
          <input
            id="tp2"
            type="number"
            value={tp2}
            disabled={locked}
            onChange={(event) => onTp2Change(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="price">Stock Entry Price (₹)</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(event) => onPriceChange(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
