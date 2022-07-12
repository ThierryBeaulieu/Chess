# Chess ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖

Welcome 👋 to this chess project! The goal of this project is to make a fully functionning chess web application.

## Installation

If you wish to install this project, you can clone it on your computer with:

```bat
git clone https://github.com/ThierryBeaulieu/Chess
```

Once that the project is clone on your computer, you will need to make sur that you have the latest version of [Node.js](https://nodejs.org/en/download/). You will also need to install [PostgreSQL](https://www.postgresql.org/download/) to run the database locally.

After proceeding to the installation, you will now need to install the dependencies. For that, simple enter the following command line:

```bat
Chess> npm install
```

Once that this is done ✔️, you should now be able to start the database, followed by the server and the client.

## Start the database

There are several ways to run the database. The only thing that matters are the parameters used to link the database to the server. These are the parameters:

```js
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'postgres',
    database: 'Chess',
```

## Start the server

For starting the server, enter in the command line the following line argument in your terminal:

```bat
Chess> npm run server
```

## Start the client

For starting the client, enter in the command line the following line argument in your terminal:

```bat
Chess> npm run client
```

There you go, you should have a fully functionning website 🚀!
