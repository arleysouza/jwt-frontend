import styled from "styled-components";

export default function ErrorBar({ children }: any) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  background-color: rgb(202, 60, 74);
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0px;
`;
