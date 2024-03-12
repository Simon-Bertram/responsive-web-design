import Card from "./Card"

const HowToSection = () => {
  return (
    <section>
      <h2>How To</h2>
      <Card title="How-To: Seating">
        <img
          src="public/graphics/photo_seating.jpg"
          alt="A collection of different types of chairs"
        />
        <h4>Card Title</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
          fugiat.
        </p>
        <a href="#" title="Learn how to choose the proper seating">
          Learn More
        </a>
      </Card>
      <Card title="How-To: Lighting">
        <img
          src="public/graphics/photo_lighting.jpg"
          alt="A collection of circular red lights"
        />
        <h4>Card Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="#" title="Learn how to choose the proper lighting">
          Learn More
        </a>
      </Card>
      <Card>
        <blockquote>
          <p className="quote">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            consequuntur atque unde fugit quos eius neque veritatis aperiam
            nisi, ut explicabo voluptates asperiores, ex maiores. Voluptatibus
            nobis ipsum atque velit?
          </p>
          <p className="credit">
            <strong>Author</strong> <br />
            <em>business title</em> <br />
            company
          </p>
        </blockquote>
        <p>Author details</p>
      </Card>
    </section>
  )
}

export default HowToSection
