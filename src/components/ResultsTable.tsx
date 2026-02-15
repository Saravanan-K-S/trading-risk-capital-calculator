import { formatNumber, type ResultRow } from "../lib/calculator";

type ResultsTableProps = {
  rows: ResultRow[];
};

export default function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <>
      <h2>Results</h2>
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
    </>
  );
}
