import { PortableText } from '@portabletext/react';
import { PostAdapter } from '../../architecture/core/adapters/post-adapter';
import { TopicOverview } from '../../architecture/core/components/pages/topics/TopicsPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { myPortableTextComponents } from '../../architecture/core/config/PortableTextConfig';
import Image from 'next/image';
import TemplatePost from '../../architecture/core/components/template/TemplatePost';

const TopicPage = ({ overview, locale, topic }: any) => {
  const mainImageSource = require(`../../public/static/assets/images/topics/${topic}.jpg`);
  const title = overview[0]?.title[locale];
  const description = overview[0]?.description[locale];
  const postBody = overview[0]?.body[locale];
  const associatedPosts = overview[0]?.post;

  return (
    // <>
    //   <Head>
    //     <title>{overview[0]?.title[locale]}</title>
    //     <meta name="description" content={overview[0]?.description[locale]} />
    //   </Head>
    //   <main className="flex h-auto w-screen flex-col items-center font-capriola text-white">
    //     <div className="z-[-1] h-[20%] w-screen md:h-auto md:w-[80vw]">
    //       <Image
    //         className="w-full outline outline-blurrRed md:h-[65vh]  "
    //         alt="main image of the blog post"
    //         src={require(`../../public/static/assets/images/topics/${topic}.jpg`)}
    //         width={600}
    //         height={400}
    //       />
    //     </div>
    //     <section className="flex h-auto w-screen flex-col items-center border border-blurrRed  md:w-[80vw] ">
    //       {overview[0]?.title[locale] && (
    //         <h1 className="p-1 py-2  font-naruto text-4xl ">
    //           {overview[0]?.title[locale]}
    //         </h1>
    //       )}
    //       <article className="flex flex-col items-start px-8 py-10 text-left text-white md:w-[60vw] md:items-start md:px-12 ">
    //         {overview[0]?.body[locale] ? (
    //           <PortableText
    //             value={[...overview[0]?.body[locale]]}
    //             components={myPortableTextComponents}
    //           />
    //         ) : (
    //           <>ups</>
    //         )}
    //       </article>
    //     </section>
    //     <section className="w-screen md:w-[80vw]">
    //       {overview[0]?.post && <TopicOverview posts={overview[0]?.post} />}
    //     </section>
    //   </main>
    // </>
    <TemplatePost
      locale={locale}
      mainImageSource={mainImageSource}
      title={title}
      description={description}
      postBody={postBody}
      associatedPostsTitle={'related'}
      associatedPosts={associatedPosts}
    />
  );
};

export const getStaticPaths = async ({ locales }: any) => {
  const topics = [
    'boxing',
    'kickboxing',
    'muay-thai',
    'brazilian-jiu-jitsu',
    'mind',
    'reviews',
    'karate',
  ];
  const paths = topics.flatMap((topic: any) => {
    return locales.map((locale: any) => {
      return {
        params: { topic: topic },
        locale: locale,
      };
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params, locale }: any) => {
  const TopicAdapter = new PostAdapter();
  const topic = params.topic;
  const overview = await TopicAdapter.findOverview(topic);

  return {
    props: {
      overview,
      locale,
      topic,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default TopicPage;
