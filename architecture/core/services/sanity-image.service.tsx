import { createClient, SanityClient } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';

export const useSanityImageService = (imageSource: string) => {
  const client: SanityClient = createClient({
    projectId: 'cb6cd06x',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
  });
  const image = useNextSanityImage(client, imageSource);
  return image;
};
