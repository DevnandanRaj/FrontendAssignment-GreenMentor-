import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Box, Text } from "@chakra-ui/react";
const data = [
  { name: "Adani", emissions: 2205 },
  { name: "Reliance", emissions: 2251 },
  { name: "Shaurya Drugs", emissions: 4522 },
  { name: "Orlife", emissions: 8522 },
  { name: "Rezicure", emissions: 1124 },
  { name: "Steller Labs", emissions: 4524 },
  { name: "Ruzette Organics", emissions: 7858 },
  { name: "Merion Care", emissions: 5258 },
  { name: "Eskos Pharma", emissions: 4524 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff6361",
  "#6A0572",
];

const CustomLegend = ({ topThreeData }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "10px",
    }}
  >
    {topThreeData.map((entry, index) => (
      <div key={`legend-${index}`} style={{ marginRight: "20px" }}>
        <span
          style={{
            display: "inline-block",
            width: 15,
            height: 15,
            backgroundColor: COLORS[index],
          }}
        />
        <span style={{ marginLeft: 5 }}>{`${
          entry.name
        } (${entry.percentage.toFixed(2)}%)`}</span>
      </div>
    ))}
  </div>
);

const PieCharts = () => {
  const totalEmissions = data.reduce((sum, entry) => sum + entry.emissions, 0);

  const dataWithPercentage = data.map((entry) => ({
    name: entry.name,
    emissions: entry.emissions,
    percentage: (entry.emissions / totalEmissions) * 100,
  }));
  const sortedData = dataWithPercentage.sort(
    (a, b) => b.percentage - a.percentage
  );
  const topThreeData = sortedData.slice(0, 3);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Text>
        Top 3 Suppliers contributing to Category-1
        <CustomLegend topThreeData={topThreeData} />
      </Text>
      <PieChart width={400} height={280}>
        <Pie
          dataKey="percentage"
          data={dataWithPercentage}
          cx={150}
          cy={150}
          outerRadius={60}
          innerRadius={30}
          fill="#8884d8"
          label={({ name, percentage }) => `${percentage.toFixed(2)}%`}
        >
          {dataWithPercentage.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [
            `${value.toFixed(2)}%`,
            `Emissions: ${name.emissions}`,
          ]}
        />
      </PieChart>
    </Box>
  );
};

export default PieCharts;
