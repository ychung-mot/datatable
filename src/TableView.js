import React from "react";
import { useTable } from "react-table";

const TableView = ({ columns, data, hiddenColumns, isFirstColSticky }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, initialState: { hiddenColumns } });

  return (
    <div>
      <table
        {...getTableProps()}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead style={{ borderBottom: "2px solid #ddd" }}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    borderBottom: "2px solid #ddd",
                    position:
                      isFirstColSticky && columnIndex === 0
                        ? "sticky"
                        : "static",
                    left: isFirstColSticky && columnIndex === 0 ? 0 : "auto",
                    zIndex: isFirstColSticky && columnIndex === 0 ? 1 : "auto",
                    backgroundColor: "#fff", // Add a background color for better visibility
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
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "12px",
                      borderBottom: "1px solid #ddd",
                      position:
                        isFirstColSticky && cellIndex === 0
                          ? "sticky"
                          : "static",
                      left: isFirstColSticky && cellIndex === 0 ? 0 : "auto",
                      zIndex: isFirstColSticky && cellIndex === 0 ? 1 : "auto",
                      backgroundColor: "#fff", // Add a background color for better visibility
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
    </div>
  );
};

export default TableView;
