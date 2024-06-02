import styled from "styled-components";
import { TableUser, Title } from "../../components";
import { useUser } from "../../hooks";
import { useEffect } from "react";

export default function UserPage() {
  const { users, getUsers, updateProfile } = useUser();

  useEffect(() => {
    if (!users) {
      getUsers(); //obtém os usuários cadastrados
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateProfile = (id:string, profile:string) => {
    if( id && profile){
      updateProfile(id,profile);
    }
  };

  return (
    <Wrapper>
      <Title>Cadastro de usuários</Title>
      {
        (users && users.length > 0) && <TableUser users={users} onProfileChange={handleUpdateProfile} />
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
