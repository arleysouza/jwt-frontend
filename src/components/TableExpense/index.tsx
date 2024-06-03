import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { ExpenseProps } from '../../types';


interface Props {
  expenses: ExpenseProps[];
}

export default function ExpensesTable({ expenses }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd-MM-yyyy HH:mm:ss');
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>Produto</Th>
          <Th>Valor</Th>
          <Th>Data e horário</Th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <Tr key={expense.id}>
            <Td>{expense.name}</Td>
            <Td>{expense.value.toFixed(2)}</Td>
            <Td>{formatDate(expense.datetime)}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f5f5f5; /* Cor de fundo clara para a tabela */
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #555; /* Cor de fundo para o cabeçalho */
  color: white; /* Cor do texto do cabeçalho */
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #ddd; /* Cor de fundo para linhas pares */
  }
  &:nth-child(odd) {
    background-color: #f9f9f9; /* Cor de fundo para linhas ímpares */
  }
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  width: 33%; /* Ajuste conforme necessário */
`;
