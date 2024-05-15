import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        ORDER BY RELEVANCE
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem> Name</MenuItem>
        <MenuItem>Realese Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Avarage Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
