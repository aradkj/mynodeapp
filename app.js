const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("Hello from CI/CD 🚀\nVersion: 1.0");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});