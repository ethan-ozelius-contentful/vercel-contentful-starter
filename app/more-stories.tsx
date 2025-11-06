import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

function TutorialPreview({
  title,
  bannerImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  bannerImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {

  // console.log(`title => `, title)
  console.log(`bannerImage => `, bannerImage.fields.file)
  
  return (
    <div key={`${title}`}>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={bannerImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}

export default function moreTutorials({ moreTutorials }: { moreTutorials: any[] }) {

  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {moreTutorials.map((tutorial) => {

         return (
            <TutorialPreview
              key={tutorial.slug}
              title={tutorial.title}
              bannerImage={tutorial.bannerImage}
              date={tutorial.date}
              author={tutorial.author}
              slug={tutorial.slug}
              excerpt={tutorial.excerpt}
            />
          )
        })}
      </div>
    </section>
  );
}
