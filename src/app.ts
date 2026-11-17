import express, { Application, Request, Response, NextFunction } from 'express';
import { ProductRepository } from './repositories/ProductRepository';
import productRouter from './routes/productRoutes';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';

const app: Application = express();

app.use(express.json());

const productRepository = new ProductRepository();

app.use('/products', productRouter(productRepository));

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use(notFoundHandler);
app.use(errorHandler);

export { app };