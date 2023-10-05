import React, { useState } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { BiHelpCircle } from "react-icons/bi";
import "./MDEditor.css";
const help = {
  name: "help",
  keyCommand: "help",
  buttonProps: { "aria-label": "Insert help" },
  icon: (
    <svg viewBox="0 0 16 16" width="12px" height="12px">
      <BiHelpCircle />
    </svg>
  ),
  execute: (state, api) => {
    window.open("/", "_blank");
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
      <h3>Light</h3>
      <div data-color-mode="light">
        <MDEditor
          height={200}
          commands={[...commands.getCommands(), help]}
          value={value}
          onChange={setValue}
        />
      </div>
      <h3>Dark</h3>
      <div data-color-mode="dark">
        <MDEditor
          height={200}
          commands={[...commands.getCommands(), help]}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}

export default CustomMDEditor;
