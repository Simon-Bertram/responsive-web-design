const Card = ({ children, icon, title, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {title && (
        <h3>
          <a href="">{title}</a>
        </h3>
      )}
      {children}
    </div>
  )
}

export default Card
