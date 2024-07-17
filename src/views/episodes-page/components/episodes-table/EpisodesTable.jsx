import React from 'react';
import Table from 'react-bootstrap/Table';
import EpisodesTableRow from '../episodes-table-row/EpisodesTableRow';

export default function EpisodesTable(props) {
  const { tableData } = props;

  return (
    <div key={tableData.title}>
      <h1>{tableData.title}</h1>
    
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Scene</th>
          <th>Episode</th>
          <th>Date</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      {tableData.rows.map((model) => (
            <EpisodesTableRow key={model.episode} rowData={model} />
          ))}
      </tbody>
    </Table>
    </div>
  );
}
