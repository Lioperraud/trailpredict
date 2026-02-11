import { useState } from 'react'
import TitleH2 from './TitleH2'
import InputField from './InputField'
import FormEdit from './FormEdit'

function ResultatAdd() {
  const [form, setForm] = useState({
    date: '',
    nom: '',
    distance: '',
    denivele: '',
    temps: '',
  })
  const [errors, setErrors] = useState({})

  const isValidDate = (dateStr) => {
    const date = new Date(dateStr)
    return !isNaN(date.getTime())
  }
  const isNumeric = (value) => {
    return value !== '' && !isNaN(value)
  }
  const isValidDuration = (timeStr) => {
    const regex = /^\d+:[0-5]\d:[0-5]\d$/
    return regex.test(timeStr)
  }

  const validate = () => {
    const newErrors = {}
    if (!form.date) newErrors.date = 'La date est obligatoire'
    else if (!isValidDate(form.date))
      newErrors.date = 'La date est dans un format invalide'

    if (!form.nom) newErrors.nom = 'Le nom est obligatoire'

    if (!form.distance) newErrors.distance = 'La distance est obligatoire'
    else if (!isNumeric(form.distance))
      newErrors.distance = 'La distance doit être un numérique'

    if (!form.denivele) newErrors.denivele = 'Le dénivelé est obligatoire'
    else if (!isNumeric(form.denivele))
      newErrors.denivele = 'Le dénivelé doit être un numérique'
    if (!form.temps) newErrors.temps = 'Le temps est obligatoire'
    else if (!isValidDuration(form.temps))
      newErrors.temps = 'Le format doit être H:MM:SS'
    return newErrors
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (!Object.keys(validationErrors).length) console.log('Form OK')
  }
  return (
    <div className="w-100 flex flex-col gap-4">
      <header className="pb-1 border-b border-gray-200">
        <TitleH2 title="Ajouter un résultat" />
      </header>
      <FormEdit onsubmit={handleSubmit} btnvalidelibelle="Enregister">
        <InputField
          label="Date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          error={errors.date}
        />
        <InputField
          label="Nom"
          name="nom"
          value={form.nom}
          onChange={handleChange}
          error={errors.nom}
        />
        <InputField
          label="Distance (en km)"
          name="distance"
          value={form.distance}
          onChange={handleChange}
          error={errors.distance}
        />
        <InputField
          label="Dénivelé (en m)"
          name="denivele"
          value={form.denivele}
          onChange={handleChange}
          error={errors.denivele}
        />
        <InputField
          label="Temps (H:MM:SS)"
          name="temps"
          value={form.temps}
          onChange={handleChange}
          error={errors.temps}
        />
      </FormEdit>
    </div>
  )
}
export default ResultatAdd
