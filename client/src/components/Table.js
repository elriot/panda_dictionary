import "./Table.css";

export const Table = ({ data, column, errMsg }) => {
  
  if (!data || data.length == 0) {
    return <div>{errMsg}</div>;
  }

  return (
    <table className="table">
      {getTableHeader(column)}
      {getTableBody(column, data)}
    </table>
  );
};
const getTableBody = (column, data) => {
  // console.log("data", data, column);
  return (
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          {column.map((col) => (
            <td key={col}>{row[col]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
const getTableHeader = (column) => {
  // console.log("Here");
  return (
    <thead>
      <tr>
        {column.map((data, idx) => {
          return <th key={idx}>{data}</th>;
        })}
      </tr>
    </thead>
  );
};
