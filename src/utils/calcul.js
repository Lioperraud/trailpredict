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

export function estimateIndiceFromHistory(history, target) {
  if (!history || history.length === 0) return null
  if (typeof scoreTrail !== 'function')
    throw new Error('scoreTrail doit être fourni')

  // Filtre les courses valides
  const validHistory = history.filter((r) => !r.horsCalcul)

  // On enrichit history avec l'indice
  const historyWithIndice = validHistory.map((r) => ({
    ...r,
    indice: scoreTrail(
      Number(r.distance),
      Number(r.denivele),
      r.temps,
      Number(r.technicite),
      r.conditionDifficile,
    ),
  }))

  // Récupération des bornes pour normalisation
  const distances = historyWithIndice.map((c) => Number(c.distance))
  const deniveleArr = historyWithIndice.map((c) => Number(c.denivele))
  const techArr = historyWithIndice.map((c) => Number(c.technicite))

  const minD = Math.min(...distances)
  const maxD = Math.max(...distances)
  const minDen = Math.min(...deniveleArr)
  const maxDen = Math.max(...deniveleArr)
  const minTech = 1
  const maxTech = 3

  // Normalisation d’une course avec indice
  function normCourseWithIndice(c) {
    return {
      distance: (Number(c.distance) - minD) / (maxD - minD || 1),
      denivele: (Number(c.denivele) - minDen) / (maxDen - minDen || 1),
      technicite: (Number(c.technicite) - minTech) / (maxTech - minTech),
      indice: Number(c.indice),
    }
  }

  // Normalisation de la cible (sans indice)
  function normTarget(t) {
    return {
      distance: (Number(t.distance) - minD) / (maxD - minD || 1),
      denivele: (Number(t.denivele) - minDen) / (maxDen - minDen || 1),
      technicite: (Number(t.technicite) - minTech) / (maxTech - minTech),
    }
  }

  const historyN = historyWithIndice.map(normCourseWithIndice)
  const targetN = normTarget(target)

  // Pondérations (distance, dénivelé, technicité)
  const wd = 0.3
  const wden = 0.6
  const wt = 0.1

  // Calcul distance euclidienne pondérée
  const scored = historyN.map((c) => {
    const d =
      wd * (c.distance - targetN.distance) ** 2 +
      wden * (c.denivele - targetN.denivele) ** 2 +
      wt * (c.technicite - targetN.technicite) ** 2

    return { indice: c.indice, dist: Math.sqrt(d) }
  })

  // Récupère les k plus proches voisins
  const k = Math.min(5, scored.length)
  const nearest = scored.sort((a, b) => a.dist - b.dist).slice(0, k)

  // Moyenne pondérée inverse distance
  let sum = 0
  let weightSum = 0

  nearest.forEach((n) => {
    const w = 1 / (n.dist + 0.001) // éviter division par zéro
    sum += n.indice * w
    weightSum += w
  })

  return Math.round(sum / weightSum)
}
