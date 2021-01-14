import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import BarLineMixChart from "../../components/charts/BarLineMixChart";
import PieChart from "../../components/charts/PieChart";
import {
  mockDataBarLineDemand,
  mockDataPieChartDespesas,
} from "../../utils/mocks/mockData";
import { Styles } from "./styles";

function App() {
  return (
    <Styles>
      <Row>
        <Col lg="7" md="7" sm="7" xs="7">
          <Card>
            <CardTitle>Gráfico de demanda e capacidade</CardTitle>
            <CardBody>
              <BarLineMixChart
                data={mockDataBarLineDemand}
                chartId={"BarLineMixChartDemand"}
                colorKey={"barLineDemand"}
              />
            </CardBody>
          </Card>
        </Col>
        <Col lg="5" md="5" sm="5" xs="5">
          <Card>
            <CardTitle>Despesas do mês atual</CardTitle>
            <CardBody>
              <PieChart
                data={mockDataPieChartDespesas}
                chartId={"chartPieDespesas"}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Styles>
  );
}

export default App;
