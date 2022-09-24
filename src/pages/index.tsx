import { css } from "@emotion/react";
import Layout from "../components/layout";
import { client } from "/libs/client";
import type { BlogProps } from "../types/props";

const Home = ({ articles, profile, categories }: BlogProps) => {
  return (
    <Layout>
      <div>
        <h1>{profile.name}</h1>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articleData = await client.get({ endpoint: "blog" });
  const profileData = await client.get({ endpoint: "profile" });
  const categoryData = await client.get({ endpoint: "category" });
  return {
    props: {
      articles: articleData.contents,
      profile: profileData,
      categories: categoryData.contents,
    },
  };
};
export default Home;
