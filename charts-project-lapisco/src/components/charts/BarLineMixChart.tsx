import React, { useRef, useLayoutEffect } from "react";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

interface IChartProps {
  data: any;
  chartId: string;
  colorKey: string;
}

const Chart: React.FC<IChartProps> = ({ data, chartId }) => {
  const refChart = useRef<any>(null);

  useLayoutEffect(() => {
    // ... Start of chart
    // Create chart instance
    let chart = am4core.create(chartId, am4charts.XYChart);

    // Settings for Portuguese
    chart.language.locale["_decimalSeparator"] = ",";
    chart.language.locale["_thousandSeparator"] = " ";

    // Add data
    chart.data = data;

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "date";
    categoryAxis.renderer.minGridDistance = 30;

    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.disabled = false;

    /* Create series */
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Demanda";
    columnSeries.dataFields.valueY = "demand";
    columnSeries.dataFields.categoryX = "date";

    columnSeries.columns.template.tooltipText =
      "{name} em {categoryX}: {valueY} {additional}";
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";

    // if (columnSeries.tooltip) {
    //   columnSeries.tooltip.label.textAlign = "middle";
    // }

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Capacidade";
    lineSeries.dataFields.valueY = "capacity";
    lineSeries.dataFields.categoryX = "date";

    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";

    if (lineSeries.tooltip) {
      lineSeries.tooltip.label.textAlign = "middle";
    }
    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{name} em {categoryX}: {valueY} {additional}";
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.strokeWidth = 3;

    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";
    chart.legend.paddingBottom = -10;
    chart.legend.paddingTop = -10;
    let markerTemplate = chart.legend.markers.template;
    if (markerTemplate) {
      markerTemplate.width = 15;
      markerTemplate.height = 15;
    }

    // ... End of chart
    chart.logo.disabled = true;
    refChart.current = chart;

    return () => {
      chart.dispose();
    };
  }, [data, chartId]);

  return <div id={chartId}></div>;
};
export default Chart;
