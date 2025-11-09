import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Image from "next/image";
import Link from "next/link";

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-l font-semibold mt-4 mb-2" {...props} />
  ),

  a: (props: any) => {
    const href = String(props.href || "#");
    const isExternal = /^https?:\/\//.test(href);
    return isExternal ? (
      <a {...props} rel="noopener noreferrer" target="_blank" />
    ) : (
      <Link href={href} {...props} />
    );
  },

  img: (props: any) => (
    <span className="block relative my-4">
      <Image
        src={props.src}
        alt={props.alt || ""}
        width={1200}
        height={630}
        className="h-auto w-full"
      />
    </span>
  ),

  pre: (props: any) => (
    <pre className="rounded-xl p-4 overflow-x-auto" {...props} />
  ),

  code: (props: any) => <code className="rounded px-1 py-0.5" {...props} />,
};

const prettyCodeOptions = {
  theme: "github-dark", // you can replace this with any shiki theme name
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        },
      }}
    />
  );
}
