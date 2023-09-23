import React, { useState } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";

const help = {
  name: "help",
  keyCommand: "help",
  buttonProps: { "aria-label": "Insert help" },
  icon: (
    <svg viewBox="0 0 16 16" width="12px" height="12px">
      {/* SVG path code */}
    </svg>
  ),
  execute: (state, api) => {
    window.open("https://www.javatpoint.com/cpp-vs-java", "_blank");
  },
};

function CustomMDEditor() {
  const mkdStr = `## Markdown Editor`;
  const [value, setValue] = useState(mkdStr);

  return (
    <div className="container">
      <h3>Auto</h3>
      <MDEditor
        height={200}
        value={value}
        commands={[...commands.getCommands(), help]}
        onChange={setValue}
      />
      {/* Include additional variations of the editor as needed */}
    </div>
  );
}

export default CustomMDEditor;
