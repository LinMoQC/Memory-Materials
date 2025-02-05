# Memory Materials

## 🌟 介绍
Memory Materials 是 **Memory LowCodeEditor** 的物料库。该模板提供了一个最小化的设置，使 React 能在 Vite 中工作，并带有 HMR 和一些 ESLint 规则。

## ✨ 使用文档
``` javascript
npm i @cusmoedge/lowcode-materials
```

## 🚀 开发文档

### 安装 Memory CLI
``` javascript
npm install @cusmoedge/memory-cli -g
```

### 生成物料模版
``` javascript
memory create [materialName]
```

### 物料类别
``` javascript
// 物料类型
type MaterialType = 'unit' | 'area' | 'special'

// unit ---- 单元级物料，如Button,Input
// area ---- 区域级物料，如Page,Container
// special ---- 特殊物料，如FormItem只能投放在Form内
```

### 物料配置
``` typescript
// 物料会生成dev和prod，用于编辑状态和预览状态
MaterialConfig = {
    name: "test",  // 组件名称
    defaultProps: {},  // 默认属性，可以根据需求进行配置
    setter: [],  // 设置器，如果有需要的设置器可以添加
    desc: "test 组件描述",  // 组件的描述，用于展示在物料库
    stylesSetter: [],  // 样式设置器，可以根据需求进行添加
    dev: {},  // 编辑环境配置，可以根据需要添加
    prod: {},  // 预览环境配置，可以根据需要添加
    events: [],  // 事件，可以添加具体的事件对象
    methods: []  // 方法，可以添加具体的组件方法
}
```

### 注册物料
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

## 📦 Rollup 多入口打包配置 - Memory Materials

该配置用于为 `Memory Materials` 库进行多入口打包，支持 UMD 和 ESM 输出格式。它还处理 TypeScript、CSS、图片，并生成 TypeScript 声明文件。

### 核心功能

1. **多入口打包**： 
   - 递归扫描 `./src/materials` 目录，收集所有可能的入口文件（如 `index.tsx`、`index.ts`、`index.js`）。
   - 排除指定的目录（如 `business`）。

2. **输出格式**：
   - **UMD**：适用于浏览器和 Node.js 环境的通用格式。
   - **ESM**：适用于现代浏览器和构建工具的格式。

3. **通用配置**：
   - 使用 **TypeScript** 插件转译 `.tsx` 和 `.ts` 文件。
   - **PostCSS** 插件处理 Sass 和自动加前缀。
   - **Babel** 插件支持向后兼容旧版浏览器（如 IE11）。
   - **图片插件** 处理图片导入。

4. **TypeScript 声明文件**：
   - 生成 `.d.ts` 文件供 TypeScript 使用者使用。

5. **清理构建目录**：
   - 在开始打包之前自动删除 `dist` 目录，确保输出目录干净。

6. **构建完成日志**：
   - 跟踪所有打包任务的完成状态，并在所有任务完成时打印成功信息。
