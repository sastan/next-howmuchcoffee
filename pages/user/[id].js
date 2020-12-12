import Layout from '@components'
import UserCoffees from '@query'
import UsersID from '@query'

const User = ({ UserData }) => {
  return (
    <Layout>
      <p>Userpage</p>
      <p>
        Email <span>{UserData.email}</span>
      </p>
      <p>
        Age <span>{UserData.age}</span>
      </p>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  console.log(params.id)
  const UserData = await UserCoffees('284074104427905537')
  return {
    props: { UserData },
  }
}

export async function getStaticPaths() {
  const response = await UsersID()
  console.log(response)
  const paths = response.data.person.data.map((node) => ({
    params: { id: node.id },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default User
