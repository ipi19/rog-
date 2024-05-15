import logo from "../assets/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"20px"}>
      <Image boxSize="65px" src={logo} />
      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
