import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const EChartsComponent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);
      const option: echarts.EChartOption = {
        title: {
          text: "ECharts 예제",
        },
        tooltip: {},
        legend: {
          data: ["판매량"],
        },
        xAxis: {
          data: ["셔츠", "카디건", "청바지", "후드티", "자켓", "양말"],
        },
        yAxis: {},
        series: [
          {
            name: "판매량",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
        ],
      };
      chartInstance.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ width: "600px", height: "400px" }} />;
};

export default EChartsComponent;
