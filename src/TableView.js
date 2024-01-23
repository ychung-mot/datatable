import React, { useRef } from "react";
import { useTable } from "react-table";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const TableView = ({
  columns,
  data,
  hiddenColumns,
  isFirstColSticky,
  scrollHandler = () => {},
  maxHeight = 700,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, initialState: { hiddenColumns } });
  const barRef = useRef(null);

  React.useEffect(() => {
    if (barRef.current) {
      barRef.current
        .getScrollElement()
        .addEventListener("scroll", scrollHandler);
    }
  }, [scrollHandler]);

  return (
    <div style={{ position: "relative" }}>
      <SimpleBar ref={barRef} autoHide={false} style={{ maxHeight, position: "relative" }}>
        <table
          {...getTableProps()}
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead style={{ borderBottom: "2px solid #ddd", position: "sticky", top: 0, zIndex: 2, background: "#fff" }}>
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
                      position: isFirstColSticky && columnIndex === 0 ? "sticky" : "static",
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
                        position: isFirstColSticky && cellIndex === 0 ? "sticky" : "static",
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
      </SimpleBar>
    </div>
  );
};

export default TableView;
