## Atividade - Front end conectando a back end usando JWT (JSON Web Token)

O aplicativo faz a conexão com o back end disponível em https://github.com/arleysouza/jwt-postgresql. O usuário precisa fazer o login para obter o token que será transmitido no hearder das demais requisições. 

### Instruções de uso
Use o comando a seguir para clonar o projeto e instalar as dependências.
```
git clone https://github.com/arleysouza/jwt-frontend.git front
cd front
npm i
```
Você precisa colocar a URL do back end na variável de ambiente `REACT_APP_URL_SERVER`, definida no arquivo `.env`.

### Estrutura do projeto

- #services#: mantém todas as requisições com o servidor. No arquivo `api.ts`
