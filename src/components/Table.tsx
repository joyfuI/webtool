import type { SxProps } from '@mui/material';
import Paper from '@mui/material/Paper';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import type { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { ReactNode, Ref } from 'react';

import type theme from '@/theme';

export type ColumnType = {
  field: string;
  headerName?: string;
} & TableCellProps;

export type RowType = Record<string, ReactNode>;

export type TableProps = {
  ref?: Ref<HTMLDivElement>;
  columns: ColumnType[];
  rows: RowType[];
  sx?: SxProps<typeof theme>;
};

const Table = ({ ref, columns, rows, sx }: TableProps) => (
  <TableContainer ref={ref} component={Paper} sx={sx}>
    <MuiTable stickyHeader sx={{ whiteSpace: 'nowrap' }}>
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
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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

export default Table;
