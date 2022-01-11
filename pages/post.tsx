import { NextPage } from "next/types";

const Test: NextPage = ({ ...props }) => {
  console.log(props);
  return <div>Hallo</div>;
};

export default Test;

export async function getStaticProps() {
  const posts = await fetch(
    "https://api.hubapi.com/content/api/v2/blog-posts?hapikey=demo"
  );
  const data = await posts.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
