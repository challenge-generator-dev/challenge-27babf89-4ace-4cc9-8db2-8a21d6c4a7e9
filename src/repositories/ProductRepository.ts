import { Product } from '../models/Product';

export class ProductRepository {
    private products: Product[] = [];

    async getAll(): Promise<Product[]> {
        // TODO(reto): Implementar la lógica para obtener todos los productos
        throw new Error('Method not implemented');
    }

    async getById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar la lógica para obtener un producto por ID
        throw new Error('Method not implemented');
    }

    async create(productData: Omit<Product, 'id'>): Promise<Product> {
        // TODO(reto): Implementar la lógica para crear un nuevo producto
        throw new Error('Method not implemented');
    }

    async update(id: string, productData: Partial<Omit<Product, 'id'>>): Promise<Product | null> {
        // TODO(reto): Implementar la lógica para actualizar un producto existente
        throw new Error('Method not implemented');
    }
}