# Memory Materials

[中文](./README.zh-CN.md)

## 🌟 Introduction
Memory Materials is the **material library** for **Memory LowCodeEditor**. This template provides a minimal setup to enable React to work with Vite, including HMR (Hot Module Replacement) and some ESLint rules.
   
## ✨ Usage Documentation
```javascript
npm i @cusmoedge/lowcode-materials
```

## 🚀 Development Documentation
### Install Memory CLI
``` javascript
npm install @cusmoedge/memory-cli -g
```

### Generate Material Template
``` javascript
memory create [materialName]
```

### Material Types
``` javascript
// Material types
type MaterialType = 'unit' | 'area' | 'special'

// unit ---- Unit-level materials, such as Button, Input
// area ---- Area-level materials, such as Page, Container
// special ---- Special materials, such as FormItem, which can only be used inside a Form
```

### Material Configuration
``` typescript
// A material will generate both dev and prod configurations for the editing and preview environments
MaterialConfig = {
    name: "test",  // Component name
    defaultProps: {},  // Default properties, can be configured as needed
    setter: [],  // Setters, can be added if needed
    desc: "test component description",  // Description of the component, displayed in the material library
    stylesSetter: [],  // Style setters, can be added if needed
    dev: {},  // Development environment configuration, can be added as needed
    prod: {},  // Production environment configuration, can be added as needed
    events: [],  // Events, specific event objects can be added
    methods: []  // Methods, specific component methods can be added
}
```

### Register Materials
```typescript
// src/materials/index.ts
MaterialConfigs: {
        Container: ContainerConfig,
        Button: ButtonConfig,
        Page: PageConfig,
        Modal: ModalConfig,
        Table: TableConfig,
        TableColumn: TableColumnConfig,
        Form: FormConfig,
        FormItem: FormItemConfig,
        new: newConfig
    }
```

## 📦 Rollup Multi-Entry Build Configuration - Memory Materials

This configuration is for multi-entry bundling of the Memory Materials library. It supports UMD and ESM output formats. It also handles TypeScript, CSS, images, and generates TypeScript declaration files.

### Key Features

1. **Multi-Entry Bundling**： 
   - Recursively scan the `./src/materials` directory to collect all potential entry files (e.g., `index.tsx`, `index.ts`, `index.js`).
   - Exclude specified directories (e.g., `business`).

2. **Output Formats:**：
   - **UMD**：A universal format for both browser and Node.js environments.
   - **ESM**：A format for modern browsers and build tools.

3. **Common Configuration**：
   - Use the **TypeScript** plugin to transpile `.tsx` and `.ts` files.
   - Use the **PostCSS** plugin to handle Sass and auto-prefixing.
   - Use the **Babel** plugin to ensure compatibility with older browsers (e.g., IE11).
   - Use the **Image** plugin to handle image imports.

4. **TypeScript Declaration Files**：
   - Generate `.d.ts` files for TypeScript users.

5. **Clean Build Directory:**：
   - Automatically delete the `dist` directory before starting the build to ensure a clean output.

6. **Build Completion Log**：
   - Track the completion of all bundling tasks and print a success message when all tasks are finished.
