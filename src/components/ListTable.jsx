function ListTable({ children, header, onclickheader, ordre }) {
  return (
    <ul className="w-full">
      <li className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-secondary font-medium uppercase text-xs">
        {header.map((h, index) => (
          <span
            key={index}
            className={`cursor-pointer flex gap-2 col-span-${h.cs}${h.right ? ' justify-end' : ''}`}
            onClick={() => onclickheader(h.name)}
          >
            {h.libelle}
            {ordre.champ == h.name && ordre.desc && (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-auto"
              >
                <path d="M0 15c0 0.128 0.049 0.256 0.146 0.354 0.195 0.195 0.512 0.195 0.707 0l8.646-8.646 8.646 8.646c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-9-9c-0.195-0.195-0.512-0.195-0.707 0l-9 9c-0.098 0.098-0.146 0.226-0.146 0.354z"></path>
              </svg>
            )}
            {ordre.champ == h.name && !ordre.desc && (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-auto"
              >
                <path d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"></path>
              </svg>
            )}
          </span>
        ))}
      </li>
      {children}
    </ul>
  )
}
export default ListTable
