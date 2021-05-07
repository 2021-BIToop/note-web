export function setTocken(form) {
  for (let item in form) {
    localStorage.setItem(item.toString(), form[item])
  }
}

export function removeTocken(keys) {
  for (let key of keys) {
    localStorage.removeItem(key)
  }
}

export function getTocken(key) {
  let value = localStorage.getItem(key.toString())
  return value === undefined || value === null
    ? ""
    : localStorage.getItem(key.toString())
}
