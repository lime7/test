'use strict'

import './sass/style.scss'
import './js/main.js'

if (process.env.NODE_ENV === 'development') {
  require('./index.html')
  require('./signup.html')
  require('./registration-contractror-individual.html')
  require('./registration-contractror-company.html')
  require('./registration-employer.html')
  require('./registration-complete.html')
  require('./create-account.html')
  require('./profile.html')
  require('./tenders.html')
}

console.log('%c%s', 'color: orangered;', 'S>>>> index.js')
