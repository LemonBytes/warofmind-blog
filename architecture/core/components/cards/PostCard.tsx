const { motion } = require('framer-motion');
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSanityImageService } from '../../services/sanity-image.service';

export const PostCard = ({ post }: any) => {
  const image = useSanityImageService(post.mainImage.asset._ref);
  const router = useRouter();
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex h-full w-full cursor-pointer flex-col overflow-hidden"
    >
      <motion.a
        onClick={() => router.push('/posts/' + post.slug.current)}
        className="overflow-hidden"
      >
        <motion.div className="h-auto max-h-[600px] overflow-hidden border">
          <motion.Image
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.6 }}
            layout="responsive"
            sizes="(max-width: 1200px) 100vw, 800px"
            className="top-0 rounded-t "
            width={900}
            height={600}
            alt=""
            src={image.src}
          />
        </motion.div>
        <motion.p
          animate={{ y: isHovered ? -100 : 80 }}
          transition={{ duration: 0.6 }}
          className="text-ellipses text-bold w-auto text-center font-naruto text-2xl text-white "
        >
          {post.description}
        </motion.p>
      </motion.a>
    </motion.div>
  );
};
