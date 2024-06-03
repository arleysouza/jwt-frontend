import styled from "styled-components";
import { ErrorBar, TableExpense, Title } from "../../components";
import { useExpense } from "../../hooks";

export default function ExpensePage() {
  const { error, expenses } = useExpense();

  return (
    <Wrapper>
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
      <Title>Seus gastos</Title>
      {expenses && expenses.length > 0 && <TableExpense expenses={expenses} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
