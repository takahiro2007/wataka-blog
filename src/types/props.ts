import { ReactNode } from "react";
import type { Article, Profile, Category } from "../types/api";

export type layoutProps = {
  children: ReactNode;
};

export type BlogProps = {
  articles: Array<Article>;
  profile: Profile;
  categories: Array<Category>;
};
