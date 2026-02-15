import { useMemo, useState } from "react";
import ResultsTable from "./components/ResultsTable";
import RiskForm from "./components/RiskForm";
import { calculateRows } from "./lib/calculator";

export default function App() {
  const [riskInput, setRiskInput] = useState<string>("1000");
  const [priceInput, setPriceInput] = useState<string>("100");
  const [tp1Input, setTp1Input] = useState<string>("2");
  const [tp2Input, setTp2Input] = useState<string>("3");

  const risk = Number(riskInput);
  const price = Number(priceInput);
  const tp1 = Number(tp1Input);
  const tp2 = Number(tp2Input);
  const normalizedRisk = Number.isFinite(risk) ? risk : 0;
  const normalizedPrice = Number.isFinite(price) ? price : 0;
  const normalizedTp1 = Number.isFinite(tp1) ? tp1 : 0;
  const normalizedTp2 = Number.isFinite(tp2) ? tp2 : 0;

  const rows = useMemo(
    () =>
      calculateRows(
        normalizedRisk,
        normalizedPrice,
        normalizedTp1,
        normalizedTp2,
      ),
    [normalizedPrice, normalizedRisk, normalizedTp1, normalizedTp2],
  );

  return (
    <div className="container">
      <h1>Trading Risk Capital Calculator</h1>
      <RiskForm
        risk={riskInput}
        price={priceInput}
        tp1={tp1Input}
        tp2={tp2Input}
        onRiskChange={setRiskInput}
        onPriceChange={setPriceInput}
        onTp1Change={setTp1Input}
        onTp2Change={setTp2Input}
      />
      <ResultsTable rows={rows} />
    </div>
  );
}
