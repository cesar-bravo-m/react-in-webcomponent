# Aplicación Host para Componentes Web Remotos

Aplicación que carga e interactúa con Web Components desde una fuente remota.

## Características

- Carga componentes web desde otro proyecto
- Interactúa con los componentes mediante JavaScript
- Comparte estado entre componentes

## Ejecución

1. Construir la biblioteca de componentes:
   ```bash
   cd ../wc-components-lib
   npm install
   npm run build
   ```

2. Abrir la aplicación:
   ```bash
   npx http-server
   ```

## Funcionamiento

- La aplicación carga la biblioteca mediante una etiqueta script
- Utiliza los elementos personalizados en su HTML
- Interactúa con los componentes a través de funciones exportadas
- Los componentes comparten estado mediante Redux 