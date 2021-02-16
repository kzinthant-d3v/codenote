import { useState, useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";

const CodeCell = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            onChange={(value) => setInput(value)}
            initialValue={
              "//Write some code for id=root div!" +
              "\n" +
              "//You can use React too, just import React and ReactDOM" +
              "\n" +
              "\n" +
              "let root = document.getElementById('root');"
            }
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
