import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MenuUser() {
  return (
    <Wrapper>
      <LinkSld to="/gasto">Gastos</LinkSld>
      <LinkSld to="/logout">Logout</LinkSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0px;
`;

const LinkSld = styled(Link)`
  color: #fff;
  text-decoration: none; // Remove a sublinhado
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  // ao passar o mouse
  &:hover {
    color: rgb(75, 131, 236);
    background-color: #444;
  }
  // enquanto está clicando
  &:active {
    color: rgb(179, 21, 36);
  }
`;
