'use strict'

import './sass/style.scss'
import './js/main.js'

if (process.env.NODE_ENV === 'development') {
  require('./index.html')
}

console.log('%c%s', 'color: orangered;', 'S>>>> index.js')
