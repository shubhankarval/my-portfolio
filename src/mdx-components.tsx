import type { MDXComponents } from "mdx/types";
import Heading from "@components/mdx/Heading";
import Code from "@components/mdx/Code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-3 text-4xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    h4: ({ children }) => <Heading level={4}>{children}</Heading>,
    h5: ({ children }) => <Heading level={5}>{children}</Heading>,
    h6: ({ children }) => <Heading level={6}>{children}</Heading>,
    p: ({ children }) => <p className="mb-3">{children}</p>,
    ol: ({ children }) => <p className="list-decimal">{children}</p>,
    ul: ({ children }) => <p className="list-disc">{children}</p>,
    pre: (props) => <Code {...props}>{props.children}</Code>,
    ...components,
  };
}
