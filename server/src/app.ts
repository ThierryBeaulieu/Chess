import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

export const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello');
});

app.listen(5001, () => console.log('Server running'));