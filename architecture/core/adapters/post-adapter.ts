import { createClient, SanityClient } from 'next-sanity';

export type topicType =
  | 'boxing'
  | 'kickboxing'
  | 'muay-thai'
  | 'brazilian-jiu-jitsu'
  | 'mind'
  | 'reviews'
  | 'karate';
export class PostAdapter {
  sanityClient: SanityClient;
  constructor() {
    this.sanityClient = createClient({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      apiVersion: process.env.API_VERSION,
      useCdn: false,
    });
  }
  async findByTopic(topic: topicType) {
    return await this.sanityClient.fetch(
      `*[_type == "post" && "${topic}" in topics]`
    );
  }

  async findAll() {
    return await this.sanityClient.fetch(`*[_type == "post" ]`);
  }
  async findLast() {
    return await this.sanityClient.fetch(`*[_type == "post" ][0...7]`);
  }
  async findPopular() {
    return await this.sanityClient.fetch(`*[_type == "post" ]`);
  }
  async findBySlug(slug: string) {
    const post = await this.sanityClient.fetch(
      `*[_type == "post" && slug.current == '${slug}']`
    );
    return post;
  }
}
