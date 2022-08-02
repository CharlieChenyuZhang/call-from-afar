import * as React from "react";
import Table from "./Table";
import TableMobile from "./TableMobile";
import styled from "styled-components";

const AppContainer = styled.div``;

export default function App() {
  return (
    <AppContainer>
      <Table />
      <TableMobile className="tableMobile" />
    </AppContainer>
  );
}
