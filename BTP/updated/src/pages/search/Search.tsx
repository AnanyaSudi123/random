import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
//import * as fs from 'fs'
// import { parse } from 'papaparse';
import * as fs from 'fs';
// onst csvFilePath = './trial.csv';
// require("./trial.csv")c
import rows from "../../assets/images/data.json";
import { useState } from 'react';

import {Button} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';

console.log(rows)

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  paddingLeft: '460px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));




interface Column {
  id: 'scientificName'| 'placeName';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  
  { id: 'scientificName', label: 'SpeciesName', minWidth: 100 },
  { id: 'placeName', label: 'NationalPark', minWidth: 170 },
  
];

interface Data {
  SpeciesName: string;
  NationalPark: string;
  
}

function createData(
  SpeciesName: string,
  NationalPark: string,
  
): Data {
  
  return {SpeciesName,NationalPark };
}
// const reader=new FileReader();
// reader.onload=function(e){
//   const text= e.target.result;
  
// }
// reader.readAsText('temp.csv');
// const rows = [
  
//   createData('Specie1','Park1'),
  
// ];

console.log(rows);
export default function TrialPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [filterText, setFilterText] = useState('');
  const [filterText1, setFilterText1] = useState('');
  const [filterText2, setFilterText2] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleFilterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle filter submit here, e.g. fetch filtered data from server
  };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <br></br>
      <br></br>
<Search>
<TextField
        label="Search for species"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Search>
      {/* <form onSubmit={handleFilterSubmit}>
        <TextField label="" value={filterText} onChange={(event) => setFilterText(event.target.value)} />
        <br></br>
        <br></br>
        <Button type="submit" variant="contained" color="primary">Search</Button>
      </form> */}
      <br></br>
      <br></br>
      <Search>
      <TextField
        label="Search for National Park"
        value={filterText2}
        onChange={(e) => setFilterText2(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Search>
      <br></br>
      <TableContainer sx={{ maxHeight: 440 }} >
        <Table  stickyHeader aria-label="sticky table"  sx={{
          ['&.MuiTable-root']: {
            paddingLeft: '80px', // or whatever the desired gap.  
            paddingRight: '80px', // or whatever the desired gap.
            borderCollapse: 'separate'
          }
        }} >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {TableRows({filterText:filterText , filterText1:filterText1,filterText2:filterText2})
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={TableRows({filterText:filterText , filterText1:filterText1,filterText2:filterText2}).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

function TableRows({ filterText,filterText1,filterText2 }: { filterText: string ,filterText1:string,filterText2:string}) {
  // Assume this data comes from an API or is stored in state
  // const filteredData = rows.filter(row => Object.values(row).some(val => String(val).toLowerCase().includes(filterText.toLowerCase())));
  // // const filteredData1 = filteredData.filter(row => Object.values(row.scientificName).some(val => String(val).toLowerCase().includes(filterText.toLowerCase())));
  // console.log(filteredData)
  const filteredData1 = rows.filter(row => row.scientificName.toLowerCase().includes(filterText.toLowerCase()));
  console.log(filteredData1)
  const filteredData2 = filteredData1.filter(row => row.placeName.toLowerCase().includes(filterText2.toLowerCase()));

  return filteredData2
}