export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  category: Array<Object>;
};

export type Profile = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  subName: string;
  describe: string;
  iconImage: {
    url: string;
    height: number;
    width: number;
  };
  headerImage: {
    url: string;
    height: number;
    width: number;
  };
  twitterLink: string;
  twitterName: string;
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: string;
  categoryImage: {
    url: string;
    height: number;
    width: number;
  };
};
