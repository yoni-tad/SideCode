import CodeEditor from "./components/CodeEditor";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import executeCode from "./utils/excute";
import Output from "./components/Output";

export default function App() {
  const [editor, setEditor] = useState();
  const [output, setOutput] = useState();
  const [language, setLanguage] = useState("javascript");

  function runCode() {
    if (editor) {
      try {
        setOutput(executeCode(language, editor));
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }
  }

  function handleChange(event) {
    setEditor(event);
  }

  function selectLanguage(event) {
    setLanguage(event.target.value);
  }

  function downloadCode() {
    const blob = new Blob([editor], { type: "text/plain" });
    const link = document.createElement("a");

    let fileType;
    switch (language) {
      case "javascript":
        fileType = "js";
        break;
      case "python":
        fileType = "py";
        break;
      case "php":
        fileType = "php";
        break;
      case "java":
        fileType = "java";
        break;
      case "cpp":
        fileType = "cpp";
        break;
      case "csharp":
        fileType = "cs";
        break;
      case "bash":
        fileType = "sh";
        break;

      default:
        fileType = "txt";
        break;
    }

    link.href = URL.createObjectURL(blob);
    link.download = "side-code." + fileType;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="h-screen flex flex-col">
      <Header runCode={runCode} selectLanguage={selectLanguage} />
      <CodeEditor handleChange={handleChange} />
      <Output output={output} downloadCode={downloadCode} />
    </div>
  );
}
