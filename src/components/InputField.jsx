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
  bg-white rounded-lg border outline-gray-600
  ${error ? 'border-red-700' : 'border-gray-200'}
  ${type === 'checkbox' ? 'w-5 p-0 h-5' : 'w-full py-3 px-4'}
`
  const labelClass = `text-primary font-medium ${
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
