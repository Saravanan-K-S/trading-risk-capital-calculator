import { formatNumber, type ResultRow } from "../lib/calculator";

type ResultsTableProps = {
  rows: ResultRow[];
};

export default function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>SL %</th>
            <th>Capital (₹)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.sl}>
              <td>{row.sl}%</td>
              <td>₹ {formatNumber(row.capital)}</td>
              <td>{row.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
