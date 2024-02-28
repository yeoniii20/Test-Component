import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const LineChartComponent2: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);
      const option: echarts.EChartOption = {
        title: {
          text: "라인 차트 예제",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["월", "화", "수", "목", "금", "토", "일"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
        dataZoom: [
          {
            type: "inside", // 마우스 휠 또는 터치 패드로 줌인/줌아웃
            start: 0,
            end: 100,
          },
          {
            type: "slider", // 슬라이더로 줌인/줌아웃
            start: 0, // 초기 시작 위치 (%)
            end: 100, // 초기 종료 위치 (%)
          },
        ],
      };

      chartInstance.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ width: "600px", height: "400px" }} />;
};

export default LineChartComponent2;

// npm install echarts
// npm install --save-dev @types/echarts
