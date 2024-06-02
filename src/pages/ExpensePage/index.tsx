import styled from "styled-components";
import { TableExpense, Title } from "../../components";
import { useExpense } from "../../hooks";

export default function ExpensePage() {
  const { expenses } = useExpense();

  return (
    <Wrapper>
      <Title>Seus gastos</Title>
      {
        (expenses && expenses.length > 0) && <TableExpense expenses={expenses} />
      }

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
