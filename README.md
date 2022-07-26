# Chess ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖

Welcome 👋 to this chess project! The goal of this project is to make a fully functionning chess web application.

## Installation

If you wish to install this project, you can clone it on your computer with:

```bat
git clone https://github.com/ThierryBeaulieu/Chess
```

Once that the project is clone on your computer, you will need to make sur that you have the latest version of [Node.js](https://nodejs.org/en/download/). You will also need to install [Docker](https://docs.docker.com/get-docker/) so that you can run the database locally.

After installing those external dependencies, select the root of the project and use the following command line to install the required packages:

```bat
Chess> npm install
```

Once that this is done ✔️, you will now need to sequentially start the database, the server and then, the client.

## Start the database

Having installed Docker, you should be able to create your own local container of the database. All you need is to run docker locally and enter the following command line argument in your terminal:

```bat
Chess> npm run db
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
