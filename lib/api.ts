// import { TypeTutorial } from "@/generated-contentful-types/20251013_Content_Model_types";
import { createClient, EntryCollection, EntrySkeletonType } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

interface ParsedEntry {
  authors: Record<string, any>;
  bannerImage: Record<string, any>;
  body: Record<string, any>;
  date: string;
  createdAt?: string;
  skills: Record<string, any>[];
  slug: string | null;
  title: string | null;
}

const parseEntry = (entry: any): ParsedEntry => {
  return {
    ...entry,
    authors: entry.fields.authors || {},
    bannerImage: entry.fields.bannerImage || {},
    body: entry.fields.body || {},
    date: entry.sys.createdAt || '',
    createdAt: entry.sys.createdAt || '',
    skills: entry.fields.skills || [],
    slug: entry.fields.slug || null,
    title: entry.fields.title || null,
  } as unknown as ParsedEntry;
};

export async function getAllTutorials(
  limit?: number,
  isDraftMode?: boolean
): Promise<ParsedEntry[]> {
  // default to production mode
  isDraftMode = typeof isDraftMode === "undefined" ? false : isDraftMode;
  limit = limit || 20;

  const clientReference = isDraftMode ? previewClient : client;

  const entriesResponse = await clientReference.getEntries({
    content_type: "tutorial",
    order: ["-sys.createdAt"],
    limit,
  });

  // console.log(`entriesResponse => `, JSON.stringify(entriesResponse.items,null,4))
  

  const parsedEntries = entriesResponse.items.map((entry) => {
    // @ts-ignore
    // console.log(`entriesResponse.entry => `, JSON.stringify(entry.fields.bannerImage.fields.title,null,4))
    
    
    return parseEntry(entry)
  });

  return parsedEntries as unknown as ParsedEntry[];
}

export async function getTutorialBySlug(
  slug: string,
  isDraftMode: boolean
): Promise<ParsedEntry> {
  const contentfulClient = isDraftMode ? previewClient : client;
  const response = await contentfulClient.getEntries({
    content_type: "tutorial",
    "fields.slug": slug,
  });

  if (response.items.length > 0) {
    const parsedEntry = parseEntry(response.items[0]);

    return parsedEntry;
  } else {
    throw new Error(`No tutorial found for slug: ${slug}`);
  }
}
