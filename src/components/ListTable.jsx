function ListTable({ children, header }) {
  return (
    <ul className="border-t border-gray-200">
      <li className="flex gap-4 py-3 border-b border-gray-200 text-slate-400 font-medium text-sm">
        {header.map((h, index) => (
          <span key={index} className={h.class}>
            {h.libelle}
          </span>
        ))}
      </li>
      {children}
    </ul>
  )
}
export default ListTable
