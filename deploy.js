var ghpages = require('gh-pages')

ghpages.publish('dist', {
    remote: 'github'
}, function(err) {})