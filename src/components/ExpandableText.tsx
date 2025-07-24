import React, { useState } from "react";

interface ExpandableProps {
  children: string;
  maxChar?: number;
}

function ExpandableText({ children, maxChar = 100 }: ExpandableProps) {
  const [isExpandable, setExpandale] = useState(false);
  if (children.length <= maxChar) return <p>{children}</p>;

  const text = isExpandable ? children : children.substring(0, maxChar);

  return (
    <p>
      {text}...
      <button onClick={() => setExpandale(!isExpandable)}>
        {isExpandable ? "Less" : "More"}
      </button>
    </p>
  );
}

export default ExpandableText;
