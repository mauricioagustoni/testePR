/* eslint-disable no-console */

import 'reflect-metadata';
import '../../../config/env';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import AppError from '../../errors/AppError';
import routes from './routes';
import '../../container';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(500).json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    'App is running at http://localhost:%d in %s mode',
    process.env.PORT,
    process.env.NODE_ENV,
  );
});

export default app;
