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

- **services**: código que faz as requisições ao servidor. No arquivo `api.ts` os interceptors são chamados antes e após cada requisição. Antes ele é usado para setar o token no header da requisição e após ele é usado para verificar mensagens de erro, assim como servidor ou rede inoperante;
- **contexts**: foi criado um contexto para cada tipo de dado, onde cada contexto faz uso apenas do serviço correspondente, definido na pasta `services`. As operações e propriedades propagadas pelos contexto são consumidas apenas pelas páginas correspondentes para evitar requisições desnecessárias ao servidor;
- **hooks**: usados para simplificar o acesso aos contextos;
- **pages**: páginas de acesso, utiliza os componentes definidos na pasta `components`;
- **components**: componentes consumidos pelas páginas, definidas na pasta `pages`;
- **routes**: o front end consome as operações definidas no servidor. Desta forma, temos rotas que estão definidas para 3 situações (não logado, logado como __adm__ e logado como __user__). 
```
export default function Routes(){
    const {token,profile} = useUser();

    return !token? <UnsignedRoutes /> : profile === "adm" ? <AdmRoutes /> : <UserRoutes />;
}
```


