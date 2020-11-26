import { useQuery } from "urql";

import Layout from "../components/layout";
import StackedList from "../components/StackedList";

const getAllPersonsAndCoffees = `
query getAllPersonsAndCoffees {
  person {
    data {
      name
      age
      email
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
  return (
    <Layout>
      {console.log(result)}
      <h1>test</h1>
      <StackedList />
    </Layout>
  );
}

export default IndexPage;
