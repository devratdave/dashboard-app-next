const InputBox = ({ placeholder, type, setValue, value }: 
  { 
    placeholder: string, type: string, setValue: React.Dispatch<React.SetStateAction<string>>, value: string 
  }) => {
  return(
    <input className="text-slate-100 border rounded-sm border-solid block bg-gray-900 p-3 m-4" value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} type={type} />
  )
}

export default InputBox