import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Package } from '../models/Package';

function createRowData(
    packageId: number,
    latitud: number,
    longitud: number,
  ) {
    return { packageId, latitud, longitud };
}



interface RouteInfoTableIProps {
    packages: Package[]
}


const RouteInfoTable = (props: RouteInfoTableIProps) => {

  const { packages } = props;
  const rows: any[] = []
  packages.map((pakage: Package) => { rows.push(createRowData(pakage.packageId,pakage.location[0],pakage.location[1])) })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PackageId</TableCell>
            <TableCell align="right">Latitud</TableCell>
            <TableCell align="right">Longitud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.packageId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.packageId}
              </TableCell>
              <TableCell align="right">{row.latitud}</TableCell>
              <TableCell align="right">{row.longitud}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default RouteInfoTable;