const { motion } = require('framer-motion');
import { DateTime } from 'luxon';
import Img from 'next/image';
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

export const PostCard = ({ post }: any) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  const { width } = useGetDimensions();
  const { t } = useTranslation('common');
  const { sm }: any = fullConfig.theme?.screens!;
  const mobile = checkBreakpoint(width, sm);
  const router = useRouter();
  const currentLang = router.locale;
  const [isHovered, setHovered] = useState(false);

  const published = DateTime.fromISO(post.publishedAt).toLocaleString(
    DateTime.DATETIME_MED
  );

  return (
    <motion.div
      initial={false}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex h-auto w-full cursor-pointer flex-col items-center overflow-hidden md:min-w-[500px] md:max-w-2xl"
    >
      <Link
        passHref
        href={`/${currentLang}/posts/${post.slug.current}`}
        /*    onClick={() => router.push('/posts/' + post.slug.current)} */
        className="flex h-auto w-full flex-col items-center md:w-full md:min-w-full md:min-w-[500px] md:max-w-2xl"
      >
        <motion.div
          animate={{
            scale: isHovered || mobile ? 1.2 : 1.3,
            opacity: isHovered || mobile ? 0.4 : 1,
          }}
          className="h-[500px] w-full md:min-w-[500px] md:max-w-2xl"
          transition={{ duration: 0.6 }}
        >
          <Img alt="" src={image} fill />
        </motion.div>
        <motion.div
          animate={{ y: isHovered || mobile ? -135 : -0 }}
          transition={{ duration: 0.6 }}
          className="relative bottom-[55%] flex w-screen justify-center  md:bottom-[55%] md:flex md:w-[80%]"
        >
          <h3 className="text-ellipses text-bold absolute w-[90%] text-center font-naruto text-4xl text-white md:text-4xl ">
            {post.title[currentLang!]}
          </h3>
        </motion.div>
        <motion.div
          animate={{
            opacity: isHovered || mobile ? 1 : 0,
            delay: 0.6,
            duration: 0.6,
          }}
          className="relative bottom-[50%] flex w-screen justify-center md:bottom-[60%]  md:w-[90%]"
        >
          <p className="text-ellipses text-bold text absolute w-[90%] text-center font-naruto text-white ">
            {post.description[currentLang!]}
          </p>
        </motion.div>
      </Link>
      <motion.div
        animate={{
          y: isHovered || mobile ? -5 : 100,
        }}
        transition={{ duration: 0.6 }}
        className="relative bottom-[5%] flex w-screen w-[80%] justify-between"
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
    </motion.div>
  );
};
