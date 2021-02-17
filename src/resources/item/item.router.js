import { Router } from 'express';

const router = Router();

// create a router for the Item resource
// create full crud routes and create placeholder controllers
router
  .route('/')
  .get((req, res) => {
    res.status(200).send({ message: 'Response from get request.' });
  })
  .post((req, res) => {
    console.log('Post Request:', req.body);
    res.status(200).send({ message: 'Response from post request.' });
  });

router
  .route('/:id')
  .get((req, res) => {
    res
      .status(200)
      .send({ message: `Response from get request with ID ${req.params.id}.` });
  })
  .put((req, res) => {
    console.log('Put Request:', req.body);
    res
      .status(200)
      .send({ message: `Response from put request with ID ${req.params}.` });
  })
  .delete((req, res) => {
    console.log('Delete Request:', req.body);
    res
      .status(200)
      .send({ message: `Response from delete request with ID ${req.params}.` });
  });

export default router;
