const storage = require('node-persist')

storage.init().then(() => {
  storage.setItem('filter', 'false')
})
