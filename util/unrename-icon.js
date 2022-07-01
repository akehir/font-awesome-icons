var fs = require('fs')

fs.rename('lib/fontawesome/svgs/brands/font-awesome.xyz', 'lib/fontawesome/svgs/brands/font-awesome.svg', function (err) {
  if (err) throw err
})
