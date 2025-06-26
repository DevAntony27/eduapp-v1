# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

---

## Cómo publicar en GitHub

Para subir tu proyecto a tu propio repositorio de GitHub, sigue estos pasos desde tu terminal local:

1.  **Crea un nuevo repositorio en GitHub:**
    *   Ve a [github.com/new](https://github.com/new).
    *   Dale un nombre a tu repositorio (ej. `eduapp-tutores`).
    *   Asegúrate de que sea **privado** o **público** según tu preferencia.
    *   **No** selecciones "Add a README file", "Add .gitignore", o "Choose a license". Queremos un repositorio vacío.

2.  **Inicializa Git en tu proyecto local:**
    ```bash
    git init -b main
    ```

3.  **Agrega todos los archivos para subirlos:**
    ```bash
    git add .
    ```

4.  **Crea tu primer "commit" (una instantánea de tu código):**
    ```bash
    git commit -m "Primer commit del proyecto EduAPP"
    ```

5.  **Conecta tu repositorio local con el de GitHub:**
    *   Reemplaza `<tu-nombre-de-usuario>` y `<nombre-del-repositorio>` con tus datos.
    ```bash
    git remote add origin https://github.com/<tu-nombre-de-usuario>/<nombre-del-repositorio>.git
    ```

6.  **Sube tu código a GitHub:**
    ```bash
    git push -u origin main
    ```

¡Y listo! Con estos pasos tu código estará seguro en tu cuenta de GitHub.
