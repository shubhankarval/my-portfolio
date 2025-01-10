import createMDX from "@next/mdx";
import rehypeMdxProps from "rehype-mdx-code-props";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeMdxProps],
  },
});

export default withMDX(nextConfig);
