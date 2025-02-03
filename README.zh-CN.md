# Memory Materials

Memory Materials 是 **Memory LowCodeEditor** 的物料库。该模板提供了一个最小化的设置，使 React 能在 Vite 中工作，并带有 HMR 和一些 ESLint 规则。

## Rollup 多入口打包配置 - Memory Materials

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
