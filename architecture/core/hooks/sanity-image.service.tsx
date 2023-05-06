import { useNextSanityImage } from 'next-sanity-image';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import builder from '@sanity/image-url/lib/types/builder';
import { ClientConfig, createClient } from 'next-sanity';

export const useSanityImageService = (imageSource: SanityImageSource) => {
  const config: ClientConfig = {
    projectId: 'cb6cd06x',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-01-12',
  };
  const client = createClient(config);
  const builder = imageUrlBuilder({
    projectId: 'cb6cd06x',
    dataset: 'production',
  });
  const urlFor = (imageSource: SanityImageSource) => builder.image(imageSource);

  return urlFor(imageSource).url();
};
