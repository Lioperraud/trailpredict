import { useMatch } from 'react-router-dom'

function MenuItem({ to, libelle, Icon }) {
  const match = useMatch(to)
  const icoClass = `
        rounded-lg p-2 transition delay-150 duration-200 ease-in
        ${match ? 'bg-primary' : 'bg-white'}
      `
  const svgClass = `w-6 h-auto transition delay-150 duration-200 ease-in
        ${match ? 'fill-white' : 'fill-primary'}
      `
  return (
    <>
      <span className={icoClass}>
        <Icon className={svgClass} />
      </span>
      {libelle}
    </>
  )
}
export default MenuItem
