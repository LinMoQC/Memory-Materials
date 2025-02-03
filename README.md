# Memory Materials

[中文版](./README.zh-CN.md)

Memory Materials is the material library for **Memory LowCodeEditor**. This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Rollup Multi-Entry Bundling Configuration for Memory Materials

This configuration sets up Rollup for bundling the `Memory Materials` library with multiple entry points, supporting both UMD and ESM output formats. It also handles TypeScript, CSS, images, and generates TypeScript declaration files.

### Key Features

1. **Multi-Entry Bundling**: 
   - Recursively scans the `./src/materials` directory to gather all potential entry files (e.g., `index.tsx`, `index.ts`, `index.js`).
   - Excludes specified directories (e.g., `business`).

2. **Output Formats**:
   - **UMD**: For general usage in both browsers and Node.js environments.
   - **ESM**: For modern browsers and build tools.

3. **Common Configurations**:
   - Uses **TypeScript** plugin for transpiling `.tsx` and `.ts` files.
   - **PostCSS** plugin for handling Sass and autoprefixing.
   - **Babel** plugin for older browser support (e.g., IE11).
   - **Image Plugin** to handle image imports.

4. **TypeScript Declaration Files**:
   - Generates `.d.ts` files for TypeScript consumers.

5. **Clean Build Directory**:
   - Automatically deletes the `dist` directory before starting the build to ensure a clean output.

6. **Build Completion Logging**:
   - Tracks when all build tasks are completed and logs a success message.
