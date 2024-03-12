const Card = ({ children, icon, title }) => {
  return (
    <div className="card">
      {title && (
        <h2>
          <a href="">{title}</a>
        </h2>
      )}
      {children}
    </div>
  )
}

export default Card
