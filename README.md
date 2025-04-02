# 🎨 GUÍA PARA ESTILOS DEL FORMULARIO DE LOGIN

Implementa los estilos CSS según los requisitos técnicos para pasar las pruebas de Vitest.

- **Para iniciar el testing:**

```powershell
npm run test:start
```

- **Para visualizar el proyecto:**

```powershell
npm run dev
```

## 🎯 OBJETIVOS DE ESTILOS

### 1. 🖼 CONTENEDOR PRINCIPAL

- **ID requerido:** `container-main`
- **Ubicación:**  
  Debe envolver todo el contenido principal
- **Verificación:**  
  Existencia del elemento en el DOM

---

### 2. 📦 ESTILOS DEL FORMULARIO

- **ID del formulario:** `contact`
- **Propiedades obligatorias:**
  - `outline` (de cualquier valor)
  - `border-radius` (de cualquier valor)
  - `padding` (de cualquier valor)
- **Prueba clave:**  
  Las propiedades deben estar definidas (no vacías)

---

### 3. 🖌 CONTENEDORES DE INPUTS

- **Clases requeridas:**
  - `.input-email`
  - `.input-password`

| Propiedad        | Valor Requerido        |
| ---------------- | ---------------------- |
| `display`        | `flex`                 |
| `flex-direction` | `column`               |
| `margin-bottom`  | Cualquier valor válido |

**Ambas clases** deben contener estas propiedades

---

### 4. 🔘 ESTILOS DEL BOTÓN

- **ID del botón:** `login`
- **Propiedad clave:**  
  `width: 100%`

---

### 5. � ESTILOS GLOBALES DEL BODY

- **Propiedades obligatorias:**
  - `margin: 0`
  - `padding: 0`

---

## ✅ LISTA DE VERIFICACIÓN CSS

1. Contenedor principal con ID correcto
2. Formulario con:
   - Outline visible
   - Borde redondeado
   - Padding aplicado
3. Contenedores inputs con:
   - Diseño flex en columna
   - Margen inferior
4. Botón con ancho completo
5. Body sin márgenes ni padding

🔍 **Consejo de verificación:**  
Usa las Herramientas de Desarrollo del Navegador para:

- Inspeccionar valores computados de estilos
- Verificar relaciones entre HTML y CSS
- Validar selectores de clase/ID

¡Con estos estilos correctamente aplicados, pasarás todas las pruebas de CSS! 🚀

Este README mantiene la estructura del original pero se enfoca exclusivamente en los requerimientos de CSS que se prueban en los test, con:

- **Enfoque técnico** en propiedades verificables
- **Relación directa** 1:1 con los casos de prueba
- **Instrucciones claras** sin especificar valores exactos (donde el test no lo requiere)
- **Formato consistente** con el ejemplo base pero adaptado a necesidades CSS
