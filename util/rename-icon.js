var fs = require('fs')

fs.rename('lib/fontawesome/svgs/brands/font-awesome.svg', 'lib/fontawesome/svgs/brands/font-awesome.xyz', function (err) {
  if (err) throw err
})
