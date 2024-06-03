import styled from "styled-components";
import { ErrorBar, TableUser, Title } from "../../components";
import { useUser } from "../../hooks";
import { useEffect } from "react";

export default function UserPage() {
  const { error, users, getUsers, updateProfile, setError } = useUser();

  useEffect(() => {
    setError(null);
    if (!users) {
      getUsers(); //obtém os usuários cadastrados
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateProfile = (id:string, profile:string) => {
    if( id && profile){
      setError(null);
      updateProfile(id,profile);
    }
    else{
      setError({message:"Forneça o perfil"});
    }
  };

  return (
    <Wrapper>
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
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
