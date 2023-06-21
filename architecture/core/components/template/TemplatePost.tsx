import React from 'react';
import { PostCardGrid } from '../cards/PostCardGrid';
import { PortableText } from '@portabletext/react';
import { t } from 'i18next';
import Head from 'next/head';
import Link from 'next/link';
import { myPortableTextComponents } from '../../config/PortableTextConfig';
import { IPostCardProps } from '../cards/PostCard';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface ITemplate {
  locale: string;
  mainImageSource: string;
  title: string;
  description: string;
  postBody: any;
  associatedPostsTitle: string;
  associatedPosts: IPostCardProps[];
  published?: string;
  topics?: string[];
}

const TemplatePost: React.FC<ITemplate> = ({
  locale,
  mainImageSource,
  title,
  description,
  postBody,
  associatedPostsTitle,
  associatedPosts,
  published,
  topics,
}) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="flex h-auto w-screen flex-col items-center font-capriola text-white">
        <div className="z-[-1] h-[20%] w-screen md:h-auto md:w-[80vw]">
          <Image
            className="w-full border border-blurrRed md:h-[80vh] "
            alt="main image of the blog post"
            src={mainImageSource}
            width={600}
            height={400}
          />
        </div>
        <section className="flex h-auto w-screen flex-col items-center border border-blurrRed  md:w-[80vw] ">
          {topics && published && (
            <div className="flex h-20 w-screen  items-center  justify-between text-white md:w-[80vw]">
              {published && (
                <div className="px-2 font-naruto md:px-5">{published}</div>
              )}
              {topics && (
                <div className="flex gap-2 px-2 md:px-5">
                  {topics?.map((topic: string, key: number) => {
                    return (
                      <Link
                        key={key}
                        locale={locale}
                        className="text flex border p-1 font-naruto text-xs text-white"
                        href={`/${locale}/topics/${topic}`}
                      >
                        {t(topic)}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          <section className="flex w-[90vw] flex-col md:w-[80vw]">
            <div className="self-start py-20  md:px-10">
              <h1 className="p-1 py-2  font-naruto text-4xl ">{title}</h1>
              <h2 className="text md:text w-[90vw] py-2  md:w-[70vw]">
                {description}
              </h2>
            </div>
            <div className="flex flex-col items-start py-5  text-left text-white md:w-[60vw] md:items-start md:px-12">
              {postBody && (
                <PortableText
                  value={[...postBody]}
                  components={myPortableTextComponents}
                />
              )}
            </div>
          </section>
        </section>
        <section className="w-screen md:w-[80vw]">
          <h3 className="border border-blurrRed p-3 py-10 font-naruto text-4xl text-white">
            {t(associatedPostsTitle)}
          </h3>
          <PostCardGrid posts={associatedPosts} />
        </section>
      </main>
    </>
  );
};

export default TemplatePost;
