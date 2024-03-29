import PropTypes from "prop-types"

const Card = ({ children, icon, title, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className="flex w-16 mx-auto mb-4">{icon}</div>
      {title && (
        <h3>
          <a href="">{title}</a>
        </h3>
      )}
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Card
