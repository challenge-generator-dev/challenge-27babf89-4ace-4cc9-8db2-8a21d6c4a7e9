import { Router } from 'express';
import { ProductRepository } from '../repositories/ProductRepository';
import { ProductCreateDto, ProductUpdateDto } from '../models/Product';

const router = Router();
const productRepository = new ProductRepository();

router.get('/', async (req, res, next) => {
  throw new Error('TODO(reto): get');
});

router.get('/:id', async (req, res, next) => {
  throw new Error('TODO(reto): get');
});

router.post('/', async (req, res, next) => {
  throw new Error('TODO(reto): post');
});

router.put('/:id', async (req, res, next) => {
  throw new Error('TODO(reto): put');
});

export const productRouter = router;
export default router;