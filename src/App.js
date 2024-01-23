import React, { useState } from "react";
import DataTable from "./DataTable";
import makeData from "./makeData";

function App() {
  const [hideFirstName, setHideFirstName] = useState(false);

  const columns = [
    {
      Header: "Name",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName",
          show: !hideFirstName,
        },
        {
          Header: "Last Name",
          accessor: "lastName",
        },
      ],
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Age",
          accessor: "age",
        },
        {
          Header: "Visits",
          accessor: "visits",
        },
        {
          Header: "Status1",
          accessor: "status1",
        },
        {
          Header: "Status2",
          accessor: "status2",
        },
        {
          Header: "Status3",
          accessor: "status3",
        },
        {
          Header: "Status4",
          accessor: "status4",
        },
        {
          Header: "Status5",
          accessor: "Status5",
        },
        {
          Header: "Status6",
          accessor: "Status6",
        },
        {
          Header: "Status7",
          accessor: "Status7",
        },
        {
          Header: "Status8",
          accessor: "Status8",
        },
        {
          Header: "Status9",
          accessor: "Status9",
        },
        {
          Header: "Status10",
          accessor: "Status10",
        },
        {
          Header: "Profile Progress",
          accessor: "progress",
        },
        {
          Header: "Actions",
          accessor: "actions",
          Cell: ({ row }) => (
            <>
              <button
                onClick={() => alert(`First Name: ${row.original.firstName}`)}
              >
                Show First Name
              </button>
            </>
          ),
        },
      ],
    },
  ];

  const data = React.useMemo(() => makeData(20), []);

  return (
    <div>
      <button onClick={() => setHideFirstName(!hideFirstName)}>
        Toggle First Name
      </button>
      <DataTable
        columns={columns}
        data={data}
        hiddenColumns={hideFirstName ? ["firstName"] : []}
      />
    </div>
  );
}

export default App;
