// import elementLocale from 'element-ui/lib/locale/lang/ko'

const files = require.context('.', false, /\.json$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  Object.assign(modules, files(key))
})

module.exports = {
  languageAbbr: 'KOR',
  ...modules,
  // ...elementLocale,
}
