import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { contentfulLoader } from "./contentful-image";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  title: string;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}

function RichTextAsset({
  id,
  asset,
}: {
  id: string;
  asset: Asset | undefined;
}) {

  // @ts-expect-error type does match reality
  if (asset?.file?.url) {
    // @ts-expect-error type does match reality
    return <Image loader={contentfulLoader} src={asset.file.url} layout="fill" alt={asset.title || ''} />;
  }

  return <p style={{ color: 'red' }}>image not found</p>;
}


const Text = ({ children }: { children: any }) => <p className="align-center">{children}</p>;

const ImageWrapper = ({ children }: { children: any }) => {

  return (
    <div className="relative w-full h-96 my-8">
      {/* @ts-ignore */}
      <RichTextAsset id={children.data.target.sys.id}  asset={children.data.target.fields}>{children}</RichTextAsset>
    </div>
  );
}


export function Markdown({ content }: { content: Content }) {
  // @ts-ignore
  return documentToReactComponents(content, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (children: any) => <ImageWrapper>{children}</ImageWrapper>,

        // console.log(`[ <Markdown> ] renderNode.EMBEDDED_ASSET() node => `, node )
        
        // return ( 
        //   <></>
        //   // <RichTextAsset
        //   //   id={node.data.target.sys.id}
        //   //   assets={content.links.assets.block}
        //   // />
        // )
      // },
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_2]: (node: any) => (<h2 className="mb-6 text-3xl font-bold">{node.children}</h2>),
      [BLOCKS.HEADING_3]: (node: any) => (<h3 className="mb-6 text-2xl font-bold">{node.children}</h3>),
      [BLOCKS.HEADING_4]: (node: any) => (<h4 className="mb-6 text-xl font-bold">{node.children}</h4>),
      // [BLOCKS.UL_LIST]: (node: any) => (<ul className="list-disc list-inside mb-6">{node.children}</ul>),
      // [BLOCKS.OL_LIST]: (node: any) => (<ol className="list-decimal list-inside mb-6">{node.children}</ol>),
      // [BLOCKS.LIST_ITEM]: (node: any) => (<li className="mb-2">{node.children}</li>),
      // [BLOCKS.QUOTE]: (node: any) => (<blockquote className="border-l-4 border-gray-300 pl-4 italic mb-6">{node.children}</blockquote>),
    },
  });
}
