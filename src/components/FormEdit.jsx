import ButtonPrimary from '../components/ButtonPrimary'

function FormEdit({ onsubmit, btnvalidelibelle, children, disabled }) {
  return (
    <form
      onSubmit={onsubmit}
      className="flex flex-col items-start gap-4 w-full"
    >
      {children}
      <ButtonPrimary libelle={btnvalidelibelle} disabled={disabled} />
    </form>
  )
}
export default FormEdit
