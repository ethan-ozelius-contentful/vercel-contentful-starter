import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";

import { Markdown } from "@/lib/markdown";
import { getAllTutorials } from "@/lib/api";

export async function generateStaticParams() {
  const allTutorials = await getAllTutorials(false);

  return allTutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export default async function TutorialsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = await draftMode();
  // const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  const allTutorials = await getAllTutorials(isEnabled);
  const post = allTutorials[0]


  console.log('JSON.stringify(post.fields.author) => ', JSON.stringify(post.fields.author, null, 4))


  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <article>
        <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          {post.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {/* {post.author && (
            <Avatar name={post.fields.author.name} picture={post.fields.author.picture} />
          )} */}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={post.title} url={post.coverImage.url} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      {/* <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}
