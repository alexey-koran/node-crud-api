import { createServer as httpCreateServer } from 'node:http';

export const createServer = () => {
  const server = httpCreateServer((_request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    response.end(
      JSON.stringify({
        data: 'Hello World!',
      }),
    );
  });

  return server;
};

export const startServer = (port: number) => {
  const server = createServer();

  server.listen(port, () => console.log(`\nServer is running on: http://localhost:${port}\n`));

  return server;
};
