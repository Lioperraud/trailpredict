import InputField from './InputField'
import SelectField from './SelectField'
import ButtonSecondary from './ButtonSecondary'
import FormEdit from './FormEdit'
import { isNumeric } from '../utils/form'
import { useState, useEffect } from 'react'
import { TECHNICITE } from '../constants/resultat'

function PrevisionsForm({ myTrail, setMyTrail, predict }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(myTrail)
  useEffect(() => {
    setForm(myTrail)
  }, [myTrail])

  const [errors, setErrors] = useState({})
  const validate = () => {
    const newErrors = {}
    if (!form.distance) newErrors.distance = 'La distance est obligatoire'
    else if (!isNumeric(form.distance))
      newErrors.distance = 'La distance doit être un numérique'

    if (!form.denivele) newErrors.denivele = 'Le dénivelé est obligatoire'
    else if (!isNumeric(form.denivele))
      newErrors.denivele = 'Le dénivelé doit être un numérique'

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
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const validationErrors = validate()
    setErrors(validationErrors)
    if (!Object.keys(validationErrors).length) {
      setMyTrail(form)
    }
    setLoading(false)
  }
  const handleDelete = () => {
    setMyTrail({ distance: '', denivele: '', technicite: '' })
  }
  return (
    <>
      <FormEdit
        onsubmit={handleSubmit}
        btnvalidelibelle="Calculer"
        disabled={loading}
      >
        <InputField
          label="Distance"
          name="distance"
          value={form.distance}
          onChange={handleChange}
          error={errors.distance}
        />
        <InputField
          label="Dénivelé"
          name="denivele"
          value={form.denivele}
          onChange={handleChange}
          error={errors.denivele}
        />
        <SelectField
          label="Techinicité"
          name="technicite"
          value={form.technicite}
          onChange={handleChange}
          error={errors.technicite}
          options={TECHNICITE}
        />
      </FormEdit>
      {predict && (
        <ButtonSecondary libelle="Réinitialiser" onclick={handleDelete} />
      )}
    </>
  )
}
export default PrevisionsForm
