function InputField({
  label,
  name,
  value,
  onChange,
  error = false,
  type = 'text',
  checked = false,
}) {
  const inputClass = `
  bg-white rounded-lg border outline-gray-600 text-sm xl:text-base
  ${error ? 'border-red-700' : 'border-gray-200'}
  ${type === 'checkbox' ? 'p-0 w-4 xl:w-5 h-4 xl:h-5' : 'w-full py-2 xl:py-3 px-3 xl:px-4'}
`
  const labelClass = `text-primary font-medium text-sm xl:text-base ${
    error ? 'text-red-700' : 'text-primary'
  }`

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className={labelClass}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClass}
        checked={checked}
      />
      {error && <p className="text-red-700 font-medium italic">{error}</p>}
    </div>
  )
}

export default InputField
