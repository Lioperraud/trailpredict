function InputSearch({ search, onchange, placeholder }) {
  return (
    <div className="relative w-64">
      <input
        type="text"
        value={search}
        onChange={onchange}
        placeholder={placeholder}
        className="bg-white rounded-lg py-1 pr-10 pl-2 border-gray-200 border w-full outline-indigo-300"
      />
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
        />
      </svg>
    </div>
  )
}
export default InputSearch
