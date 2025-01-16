import fs from 'fs/promises';
import path from 'path';

// 递归扫描目录，获取所有文件
async function getAllFiles(srcpath) {
    const files = [];
    const scanDir = async (dir) => {
        const filesInDir = await fs.readdir(dir);
        for (const file of filesInDir) {
            const filePath = path.join(dir, file);
            const stat = await fs.stat(filePath);
            if (stat.isDirectory()) {
                await scanDir(filePath);
            } else {
                files.push(filePath);
            }
        }
    };
    await scanDir(srcpath);
    return files;
}

// 扫描入口文件
async function getEntryConfig(scanDir = './src', ignoreFileDir = ['business']) {
    let entryPoints = {};
    const allFiles = await getAllFiles(scanDir);
    
    allFiles.forEach(filePath => {
        const ext = path.extname(filePath).toLowerCase();
        const [, dirName] = filePath.split('/');

        if (ignoreFileDir.includes(dirName)) {
            console.warn('Ignoring directory:', dirName);
            return;
        }

        const basename = path.basename(filePath);
        const relativePath = path.relative('./src', filePath);
        
        if (fs.statSync(filePath).isDirectory()) {
            return;
        } else {
            const [fileName] = basename.split('.');

            if (fileName === 'index' && ['.tsx', '.js', '.ts'].includes(ext)) {
                const entryName = relativePath.replace(/\.(tsx|ts|js)$/, '');
                entryPoints[entryName] = filePath;
            }
        }
    });

    return entryPoints;
}

await getEntryConfig()