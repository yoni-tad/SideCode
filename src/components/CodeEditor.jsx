import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function CodeEditor(props) {
  return (
    <CodeMirror
      extensions={javascript()}
      height="350px"
      className="text-lg"
      theme="dark"
      onChange={props.handleChange}
    />
  );
}
