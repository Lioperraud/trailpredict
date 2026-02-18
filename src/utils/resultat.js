export function getResultats() {
  const saved = localStorage.getItem('resultats')
  const resultats = saved ? JSON.parse(saved) : []
  return resultats
}
