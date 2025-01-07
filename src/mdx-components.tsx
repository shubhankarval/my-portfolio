import React from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    h4: ({ children }) => <Heading level={4}>{children}</Heading>,
    h5: ({ children }) => <Heading level={5}>{children}</Heading>,
    h6: ({ children }) => <Heading level={6}>{children}</Heading>,
    ...components,
  };
}

interface HeadingProps {
  level: number;
  children: React.ReactNode;
}

const Heading = ({ level, children }: HeadingProps) => {
  const sanitizeId = (text: string) => text.replace(/\s+/g, ""); // Replace spaces with dashes

  // Function to extract text from ReactNode
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return node.toString();
    if (React.isValidElement(node) && node.props.children) {
      return extractText(node.props.children); // Recursively extract text
    }

    return ""; // Default for other node types
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically select the heading tag

  const headingSize =
    level === 2 ? "3xl" : level === 3 ? "2xl" : level === 4 ? "xl" : "lg";

  return (
    <HeadingTag
      className={`text-${headingSize} font-semibold`}
      id={sanitizeId(extractText(children))}
    >
      <a href={`#${sanitizeId(extractText(children))}`}>{children}</a>
    </HeadingTag>
  );
};
