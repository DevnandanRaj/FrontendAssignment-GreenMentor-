import React, { useState } from "react";
import Calendar from "react-calendar";
import Sidebar from "./Sidebar";
import {
  Box,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Center,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import group from "../assets/navbar/Group 625873.svg";
import down from "../assets/navbar/fe_drop-down-black.svg";
import vectro from "../assets/navbar/Vector.svg";
import Elip from "../assets/navbar/Ellipse 8.svg";
import "react-calendar/dist/Calendar.css";
import iicon from "../assets/navbar/mingcute_information-line.svg";
import Charts from "./Charts";
import PieCharts from "./Piechart";
import download from "../assets/navbar/Vector-download.svg";
const Dashboard = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCalendarChange = (date) => {
    setCalendarDate(date);
    setShowCalendar(false);
  };

  return (
    <Box display="flex" width="1440px" height="1354px" flexShrink="0">
      {/* Sidebar on the left */}
      <Sidebar />

      <Box
        display="flex"
        flexDirection="column"
        width="1200px"
        height="1354px"
        paddingRight="20px"
        paddingLeft="20px"
      >
        {/* Navigation bar */}
        <Box
          display="flex"
          width="100%"
          height="44px"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20px"
        >
          <Box display="flex" height="64px" alignItems="center" gap="12px">
            <Image
              src={group}
              width="19.99px"
              height="20px"
              flexShrink="0"
              alt="Logo"
            />

            {/* Text */}
            <Text
              style={{
                color: "#000000D6",
                paddingLeft: "15px",
                paddingTop: "5px",
                fontFamily: "HelveticaNeue",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Category-1
            </Text>
          </Box>

          {/* Second Box inside Navbar */}
          <Box
            display="flex"
            height="56px"
            alignItems="center"
            gap="10px"
            padding="8px 16px"
          >
            <Image
              src={Elip}
              width="32px"
              height="32px"
              flexShrink="0"
              alt="Logo"
              borderRadius="32px"
            />
            <Image
              src={down}
              width="24px"
              height="24px"
              flexShrink="0"
              alt="Logo"
            />
            <Image
              src={vectro}
              width="18px"
              height="20.78px"
              flexShrink="0"
              alt="Logo"
              style={{
                fill: "linear-gradient(0deg, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.84) 100%), #FFF",
              }}
            />
          </Box>
        </Box>

        {/* Third Box (Calendar) */}
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end" // Align to the right
          gap="20px"
        >
          <Text
            style={{
              color: "#0000007A",
              fontFamily: "HelveticaNeue",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Show Tline:
          </Text>
          <Box onClick={toggleCalendar} style={{ cursor: "pointer" }}>
            <Text
              style={{
                color: "#02AB6C",
                fontFamily: "HelveticaNeue",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeightt: "400",
                lineHeight: "normal",
              }}
            >
              {calendarDate.toDateString()}
            </Text>
          </Box>
          {showCalendar && (
            <Box position="absolute" right="0" zIndex="1">
              <Calendar
                onChange={handleCalendarChange}
                value={calendarDate}
                style={{ width: "200px" }}
              />
            </Box>
          )}
          <Image
            src={down}
            width="24px"
            height="24px"
            flexShrink="0"
            alt="Logo"
          />
        </Box>

        {/* Four Cards Inside Second Navigation Box */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="20px"
          gap="10px"
        >
          {/* First Card */}
          <Box
            flex="1"
            display="inline-flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="12px"
            border="1px solid #EBEBEB"
            background="#FFF"
            boxShadow="0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
            padding="20px"
          >
            <Text
              style={{
                color: "#000000CC",
                fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              Purchased goods and Services{" "}
              <Image
                src={iicon}
                width="14px"
                height="14px"
                flexShrink="0"
                alt="Logo"
                borderRadius="32px"
                style={{ marginLeft: "8px" }}
              />
            </Text>

            <Box
              display="flex"
              height="28px"
              alignItems="center"
              gap="18px"
              alignSelf="stretch"
              borderRadius="8px"
              borderLeft="6px solid #FF0000"
              borderRight="1px solid #FF0000"
              borderTop="1px solid #FF0000"
              borderBottom="1px solid #FF0000"
              padding="10px"
            >
              <Text
                style={{
                  color: "#000000CC",
                  fontFamily: "HelveticaNeue",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                441510.9C02e
              </Text>
              <Text
                style={{
                  color: "#AB0202AB",
                  fontFamily: "HelveticaNeue",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                25%YOY↑
              </Text>
            </Box>
          </Box>

          {/* Second Card */}
          <Box
            flex="1"
            display="inline-flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="12px"
            border="1px solid #EBEBEB"
            background="#FFF"
            boxShadow="0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
            padding="20px"
          >
            <Text
              style={{
                color: "#000000CC",
                fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              Purchased good and services to revenue ratio
              <Image
                src={iicon}
                width="14px"
                height="14px"
                flexShrink="0"
                alt="Logo"
                borderRadius="32px"
                style={{ marginLeft: "8px" }}
              />
            </Text>
            <Box
              display="flex"
              height="28px"
              alignItems="center"
              gap="18px"
              alignSelf="stretch"
              borderRadius="8px"
              borderLeft="6px solid #FFFF00"
              borderRight="1px solid #FFFF00"
              borderTop="1px solid #FFFF00"
              borderBottom="1px solid #FFFF00"
              padding="10px"
            >
              <Text
                style={{
                  color: "#000000CC",
                  fontFamily: "HelveticaNeue",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                322586.2CO2e
              </Text>
              <Text
                style={{
                  color: "#02AB6C",
                  fontFamily: "HelveticaNeue",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                24%YOY↓
              </Text>
            </Box>
          </Box>

          {/* Third Card */}
          <Box
            flex="1"
            display="inline-flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="12px"
            border="1px solid #EBEBEB"
            background="#FFF"
            boxShadow="0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
            padding="20px"
          >
            <Text
              style={{
                color: "#000000CC",
                fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              Category-1
              <Image
                src={iicon}
                width="14px"
                height="14px"
                flexShrink="0"
                alt="Logo"
                borderRadius="32px"
                style={{ marginLeft: "8px" }}
              />
            </Text>
            <Box
              display="flex"
              height="28px"
              alignItems="center"
              gap="18px"
              alignSelf="stretch"
              borderRadius="8px"
              borderLeft="6px solid #3BB85E"
              borderRight="1px solid #3BB85E"
              borderTop="1px solid #3BB85E"
              borderBottom="1px solid #3BB85E"
              padding="10px"
            >
              <Text
                style={{
                  color: "#000000CC",
                  fontFamily: "HelveticaNeue",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                32% of Scope3
              </Text>
              <Text
                style={{
                  color: "#AB0202AB",
                  fontFamily: "HelveticaNeue",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                25%YOY↑
              </Text>
            </Box>
          </Box>

          {/* Fourth Card */}
          <Box
            flex="1"
            display="inline-flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="12px"
            border="1px solid #EBEBEB"
            background="#02AB6CAB"
            textAlign="center"
            boxShadow="0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
            padding="20px"
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "18px",
                textAlign: "center",
              }}
            >
              Total number of reached suppliers
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "HelveticaNeue",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              143
            </Text>
          </Box>
        </Box>
        <Box
          width="1005"
          height="521px"
          marginTop="20px"
          style={{
            borderRadius: "12px",
            border: "1px solid #EBEBEB",
            background: "#FFF",
            boxShadow:
              "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)",
          }}
        >
          <Box
            display="flex"
            width="564px"
            height="64px"
            justifyContent="space-between"
            alignItems="center"
            textAlign="center"
            padding="20px"
          >
            <Text
              style={{
                color: "#000000D6",
                fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              Emission/Revenue
            </Text>
          </Box>
          <Box width="100%" height="470px" flexShrink="0" overflow="hidden">
            <Charts />
          </Box>
        </Box>
        <Box
          height="450px"
          display="flex"
          flexDirection="row"
          gap="20px"
          marginTop="30px"
        >
          <Box width="459px" height="450px">
            <PieCharts />
          </Box>
          <Box width="643px" padding="20px">
            <Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                style={{
                  borderRadius: "12px 12px 0px 0px",
                  border: "1px solid #EBEBEB",
                  background: "#FFF",
                }}
              >
                <Text
                  style={{
                    color: "#000000D6",
                    fontFamily: "HelveticaNeue",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Supplier-wise{" "}
                  <Image
                    src={iicon}
                    width="14px"
                    height="14px"
                    flexShrink="0"
                    alt="Logo"
                    borderRadius="32px"
                    style={{ marginLeft: "8px" }}
                  />
                </Text>
                <Button
                  width="111.6px"
                  height="27px"
                  borderRadius="8px"
                  marginTop="20px"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #FFF",
                    background: "#FFF",
                    boxShadow:
                      "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <Image src={download} width="12px" height="16px" /> Download
                </Button>
              </Box>
              <Center marginTop="20px">
                <TableContainer marginTop="20px">
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>SUPPLIER</Th>
                        <Th>YEAR</Th>
                        <Th>EMISSION/REVENUE RATIO</Th>
                        <Th>MOM</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td borderBottom="1px solid #EBEBEB">Adani</Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          2023
                        </Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          24
                        </Td>
                        <Td color={"red"} borderBottom="1px solid #EBEBEB">
                          25% ↑
                        </Td>
                      </Tr>
                      <Tr>
                        <Td borderBottom="1px solid #EBEBEB">Ambani</Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          2023
                        </Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          25
                        </Td>
                        <Td color={"green"} borderBottom="1px solid #EBEBEB">
                          27% ↓
                        </Td>
                      </Tr>
                      <Tr>
                        <Td borderBottom="1px solid #EBEBEB">PwC</Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          2023
                        </Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          32
                        </Td>
                        <Td color={"green"} borderBottom="1px solid #EBEBEB">
                          24% ↓
                        </Td>
                      </Tr>
                      <Tr>
                        <Td borderBottom="1px solid #EBEBEB">Vijaya steels</Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          2023
                        </Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          38
                        </Td>
                        <Td color={"green"} borderBottom="1px solid #EBEBEB">
                          28% ↓
                        </Td>
                      </Tr>
                      <Tr>
                        <Td borderBottom="1px solid #EBEBEB">Tata</Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          2023
                        </Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          37
                        </Td>
                        <Td color={"red"} borderBottom="1px solid #EBEBEB">
                          34% ↑
                        </Td>
                      </Tr>
                      <Tr>
                        <Td borderBottom="1px solid #EBEBEB">Visaka Steel</Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          2023
                        </Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          45
                        </Td>
                        <Td color={"red"} borderBottom="1px solid #EBEBEB">
                          67% ↑
                        </Td>
                      </Tr>
                      <Tr>
                        <Td borderBottom="1px solid #EBEBEB">Alibaba</Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          2023
                        </Td>
                        <Td isNumeric borderBottom="1px solid #EBEBEB">
                          58
                        </Td>
                        <Td color={"green"} borderBottom="1px solid #EBEBEB">
                          54% ↓
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
