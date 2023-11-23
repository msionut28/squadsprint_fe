import { Select } from "@chakra-ui/select";

const SelectBar = ({ options, onChange }) => {
  return (
    <Select onChange={(e) => onChange(e)}>
      {options.map((option) => (
        <option key={option.value}>{option.label}</option>
      ))}
    </Select>
  );
};

export default SelectBar;
