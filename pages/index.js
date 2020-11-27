import { useQuery } from "urql";

import Layout from "../components/layout";
import PageHeading from "../components/PageHeading";
import StackedList from "../components/StackedList";
import { getPersonNameForSlug } from "@api";

const getAllPersonsAndCoffees = `
query getAllPersonsAndCoffees {
  person {
    data {
      _id
      name
      slug
      age
      email
      avatar
      coffees {
        data {
          amount
        }
      }
    }
  }
}
`;
function IndexPage() {
  const [result, reexecuteQuery] = useQuery({ query: getAllPersonsAndCoffees });

  if (result.fetching) return <p>Loading...</p>;
  if (result.error) return <p>Oh no... {result.error.message}</p>;

  /*  const Api = getPersonNameForSlug(); */
  return (
    <Layout>
      {/* {console.log(Api)} */}
      <PageHeading title="Dashboard" subtitle="Overview" />
      <StackedList data={result.data.person.data} />
    </Layout>
  );
}

export default IndexPage;
