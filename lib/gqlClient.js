import { GraphQLClient, gql, request } from "graphql-request";

const endpoint = "https://graphql.fauna.com/graphql";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`,
  },
});

export async function testGQL() {
  const query = gql`
    {
      person {
        data {
          name
          slug
        }
      }
    }
  `;

  const variables = {};

  graphQLClient.request(query, variables).then((data) => {
    return data.person.data;
  });
}

export async function getPersonNameForSlug() {
  try {
    const query = gql`
      {
        person {
          data {
            name
            slug
          }
        }
      }
    `;

    const response = await graphQLClient.request(query);
    const data = JSON.stringify(response, undefined, 2);
    return data;
  } catch (error) {
    console.error("Error" + error);
  }
}
