const _ = require('lodash')
const SftpUpload = require('sftp-upload')
const fs = require('fs')
const env = require('./.env')

const options = _.assign(env.gitFtp, {
  path: __dirname + '/dist'
})

const sftp = new SftpUpload(options)

sftp.on('error', err => {
  throw err
}).on('uploading', progress => {
  console.log('Uploading', progress.file);
  console.log(progress.percent+'% completed')
}).on('completed', () => {
  console.log('Upload Completed')
}).upload()
