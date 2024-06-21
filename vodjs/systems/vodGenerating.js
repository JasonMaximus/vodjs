/**
 * vod.js
 * 
 * (C) Callv Group 2024
 */

'use strict'

const fs        = require("fs");
const path      = require("path");
const { exec }  = require("child_process");

class vodGenerating {

    constructor(param) {
        if (typeof param.generating !== "undefined" && param.generating === true) {
            this.startGenerate();
        }
    }

    startGenerate() {
        console.log(`[Vod] Generating: Starting generation process...`);
        this.generateDotFile();
    }

    generateDotFile() {
        console.log(`[Vod] Generating: Generating configuration files...`);

        const dotEnv = path.join(__dirname, "./data", "dotEnv.txt");
        const dotHtaccess = path.join(__dirname, "./data", "dotHtaccess.txt");

        fs.readFile(dotEnv, "utf8", (errRead, content) => {
            if (errRead) {
                console.error(`[Vod] Error: Failed to load content to generate '.env' file`);
                return;
            }
            console.log(`[Vod] Generating: Contents of the '.env' file loaded successfully`);

            const targetEnvPath = path.join(require.main.path, ".env");

            fs.readFile(targetEnvPath, "utf8", (errCheck, currentContent) => {
                if (errCheck || !currentContent.trim()) {
                    fs.writeFile(targetEnvPath, content, "utf8", (errWrite) => {
                        if (errWrite) {
                            console.error(`[Vod] Error: Failed to generate '.env' file`);
                        } else {
                            console.log(`[Vod] Generating: '.env' file successfully generated`);
                        }
                    });
                } else {
                    console.log(`[Vod] Info: '.env' file already exists and is not empty`);
                }
            });
        });

        fs.readFile(dotHtaccess, "utf8", (errRead, content) => {
            if (errRead) {
                console.error(`[Vod] Error: Failed to load content to generate '.htaccess' file`);
                return;
            }
            console.log(`[Vod] Generating: Contents of the '.htaccess' file loaded successfully`);

            const targetHtaccessPath = path.join(require.main.path, ".htaccess");

            fs.readFile(targetHtaccessPath, "utf8", (errCheck, currentContent) => {
                if (errCheck || !currentContent.trim()) {
                    fs.writeFile(targetHtaccessPath, content, "utf8", (errWrite) => {
                        if (errWrite) {
                            console.error(`[Vod] Error: Failed to generate '.htaccess' file`);
                        } else {
                            console.log(`[Vod] Generating: '.htaccess' file successfully generated`);
                        }
                    });
                } else {
                    console.log(`[Vod] Info: '.htaccess' file already exists and is not empty`);
                }
            });
        });

        this.generateFolderStructure();
    }

    generateFolderStructure() {
        console.log(`[Vod] Generating: Generating folder structure...`);

        const folders = [
            { name: 'controllers', files: [{ name: 'myController.js', source: 'fileMyController.txt' }] },
            { name: 'models', files: [{ name: 'myModel.js', source: 'fileMyModel.txt' }] },
            { name: 'views', files: [{ name: 'index.ejs', source: 'fileIndexEjs.txt' }] }
        ];

        const files = [
            { name: 'routes.js', source: 'fileRoute.txt' }
        ];

        const appPath = path.join(require.main.path, 'apps');

        if (!fs.existsSync(appPath)) {
            fs.mkdirSync(appPath);
            console.log(`[Vod] Generating: Created folder 'apps'`);
        } else {
            console.log(`[Vod] Info: Folder 'apps' already exists`);
        }

        folders.forEach(folder => {
            const folderPath = path.join(appPath, folder.name);

            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
                console.log(`[Vod] Generating: Created folder '${folder.name}'`);
            } else {
                console.log(`[Vod] Info: Folder '${folder.name}' already exists`);
            }

            folder.files.forEach(file => {
                const filePath = path.join(folderPath, file.name);
                const sourcePath = path.join(__dirname, './data', file.source);

                fs.readFile(sourcePath, 'utf8', (errRead, content) => {
                    if (errRead) {
                        console.error(`[Vod] Error: Failed to load content to generate '${file.name}' file`);
                        return;
                    }
                    console.log(`[Vod] Generating: Contents of '${file.name}' loaded successfully`);

                    fs.writeFile(filePath, content, 'utf8', (errWrite) => {
                        if (errWrite) {
                            console.error(`[Vod] Error: Failed to generate '${file.name}' file`);
                        } else {
                            console.log(`[Vod] Generating: '${file.name}' file successfully generated`);
                        }
                    });
                });
            });
        });

        files.forEach(file => {
            const filePath = path.join(appPath, file.name);
            const sourcePath = path.join(__dirname, './data', file.source);

            fs.readFile(sourcePath, 'utf8', (errRead, content) => {
                if (errRead) {
                    console.error(`[Vod] Error: Failed to load content to generate '${file.name}' file`);
                    return;
                }
                console.log(`[Vod] Generating: Contents of '${file.name}' loaded successfully`);

                fs.writeFile(filePath, content, 'utf8', (errWrite) => {
                    if (errWrite) {
                        console.error(`[Vod] Error: Failed to generate '${file.name}' file`);
                    } else {
                        console.log(`[Vod] Generating: '${file.name}' file successfully generated`);
                    }
                });
            });
        });

        console.log(`[Vod] Generating: Folder structure generation completed`);
    }

}

module.exports = vodGenerating;