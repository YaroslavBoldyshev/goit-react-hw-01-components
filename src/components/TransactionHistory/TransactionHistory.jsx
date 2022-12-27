import PropTypes from "prop-types";
import "./TransactionHistory.css";
const TransactionHistory = ({ items }) => {
  const list = items.map((el) => {
    return (
      <tr key={el.id}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </tr>
    );
  });
  return (
    <table className="historyTable">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{list}</tbody>
    </table>
  );
};
export default TransactionHistory;
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};
