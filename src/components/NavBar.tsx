import logo from "../assets/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={"20px"}>
      <Image boxSize="65px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
