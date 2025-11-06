import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";

import { Markdown } from "@/lib/markdown";
import { getAllTutorials, getTutorialBySlug } from "@/lib/api";

export async function generateStaticParams() {
  const allTutorials = await getAllTutorials(false);


  return allTutorials.map((tutorial: any) => {
    return {
      slug: tutorial.fields.slug || tutorial.fields.title.replaceAll(' ', '-').toLowerCase(),
    }
  })
}

export default async function TutorialsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = await draftMode();
  const resolvedParams = await params;
  
  const tutorial = await getTutorialBySlug(resolvedParams.slug, isEnabled);

// console.log('JSON.stringify(tutorial.fields.body) => ', JSON.stringify(tutorial.fields.body, null, 4))

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
          {tutorial.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {tutorial.fields.author && (
            <Avatar name={tutorial.fields.author.name} picture={tutorial.fields.author.picture} />
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={tutorial.title} url={tutorial.fields.bannerImage.fields.file.url} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {tutorial.author && (
              <Avatar name={tutorial.author.name} picture={tutorial.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={tutorial.sys.createdAt} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown content={tutorial.fields.body} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      {/* <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}
