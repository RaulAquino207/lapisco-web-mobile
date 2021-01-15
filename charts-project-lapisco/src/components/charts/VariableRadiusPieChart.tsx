import React, { useRef, useLayoutEffect, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

interface IChartsProps {
    data: any
    chartId: string;
}

const VariableRadiusPieCharts: React.FC<IChartsProps> = ({ data, chartId }) => {

    useEffect(() => {

        console.log("🚀 ~ file: VariableRadiusPieChart.tsx ~ line 18 ~ chartId", chartId)

        let chart = am4core.create(chartId, am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = data;

        let series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.radiusValue = "value";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 6;
        series.colors.step = 3;

        series.hiddenState.properties.endAngle = -90;

        chart.legend = new am4charts.Legend();

        return () => {
            chart.dispose();
          };
    }, [data, chartId])
    

    
    return <div id={chartId} />;
}

export default VariableRadiusPieCharts;