import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

// create a route that sends back some json
app.get('/', (req, res) => {
  res.send({ message: 'This is a response.' });
});

// create a route that accepts json and logs it
app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: 'Logged request body.' });
});

// start the server
export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000.');
  });
};
