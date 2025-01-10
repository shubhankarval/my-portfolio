"use client";
import { type ReactNode } from "react";
import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { cn, extractText } from "@lib/utils";

interface CodeProps {
  children: ReactNode;
  language?: string;
  lines?: (string | number)[];
}

export default function Code({ children, language = "js", lines }: CodeProps) {
  return (
    <CodeBlock code={extractText(children)} language={language} lines={lines}>
      <CodeBlock.Code className="rounded-xl bg-gray-900 py-6 shadow-lg">
        {({ isLineHighlighted }) => (
          <div
            className={cn(
              "table-row",
              lines && (isLineHighlighted ? "bg-violet-500/30" : "opacity-60"),
            )}
          >
            <CodeBlock.LineNumber
              className={`table-cell select-none pl-6 pr-4 text-right text-sm ${
                isLineHighlighted ? "text-gray-300" : "text-gray-500"
              }`}
            />
            <CodeBlock.LineContent className="table-cell w-full pr-6">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        )}
      </CodeBlock.Code>
    </CodeBlock>
  );
}
