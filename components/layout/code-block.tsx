"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
interface CodeBlockProps {
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
  };

  return (
    <div className=" rounded-xl">
      <div className="flex justify-between items-center p-4 border rounded-t-xl">
        <div className="flex space-x-2  ">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <button className="" onClick={copy}>
          {isCopied ? (
            <svg
              className="with-icon_icon__MHUeb"
              data-testid="geist-icon"
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              width={24}
              aria-hidden="true"
              style={{ color: "currentcolor", width: "20px", height: "20px" }}
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          ) : (
            <svg
              className="with-icon_icon__MHUeb"
              data-testid="geist-icon"
              fill="none"
              height={20}
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              width={20}
              aria-hidden="true"
            >
              <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
            </svg>
          )}
        </button>
      </div>

      <SyntaxHighlighter language="javascript" style={gruvboxDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
