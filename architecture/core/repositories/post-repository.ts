import { SanityClient } from 'next-sanity';

export interface IPostRepository {
  findAll(): Promise<any>;
  findLast(): Promise<any>;
  findPopular(): Promise<any>;
  findById(): Promise<any>;
  findByTheme(): Promise<any>;
}
