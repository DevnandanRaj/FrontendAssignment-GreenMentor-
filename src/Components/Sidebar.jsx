// Sidebar.js
import React, { useState } from "react";
import {
  Box,
  Image,
  Button,
  Text,
  Menu,
  MenuButton,
  Flex,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import electricLogo from "../assets/material-symbols_energy-program-saving-outline.svg";
import downLogo from "../assets/fe_drop-down.svg";
import waterLogo from "../assets/mdi_water-outline.svg";
import wasteLogo from "../assets/ri_delete-bin-6-line.svg";
import longsight from "../assets/Longsight 1.svg";
import logo from "../assets/cropped-PETERS_Surgical_LOGO_CMJN-300x109@3x 1.svg";
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      flexShrink="0"
      bg="#181818"
      height="1370px"
    >
      <Box
        className="logobox"
        background="#181818"
        p="15px"
        mb="5px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Button
          as="a"
          href="#"
          variant="unstyled"
          _focus={{ outline: "none", boxShadow: "none" }}
        >
          <Image src={logo} width="128px" height="47px" />
        </Button>
      </Box>

      {/* Second Box with three buttons */}
      <Box
        display="flex"
        width="249px"
        padding="10px 15px 15px 15px"
        flexDirection="column"
        alignItems="center"
        gap="10px"
        borderTop="1px solid #2C2C2C"
        borderBottom="1px solid #2C2C2C"
        background="#181818"
        color="white"
      >
        {/* DATA-IN Button with modified styles */}
        <Box
          variant="unstyled"
          width="219px"
          height="50px"
          borderRadius="10px"
          backgroundColor="#181818"
          padding="13px 10px 13px 20px"
          gap="5px"
          textAlign="left"
        >
          <Text
            style={{
              width: "157px",
              height: "18px",
              color: "#5C5C5C",
              fontFamily: "Inter",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            DATA-IN
          </Text>
        </Box>

        {/* Second Button */}
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <MenuButton
            as={Button}
            variant="unstyled"
            width="219px"
            height="50px"
            borderRadius="10px"
            backgroundColor="#181818"
            padding="13px 10px 13px 20px"
            gap="5px"
            textAlign="left"
            _focus={{ outline: "none", boxShadow: "none" }}
            onClick={handleMenuToggle}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              {/* Logo */}
              <Image
                src={electricLogo}
                width="17px"
                height="17px"
                flexShrink="0"
                alt="Logo"
              />

              {/* Text */}
              <Text
                style={{
                  width: "157px",
                  height: "18px",
                  color: "#FFFFFF",
                  paddingLeft: "15px",
                  paddingTop: "5px",
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "18px",
                }}
              >
                Energy
              </Text>

              {/* Down Icon */}
              <Image src={downLogo} width="24px" height="24px" flexShrink="0" />
            </Flex>
          </MenuButton>

          {/* Dropdown Options */}
          <MenuList
            style={{
              position: "absolute",
              top: isMenuOpen ? "20px" : "-1000px",
              width: "219px",
              backgroundColor: "#181818",
              zIndex: "1",
              transition: "top 0.3s",
            }}
          >
            <MenuItem backgroundColor="#181818">Option 1</MenuItem>
            <MenuItem backgroundColor="#181818">Option 2</MenuItem>
            <MenuItem backgroundColor="#181818">Option 3</MenuItem>
          </MenuList>
        </Menu>

        {/* Third Button */}
        <Button
          width="219px"
          height="50px"
          borderRadius="10px"
          variant="outline"
          backgroundColor="#181818"
          style={{ marginTop: isMenuOpen ? "100px" : "0" }}
        >
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            {/* Logo */}
            <Image
              src={waterLogo}
              paddingLeft="10px"
              width="24px"
              height="24px"
              flexShrink="0"
              alt="Logo"
            />

            {/* Text */}
            <Text
              style={{
                width: "120px",
                height: "18px",
                color: "#FFFFFF",
                paddingLeft: "5px",
                paddingRight: "18px",
                paddingTop: "4px",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "18px",
              }}
            >
              Water and Effluents
            </Text>

            {/* Down Icon */}
            <Image src={downLogo} width="24px" height="24px" flexShrink="0" />
          </Flex>
        </Button>
      </Box>

      {/* Third Box with three buttons */}
      <Box
        display="flex"
        width="249px"
        padding="10px 15px 15px 15px"
        flexDirection="column"
        alignItems="center"
        gap="10px"
        borderBottom="1px solid #2C2C2C"
        background="#181818"
        color="white"
      >
        <Box
          variant="unstyled"
          width="219px"
          height="50px"
          borderRadius="10px"
          backgroundColor="#181818"
          padding="13px 10px 13px 20px"
          gap="5px"
          textAlign="left"
        >
          <Text
            style={{
              width: "157px",
              height: "18px",
              color: "#5C5C5C",
              fontFamily: "Inter",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            ANALYZE
          </Text>
        </Box>

        {/* Second Button */}
        <Button
          as={Button}
          variant="unstyled"
          width="219px"
          height="50px"
          borderRadius="10px"
          backgroundColor="#181818"
          padding="13px 10px 13px 20px"
          gap="5px"
          textAlign="left"
          _focus={{ outline: "none", boxShadow: "none" }}
        >
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            {/* Logo */}
            <Image
              src={electricLogo}
              width="17px"
              height="17px"
              flexShrink="0"
              alt="Logo"
            />

            {/* Text */}
            <Text
              style={{
                width: "157px",
                height: "18px",
                color: "#FFFFFF",
                paddingLeft: "15px",
                paddingTop: "5px",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "18px",
              }}
            >
              Energy
            </Text>
          </Flex>
        </Button>

        {/* Third Button */}
        <Button
          as={Button}
          variant="unstyled"
          width="219px"
          height="50px"
          borderRadius="10px"
          backgroundColor="#181818"
          padding="15px 118px 16px 20px"
          gap="5px"
          textAlign="left"
          _focus={{ outline: "none", boxShadow: "none" }}
        >
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            {/* Logo */}
            <Image
              src={wasteLogo}
              width="17px"
              height="17px"
              flexShrink="0"
              alt="Logo"
            />

            {/* Text */}
            <Text
              style={{
                width: "157px",
                height: "18px",
                color: "#FFFFFF",
                paddingLeft: "15px",
                paddingTop: "5px",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "18px",
              }}
            >
              Waste
            </Text>

            {/* Beta Text */}
            <Text
              style={{
                width: "81px",
                height: "11px",
                flexShrink: "0",
                color: "#02AB6C",
                fontFamily: "HelveticaNeue",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                paddingRight: "20px",
              }}
            >
              (βeta)
            </Text>
          </Flex>
        </Button>
      </Box>
      <Box
        width="249px"
        height="177px"
        flexShrink="0"
        alignItems="center"
        paddingLeft="31px"
        paddingRight="31px"
        paddingTop="63.5px"
        paddingBottom="63.5px"
        bg={isMenuOpen ? "green.500" : "purple.500"}
        style={{ marginTop: isMenuOpen ? "200px" : "0" }}
      >
        <Box
          width="118px"
          height="50px"
          borderRadius="10px"
          backgroundColor="#181818"
          padding="33px 65.5px 33px 65.5px"
          gap="5px"
          textAlign="center"
          border-radius="11px"
          background="#02AB6C"
        >
          <Text
            style={{
              width: "121px",
              height: "36px",
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "18px",
              textAlign: "center",
            }}
          >
            Open Help Centre
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        width="100%"
        height="auto"
        justifyContent="center"
        alignItems="center"
        bg="linear-gradient(0deg, #02AB6C 0%, #02AB6C 100%), #FAFBFC"
        style={{ marginTop: "auto" }}
      >
        <Box
          variant="unstyled"
          width="238px"
          height="48px"
          padding="8px 0px"
          bg="linear-gradient(0deg, #02AB6C 0%, #02AB6C 100%), #FAFBFC"
        >
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            {/* Text */}
            <Text
              style={{
                width: "157px",
                height: "18px",
                color: "#FFFFFF",
                paddingLeft: "15px",
                paddingTop: "5px",
                fontFamily: "HelveticaNeue",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "18px",
              }}
            >
              Powered by
            </Text>
            <Image
              src={longsight}
              width="116px"
              height="25px"
              flexShrink="0"
              alt="Logo"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
