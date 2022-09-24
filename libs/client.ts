import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "wataka-blog",
  apiKey: process.env.API_KEY || "",
});
