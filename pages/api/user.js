import { client, q } from "../../lib/fqlClient";
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
export default (req, res) => {
  const getUsers = client.query(
    q.Map(q.Paginate(q.Match(q.Index("person"))), (person) => q.Get(person))
  );

  const data = getUsers.then(function (res) {
    return res.ref;
  });

  res.status(200).json(data);
};
