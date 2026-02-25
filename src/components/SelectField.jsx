function SelectField({ label, name, value, onChange, error, options }) {
  const selectClass = `
  bg-white rounded-lg border outline-gray-600 w-full py-3 px-2 text-sm xl:text-base
  ${error ? 'border-red-700' : 'border-gray-200'}`

  const labelClass = `text-primary font-medium text-sm xl:text-base ${
    error ? 'text-red-700' : 'text-primary'
  }`
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className={labelClass}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={selectClass}
      >
        <option value="">-- Choix --</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-700 font-medium italic">{error}</p>}
    </div>
  )
}
export default SelectField
