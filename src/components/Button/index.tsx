import styled from "styled-components";

export default function Button({ label, click }: Props) {
  return <ButtonSld onClick={click}>{label}</ButtonSld>;
}

export const ButtonSld = styled.button`
  display: flex;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: rgb(23, 68, 119);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(75, 114, 160);
  }
`;

interface Props {
  label: string;
  click: () => void;
}
