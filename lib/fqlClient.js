import faunadb from "faunadb";

export const client = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY,
});
export const q = faunadb.query;
