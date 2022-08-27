export interface IPost {
  [k: string]: unknown;
  id: string;
  createdAt: string;
  title: string;
  description: string;
  mainImage: string;
  slug: string;
  body: [object];
}

export class Post implements IPost {
  [k: string]: unknown;
  constructor(params: IPost) {
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        this[key] = params[key];
      }
    }
  }
  public createdAt: string;
  public title: string;
  public description: string;
  public mainImage: string;
  public slug: string;
  public body: [object];
  public id: string;
}
