import express from 'express';
import config from './config';
import getController from './controllers/app';
import Logger from './utils/logger';
import App from './models/app';
const logger = new Logger('app');
async function main() {
  await App.init();
  const server = express()
    .enable('x-powered-by')
    .use(express.json())
    .use('/api/v1/foody', getController())
    .listen(config.port, () => {
      logger.log(`server running on http://localhost:${config.port}`);
      const stopServer = () => {
        logger.log('shutting.down');
        server.close();
      };
      process.once('SIGINT', stopServer);
      process.once('SIGTERM', stopServer);
    });
}

main().catch((err) => logger.error('app.init.failed', err));
