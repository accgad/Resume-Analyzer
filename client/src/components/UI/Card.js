const Card = ({ children, className = "", padding = "p-6" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 ${padding} ${className}`}>{children}</div>
  )
}

export default Card
