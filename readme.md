## Motrix Demo Content API

### Requisitos mínimos
Node e NPM
### Instalação e preparação
Clone o repositório, entre no diretório com `cd demo-content-api` e instale as dependências com o comando
```
npm install
```

Após a instalação, as _migrations_ devem ser rodadas para que o banco de dados seja preparado
 ```
 npm run migrate
 ```

### Execução
Para abrir o servidor de desenvolvimento, digite    
```
npm run dev
```
Por padrão, a api ficará disponível pela url `http://localhost:3000`
### Documentação dos endpoints
https://documenter.getpostman.com/view/12093074/VUxLx91m

### Coleção do Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12093074-7a793f0f-ea23-4d93-a275-7acdbffdb85d?action=collection%2Ffork&collection-url=entityId%3D12093074-7a793f0f-ea23-4d93-a275-7acdbffdb85d%26entityType%3Dcollection%26workspaceId%3Dbc2ebcec-3e06-4559-96bc-b1c840740014)

### Roadmap
- Testes unitários
- Melhorias na documentação