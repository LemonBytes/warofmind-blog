const { motion } = require('framer-motion');
import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSanityImageService } from '../../hooks/sanity-image.service';
import tailwindConfig from '../../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import useGetDimensions from '../../hooks/useGetDimensions';
import { useTranslation } from 'next-i18next';

//ts-ignore
const fullConfig = resolveConfig({ tailwindConfig } as any);

const checkBreakpoint = (width: number, breakpoint: string) => {
  const breakpointNumber = parseInt(breakpoint.replace(/px/, ''));
  return width <= breakpointNumber;
};

export interface PostCardProps {
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

export const PostCard = ({ post, gridProps }: PostCardProps) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  const { width } = useGetDimensions();
  const { t } = useTranslation('common');
  const { sm }: any = fullConfig.theme?.screens!;
  const mobile = checkBreakpoint(width, sm);
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
      className={`${gridProps} curser-pointer border-box relative flex-col items-center justify-center border `}
    >
      <Link
        passHref
        href={`/${currentLang}/posts/${post.slug.current}`}
        className="opacity-60"
      >
        <Image
          src={image}
          alt={'Test Image'}
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
        />
        <div className="opacity-100">
          <motion.div
            animate={{ y: isHovered || mobile ? -135 : -0 }}
            transition={{ duration: 0.6 }}
            className="relative flex w-screen justify-center  opacity-100 md:bottom-[55%] md:flex md:w-[80%]"
          >
            <h3 className="text-ellipses text-bold absolute w-[90%] text-center font-naruto text-4xl text-white opacity-100 md:text-4xl ">
              {post.title[currentLang]}
            </h3>
          </motion.div>
          <motion.div
            animate={{
              opacity: isHovered || mobile ? 1 : 0,
              delay: 0.6,
              duration: 0.6,
            }}
            className="relative flex w-screen justify-center opacity-100  md:bottom-[60%] md:w-[90%]"
          >
            <p className="text-ellipses text-bold text absolute w-[90%] text-center font-naruto text-white opacity-100">
              {post.description[currentLang]}
            </p>
          </motion.div>
        </div>
      </Link>
    </article>
  );
};

/*


  <motion.div
          animate={{ y: isHovered || mobile ? -135 : -0 }}
          transition={{ duration: 0.6 }}
          className="relative flex w-screen justify-center  md:bottom-[55%] md:flex md:w-[80%]"
        >
          <h3 className="text-ellipses text-bold absolute w-[90%] text-center font-naruto text-4xl text-white md:text-4xl ">
            {post.title[currentLang]}
          </h3>
        </motion.div>
        <motion.div
          animate={{
            opacity: isHovered || mobile ? 1 : 0,
            delay: 0.6,
            duration: 0.6,
          }}
          className="relative flex w-screen justify-center md:bottom-[60%]  md:w-[90%]"
        >
          <p className="text-ellipses text-bold text absolute w-[90%] text-center font-naruto text-white ">
            {post.description[currentLang]}
          </p>
        </motion.div>


  <motion.div
        animate={{
          y: isHovered || mobile ? -5 : 100,
        }}
        transition={{ duration: 0.6 }}
        className="relative  flex w-screen w-[80%] justify-between"
      >
        <p className="text font-naruto text-white">{published}</p>

        <div className="flex gap-2">
          {post.topics?.map((topic: string, key: number) => {
            return (
              <Link
                key={key}
                locale={currentLang}
                className="text flex border p-1 font-naruto text-xs text-white"
                href={`${currentLang}/topics/${topic}`}
              >
                {t(topic)}
              </Link>
            );
          })}
        </div>
      </motion.div>

*/
