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
      className=" flex h-[550px] w-full cursor-pointer flex-col items-center overflow-hidden "
    >
      <a
        onClick={() => router.push('/posts/' + post.slug.current)}
        className="flex h-[550px] w-full flex-col items-center"
      >
        <motion.div
          animate={{
            scale: isHovered || mobile ? 1.01 : 1.15,
            opacity: isHovered || mobile ? 0.4 : 1,
          }}
          className="h-[550px] w-full"
          transition={{ duration: 0.6 }}
        >
          <Image
            alt=""
            src={image.src}
            layout="fill"
            objectFit="cover"
            sizes="320 640 750"
            objectPosition="center"
          />
        </motion.div>
        <motion.div
          animate={{ y: isHovered || mobile ? -110 : -0 }}
          transition={{ duration: 0.6 }}
          className="relative bottom-[65%] flex w-screen justify-center  md:bottom-[55%] lg:flex lg:w-[85%]"
        >
          <h3 className="text-ellipses text-bold absolute w-[90%] text-center font-naruto text-4xl text-white lg:text-4xl ">
            {post.title[currentLang!]}
          </h3>
        </motion.div>
        <motion.div
          animate={{
            opacity: isHovered || mobile ? 1 : 0,
            delay: 0.6,
            duration: 0.6,
          }}
          className="relative bottom-[65%] flex w-screen justify-center md:bottom-[55%]  lg:w-[85%]"
        >
          <p className="text-ellipses text-bold text absolute w-[90%] text-center font-naruto text-white ">
            {post.description[currentLang!]}
          </p>
        </motion.div>
      </a>
      <motion.div
        animate={{
          y: isHovered || mobile ? -15 : 60,
        }}
        transition={{ duration: 0.6 }}
        className="relative bottom-[10%] flex w-screen w-[85%] justify-between"
      >
        <Link href={'/test'}>
          <a className="text font-naruto text-white">{published}</a>
        </Link>
        <div className="flex gap-2">
          {post.topics?.map((topic: string, key: number) => {
            return (
              <Link key={key} href={`/topics/${topic}`} locale={currentLang}>
                <a className="text flex border p-1 font-naruto text-white">
                  {t(topic)}
                </a>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};
