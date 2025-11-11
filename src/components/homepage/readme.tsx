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
    <div className="text-white text-shadow-lg prose prose-invert max-w-none m-2 px-8 py-2">
      <Mdx source={content} />
    </div>
  );
}
