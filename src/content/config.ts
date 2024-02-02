import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  post: postCollection,
};
