import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

//props need to contain both columnDefs and rowData
//We are setting columns defs with props because AG Grid Wrapper needs to handle multiple types of Ag Grid types (namely assets and transactions)
const AGGridWrapper = props => {
  console.log(props.data);

  return (
    <div
      className='ag-theme-balham'
      style={{
        height: '500px',
        width: '1500px'
      }}
    >
      <AgGridReact
        columnDefs={props.data.columnDefs}
        rowData={props.data.rowData}
      />
    </div>
  );
};

export default AGGridWrapper;
