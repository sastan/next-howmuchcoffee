const User = () => {
  return <div>User</div>
}

export async function getStaticProps (context) {
  return {
    props: {}
  }
}

export async function getStaticPaths () {
  const res = await fetch('http://localhost:3000/api/slug')
  const slugs = await res.json()

  const paths = slugs.person.data.map(node => ({ params: { slug: node.slug } }))
  return {
    paths,
    fallback: false
  }
}

export default User
