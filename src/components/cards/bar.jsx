export const getBarOptions = (barData = []) => {
  const maxValue = Math.max(...barData.map(i => i.value), 0);

  return {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },

    grid: {
      left: "4%",
      right: "4%",
      top: "12%",
      bottom: "10%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      data: barData.map(i => i.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#4B5563" },
    },

    yAxis: {
      type: "value",
      min: 0,
      max: maxValue + 5, 
      interval: 5,      
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    },

    series: [
      {
        type: "bar",
        barWidth: 120,
        data: barData.map(i => ({
          value: i.value,
          itemStyle: {
            color: i.color,
            
          },
          label: {
            show: true,
            position: "top",
            fontSize: 14,
            color: "#374151",
          },
        })),
      },
    ],
  };
};


