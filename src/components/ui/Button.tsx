const Button = ({ action, onClick, text }: 
  { action: string, onClick: ()=>void, text: string
  }) => {
  return(
    <button type="button" onClick={onClick} className={`text-sky-500 hover:text-white hover:shadow-lg hover:shadow-slate-800 border border-sky-500 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-${text} px-5 py-2.5 text-center me-2 mb-2 w-full`}>{action}</button>
  )
}

export default Button