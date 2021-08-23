'use strict'

console.log('S>>>')
// eslint-disable-next-line import/first
// import bootstrap from 'bootstrap'
// eslint-disable-next-line import/first
import Collapse from 'bootstrap/js/dist/collapse'
// eslint-disable-next-line import/first
import Dropdown from 'bootstrap/js/dist/dropdown'
// eslint-disable-next-line import/first
import Modal from 'bootstrap/js/dist/modal'
// eslint-disable-next-line import/first
import Button from 'bootstrap/js/dist/button'
// eslint-disable-next-line import/first
import Offcanvas from 'bootstrap/js/dist/offcanvas'
// eslint-disable-next-line import/first
import Tooltip from 'bootstrap/js/dist/tooltip'
// eslint-disable-next-line import/first
import flatpickr from 'flatpickr'
// eslint-disable-next-line import/first
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate'

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  // eslint-disable-next-line no-undef
  return new Tooltip(tooltipTriggerEl)
})

flatpickr('.flatpickr', {
  mode: 'range',
  dateFormat: 'Y-m-d',
  monthSelectorType: 'static',
  yearSelectorType: 'static',
  locale: {
    weekdays: {
      shorthand: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    }
  },
  nextArrow: '<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.814L5.2 6.657L1 1.5" stroke="#213A5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  prevArrow: '<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2 11.814L1 6.657L5.2 1.5" stroke="#213A5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  onOpen: function (dateObj, dateStr) {
    this.element.closest('.calendar').classList.add('on')
  },
  onClose: function (dateObj, dateStr) {
    this.element.closest('.calendar').classList.remove('on')
  },
  // eslint-disable-next-line new-cap
  plugins: [new confirmDatePlugin({
    confirmText: 'Done',
    showAlways: true
  })]
})

// Custom Select
var x, i, j, l, ll, selElmnt, a, b, c, m, o
x = document.getElementsByClassName('custom-select')
l = x.length
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0]
  ll = selElmnt.length
  m = document.createElement('DIV')
  m.setAttribute('class', 'select-mask')
  x[i].appendChild(m)
  a = document.createElement('DIV')
  a.setAttribute('class', 'select-selected form-control')
  o = document.createElement('SPAN')
  o.setAttribute('class', 'select-placeholder')
  o.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
  a.appendChild(o)
  x[i].appendChild(a)
  b = document.createElement('DIV')
  b.setAttribute('class', 'select-items select-hide')
  for (j = 1; j < ll; j++) {
    c = document.createElement('DIV')
    c.innerHTML = selElmnt.options[j].innerHTML
    c.addEventListener('click', function (e) {
      var y, i, k, s, h, sl, yl
      s = this.parentNode.parentNode.getElementsByTagName('select')[0]
      sl = s.length
      h = this.parentNode.previousSibling
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML === this.innerHTML) {
          s.selectedIndex = i
          h.innerHTML = this.innerHTML
          y = this.parentNode.getElementsByClassName('same-as-selected')
          yl = y.length
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class')
          }
          this.setAttribute('class', 'same-as-selected')
          break
        }
      }
      h.click()
    })
    b.appendChild(c)
  }
  x[i].appendChild(b)
  a.addEventListener('click', function (e) {
    e.stopPropagation()
    closeAllSelect(this)
    this.nextSibling.classList.toggle('select-hide')
    this.classList.toggle('select-arrow-active')
    m.classList.toggle('select-mask-active')
  })
}
function closeAllSelect (elmnt) {
  // eslint-disable-next-line one-var
  var x, y, i, xl, yl, arrNo = []
  x = document.getElementsByClassName('select-items')
  y = document.getElementsByClassName('select-selected')
  xl = x.length
  yl = y.length
  for (i = 0; i < yl; i++) {
    if (elmnt === y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove('select-arrow-active')
      m.classList.remove('select-mask-active')
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide')
    }
  }
}
document.addEventListener('click', closeAllSelect)

// File Name
var files, lfiles, file, wrap, label
files = document.querySelectorAll('.file input[type="file"]')
lfiles = files.length
for (j = 0; j < lfiles; j++) {
  file = files[j]
  wrap = file.closest('.file')
  label = wrap.querySelector('.form-label')
  file.onchange = function () {
    label.innerHTML = this.files[0].name
  }
}

// eslint-disable-next-line import/first
import $ from 'jquery'
window.$ = window.jQuery = $
