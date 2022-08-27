import { SanityClient } from 'next-sanity';
import { IPostRepository } from './../../domain/post/entites/post-repository';

export class PostAdapter implements IPostRepository {
  sanityClient: SanityClient;
  mapper: PostMapper;
}
