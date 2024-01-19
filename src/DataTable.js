import React from "react";
import { Row, Col } from "react-bootstrap";
import TableView from "./TableView";

const DataTable = ({ columns, data }) => {
  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={4}>
          <h2>Data Tables</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={{ zIndex: 1 }}>
          <div style={{ marginLeft: "-20%", marginRight: "-20%" }}>
            <TableView columns={columns} data={data} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DataTable;
