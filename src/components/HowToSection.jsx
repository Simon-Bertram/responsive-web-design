import CardHowTo from "./CardHowTo"

const HowToSection = () => {
  return (
    <div className="bg-orange-100">
      <section className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardHowTo
            title="How-To: Seating"
            img="/graphics/photo_seating.jpg"
            alt="A collection of different types of chairs"
          >
            <p className="mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              fugiat.
            </p>
            <a
              className="text-orange-500 underline font-bold"
              href="#"
              title="Learn how to choose the proper seating"
            >
              Learn More
            </a>
          </CardHowTo>
          <CardHowTo
            title="How-To: Lighting"
            img="/graphics/photo_lighting.jpg"
            alt="A collection of circular red lights"
          >
            <img />
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a
              className="text-orange-500 underline font-bold"
              href="#"
              title="Learn how to choose the proper lighting"
            >
              Learn More
            </a>
          </CardHowTo>
          <div className="relative ">
            <CardHowTo className="absolute z-0">
              <blockquote className="pb-28 bg-white p-8 rounded-md ">
                <p
                  className="italic text-lg pb-6 before:content-['\22'] before:text-5xl before:text-orange-200 before:mr-1 after:content-['\22'] after:text-5xl after:text-orange-200 after:ml-1 after:absolute
                "
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit consequuntur atque unde fugit quos eius neque
                  veritatis aperiam nisi, ut explicabo voluptates asperiores, ex
                  maiores. Voluptatibus nobis ipsum atque velit?
                </p>
                <div>
                  <p className="credit text-gray-700 pl-5 leading-5">
                    <strong>Author Name</strong> <br />
                    <em>Business title</em> <br />
                    Company
                  </p>
                </div>
              </blockquote>
            </CardHowTo>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowToSection
