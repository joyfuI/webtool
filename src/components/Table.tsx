import { forwardRef } from 'react';
import type { Ref, ReactNode } from 'react';
import type { SxProps } from '@mui/material';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import type { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import type theme from '@/theme';

export type ColumnType = {
  field: string;
  headerName?: string;
} & TableCellProps;

export type RowType = Record<string, ReactNode>;

export type TableProps = {
  columns: ColumnType[];
  rows: RowType[];
  sx?: SxProps<typeof theme>;
};

const Table = ({ columns, rows, sx }: TableProps, ref: Ref<HTMLDivElement>) => (
  <TableContainer ref={ref} component={Paper} sx={sx}>
    <MuiTable sx={{ whiteSpace: 'nowrap' }}>
      <TableHead>
        <TableRow>
          {columns.map(({ field, headerName, ...props }) => (
            <TableCell key={field} {...props}>
              {headerName}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow
            key={i}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            {columns.map(({ field, headerName, ...props }) => (
              <TableCell key={field} {...props}>
                {row[field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
);

export default forwardRef(Table);
