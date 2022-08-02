import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "styled-components";

const CustomizedTable = styled(Table)`
  margin: auto;
  width: 70%;
  border: 3px solid grey;
`;

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    history: [
      {
        date: `
        The 63rd Thessaloniki International Film Festival will take place from November 3rd to November 13th 2022 and has the pleasure to announce that film submissions are now open.TIFF has four competition sections: International Competition (a program with films from across the Globe), Meet the Neighbors Competition (with first or second features from Greece's extended "neighborhood" ), the Film Forward Competition section and the VR Competition section.
    `,
        customerId:
          "https://www.filmfestival.gr/en/all-news-en/28013-submit-your-film-to-the-63rd-thessaloniki-international-film-festival-3-13-11-2022",
        amount: "25 CAD",
        contact: "Thessaloniki Film Festival",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detailed Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Link</TableCell>
                    <TableCell align="right">Participation Fee</TableCell>
                    <TableCell align="right">Contact</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{historyRow.contact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "July 27. 2022",
    "63rd Thessaloniki International Film Festival",
    10000,
    "Toronto, Canada",
    "no restrictions"
  ),
  createData(
    "July 28. 2022",
    "5th VH Award",
    10000,
    "Toronto, Canada",
    "no restrictions"
  ),
  createData(
    "July 27. 2022",
    "Academy Award",
    10000,
    "Toronto, Canada",
    "no restrictions"
  ),
  createData(
    "July 26. 2022",
    "63rd Tookws Festival",
    10000,
    "Toronto, Canada",
    "no restrictions"
  ),
  createData(
    "July 25. 2022",
    "1st Innovation Art Design Award",
    10000,
    "Toronto, Canada",
    "no restrictions"
  ),
];

export default function App() {
  return (
    <TableContainer component={Paper}>
      <CustomizedTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Deadline</TableCell>
            <TableCell align="right">Information</TableCell>
            <TableCell align="right">Reward&nbsp;(CAD)</TableCell>
            <TableCell align="right">Location&nbsp;(g)</TableCell>
            <TableCell align="right">Eligibility&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </CustomizedTable>
    </TableContainer>
  );
}
