// app/components/github-readme.tsx
import { Mdx } from "./mdx";

export default async function GitHubReadme() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Ajab-Betting/.github/refs/heads/main/profile/README.md",
    { next: { revalidate: 3600 } }, // revalidate every 1 hour
  );

  if (!res.ok) {
    return <div>Error fetching README.</div>;
  }

  const content = await res.text();

  return (
    <div className="text-white prose prose-invert max-w-none m-2 px-8 py-2 backdrop-blur-2xl bg-[rgba(0,0,0,0.1)] border-1 border-gray-600 ">
      <Mdx source={content} />
    </div>
  );
}
