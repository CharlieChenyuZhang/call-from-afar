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
`;

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    history: {
      Description:
        "The Rijksakademie welcomes applications from artists to develop their work over one or two-year periods in Amsterdam.",
      Genre: "all disciplines",
      Theme: "Open",
      HostProvides:
        "studio, work budget and stipend, technical facilities, a library, collections and a social practice workshop",
      Eligibility: "N/A",
      ApplicationFee: "€50",
      PastRecipients: "Edra Soto Kent Chan",
      Link: "https://www.rijksakademie.nl/en/residency-apply-workshops/apply",
    },
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
          <Collapse in={open} timeout="auto">
            <Box sx={{ margin: 1 }}>
              <Typography variant="h5" gutterBottom component="div">
                Detailed Information
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                {row.history.Description}
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                Genre
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                {row.history.Genre}
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                Theme
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                {row.history.Theme}
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                Host Provides
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                {row.history.HostProvides}
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                Eligibility
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                {row.history.Eligibility}
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                ApplicationFee
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                {row.history.ApplicationFee}
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                PastRecipients
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                {row.history.PastRecipients}
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                Link
              </Typography>
              <Typography variant="body" gutterBottom component="div">
                <a href={row.history.Link} target="_blank">
                  Click Here
                </a>
              </Typography>
              <br />
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
    "1 October 2022",
    "1-2 years",
    "The Rijksakademie Residency 2023/2024",
    "AiR",
    "Netherlands"
  ),
  createData(
    "Sep 10 2022",
    "2 months",
    "SODAS 2123 - Residency for Sound Artists",
    "AiR",
    "France"
  ),
  createData(
    "Sep 15 2022",
    "3 weeks",
    "Bloedel Reserve Creative Residency program",
    "AiR",
    "The USA"
  ),
  createData(
    "Anytime",
    "3 months",
    "ENSA Limoges - Residence",
    "AiR",
    "France"
  ),
  createData(
    "Sep 30 2022",
    "1 month",
    "Maison forte de Hautetour",
    "AiR",
    "France"
  ),
  createData(
    "Oct 18 2022",
    "3 months",
    "Pyramid Atlantic Art Center - Vita Paper Arts Residency",
    "AiR",
    "The USA"
  ),
  createData(
    "Oct 15 2022",
    "N/A",
    "Stipend of the Peter Jacobi Foundation for Art and Design",
    "Grant",
    "Germany"
  ),
  createData("Anytime", "N/A", "Pollock-Krasner grant", "Grant", "The USA"),
  createData("Anytime", "N/A", "Artists’ Fellowship", "Grant", "The USA"),
  createData(
    "Oct 21 2022",
    "N/A",
    "Craft Research Fund Project Grant",
    "Grant",
    "The USA"
  ),
  createData(
    "Dec 1 2022",
    "N/A",
    "Smack Mellon - Solo Exhibition",
    "Exhibition",
    "The USA"
  ),
  createData(
    "Anytime",
    "N/A",
    "Envision Arts - Exhibition",
    "Exhibition",
    "The USA"
  ),
  createData(
    "Sep 30 2022",
    "N/A",
    "Luxembourg Art Prize",
    "Competition",
    "Luxembourg"
  ),
  createData("Oct 10 2022", "N/A", "Prisma Art Prize", "Competition", "Italy"),
];

export default function App() {
  return (
    <TableContainer component={Paper} className="table">
      <CustomizedTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Deadline</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Country</TableCell>
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
