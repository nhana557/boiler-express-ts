# RESTful API Node Server Boilerplate

A boilerplate/starter project for quickly building RESTful APIs using Node.js, Express

## Installation

to do the installation follow these steps:

Clone the repo:

```bash
git clone https://github.com/nhana557/boiler-express-ts.git
cd boiler-express-ts
```

Install the dependencies:

```bash
npm install
```

Set the configuration sh:

```bash
chmod +x manage.sh
```

## Commands

Migration:

```bash
# migration up
make migrate
# migration down
make migrate-down
```

Docker:

```bash
# run docker container in development mode
make dependencies-up

# stop container in development mode
make dependencies-down

# run docker container in production mode
make start
```

Running locally:

```bash
make server-dev
```

Running in production:

```bash
make start
```

## Environment Variables

Create `.env.developmen` & `.env.production` file. And set values:

```bash
# Port Number
PORT=8000

# database
DB_HOST=localhost
DB_PORT=5433
DB_USER=root
DB_PASSWORD=root
DB_NAME=clean_architecture

# cache use redis
HOST_REDIS=localhost
PORT_REDIS=6379
PASS_REDIS=
```
