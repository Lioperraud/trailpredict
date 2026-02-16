import { timeToSeconds } from '../utils/date'

export function scoreTrail(temps, kmEffort) {
  //return Math.round(timeToSeconds('2:00:00') / 42)
  //return Math.round(timeToSeconds('5:00:00') / 42)
  //return Math.round(timeToSeconds('8:00:00') / 42)
  //return 100
  /*
  const temps = '7:27:00'
  const kmEffort = 77
  */

  const bestPerformance = timeToSeconds('2:00:00') / 42
  const badPerformance = timeToSeconds('8:00:00') / 42
  const valeurSecond = 100 / (badPerformance - bestPerformance)

  const MyPerformance = timeToSeconds(temps) / kmEffort
  const scoreMyPerformance =
    100 - (MyPerformance - bestPerformance) * valeurSecond

  const scoreMyPerformanceArrondi = Number(scoreMyPerformance.toFixed(2))
  return scoreMyPerformanceArrondi
}
