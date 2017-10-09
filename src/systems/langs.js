const path = require('path')
const glob = require('glob')

const exportObject = {}

let dirLangs = path.resolve(__dirname, './../langs')
dirLangs = dirLangs.replace(/\\/g, '/')

const regDirLangs = new RegExp(dirLangs + '/(.*)/')

let langFolders = glob.sync(dirLangs + '/*/')
let langFiles = [], folderName, fileName, fileNameSplit, regDirFile, 
regDirLangResult, regDirFileResult, fileValueObject, prepareAssignObject

langFolders.forEach(langFolderDir => {
  regDirLangResult = regDirLangs.exec(langFolderDir)

  if (regDirLangResult !== null && regDirLangResult.length === 2) {
    folderName = regDirLangResult[1]
    exportObject[folderName] = [] // set the match string as property, in this case, language. Ex. en, th

    langFiles = glob.sync(langFolderDir + '/**/*.js')
    langFiles.forEach(langFileDir => {

      regDirFile = new RegExp(langFolderDir + '(.*).js')
      regDirFileResult = regDirFile.exec(langFileDir)

      if (regDirFileResult !== null && regDirFileResult.length === 2) {
        fileName = regDirFileResult[1]
        exportObject[folderName].push(fileName)
      }

    })
  }

})

module.exports = exportObject
