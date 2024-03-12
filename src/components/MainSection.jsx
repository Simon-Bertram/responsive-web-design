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

  return (
    <section>
      <h2>Main Section</h2>
      <Card title="What's trending">{firstAside}</Card>
      <Card title="Where to find it">{secondAside}</Card>
      <Card title="Tools of the trade">{thirdAside}</Card>
    </section>
  )
}

export default MainSection
