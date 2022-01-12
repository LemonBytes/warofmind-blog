import { NextPage } from "next/types";

const Test: NextPage = ({ ...props }) => {
  console.log(props);
  return <div>Hallo</div>;
};

export default Test;
