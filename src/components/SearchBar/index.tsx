import { useState, useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [debouncedValue] = useDebounce(inputValue, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <Input
        width="50%"
        type="text"
        value={inputValue}
        placeholder="Search NFTs..."
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
