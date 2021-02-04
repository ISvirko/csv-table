import React, { useState } from "react";
import Papa from "papaparse";
import DataTable from "react-data-table-component";

import employeesData from "./employees.csv";
// import employeesJson from "./employees.json";
import { columns, findDuplicates } from "./helpers";
import { Button, Container, ErrorMessage } from "./styles";

const App = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(false);

  const checkHeaders = () => {
    Papa.parse(employeesData, {
      download: true,
      complete: ({ data }) => {
        const headers = data[0].map((item) => item.toLowerCase());

        if (
          !headers.includes("full name") ||
          !headers.includes("email") ||
          !headers.includes("phone")
        ) {
          setError(true);
          return;
        }
      },
    });
  };

  const handleImportData = () => {
    try {
      checkHeaders();

      Papa.parse(employeesData, {
        download: true,
        header: true,
        complete: ({ data }) => {
          const filteredData = data.map((row, idx) => ({
            ...row,
            id: idx + 1,
          }));

          const dataWithDuplicates = filteredData.map((row) => ({
            ...row,
            duplicate:
              findDuplicates(filteredData, row, "email", "phone") ?? null,
          }));

          setRows(dataWithDuplicates);
        },
      });
    } catch (error) {
      setError(true);
      return;
    }
  };

  return (
    <Container>
      <Button onClick={handleImportData}>Import Users</Button>

      {error ? (
        <ErrorMessage>File format is not correct</ErrorMessage>
      ) : rows.length ? (
        <DataTable
          title="Employees"
          columns={columns}
          data={rows}
          highlightOnHover
          pagination
        />
      ) : null}
    </Container>
  );
};

export default App;
