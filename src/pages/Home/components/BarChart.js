import * as echarts from "echarts";
import { useEffect, useRef } from "react";
const BarChart = ({ titleText , barData}) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      title: { text: titleText },
      xAxis: {
        type: "category",
        data: ["Vue", "React", "Angular"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: barData,
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);
  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
};
export default BarChart