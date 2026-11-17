import { z, ZodError, ZodIssue } from 'zod';
import { ProductSchema, ProductCreateDtoSchema, ProductUpdateDtoSchema } from '../models/Product';

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  code?: string;
}

export function validateProduct(data: unknown): ValidationResult<z.infer<typeof ProductSchema>> {
  try {
    const validated = ProductSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formatZodErrors(error);
      return { success: false, errors };
    }
    return {
      success: false,
      errors: [{ field: 'unknown', message: 'Error de validación desconocido' }]
    };
  }
}

export function validateProductCreate(data: unknown): ValidationResult<z.infer<typeof ProductCreateDtoSchema>> {
  try {
    const validated = ProductCreateDtoSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formatZodErrors(error);
      return { success: false, errors };
    }
    return {
      success: false,
      errors: [{ field: 'unknown', message: 'Error de validación desconocido' }]
    };
  }
}

export function validateProductUpdate(data: unknown): ValidationResult<z.infer<typeof ProductUpdateDtoSchema>> {
  try {
    const validated = ProductUpdateDtoSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formatZodErrors(error);
      return { success: false, errors };
    }
    return {
      success: false,
      errors: [{ field: 'unknown', message: 'Error de validación desconocido' }]
    };
  }
}

function formatZodErrors(error: ZodError): ValidationError[] {
  return error.issues.map((issue: ZodIssue) => ({
    field: issue.path.join('.'),
    message: issue.message,
    code: issue.code
  }));
}

export function getValidationErrorMessages(errors: ValidationError[]): string[] {
  return errors.map(err => `${err.field}: ${err.message}`);
}

export function hasValidationErrors(result: ValidationResult<unknown>): boolean {
  return !result.success || (result.errors !== undefined && result.errors.length > 0);
}