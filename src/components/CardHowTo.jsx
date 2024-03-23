import PropTypes from "prop-types"

const CardHowTo = ({ children, img, alt, title, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {img && <img src={img} alt={alt} className="mb-5" />}
      {title && (
        <h3>
          <a href="" className="text-black font-bold">
            {title}
          </a>
        </h3>
      )}
      {children}
    </div>
  )
}

CardHowTo.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default CardHowTo
