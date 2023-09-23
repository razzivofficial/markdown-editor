// import MarkdownEditor from "@uiw/react-markdown-editor";
// import "@wcj/dark-mode";
// import { useState } from "react";
// import "./App.css";

// const code = `#hi this is working`;

import Testing from "./components/MDEditor/MDEditor";

export default function App() {
  // const [markdownVal, setMarkdownVal] = useState(code);
  // console.log("markdownVal:", markdownVal);
  return (
    <div>
      <Testing />
      {/* <dark-mode light="Light" dark="Dark"></dark-mode>
      <h3>Auto</h3>
      <div className="App">
        <MarkdownEditor
          value={markdownVal}
          onChange={(value) => {
            setMarkdownVal(value);
          }}
        />
      </div>
      <h3>Light</h3>
      <div className="App" data-color-mode="light">
        <MarkdownEditor
          value={markdownVal}
          onChange={(value) => {
            setMarkdownVal(value);
          }}
        />
      </div>
      <h3>Dark</h3>
      <div className="App" data-color-mode="dark">
        <MarkdownEditor
          value={markdownVal}
          onChange={(value) => {
            setMarkdownVal(value);
          }}
        />
      </div> */}
    </div>
  );
}
