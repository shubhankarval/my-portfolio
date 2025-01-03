export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "blog1" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Blog } = await import(`@/blogs/${slug}.mdx`);

  return <Blog />;
}
