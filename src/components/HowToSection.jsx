import Card from "./Card"

const HowToSection = () => {
  return (
    <div className="bg-orange-100">
      <section className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="How-To: Seating">
            <img
              src="/graphics/photo_seating.jpg"
              alt="A collection of different types of chairs"
            />
            <h4>Card Title</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              fugiat.
            </p>
            <a
              className="mt-6"
              href="#"
              title="Learn how to choose the proper seating"
            >
              Learn More
            </a>
          </Card>
          <Card title="How-To: Lighting">
            <img
              src="/graphics/photo_lighting.jpg"
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit consequuntur atque unde fugit quos eius neque veritatis
                aperiam nisi, ut explicabo voluptates asperiores, ex maiores.
                Voluptatibus nobis ipsum atque velit?
              </p>
              <p className="credit">
                <strong>Author</strong> <br />
                <em>business title</em> <br />
                company
              </p>
            </blockquote>
            <p>Author details</p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HowToSection
