# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/repositories/ProductRepository.ts` — La fase "Definición del Modelo de Producto" (f1) practica repositories/ProductRepository.ts (métodos getAll, getById, create, update) aqui: este archivo es el ejercicio (blueprint).
- `src/routes/productRoutes.ts` — La fase "Implementación de Endpoints REST" (f2) practica routes/productRoutes.ts (endpoints GET, POST, PUT) aqui: este archivo es el ejercicio (blueprint).

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construccion de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Construcción de Endpoints REST con Validación y Manejo de Errores
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición del Modelo de Producto — objetivo: Definir el modelo de datos para los productos y establecer las validaciones necesarias. — entregable (NO resolver): Modelo de datos de productos con validaciones aplicadas.
- Fase 2: Implementación de Endpoints REST — objetivo: Implementar los endpoints REST para exponer el catálogo de productos. — entregable (NO resolver): Endpoints REST funcionales para exponer el catálogo de productos con manejo de errores.
- Fase 3: Pruebas Unitarias con Jest — objetivo: Escribir pruebas unitarias para cubrir los casos de error 400 y 404. — entregable (NO resolver): Pruebas unitarias con Jest que cubren los casos de error 400 y 404.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@types/jest": "30.0.0",
    "express": "4.22.3",
    "jest": "30.5.2",
    "ts-jest": "29.4.15",
    "zod": "4.6.7"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "supertest": "7.3.2",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/models/Product.ts ===
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

// === ARCHIVO: src/middlewares/errorHandler.ts ===
import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodIssue } from 'zod';

export class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(`Error: ${err.message}`, err.stack);

  if (err instanceof ZodError) {
    res.status(400).json({
      error: 'Bad Request',
      details: err.issues.map((e: ZodIssue) => ({
        path: e.path.join('.'),
        message: e.message
      }))
    });
    return;
  }

  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      error: err.message
    });
    return;
  }

  if (err.message.includes('not found')) {
    res.status(404).json({
      error: err.message
    });
    return;
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new HttpError(404, `Ruta ${req.method} ${req.path} no encontrada`);
  next(error);
};

export const validateRequest = (schema: { parse: (body: unknown) => unknown }) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
};

// === ARCHIVO: src/repositories/ProductRepository.ts ===
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

// === ARCHIVO: src/routes/productRoutes.ts ===
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

// === ARCHIVO: src/utils/validation.ts ===
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

// === ARCHIVO: src/main.ts ===
import { app } from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

// === ARCHIVO: src/app.ts ===
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

// === ARCHIVO: src/tests/productRoutes.test.ts ===
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
```
