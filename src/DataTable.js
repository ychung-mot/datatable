import React from "react";
import { Row, Col } from "react-bootstrap";
import TableView from "./TableView";

const DataTable = ({ columns, data, hiddenColumns }) => {
  return (
    <>
      <Row>
        <div className="container mt-4 wrapper flex-grow-1">
          <Col lg={6} md={6} sm={4}>
            <h2>Data Tables</h2>
          </Col>
        </div>
      </Row>
      <Row>
        <Col xs={12} style={{ zIndex: 1 }}>
          <div className="container-fluid mt-4 wrapper flex-grow-1">
            <TableView
              columns={columns}
              data={data}
              hiddenColumns={hiddenColumns}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DataTable;
