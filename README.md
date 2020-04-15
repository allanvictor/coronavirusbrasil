<h1 align="center">Corona Vírus Brasil</h1>

### Translation 🇺🇸
[English version](./README-US.md)
### Descrição
PWA que visualisa estatísticas sobre o COVID-19 no Brasil
### Site [Demo](https://allanvictor.github.io/coronavirusbrasil/)
### Rodando o projeto localmente 
Possui 3 opções com <b>Gerenciador de Pacotes</b>, <b>Docker</b> ou <b>Docker Compose</b>
#### Com gerenciador de pacotes \(Requerimento [yarn](https://yarnpkg.com/getting-started/install#per-project-install) ou npm\)
Na pasta do projeto execute no terminal para instalar as dependências (Caso utilize npm troque o comando abaixo)
```
yarn install
``` 
Rodar o servidor de desenvolvimento
```
yarn start
```
Acesse o projeto pelo navegador http://localhost:3000

#### Com Docker (Requerimento [Docker](https://docs.docker.com/engine/install/))
Na pasta raíz do projeto execute no terminal
```
 docker build -t coronavirusbrasil:dev .
```
Em seguida
```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    coronavirusbrasil:dev
```
Acesse o projeto pelo navegador http://localhost:3000
#### Com Docker Compose(Requerimento [Docker Compose](https://docs.docker.com/compose/install/))
Na pasta raíz do projeto execute no terminal
```
docker-compose up -d --build
```
Acesse o projeto pelo navegador http://localhost:3000
### API Utilizada
[COVID-19 BRAZIL API](https://github.com/devarthurribeiro/covid19-brazil-api)
### Licensa
Esse projeto está sobre MIT License - Leia o [LICENSE.md](./LICENSE.md) para mais detalhes
