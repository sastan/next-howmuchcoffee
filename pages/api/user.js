import { client } from "../../lib/fqlClient";
import { query as q } from "faunadb";
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default async (req, res) => {
  try {
    const user = await client.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index("person") // specify source
          )
        ),
        (ref) => q.Get(ref) // lookup each result by its reference
      )
    );
    // ok
    res.status(200).json(user);
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};
