import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/materials/index.ts', // 入口文件
    output: [
        {
            file: 'dist/lib/index.cjs.js', // CommonJS 格式
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/es/index.esm.js', // ES Module 格式
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.build.json',
            useTsconfigDeclarationDir: true,
            check: false, // 禁用类型检查
        }),
        postcss(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-typescript'],
        }),
        terser(),
    ],
    external: ['react', 'react-dom', 'antd'], 
};
