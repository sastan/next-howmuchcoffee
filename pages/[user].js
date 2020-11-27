import getPersonNameForSlug from "@api";

const Users = () => {
  return <div>Users</div>;
};

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const allUsers = await getPersonNameForSlug();
  return {
    paths: allUsers.map((user) => `/${user.slug}/`) || [],
    fallback: false,
  };
}

export default Users;
