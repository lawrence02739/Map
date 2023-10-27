const path = require('path');
const fs = require('fs');
require('dotenv').config();
const basePath = process.env.BASE_FILE_PATH;
//const basePath = process.cwd();

const serverBasePath = process.env.SERVER_FILE_PATH;

function FilePathGenerator(containerName, fileName){
    try {
        
        if(containerName === null || '' || undefined){
            throw new Error('Invalid Container Name');
        }
        if(fileName === null || '' || undefined){
            throw new Error('Invalid File Name');
        }

        var serverPath = serverBasePath + containerName +'/'+ fileName;
        var strPath = path.join(basePath, containerName, fileName);
        var normalize = path.normalize(strPath);

        return {
            path : normalize,
            url: serverPath
        };
        
    } catch (error) {
        return error;
    }
}

function ConatinerPath(containerName){
    try {        
        if(containerName === null || '' || undefined){
            throw new Error('Invalid Container Name');
        }

        var serverPath = serverBasePath + containerName;

        var strPath = path.join(basePath, containerName);
        var normalize = path.normalize(strPath);

        return {
            path : normalize,
            url : serverPath
        };
        
    } catch (error) {
        return error;
    }
}

function FilePath(basePathwithCont, fileName){
    try {       
        if(basePathwithCont === null || undefined){
            throw new Error('Invalid Container Path');
        }
        if(fileName === null || '' || undefined){
            throw new Error('Invalid File Name');
        }
        var serverPath = basePathwithCont.url +'/'+ fileName;
        var strPath = path.join(basePathwithCont.path, fileName);
        var normalize = path.normalize(strPath);
        return {
            path : normalize,
            url : serverPath
        };
    } catch (error) {
        return error;
    }
}

module.exports = {
    filePathGenerator : FilePathGenerator,
    conatinerPath: ConatinerPath,
    filePath: FilePath,    
};