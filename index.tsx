import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows] = useState([]);
  const [sorting, setSorting] = useState([{ columnName: 'city', direction: 'asc' }]);

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <SortingState
          sorting={sorting}
          onSortingChange={setSorting}
        />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
      </Grid>
    </Paper>
  );
};
