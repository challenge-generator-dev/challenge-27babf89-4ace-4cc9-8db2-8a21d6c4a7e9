# Construcción de Endpoints REST con Validación y Manejo de Errores

El sistema debe exponer un catálogo de productos a través de endpoints REST. Los datos de los productos viven en memoria detrás de un repositorio. El cuerpo de las requests debe ser validado usando Zod. No se utilizará Mongoose ni MongoDB. Las pruebas con Jest deben cubrir los casos de error 400 y 404.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construccion de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** Express 4
- **Version:** Node 22

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Definición del Modelo de Producto

**Objetivo:** Definir el modelo de datos para los productos y establecer las validaciones necesarias.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crea el modelo de datos para los productos con los atributos necesarios.
- Implementa las validaciones usando Zod para asegurar que los datos ingresados sean correctos.

**Entregable:** Modelo de datos de productos con validaciones aplicadas.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los datos viven en memoria.
- Usa Zod para validar el cuerpo de las requests.

</details>

### Fase 2: Implementación de Endpoints REST

**Objetivo:** Implementar los endpoints REST para exponer el catálogo de productos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crea los endpoints REST necesarios para exponer el catálogo de productos.
- Asegúrate de que los endpoints manejen correctamente los errores 400 y 404.

**Entregable:** Endpoints REST funcionales para exponer el catálogo de productos con manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza Express para crear los endpoints.
- Implementa el manejo de errores para los casos 400 y 404.

</details>

### Fase 3: Pruebas Unitarias con Jest

**Objetivo:** Escribir pruebas unitarias para cubrir los casos de error 400 y 404.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Escribe pruebas unitarias usando Jest para cubrir los casos de error 400 y 404.
- Asegúrate de que las pruebas validen correctamente el comportamiento de los endpoints.

**Entregable:** Pruebas unitarias con Jest que cubren los casos de error 400 y 404.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza Jest para escribir las pruebas unitarias.
- Asegúrate de que las pruebas validen el comportamiento correcto de los endpoints.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un endpoint REST y cuál es su propósito en este sistema?
- **paraQueSirve**: ¿Para qué sirve validar el cuerpo de las requests en este sistema?
- **comoSeUsa**: ¿Cómo se usa Zod para validar el cuerpo de las requests?
- **erroresComunes**: ¿Cuáles son los errores comunes que deben manejarse en los endpoints y cómo se manejan?

## Criterios de Evaluacion

- Modelo de datos de productos con validaciones aplicadas.
- Endpoints REST funcionales para exponer el catálogo de productos con manejo de errores.
- Pruebas unitarias con Jest que cubren los casos de error 400 y 404.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
