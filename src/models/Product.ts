import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().uuid({ message: "El ID debe ser un UUID válido" }),
  name: z.string()
    .min(1, { message: "El nombre es obligatorio" })
    .max(100, { message: "El nombre no puede exceder 100 caracteres" }),
  price: z.number()
    .positive({ message: "El precio debe ser un número positivo" })
    .max(1000000, { message: "El precio no puede exceder 1,000,000" }),
  description: z.string()
    .max(500, { message: "La descripción no puede exceder 500 caracteres" })
    .optional(),
  stock: z.number()
    .int({ message: "El stock debe ser un número entero" })
    .nonnegative({ message: "El stock no puede ser negativo" })
});

export const ProductCreateDtoSchema = ProductSchema.omit({ id: true });
export const ProductUpdateDtoSchema = ProductSchema.partial().omit({ id: true });

export type Product = z.infer<typeof ProductSchema>;
export type ProductCreateDto = z.infer<typeof ProductCreateDtoSchema>;
export type ProductUpdateDto = z.infer<typeof ProductUpdateDtoSchema>;