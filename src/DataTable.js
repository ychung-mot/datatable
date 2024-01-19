import React from "react";
import { useTable } from "react-table";

const DataTable = ({ columns, data }) => {
  // Destructure table instance properties
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{ borderBottom: "2px solid #ddd" }}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  padding: "12px",
                  textAlign: "left",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  borderBottom: "2px solid #ddd",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={{
                backgroundColor: i % 2 === 0 ? "#f9f9f9" : "white",
              }}
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
