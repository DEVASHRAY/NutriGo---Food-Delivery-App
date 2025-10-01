import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.status(200).json({ message: 'Server is Running' });
});

export default app;
