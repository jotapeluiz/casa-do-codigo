/* Código simplório, apenas para fornecer o serviço para a aplicação */
import express from 'express';
import routes from '../app/routes';
import { json } from 'body-parser';

const app = express();

app.use(json())
   .use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
         .header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
   });

routes(app);

export default app;