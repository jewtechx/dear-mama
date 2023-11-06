const http = require("http");

const {app} = require("./app")

const {mongoConnect} = require("./services/mongo.connection")

const PORT = 6000;

const server = http.createServer(app);

async function startServer(){
    await mongoConnect()
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
}
startServer();