import React, { useState } from "react";
import DataTable from "./DataTable";
import makeData from "./makeData";

function App() {
  const [hideFirstName, setHideFirstName] = useState(false);

  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Visits",
      accessor: "visits",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Profile Progress",
      accessor: "progress",
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => (
        <button onClick={() => alert(`First Name: ${row.original.firstName}`)}>
          Show First Name
        </button>
      ),
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
