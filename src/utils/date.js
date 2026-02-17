export function timeToSeconds(time) {
  const [h, m, s] = time.split(':').map(Number)
  return h * 3600 + m * 60 + s
}
export function timeToHours(timeStr) {
  const [h, m, s] = timeStr.split(':').map(Number)
  return h + m / 60 + s / 3600
}
export function hoursToTimeStr(hours) {
  const h = Math.floor(hours)
  const m = Math.floor((hours - h) * 60)
  const s = Math.round(((hours - h) * 60 - m) * 60)

  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
    .toString()
    .padStart(2, '0')}`
}
