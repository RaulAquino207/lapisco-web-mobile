import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

interface IChartProps {
  data: any;
  chartId: string;
}

const PieCharts: React.FC<IChartProps> = ({ data, chartId }) => {
  useEffect(() => {
    // Create chart instance
    let chart = am4core.create(chartId, am4charts.PieChart);

    chart.data = data;

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    return () => {
      chart.dispose();
    };
  }, [data, chartId]);

  return <div id={chartId} />;
};

export default PieCharts;
