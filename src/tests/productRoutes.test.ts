import request from 'supertest';
import express, { Application } from 'express';
import { ProductRepository } from '../repositories/ProductRepository';
import productRouter from '../routes/productRoutes';
import { app } from '../app';

describe('Product Routes', () => {
  let testApp: Application;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
    testApp = express();
    testApp.use(express.json());
    testApp.use('/products', productRouter(productRepository));
  });

  describe('GET /products', () => {
    it('debería retornar un array de productos', async () => {
      const response = await request(testApp).get('/products');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería retornar productos con la estructura correcta', async () => {
      const response = await request(testApp).get('/products');

      expect(response.status).toBe(200);
      if (response.body.length > 0) {
        const product = response.body[0];
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('stock');
      }
    });
  });

  describe('GET /products/:id', () => {
    it('debería retornar 404 cuando el producto no existe', async () => {
      const nonExistentId = '999999';
      const response = await request(testApp).get(`/products/${nonExistentId}`);

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message');
    });

    it('debería retornar el producto cuando existe', async () => {
      const allProducts = await productRepository.getAll();
      if (allProducts.length > 0) {
        const existingProduct = allProducts[0];
        const response = await request(testApp).get(`/products/${existingProduct.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', existingProduct.id);
        expect(response.body).toHaveProperty('name', existingProduct.name);
      }
    });
  });

  describe('POST /products', () => {
    it('debería retornar 400 cuando el body está vacío', async () => {
      const response = await request(testApp)
        .post('/products')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });

    it('debería retornar 400 cuando falta el campo name', async () => {
      const invalidProduct = {
        price: 100,
        stock: 10
      };

      const response = await request(testApp)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });

    it('debería retornar 400 cuando price es negativo', async () => {
      const invalidProduct = {
        name: 'Producto',
        price: -50,
        stock: 10
      };

      const response = await request(testApp)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });

    it('debería retornar 400 cuando stock es negativo', async () => {
      const invalidProduct = {
        name: 'Producto',
        price: 100,
        stock: -5
      };

      const response = await request(testApp)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });

    it('debería crear el producto cuando los datos son válidos', async () => {
      const validProduct = {
        name: 'Nuevo Producto',
        price: 99.99,
        description: 'Descripción del producto',
        stock: 50
      };

      const response = await request(testApp)
        .post('/products')
        .send(validProduct);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(validProduct.name);
      expect(response.body.price).toBe(validProduct.price);
      expect(response.body.stock).toBe(validProduct.stock);
    });
  });

  describe('PUT /products/:id', () => {
    it('debería retornar 404 cuando el producto no existe', async () => {
      const nonExistentId = '999999';
      const response = await request(testApp)
        .put(`/products/${nonExistentId}`)
        .send({ name: 'Producto actualizado' });

      expect(response.status).toBe(404);
    });

    it('debería retornar 400 cuando price es negativo', async () => {
      const allProducts = await productRepository.getAll();
      if (allProducts.length > 0) {
        const existingProduct = allProducts[0];
        const response = await request(testApp)
          .put(`/products/${existingProduct.id}`)
          .send({ price: -10 });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
      }
    });

    it('debería actualizar el producto cuando los datos son válidos', async () => {
      const allProducts = await productRepository.getAll();
      if (allProducts.length > 0) {
        const existingProduct = allProducts[0];
        const updateData = {
          name: 'Producto Actualizado',
          price: 149.99
        };

        const response = await request(testApp)
          .put(`/products/${existingProduct.id}`)
          .send(updateData);

        expect(response.status).toBe(200);
        expect(response.body.name).toBe(updateData.name);
        expect(response.body.price).toBe(updateData.price);
      }
    });
  });
});