import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss' //提取组件css文件
import fs from 'fs'
import path from 'path'
import dts from 'rollup-plugin-dts' //生成组件的index.d.ts文件
import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'
import {
    babel
} from '@rollup/plugin-babel'

// 递归扫描目录，获取所有文件
function getAllFiles(srcpath) {
    const files = []
    const scanDir = dir => {
        const filesInDir = fs.readdirSync(dir)
        filesInDir.forEach(file => {
            const filePath = path.join(dir, file)
            if (fs.statSync(filePath).isDirectory()) {
                scanDir(filePath)
            } else {
                files.push(filePath)
            }
        })
    }
    scanDir(srcpath)
    return files
}



const getEntryConfig = (scanDir = './src', ignoreFileDir = ['business']) => {
    let entryPoints = {}
    getAllFiles(scanDir).forEach(filePath => {
        const ext = path.extname(filePath).toLowerCase()
        const [, dirName] = filePath.split('/')

        if (ignoreFileDir.includes(dirName)) {
            console.warn('entryPoints', entryPoints, dirName, filePath)

            return
        }
        const basename = path.basename(filePath)
        const relativePath = path.relative('./src', filePath)
        if (fs.statSync(filePath).isDirectory()) {
            return
        } else {
            const [fileName] = basename.split('.')

            if (fileName === 'index' && ['.tsx', '.js', '.ts'].includes(ext)) {
                const entryName = relativePath.replace(/\.(tsx|ts|js)$/, '')
                entryPoints[entryName] = filePath
            }
        }
    })

    return entryPoints
}

const getCommonConfig = ({
    inputKey,
    plugins = [],
    format = 'ems'
}) => {
    const dir = format === 'esm' ? 'esm' : 'lib'

    const commonConfig = {
        external: ['react', 'react-dom', 'antd', 'react/jsx-runtime'],
        plugins: [
            // alias({
            //     entries: [
            //         {
            //             find: '@',
            //             replacement: path.resolve('./src/')
            //         },
            //     ]
            // }),
            image(),
            typescript({
                tsconfig: './tsconfig.build.json',
                useTsconfigDeclarationDir: true,
                check: false, // 禁用类型检查
            }),
            postcss({
                // modules: true,
                // extract: true,
                extract: `${dir}/${inputKey}.css`,
            }),
            ...plugins,
        ],
    }
    return commonConfig
}

const genlibConfig = (inputKey) => {

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
                    '@babel/preset-flow',
                    '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-transform-runtime'],
            })
        ]
    })

    return {
        input: entryPoints[inputKey],
        output: {
            format: 'umd',
            name: 'ytShared',
            entryFileNames: `lib/${inputKey}.js`,
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
            },
            dir: 'dist',
        },
        ...commonConfig,
    }

}

const genEsmConfig = (inputKey) => {

    const commonConfig = getCommonConfig({
        inputKey,
        format: 'esm',
    })
    return {
        input: entryPoints[inputKey],
        output: {
            format: 'esm',
            entryFileNames: `esm/${inputKey}.js`,
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
            },
            dir: 'dist',
        },
        ...commonConfig,
    }

}

const genDtsConfig = (inputKey) => {
    const config = {
        input: entryPoints[inputKey],
        output: [{
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
        external: ['react', 'react-dom', 'antd'], // 告诉 Rollup 将 React 视为外部依赖
        plugins: [
            dts(),
            // image(),
            alias({
                entries: [{
                    find: '@',
                    replacement: path.resolve('./src/')
                }, ]
            }),
            // typescript(),
            // postcss({
            //   modules: true,
            //   extract: `esm/${inputKey}.css`,
            // }),
        ],
    }
    return config
}

function deleteDistDirectory() {
    const distPath = path.join(process.cwd(), 'dist')
    if (fs.existsSync(distPath)) {
        console.log('"dist" 目录开始删除')

        fs.rmSync(distPath, {
            recursive: true
        })
        console.log('"dist" 目录已删除')
    } else {
        console.log('当前目录下不存在 "dist" 目录')
    }

}
deleteDistDirectory()
const entryPoints = getEntryConfig()

const outputs = Object.keys(entryPoints).flatMap((inputKey) => {
    return [
        // genlibConfig(inputKey),
        // genEsmConfig(inputKey),
        genDtsConfig(inputKey),
    ]
}).filter(Boolean)


export default outputs