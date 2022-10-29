import App from './app.js';

const { express } = App;

express.listen(process.env.PORT || 3000, () =>
  console.info(`listening at http://localhost:${process.env.PORT || 3000}`)
);
