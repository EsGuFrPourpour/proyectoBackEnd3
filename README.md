# AdoptMe Backend - Proyecto de Prueba

Este proyecto es un backend para la gestión de usuarios y mascotas, con endpoints de mockeo para pruebas rápidas.

## Requisitos
- Node.js 18 o superior
- MongoDB en ejecución local (por defecto en `mongodb://localhost:27017/db_example`)

1. Clona el repositorio:
   ```sh
   git clone https://github.com/EsGuFrPourpour/proyectoBackEnd3.git
   cd proyectoBackEnd3
2. Instala las dependencias:
   ```sh
   npm install
   ```
## Docker

Se incluye un `Dockerfile` para crear una imagen del proyecto.

Construir la imagen localmente:

```sh
docker build -t tu-usuario-docker/adoptme-backend:latest .
```

Subir la imagen a Docker Hub (después de iniciar sesión con `docker login`):

```sh
docker push tu-usuario-docker/adoptme-backend:latest
```

Enlace de la imagen en Docker Hub (reemplaza con tu repo):

https://hub.docker.com/r/tu-usuario-docker/adoptme-backend

## Publicación automática con GitHub Actions

He incluido un workflow de GitHub Actions (`.github/workflows/docker-publish.yml`) que construye y publica la imagen en Docker Hub cuando haces push a la rama `main`.

Pasos para activar la publicación automática:

1. Crea un repositorio en Docker Hub llamado `adoptme-backend` (o el nombre que prefieras).
2. En tu repositorio de GitHub, ve a Settings → Secrets and variables → Actions → New repository secret.
  - Añade `DOCKERHUB_USERNAME` con tu usuario de Docker Hub.
  - Añade `DOCKERHUB_TOKEN` con un token de acceso (puedes crear uno en Docker Hub, en la sección de tokens).
3. Si tu repo en Docker Hub tiene otro nombre, edita `.github/workflows/docker-publish.yml` o actualiza la variable `DOCKERHUB_USERNAME`/tag.
4. Haz push a `main` y GitHub Actions construirá y empujará la imagen.

### Construir y pushear manualmente (local)

Puedes usar el script `scripts/build_and_push.sh` para construir y subir la imagen desde tu máquina (necesitas estar logueado en Docker):

```bash
chmod +x scripts/build_and_push.sh
./scripts/build_and_push.sh tu-usuario-docker adoptme-backend latest
```

O manualmente:

```bash
docker build -t tu-usuario-docker/adoptme-backend:latest .
docker push tu-usuario-docker/adoptme-backend:latest
```


Ejecutar el contenedor:

```sh
docker run -p 8080:8080 -e MONGO_URI="mongodb://host.docker.internal:27017/db_example" tu-usuario-docker/adoptme-backend:latest
```

Nota: si tu MongoDB se ejecuta en la máquina host, al correr en Docker usa `host.docker.internal` (Windows/Mac).

¡Gracias por probar el backend!
   ```sh
   mongod --dbpath="C:/data/db"
   ```
   (o la ruta de datos que uses en tu sistema)

## Uso
1. Inicia el servidor:
   ```sh
   npm start
   ```
2. Prueba los endpoints principales:

### Mock de datos
- **Generar usuarios y mascotas mock en la base de datos:**
  ```sh
  curl.exe -X POST http://localhost:8080/api/mocks/generateData -H "Content-Type: application/json" -d '{"users":5,"pets":5}'
  ```

- **Ver usuarios:**
  ```sh
  curl.exe http://localhost:8080/api/users
  ```

- **Ver mascotas:**
  ```sh
  curl.exe http://localhost:8080/api/pets
  ```

- **Mock de usuarios (sin guardar en base):**
  ```sh
  curl.exe http://localhost:8080/api/mocks/mockingusers
  ```

- **Mock de mascotas (sin guardar en base):**
  ```sh
  curl.exe http://localhost:8080/api/mocks/mockingpets
  ```

¡Gracias por probar el backend!