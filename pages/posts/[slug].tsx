export const Test = async () => {
  const post = await fetch("https://www.googleapis.com/auth/blogger");
  console.log(post);
  return <>Hallo</>;
};
