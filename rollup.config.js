import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import fs from 'fs';
import path from 'path';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'rollup';

// 递归扫描目录，获取所有文件
function getAllFiles(srcpath) {
    const files = [];
    const scanDir = dir => {
        const filesInDir = fs.readdirSync(dir);
        filesInDir.forEach(file => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                scanDir(filePath);
            } else {
                files.push(filePath);
            }
        });
    };
    scanDir(srcpath);
    return files;
}

const getEntryConfig = (scanDir = './src/materials', ignoreFileDir = ['business']) => {
    let entryPoints = {};
    getAllFiles(scanDir).forEach(filePath => {
        const ext = path.extname(filePath).toLowerCase();
        const [, dirName] = filePath.split('/');

        if (ignoreFileDir.includes(dirName)) {
            console.warn('Ignoring directory:', dirName, filePath);
            return;
        }
        const basename = path.basename(filePath);
        const relativePath = path.relative('./src/materials', filePath);
        if (!fs.statSync(filePath).isDirectory()) {
            const [fileName] = basename.split('.');
            if (fileName === 'index' && ['.tsx', '.js', '.ts'].includes(ext)) {
                const entryName = relativePath.replace(/\.(tsx|ts|js)$/, '');
                entryPoints[entryName] = filePath;
            }
        }
    });
    return entryPoints;
};

const getCommonConfig = ({ inputKey, plugins = [], format = 'esm' }) => {
    const dir = format === 'esm' ? 'esm' : 'lib';
    return {
        external: [
            'react',
            'react-dom',
            'antd',
            'dayjs',
            'react/jsx-runtime',
            '@babel/runtime/helpers/defineProperty',
            '@babel/runtime/helpers/asyncToGenerator',
            '@babel/runtime/helpers/slicedToArray',
            '@babel/runtime/regenerator',
            '@babel/runtime/helpers/objectWithoutProperties'
        ],
        plugins: [
            image(),
            typescript({
                tsconfig: './tsconfig.build.json',
                useTsconfigDeclarationDir: true,
                check: false,
            }),
            postcss({
                extract: `${dir}/${inputKey}.css`,
            }),
            ...plugins,
        ],
    };
};

const genLibConfig = (inputKey) => {
    const commonConfig = getCommonConfig({
        inputKey,
        format: 'lib',
        plugins: [
            babel({
                babelHelpers: 'runtime',
                exclude: ['./node_modules/@fx/ajax/**'],
                extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: false,
                            targets: {
                                browsers: ['ie >= 11', 'chrome >= 49', 'ios >= 8', 'android >= 4.1'],
                                node: '8',
                            },
                        },
                    ],
                    '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-transform-runtime'],
            })
        ]
    });

    return {
        input: entryPoints[inputKey],
        output: {
            format: 'umd',
            name: 'ytShared',
            entryFileNames: `lib/${inputKey}.js`,
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                '@babel/runtime/helpers/defineProperty': '_defineProperty',
                'react/jsx-runtime': 'jsxRuntime',
                antd: 'antd',
                dayjs: 'dayjs',
                '@babel/runtime/helpers/asyncToGenerator': '_asyncToGenerator',
                '@babel/runtime/helpers/slicedToArray': '_slicedToArray',
                '@babel/runtime/regenerator': '_regeneratorRuntime',
                '@babel/runtime/helpers/objectWithoutProperties': '_objectWithoutProperties'
            },
            dir: 'dist',
        },
        ...commonConfig,
    };
};

const genEsmConfig = (inputKey) => {
    const commonConfig = getCommonConfig({
        inputKey,
        format: 'esm',
    });
    return {
        input: entryPoints[inputKey],
        output: {
            format: 'esm',
            entryFileNames: `esm/${inputKey}.js`,
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                '@babel/runtime/helpers/defineProperty': '_defineProperty',
                'react/jsx-runtime': 'jsxRuntime',
                antd: 'antd',
                dayjs: 'dayjs',
                '@babel/runtime/helpers/asyncToGenerator': '_asyncToGenerator',
                '@babel/runtime/helpers/slicedToArray': '_slicedToArray',
                '@babel/runtime/regenerator': '_regeneratorRuntime',
                '@babel/runtime/helpers/objectWithoutProperties': '_objectWithoutProperties'
            },
            dir: 'dist',
        },
        ...commonConfig,
    };
};

const genDtsConfig = (inputKey) => {
    return {
        input: entryPoints[inputKey],
        output: [
            {
                format: 'es',
                entryFileNames: `lib/${inputKey}.d.ts`,
                dir: 'dist',
            },
            {
                format: 'es',
                entryFileNames: `esm/${inputKey}.d.ts`,
                dir: 'dist',
            }
        ],
        external: ['react', 'react-dom', 'antd', 'dayjs', 'react/jsx-runtime', '@babel/runtime/helpers/defineProperty'],
        plugins: [
            // resolve(),
            dts(),
            // babel({
            //     babelHelpers: 'bundled',
            //     presets: ['@babel/preset-react', '@babel/preset-typescript'],
            //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
            // })
        ],
    };
};

function deleteDistDirectory() {
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
        console.log('"dist" directory is being deleted');
        fs.rmSync(distPath, { recursive: true });
        console.log('"dist" directory has been deleted');
    } else {
        console.log('"dist" directory does not exist');
    }
}

deleteDistDirectory();
const entryPoints = getEntryConfig();

const outputs = Object.keys(entryPoints).flatMap((inputKey) => {
    return [
        genLibConfig(inputKey),
        genEsmConfig(inputKey),
        genDtsConfig(inputKey),
    ];
}).filter(Boolean);

let buildCount = 0;
const totalBuilds = outputs.length + 12;


export default defineConfig(outputs.map(config => ({
    ...config,
    plugins: [
        ...(config.plugins || []),
        {
            name: 'build-success-plugin',
            writeBundle() {
                buildCount += 1;
                if (buildCount === totalBuilds) {
                    console.log('🎉🎉🎉 所有打包任务完成');
                }
            }
        }
    ]
})));
