const User = () => {
  return <div>User</div>
}

export async function getStaticProps ({ params }) {
  return {
    props: {}
  }
}

export async function getStaticPaths () {
  const res = await fetch('http://localhost:3000/api/slug')
  const slugs = await res.json()

  const paths = slugs.data.person.data.map(node => ({
    params: { slug: node.slug }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export default User
