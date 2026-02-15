import { useEffect, useState } from "react";
import { formatNumber, type ResultRow } from "../lib/calculator";

type ResultsTableProps = {
  rows: ResultRow[];
};

type ViewMode = "table" | "cards";
const VIEW_MODE_KEY = "results-view-mode";

export default function ResultsTable({ rows }: ResultsTableProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("table");

  useEffect(() => {
    const saved = window.localStorage.getItem(VIEW_MODE_KEY);
    if (saved === "table" || saved === "cards") {
      setViewMode(saved);
      return;
    }

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    setViewMode(isMobile ? "cards" : "table");
  }, []);

  useEffect(() => {
    window.localStorage.setItem(VIEW_MODE_KEY, viewMode);
  }, [viewMode]);

  return (
    <>
      <div className="results-head">
        <h2>Results</h2>
        <div className="view-toggle" role="group" aria-label="Results view">
          <button
            type="button"
            className={`view-button ${viewMode === "table" ? "active" : ""}`}
            onClick={() => setViewMode("table")}
          >
            Table
          </button>
          <button
            type="button"
            className={`view-button ${viewMode === "cards" ? "active" : ""}`}
            onClick={() => setViewMode("cards")}
          >
            Cards
          </button>
        </div>
      </div>

      {viewMode === "table" ? (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>SL %</th>
                <th>Capital (₹)</th>
                <th>Quantity</th>
                <th>SL</th>
                <th>TP1</th>
                <th>TP2</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.sl}>
                  <td>{row.sl}%</td>
                  <td>₹ {formatNumber(row.capital)}</td>
                  <td>{row.quantity}</td>
                  <td>₹ {formatNumber(row.slPrice)}</td>
                  <td>₹ {formatNumber(row.tp1Price)}</td>
                  <td>₹ {formatNumber(row.tp2Price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="result-cards">
          {rows.map((row) => (
            <article key={row.sl} className="result-card-item">
              <div className="result-card-top">
                <span>SL %</span>
                <strong>{row.sl}%</strong>
              </div>
              <div className="result-grid">
                <div>
                  <span className="metric-label">Capital</span>
                  <strong>₹ {formatNumber(row.capital)}</strong>
                </div>
                <div>
                  <span className="metric-label">Quantity</span>
                  <strong>{row.quantity}</strong>
                </div>
                <div>
                  <span className="metric-label">SL</span>
                  <strong>₹ {formatNumber(row.slPrice)}</strong>
                </div>
                <div>
                  <span className="metric-label">TP1</span>
                  <strong>₹ {formatNumber(row.tp1Price)}</strong>
                </div>
                <div>
                  <span className="metric-label">TP2</span>
                  <strong>₹ {formatNumber(row.tp2Price)}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
