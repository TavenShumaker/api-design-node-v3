import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import { connect } from './utils/db';
import itemRouter from './resources/item/item.router';

// This exercise will have you creating routes and sub routers for our soon the be DB resources using Express routing and routers

// mount router on the root server
// ensure all tests pass by running test command
//adjust
export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
// allows for the use of url params
app.use(urlencoded({ extended: true }));
// logs metrics related to http
app.use(morgan('dev'));

app.use('/api/item', itemRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
