import styled from "styled-components";
import { Button, Input, Select, Title } from "../../components";
import { useCategory, useError } from "../../hooks";
import { useState } from "react";

export default function CategoryPage() {
  const { categories } = useCategory();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const { setError } = useError();
  const { create } = useCategory();

  const handleCreate = () => {
    if (!name) {
      setError({ message: "Forneça o nome da categoria" });
    } else {
      create(name);
    }
  };

  return (
    <Wrapper>
      <Title>Cadastro de categorias</Title>
      <Select
        id="category"
        label="Categorias"
        options={categories}
        value={category}
        setValue={setCategory}
      />
      <Input
        type="text"
        id="name"
        label="Nome"
        value={name}
        setValue={setName}
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
