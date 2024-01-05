import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ComposedChart,
} from "recharts";

const data2023 = [
  { Month: "Feb", Emissions: 2205, "E/R": 99.8 },
  { Month: "Mar", Emissions: 2251, "E/R": 113.2 },
  { Month: "Apr", Emissions: 4522, "E/R": 194.6 },
  { Month: "May", Emissions: 8522, "E/R": 488.1 },
  { Month: "Aug", Emissions: 1124, "E/R": 114.2 },
  { Month: "Oct", Emissions: 4524, "E/R": 71.9 },
  { Month: "Sep", Emissions: 7858, "E/R": 107.6 },
  { Month: "Nov", Emissions: 4524, "E/R": 120.8 },
];

const data2022 = [
  { Month: "Feb", Emissions: 2156, "E/R": 96.7 },
  { Month: "Mar", Emissions: 2352, "E/R": 100.2 },
  { Month: "Apr", Emissions: 4125, "E/R": 178.1 },
  { Month: "May", Emissions: 7856, "E/R": 355.3 },
  { Month: "Aug", Emissions: 1123, "E/R": 94.7 },
  { Month: "Oct", Emissions: 4856, "E/R": 61.5 },
  { Month: "Sep", Emissions: 7541, "E/R": 100.5 },
  { Month: "Nov", Emissions: 4752, "E/R": 114.7 },
];

const Charts = () => {
  const [selectedLegends, setSelectedLegends] = useState({
    "Emissions (2023)": true,
    "Emissions (2022)": true,
    "E/R (2023)": true,
    "E/R (2022)": true,
  });

  const combinedData = data2023.map((entry, index) => ({
    Month: entry.Month,
    "Emissions (2023)": entry.Emissions,
    "Emissions (2022)": data2022[index].Emissions,
    "E/R (2023)": entry["E/R"],
    "E/R (2022)": data2022[index]["E/R"],
  }));

  const handleLegendClick = (dataKey) => {
    setSelectedLegends((prevLegends) => ({
      ...prevLegends,
      [dataKey]: !prevLegends[dataKey],
    }));
  };

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      maxW="100%"
      alignItems="center"
      bgColor="gray.100"
      p={4}
    >
      <Box
        bgColor="white"
        boxShadow="md"
        p={4}
        m={4}
        flex="1"
        minW={{ base: "auto", sm: "300px", md: "800px" }}
      >
        <Box w="100%">
          <ComposedChart
            width={979}
            height={450}
            data={combinedData}
            margin={{ top: 10, right: 20, bottom: 30, left: 20 }}
          >
            <XAxis dataKey="Month" axisLine={false} />
            <YAxis
              label={{ value: "Emissions", position: "top", offset: 10 }}
            />
            <YAxis
              orientation="right"
              yAxisId="right"
              label={{ value: "E/R", position: "top", offset: 10 }}
            />
            <Tooltip />
            <Legend
              iconType="square"
              verticalAlign="top"
              height={30}
              onClick={(e) => handleLegendClick(e.dataKey)}
            />
            {selectedLegends["Emissions (2023)"] ? (
              <Bar
                dataKey="Emissions (2023)"
                fill="#70a44e"
                barSize={30}
                radius={[0, 0, 0, 0]}
                name="Emissions (2023)"
              />
            ) : (
              <Bar
                dataKey="Emissions (2023)"
                fill="#70a44e"
                opacity={0.3}
                barSize={30}
                radius={[0, 0, 0, 0]}
                name="Emissions (2023)"
              />
            )}
            {selectedLegends["Emissions (2022)"] ? (
              <Bar
                dataKey="Emissions (2022)"
                fill="#413acb"
                barSize={30}
                radius={[0, 0, 0, 0]}
                name="Emissions (2022)"
                barGap={10}
              />
            ) : (
              <Bar
                dataKey="Emissions (2022)"
                fill="#413acb"
                opacity={0.3}
                barSize={30}
                radius={[0, 0, 0, 0]}
                name="Emissions (2022)"
                barGap={10}
              />
            )}
            {selectedLegends["E/R (2023)"] ? (
              <Line
                type="monotone"
                dataKey="E/R (2023)"
                stroke="#f00"
                strokeWidth={2}
                dot={false}
                yAxisId="right"
              />
            ) : (
              <Line
                type="monotone"
                dataKey="E/R (2023)"
                stroke="#f00"
                opacity={0.3}
                strokeWidth={2}
                dot={false}
                yAxisId="right"
              />
            )}
            {selectedLegends["E/R (2022)"] ? (
              <Line
                type="monotone"
                dataKey="E/R (2022)"
                stroke="#ff0"
                strokeWidth={2}
                dot={false}
                yAxisId="right"
              />
            ) : (
              <Line
                type="monotone"
                dataKey="E/R (2022)"
                stroke="#ff0"
                opacity={0.3}
                strokeWidth={2}
                dot={false}
                yAxisId="right"
              />
            )}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#ccc"
              vertical={false}
            />
          </ComposedChart>
        </Box>
      </Box>
    </Box>
  );
};

export default Charts;
