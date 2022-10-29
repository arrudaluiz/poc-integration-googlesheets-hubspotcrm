import dotenv from 'dotenv';
import express from 'express';
import routes from './routes.js';

dotenv.config({
  path: '.env'
});

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App();
