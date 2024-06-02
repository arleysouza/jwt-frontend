import React from 'react';
import styled from 'styled-components';
import { UserProps } from '../../types';

interface Props {
  users: UserProps[];
  onProfileChange: (id: string, newProfile: string) => void;
}

export default function TableUser({ users, onProfileChange }: Props) {
  const handleProfileChange = (id: string, event: React.ChangeEvent<HTMLSelectElement>) => {
    onProfileChange(id, event.target.value);
  };

  return (
    <TableSld>
      <thead>
        <tr>
          <ThSld>E-mail</ThSld>
          <ThSld>Perfil</ThSld>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TrSld key={user.id}>
            <TdSld>{user.mail}</TdSld>
            <TdSld>
              <SelectSld
                value={user.profile}
                onChange={(e) => handleProfileChange(user.id, e)}
              >
                <option value="user">User</option>
                <option value="adm">Admin</option>
              </SelectSld>
            </TdSld>
          </TrSld>
        ))}
      </tbody>
    </TableSld>
  );
}

const TableSld = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f5f5f5;
`;

const ThSld = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #555;
  color: white;
  font-weight: 400;
`;

const TrSld = styled.tr`
  &:nth-child(even) {
    background-color: #ddd; /* linhas pares */
  }
  &:nth-child(odd) {
    background-color: #f9f9f9; /* linhas ímpares */
  }
`;

const TdSld = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const SelectSld = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%; 
  box-sizing: border-box;
`;
