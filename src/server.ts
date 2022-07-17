import http from "http";
import app from ".";

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
