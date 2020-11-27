import { request, gql } from "graphql-request";

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPersonNameForSlug() {
  const query = gql`
    person {
        data {
          name
          slug
        }
      }
    }
    `;
  request("https://graphql.fauna.com/graphql", query).then((data) =>
    console.log(data)
  );
}
