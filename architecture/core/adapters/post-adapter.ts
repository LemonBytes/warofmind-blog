import { createClient, SanityClient } from 'next-sanity';

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
  async findAll() {
    return await this.sanityClient.fetch(`*[_type == "post" ]`);
  }
  async findLast() {
    return await this.sanityClient.fetch(`*[_type == "post" ][0...8]`);
  }
  async findPopular() {
    return await this.sanityClient.fetch(`*[_type == "post" ]`);
  }
  async findById() {
    return await this.sanityClient.fetch(`*[_type == "post" ]`);
  }
}
