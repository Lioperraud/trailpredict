import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'

function FormEdit({
  onsubmit,
  btnvalidelibelle,
  children,
  disabled,
  annulepossible = false,
  btnannulelibelle,
  onclickannule,
}) {
  return (
    <form
      onSubmit={onsubmit}
      className="flex flex-col items-start gap-4 w-full"
    >
      {children}
      <div className="flex gap-2">
        <ButtonPrimary libelle={btnvalidelibelle} disabled={disabled} />
        {annulepossible && (
          <ButtonSecondary libelle={btnannulelibelle} onclick={onclickannule} />
        )}
      </div>
    </form>
  )
}
export default FormEdit
