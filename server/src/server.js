const http = require("http");

const {app} = require("./app")

const {mongoConnect} = require("./services/mongo.connection")

<<<<<<< HEAD
const PORT = 5000;
=======
const PORT = 6000;
>>>>>>> refs/remotes/origin/main

const server = http.createServer(app);

async function startServer(){
    await mongoConnect()
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
}
startServer();