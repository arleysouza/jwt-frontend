## Atividade - Front end conectando a back end usando JWT (JSON Web Token)

O aplicativo faz a conexão com o back end disponível em https://github.com/arleysouza/jwt-postgresql. O usuário precisa fazer o login para obter o token que será transmitido no header das demais requisições. 

### Instruções de uso
Use o comando a seguir para clonar o projeto e instalar as dependências.
```
git clone https://github.com/arleysouza/jwt-frontend.git front
cd front
npm i
```
Você precisa colocar a URL do back end na variável de ambiente `REACT_APP_URL_SERVER`, definida no arquivo `.env`.

### Estrutura do projeto

- **services**: código para fazer as requisições ao servidor. No arquivo `api.ts` os interceptors são chamados antes e após cada requisição. Antes ele é usado para setar o token no header da requisição e após ele é usado para verificar mensagens de erro, assim como servidor ou rede inoperante;
- **contexts**: foi criado um contexto para cada tipo de dado, onde cada contexto faz uso apenas do serviço correspondente, definido na pasta `services`. As operações e propriedades propagadas pelos contextos são consumidas apenas pelas páginas correspondentes para evitar requisições desnecessárias ao servidor;
- **hooks**: usados para simplificar o acesso aos contextos;
- **pages**: páginas de acesso, utiliza os componentes definidos na pasta `components`;
- **components**: componentes consumidos pelas páginas, definidas na pasta `pages`;
- **routes**: as páginas do front end ficam disponíveis a partir dos valores das propriedades `token` e `profile`, propagadas pela estrutura de componentes através do `UserContext`:
```
export default function Routes(){
    const {token,profile} = useUser();

    return !token? <UnsignedRoutes /> : profile === "adm" ? <AdmRoutes /> : <UserRoutes />;
}
```
A propagação dos contextos pelas páginas ocorre primeiramente no componente raiz. Como o `UserContext` envolve toda a árvore de componentes, então qualquer componente pode consumir as propriedades `token` e `profile` definidas nesse contexto.
```
export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}
``` 
A propapação dos demais contextos ocorre na especificação de cada rota. No exemplo a seguir a rota `/produto` faz os contextos `CategoryContext` e `ProductContext` serem invocados antes da construção do componente `ProductPage`.
```
<Route
    path="/produto"
    element={
        <CategoryProvider>
            <ProductProvider>
                <ProductPage />
            </ProductProvider>
        </CategoryProvider>
    }
/>
```

