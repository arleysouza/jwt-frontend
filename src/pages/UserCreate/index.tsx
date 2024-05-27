import { useState } from "react";
import { useError, useUser } from "../../hooks";
import styled from "styled-components";
import { Title, Input, Button } from "../../components";


export default function UserCreate() {
  const [mail, setMail] = useState("pedro@teste.com");
  const [password, setPassword] = useState("123456");
  const { create } = useUser();
  const { setError } = useError();

  const handleCreate = () => {
    if (!mail) {
      setError({ message: "Forneça o e-mail" });
    } else if (!password) {
      setError({ message: "Forneça a senha" });
    } else {
      create(mail, password);
    }
  };

  return (
    <Wrapper>
      <Title>Novo usuário</Title>
      <Input
        type="text"
        id="mail"
        label="e-mail"
        value={mail}
        setValue={setMail}
      />
      <Input
        type="password"
        id="password"
        label="Senha"
        value={password}
        setValue={setPassword}
      />
      <LineSld>
        <Button label="Salvar" click={handleCreate} />
      </LineSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineSld = styled.div`
  display: flex;
  margin-top: 10px;
`;
