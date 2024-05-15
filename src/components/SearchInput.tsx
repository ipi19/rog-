import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  if (ref.current) onSearch(ref.current.value);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={22}
          placeholder="serch games "
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
