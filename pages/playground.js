function Playground ({ slugs }) {
  /* console.log(props.slugs.data.person.data) */

  return (
    <div>
      Playground
      {slugs && slugs.map(node => <div>{node.ref.ts}</div>)}
    </div>
  )
}

export async function getStaticProps (context) {
  const res = await fetch('http://localhost:3000/api/slug')
  const slugs = await res.json()

  /* const paths = slugs.map(node => ({ params: { slug: node.slug } })) */
  return {
    props: { slugs }
  }
}

export default Playground
