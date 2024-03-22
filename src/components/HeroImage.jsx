const HeroImage = () => {
  return (
    <div className="hero-image-container">
      <picture>
        <source />
        <img
          className="hero-image"
          src="public/graphics/banner_425.jpg"
          srcSet="public/graphics/banner_425.jpg 425w, public/graphics/banner_625.jpg 625w, public/graphics/banner_825.jpg 825w, public/graphics/banner_1200.jpg 1200w"
          alt="Hand woven baskets and plant balls"
        />
      </picture>
    </div>
  )
}

export default HeroImage
