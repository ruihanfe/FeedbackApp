// keys.js - figure out what set of credentials to return
//mongodb+srv://FeedBackRoot:<password>@feedbackemails-ah4bv.mongodb.net/test?retryWrites=true&w=majority
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
