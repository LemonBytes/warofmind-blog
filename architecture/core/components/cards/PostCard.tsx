const { motion } = require('framer-motion');
import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSanityImageService } from '../../hooks/sanity-image.service';
import tailwindConfig from '../../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import { useTranslation } from 'next-i18next';

//ts-ignore
const fullConfig = resolveConfig({ tailwindConfig } as any);

const checkBreakpoint = (width: number, breakpoint: string) => {
  const breakpointNumber = parseInt(breakpoint.replace(/px/, ''));
  return width <= breakpointNumber;
};

export interface IPostCardProps {
  post: {
    title: {
      [key: string]: string;
    };
    description: {
      [key: string]: string;
    };
    slug: {
      current: string;
    };
    mainImage: {
      asset: {
        _ref: string;
      };
    };
    publishedAt: string;
    topics: string[];
  };
  gridProps?: string;
}

export const PostCard = ({ post, gridProps }: IPostCardProps) => {
  const image =
    useSanityImageService(post?.mainImage.asset._ref) ??
    require(`../../../../public/static/assets/images/topics/${post.topics[0]}.jpg`);

  const { t } = useTranslation('common');
  const { sm }: any = fullConfig.theme?.screens!;
  const router = useRouter();
  const currentLang: string = router.locale ?? 'en';
  const [isHovered, setHovered] = useState(false);

  const published = DateTime.fromISO(post.publishedAt).toLocaleString(
    DateTime.DATETIME_MED
  );

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${gridProps} relative w-screen border border-blurrRed md:w-full`}
    >
      <Link passHref href={`/${currentLang}/posts/${post.slug.current}`}>
        <div className="relative">
          <div className="w-full pb-[100%]">
            <Image src={image} alt={'Test Image'} fill className="opacity-25" />
          </div>
          <div className="absolute inset-0 flex w-full flex-col items-center justify-center">
            <motion.div
              animate={{
                y: isHovered ? -135 : -0,
                opacity: isHovered ? 0 : 1,
                delay: 0.6,
                duration: 0.6,
              }}
              transition={{ duration: 0.6 }}
              className="absolute w-[90%] text-center md:w-[90%]"
            >
              <h4 className="text-ellipses text-bold font-naruto text-3xl text-white  md:text-4xl">
                {post.title[currentLang]}
              </h4>
            </motion.div>
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                delay: 0.6,
                duration: 0.6,
              }}
              className="absolute w-[90%] text-center md:w-[90%]"
            >
              <p className="text-ellipses text-bold font-naruto text-white opacity-100">
                {post.description[currentLang]}
              </p>
            </motion.div>
          </div>
        </div>
      </Link>

      <div className="absolute bottom-8  flex w-screen justify-between  px-4 md:w-[100%]">
        <p className="text font-naruto text-white">{published}</p>
        <div className="relative flex gap-2">
          {post.topics?.map((topic: string, key: number) => {
            return (
              <Link
                key={key}
                locale={currentLang}
                className="text group relative flex items-center overflow-hidden border p-2 font-naruto text-xs text-white"
                href={`/${currentLang}/topics/${topic}`}
              >
                <span className="absolute inset-0 flex h-full w-full bg-blurrRed  opacity-0 transition-opacity duration-300  group-hover:opacity-50"></span>
                <span className="relative z-10">{t(topic)}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
};
