function Header({ title }) {
  return (
    <header className="p-6 xl:p-8">
      <h1 className="text-white font-bold leading-5 text-xl xl:text-2xl">
        {title}
      </h1>
    </header>
  )
}
export default Header
