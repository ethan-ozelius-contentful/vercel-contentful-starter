import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

async function fetchContentful(
  contentType: string,
  query: any = {},
  preview = false
): Promise<any> {
  const contentfulClient = preview ? previewClient : client;
  return contentfulClient.getEntries({
    content_type: contentType,
    ...query,
  });
}

export async function getAllTutorials(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchContentful(
    "tutorial",
    {
      order: "-sys.createdAt",
    },
    isDraftMode
  );
  return entries.items;
}
