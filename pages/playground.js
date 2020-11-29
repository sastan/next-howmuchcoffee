import { fetcherPaths } from "@gqlClient";

const fetcher = (url) => fetch(url).then((r) => r.json());
const Playground = (props) => {
  return (
    <div>
      Playground
      <span>{props.user}</span>
      {/*    {data &&
        data.map((node) => (
          <div>
            {node.ref.ts}
           
          </div>
        ))} */}
      {console.log(data)}
    </div>
  );
};

export async function getStaticProps(context) {
  const user = fetcher("/api/user");
  return {
    props: { user },
  };
}

export default Playground;
