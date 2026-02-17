import { timeToHours, hoursToTimeStr } from '../utils/date'

const caulcul_var_a = 130
const caulcul_var_b = 45
const caulcul_var_c = 420

const techniciteCoeff = {
  1: 1.0,
  2: 1.05,
  3: 1.12,
}

const conditionDifficileCoeff = 1.06

export function scoreTrail(
  distance,
  denivele,
  temps,
  technicite,
  conditionDifficile,
) {
  const V = distance / timeToHours(temps)

  const difficultyFactor = denivele / distance // m/km

  // Index brut
  let index =
    caulcul_var_a * Math.log(V) -
    caulcul_var_b * Math.log(difficultyFactor) +
    caulcul_var_c

  const techMultiplier = techniciteCoeff[technicite] || 1.0

  // --- Conditions difficiles ---
  const conditionMultiplier = conditionDifficile ? conditionDifficileCoeff : 1.0

  // Index final
  index = index * techMultiplier * conditionMultiplier

  return Math.round(index)
}
export function predictTime(
  indice,
  distance,
  denivele,
  technicite = 1,
  conditionDifficile = false,
) {
  const difficultyFactor = denivele / distance

  const techMultiplier = techniciteCoeff[technicite] || 1.0
  const conditionMultiplier = conditionDifficile ? conditionDifficileCoeff : 1.0

  const M = techMultiplier * conditionMultiplier

  // Vitesse estimée
  const V = Math.exp(
    (indice / M + caulcul_var_b * Math.log(difficultyFactor) - caulcul_var_c) /
      caulcul_var_a,
  )

  // Temps en heures
  const timeHours = distance / V

  return hoursToTimeStr(timeHours)
}
