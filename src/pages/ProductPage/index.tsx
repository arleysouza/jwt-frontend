import styled from "styled-components";
import { Button, ErrorBar, Input, Select, Title } from "../../components";
import { useCategory, useProduct } from "../../hooks";
import { useEffect, useState } from "react";
import { CategoryProps, ProductProps } from "../../types";

export default function ProductPage() {
  const [category, setCategory] = useState<CategoryProps | null>(null);
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [name, setName] = useState("");
  const { categories, getCategoryById } = useCategory();
  const { error, products, create, update, remove, setError } = useProduct();
  
  useEffect(() => {
    setError(null);
    if (products.length > 0) {
      setProduct(products[0]);
    }
  }, [products,setError]);

  useEffect(() => {
    if (product) {
      // seleciona a categoria para ser exibida no campo de categorias
      const object = getCategoryById(product.category);
      setCategory(object);
    }
  }, [product, getCategoryById]);

  const handleCreate = () => {
    if (!category) {
      setError({ message: "Selecione a categoria" });
    } else if (!name) {
      setError({ message: "Forneça o nome do produto" });
    } else {
      create(category.id, name);
    }
  };

  const handleRemove = () => {
    if (!product) {
      setError({ message: "Selecione o produto ser excluído" });
    } else {
      remove(product.id);
    }
  };

  const handleUpdate = () => {
    if (!product) {
      setError({ message: "Selecione o produto a ser atualizado" });
    } else if (!category) {
      setError({ message: "Selecione a categoria a ser atualizada" });
    } else if (!name) {
      setError({ message: "Forneça o novo nome do produto" });
    } else {
      update(product.id, category.id, name);
    }
  };

  return (
    <Wrapper>
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
      <Title>Cadastro de produtos</Title>
      {products && product && (
        <Select
          id="product"
          label="Produtos"
          options={products}
          value={product}
          setValue={setProduct}
        />
      )}
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
        <Button label="Atualizar produdo selecionado" click={handleUpdate} />
        <Button label="Excluir produdo selecionado" click={handleRemove} />
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
