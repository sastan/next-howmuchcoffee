import userWithCoffee from 'lib/query/userWithCoffee'

const User = ({ UserData }) => {
  console.log(UserData)

  return (
    <div>
      Email <span>{UserData.email}</span>
    </div>
  )
}

export async function getStaticProps ({ params }) {
  const UserData = await userWithCoffee('283193827121955335')
  return {
    props: { UserData }
  }
}

export async function getStaticPaths () {
  const res = await fetch('http://localhost:3000/api/slug')
  const slugs = await res.json()

  const paths = slugs.data.person.data.map(node => ({
    params: { slug: node.slug, id: node._id }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export default User
