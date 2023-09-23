import React, { useState, useEffect, useRef } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "@wcj/dark-mode";
import "./MDEditor.css"; // Import the CSS file

const code = `# hi this is working`;

export default function MDEditor() {
  const [markdownVal, setMarkdownVal] = useState(code);
  console.log("markdownVal:", markdownVal);
  return (
    <div className="container">
      <dark-mode light="Light" dark="Dark"></dark-mode>
      <h3>Auto</h3>
      <div>
        <MarkdownEditor
          value={markdownVal}
          onChange={(value) => {
            setMarkdownVal(value);
          }}
        />
      </div>
    </div>
  );
}
