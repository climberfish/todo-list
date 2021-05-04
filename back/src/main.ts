import config from '@/infra/config';
import typeormConfig from '@/infra/db/typeorm.config';
import { createConnection } from 'typeorm';
import createServer from '@/infra/web/server';

createConnection(typeormConfig).then(() => {
  const app = createServer();
  app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
});
