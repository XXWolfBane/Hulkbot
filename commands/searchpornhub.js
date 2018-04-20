var pornhub = require('pornhub')

module.exports.run = (bot, message, args, discord) => {
  let [searchargs, tagargs] = args;
  pornhub.search({ search: searchargs, tags: [tagargs]}, (err, results) => {
    if (err) console.error(err)
    console.log(results)
  })
}
