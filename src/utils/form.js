export function isValidDate(dateStr) {
  const date = new Date(dateStr)
  return !isNaN(date.getTime())
}
export function isNumeric(value) {
  return value !== '' && !isNaN(value)
}
export function isValidDuration(timeStr) {
  const regex = /^\d+:[0-5]\d:[0-5]\d$/
  return regex.test(timeStr)
}
