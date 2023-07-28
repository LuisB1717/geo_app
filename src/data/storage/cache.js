const storageKey = 'country-cache'

function getStorage() {
  const item = localStorage.getItem(storageKey)
  return item ? JSON.parse(item) : {}
}

function saveStorage(map) {
  const value = JSON.stringify(map)
  localStorage.setItem(storageKey, value)
}

export function getImage(countryCode) {
  const map = getStorage()
  return map[countryCode]
}

export function saveImage(countryCode, value) {
  const map = getStorage()
  map[countryCode] = value
  saveStorage(map)
}