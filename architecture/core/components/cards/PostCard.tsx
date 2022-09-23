const { motion } = require('framer-motion');
import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSanityImageService } from '../../services/sanity-image.service';

export const PostCard = ({ post }: any) => {
  const published = DateTime.fromISO(post.publishedAt).toLocaleString(
    DateTime.DATETIME_MED
  );
  console.log({ ...post.categories });
  const image = useSanityImageService(post.mainImage.asset._ref);
  const router = useRouter();
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
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
            scale: isHovered ? 1.01 : 1.15,
            opacity: isHovered ? 0.4 : 1,
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
          animate={{ y: isHovered ? -110 : -0 }}
          transition={{ duration: 0.6 }}
          className="relative w-screen justify-center lg:bottom-[60%] lg:flex lg:w-[85%]"
        >
          <h3 className="text-ellipses text-bold absolute text-center font-naruto text-4xl text-white ">
            {post.title}
          </h3>
        </motion.div>
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            delay: 0.6,
            duration: 0.6,
          }}
          className="relative flex w-screen lg:bottom-[60%] lg:w-[85%]"
        >
          <p className="text-ellipses text-bold text absolute text-center font-naruto text-white ">
            {post.description}
          </p>
        </motion.div>
      </a>
      <motion.div
        animate={{
          y: isHovered ? 10 : 50,
        }}
        transition={{ duration: 0.6 }}
        className="relative flex w-screen lg:left-[10%] lg:bottom-[10%] lg:w-[85%]"
      >
        <Link href={'/test'}>
          <a className="text font-naruto text-white">{published}</a>
        </Link>
      </motion.div>
    </motion.div>
  );
};

{
  /* */
}
