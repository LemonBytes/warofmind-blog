import { Post } from './post';
import { SanityClient } from 'next-sanity';
interface sanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
}

export interface IPostRepository {
  findAll(client: SanityClient): Promise<Post[]>;
  findLast(client: SanityClient): Promise<Post[]>;
  findPopular(client: SanityClient): Promise<Post[]>;
  findById(client: SanityClient, id: string): Promise<Post>;
}
