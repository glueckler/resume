import $ from 'jquery'

// let's get dirty
var randoSites = [
  'http://deanglueckler.com/hi/',
  'https://hisimaginationn.com/',
  'http://deanglueckler.com/pp/',
  'http://funqmedia.com/ifbrv2/',
  'http://underscormusic.com/',
  'http://deanglueckler.com/pp/weather/index.html',
  'http://deanglueckler.com/pp/quotes/index.html',
  'http://deanglueckler.com/pp/wikipedia/index.html',
  'http://deanglueckler.com/pp/twitch/index.html',
]
var randomLink = document.querySelector('#random-link')

function openInNewTab(url) {
  var win = window.open(url, '_blank')
  win.focus()
}

randomLink.addEventListener('click', () => {
  const sitesLen = randoSites.length
  var ranIndex = (sitesLen + Math.floor(Math.random() * sitesLen)) % sitesLen
  openInNewTab(randoSites[ranIndex])
})
