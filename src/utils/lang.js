export const getSystemLangs = () => {
  const messages = {}
  _.forIn(SystemLangs, (requireDirs, lang) => {
    messages[lang] = {}
    requireDirs.forEach(requireDir => {
      _.set(messages[lang], requireDir.replace(/\//g, '.'), require('~langs/' + lang + '/' + requireDir).default)
    })
  })
  return messages
}
