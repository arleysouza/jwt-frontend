import styled from "styled-components";

export default function Select({ id, label, value, setValue, options }: Props) {
  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <SelectSld
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={id}
      >
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </SelectSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LabelSld = styled.label`
  display: flex;
  color: #fff;
  padding: 0px;
  margin: 5px 0px;
`;

const SelectSld = styled.select`
  display: flex;
  border-radius: 5px;
  border: none;
  padding: 8px;
  color: rgb(27, 71, 153);
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
`;

interface Props {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: any[];
}
