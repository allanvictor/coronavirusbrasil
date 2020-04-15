<h1 align="center">Corona Vírus Brasil</h1>

### Description
PWA displays stats about COVID-19 in Brazil
### Site [Demo](https://allanvictor.github.io/coronavirusbrasil/)
### Run on localhost

#### With Package Manager \(Requeriments [yarn](https://yarnpkg.com/getting-started/install#per-project-install) or npm \)
In project folder execute on terminal (if npm only replace yarn command for npm)
```
yarn install
``` 
Run development server
```
yarn start
```
You can now view web in the browser on http://localhost:3000
#### With Docker (Requeriments [Docker](https://docs.docker.com/engine/install/))
Enter in project root and execute on terminal
```
 docker build -t coronavirusbrasil:dev .
```
Next
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
You can now view web in the browser on http://localhost:3000
#### With Docker Compose(Requeriments [Docker Compose](https://docs.docker.com/compose/install/))
Enter in project root and execute on terminal
```
docker-compose up -d --build
```
You can now view web in the browser on http://localhost:3000
### API
[COVID-19 BRAZIL API](https://github.com/devarthurribeiro/covid19-brazil-api)



### License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
