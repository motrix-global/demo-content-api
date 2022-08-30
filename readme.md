## Motrix Demo Content API

### Requisitos mínimos
Node e NPM
### Instalação e migrations
Clone o repositório, entre no diretório com `cd demo-content-api` e instale com o comando
```
npm install
```

Após a instalação, as _migrations_ devem ser rodadas pelo comando    
 ```
 npm run migrate
 ```

### Execução
Para abrir o servidor de desenvolvimento, digite    
```
npm run dev
```

### Postman Collection
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12093074-7a793f0f-ea23-4d93-a275-7acdbffdb85d?action=collection%2Ffork&collection-url=entityId%3D12093074-7a793f0f-ea23-4d93-a275-7acdbffdb85d%26entityType%3Dcollection%26workspaceId%3Dbc2ebcec-3e06-4559-96bc-b1c840740014)

### Endpoints

- Criar conteúdo
- Adicionar uma revisão a um conteúdo
- Recuperar conteúdo por um id
- Recuperar todos os conteúdos
- Restaurar uma revisão por um id
- Publicar/despublicar conteúdo
- Apagar conteúdo

### TODO
- Unit testing
- Pagination