import ContentfulImage from "../lib/contentful-image";
import Link from "next/link";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {

  console.log('ASDF JSON.stringify(title) => ', JSON.stringify(title, null, 4))
  console.log('ASDF JSON.stringify(url) => ', JSON.stringify(url, null, 4))
  // console.log('JSON.stringify(slug) => ', JSON.stringify(slug, null, 4))
  
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/tutorials/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
