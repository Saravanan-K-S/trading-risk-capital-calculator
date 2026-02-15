import { useMemo, useState } from "react";
import ResultsTable from "./components/ResultsTable";
import RiskForm from "./components/RiskForm";
import { calculateRows } from "./lib/calculator";

export default function App() {
  const [riskInput, setRiskInput] = useState<string>("1000");
  const [priceInput, setPriceInput] = useState<string>("100");

  const risk = Number(riskInput);
  const price = Number(priceInput);
  const normalizedRisk = Number.isFinite(risk) ? risk : 0;
  const normalizedPrice = Number.isFinite(price) ? price : 0;

  const rows = useMemo(
    () => calculateRows(normalizedRisk, normalizedPrice),
    [normalizedPrice, normalizedRisk],
  );

  return (
    <div className="container">
      <h1>Trading Risk Capital Calculator</h1>
      <RiskForm
        risk={riskInput}
        price={priceInput}
        onRiskChange={setRiskInput}
        onPriceChange={setPriceInput}
      />
      <ResultsTable rows={rows} />
    </div>
  );
}
