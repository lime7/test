'use strict'

import './sass/style.scss'
import './js/main.js'

if (process.env.NODE_ENV === 'development') {
  require('./index.html')
  require('./authorization/signup.html')
  require('./authorization/registration-contractror-individual.html')
  require('./authorization/registration-contractror-company.html')
  require('./authorization/registration-employer.html')
  require('./authorization/registration-complete.html')
  require('./authorization/create-account.html')
  require('./authorization/reset-password.html')
  require('./contractor-view/profile.html')
  require('./contractor-view/bids.html')
  require('./contractor-view/bids-submit.html')
  require('./contractor-view/bids-view.html')
  require('./contractor-view/search-tenders.html')
  require('./contractor-view/search-tenders-results.html')
  require('./contractor-view/inbox-messages.html')
  require('./contractor-view/notifications.html')
  require('./contractor-view/notifications-settings.html')
  require('./contractor-view/password.html')
  require('./contractor-view/email.html')
}

console.log('%c%s', 'color: orangered;', 'S>>>> index.js')
