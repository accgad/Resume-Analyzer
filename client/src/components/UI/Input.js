const Input = ({ label, error, className = "", type = "text", id, ...props }) => {
  const inputClasses = `
    w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    ${error ? "border-red-300" : "border-gray-300"}
    ${className}
  `

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input type={type} id={id} className={inputClasses} {...props} />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default Input
