import { useState, useEffect } from 'react'
import TitleH2 from './TitleH2'
import InputField from './InputField'
import SelectField from './SelectField'
import FormEdit from './FormEdit'
import { isValidDate, isNumeric, isValidDuration } from '../utils/form'
import { TECHNICITE } from '../constants/resultat'

function ResultatForm({ resultats, setResultats, setAddResultat, edit }) {
  const [form, setForm] = useState({
    id: 0,
    date: '',
    nom: '',
    distance: '',
    denivele: '',
    temps: '',
    conditionDifficile: false,
    technicite: '',
    horsCalcul: false,
  })

  useEffect(() => {
    if (edit) {
      setForm(edit)
    }
  }, [edit])

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

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

    if (!form.technicite) newErrors.technicite = 'La technicité est obligatoire'

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
    setLoading(true)
    const validationErrors = validate()
    setErrors(validationErrors)
    if (!Object.keys(validationErrors).length) {
      let newResultats
      if (!form.id) {
        newResultats = [...resultats, { ...form, id: Date.now() }]
      } else {
        newResultats = resultats.map((r) =>
          r.id === form.id ? { ...r, ...form } : r,
        )
      }
      setResultats(newResultats)
      setAddResultat(false)
    }
    setLoading(false)
  }
  return (
    <div className="w-100 flex flex-col gap-4">
      <header className="pb-1 border-b-2 border-gray-200">
        <TitleH2 title="Ajouter un résultat" />
      </header>
      <FormEdit
        onsubmit={handleSubmit}
        btnvalidelibelle="Enregister"
        disabled={loading}
      >
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
        <SelectField
          label="Techinicité"
          name="technicite"
          value={form.technicite}
          onChange={handleChange}
          error={errors.technicite}
          options={TECHNICITE}
        />
        <InputField
          label="Condition difficile (météo, forme, terrain)"
          name="conditionDifficile"
          type="checkbox"
          checked={form.conditionDifficile}
          onChange={handleChange}
          error={errors.conditionDifficile}
        />
        <InputField
          label="Exclure du calcul"
          name="horsCalcul"
          type="checkbox"
          checked={form.horsCalcul}
          onChange={handleChange}
          error={errors.horsCalcul}
        />
      </FormEdit>
    </div>
  )
}
export default ResultatForm
