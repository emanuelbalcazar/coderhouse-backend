// config.js
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
});

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 8080,
  //MEM - FILE - MONGO
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'MEM',
  GRAPHIQL: process.env.GRAPHIQL || 'true'
}