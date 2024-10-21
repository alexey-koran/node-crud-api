import { createServer as httpCreateServer } from 'node:http';

export const createServer = (port: number) => {
  const server = httpCreateServer((_request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    response.end(
      JSON.stringify({
        data: 'Hello World!',
      }),
    );
  });

  server.listen(port, () => console.log(`\nServer is running on: http://localhost:${port}\n`));

  return server;
};
