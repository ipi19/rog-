import logo from "../assets/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="65px" src={logo} />
      <Text>NAVBAR</Text>
    </HStack>
  );
};

export default NavBar;
