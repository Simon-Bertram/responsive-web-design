import Card from "./Card"

const MainSection = () => {
  // First Aside
  const firstAside = (
    <p>
      Lorem ipsum dolor sit amet, consect etuer adipiscing elit.{" "}
      <a href="http://codifydesign.com">Morbi commodo</a>, ipsum sed pharetra
      gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
    </p>
  )

  const secondAside = (
    <p>
      Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
      pulvinar odio lorem non turpis. Nullam sit amet enim. Lorem ipsum dolor
      sit amet, consect.
    </p>
  )

  const thirdAside = (
    <p>
      Nullam sit amet enim. Lorem ipsum dolor sit amet, consect etuer adipiscing
      elit. Morbi commodo, ipsum sed pharetra gravida, orci rhoncus neque, id
      pulvinar odio.
    </p>
  )

  const starIcon = (
    <img src="public/graphics/icon_star.svg" alt="A golden star" />
  )
  const gearIcon = (
    <img src="public/graphics/icon_gear.svg" alt="A golden gear" />
  )
  const markerIcon = (
    <img src="public/graphics/icon_marker.svg" alt="A golden marker" />
  )

  return (
    <section className="container mx-auto mt-12 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="">
          <Card className="main-card" title="What's trending" icon={starIcon}>
            {firstAside}
          </Card>
        </div>
        <div className="">
          <Card
            className="main-card"
            title="Where to find it"
            icon={markerIcon}
          >
            {secondAside}
          </Card>
        </div>
        <div className="">
          <Card
            className="main-card"
            title="Tools of the trade"
            icon={gearIcon}
          >
            {thirdAside}
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MainSection
