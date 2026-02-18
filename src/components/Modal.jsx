function Modal({ children, onclickclose }) {
  return (
    <div
      onClick={onclickclose}
      className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow-lg px-5 py-7"
      >
        {children}
        <div
          onClick={onclickclose}
          className="absolute -top-10 -right-5 text-gray-400 bg-white rounded-4xl p-1 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default Modal
