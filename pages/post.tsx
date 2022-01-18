import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function ExamplePage({ source }: any) {
  return (
    <div style={{ color: "red", marginTop: "50px" }}>
      <MDXRemote {...source} />
    </div>
  );
}

export const getStaticProps: any = async () => {
  const postFilePath = path.join(POSTS_PATH, `../blogPosts/test.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
