import styled from "styled-components";
import { Button, ErrorBar, Input, Select, Title } from "../../components";
import { useCategory } from "../../hooks";
import { useEffect, useState } from "react";
import { CategoryProps } from "../../types";

export default function CategoryPage() {
  const { error, categories } = useCategory();
  const [category, setCategory] = useState<CategoryProps | null>(null);
  const [name, setName] = useState("");
  const { create, remove, update, setError } = useCategory();

  useEffect(() => {
    setError(null);
    if (categories.length > 0) {
      setCategory(categories[0]);
    }
    
  }, [categories,setError]);

  const handleCreate = () => {
    if (!name) {
      setError({ message: "Forneça o nome da categoria" });
    } else {
      create(name);
    }
  };

  const handleRemove = () => {
    if (!category) {
      setError({ message: "Selecione a categoria a ser excluída" });
    } else {
      remove(category.id);
    }
  };

  const handleUpdate = () => {
    if (!category) {
      setError({ message: "Selecione a categoria a ser atualizada" });
    } else if (!name) {
      setError({ message: "Forneça o novo nome da categoria" });
    } else {
      update(category.id, name);
    }
  };

  return (
    <Wrapper>
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
      <Title>Cadastro de categorias</Title>
      {categories && category && (
        <Select
          id="category"
          label="Categorias"
          options={categories}
          value={category}
          setValue={setCategory}
        />
      )}
      <Input
        type="text"
        id="name"
        label="Nome"
        value={name}
        setValue={setName}
      />
      <LineSld>
        <Button label="Criar" click={handleCreate} />
        <Button label="Atualizar categoria selecionado" click={handleUpdate} />
        <Button label="Excluir categoria selecionado" click={handleRemove} />
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
