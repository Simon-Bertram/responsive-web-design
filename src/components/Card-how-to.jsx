import PropTypes from "prop-types"

const CardHowTo = ({ children, image, title, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className="flex w-16 mx-auto mb-4">{image}</div>
      {title && (
        <h3>
          <a href="">{title}</a>
        </h3>
      )}
      {children}
    </div>
  )
}

CardHowTo.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default CardHowTo
