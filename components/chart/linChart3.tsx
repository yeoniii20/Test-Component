import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const LineChartComponent3: React.FC = () => {
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
          data: [
            "월",
            "화",
            "수",
            "목",
            "금",
            "토",
            "일",
            "월",
            "화",
            "수",
            "목",
            "금",
            "토",
            "일",
          ],
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
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
              title: {
                zoom: "영역 줌인",
                back: "영역 줌아웃 리셋",
              },
            },
            restore: { title: "리셋" },
            saveAsImage: { title: "이미지로 저장" },
          },
        },
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

export default LineChartComponent3;
