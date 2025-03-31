import { Download } from "lucide-react";

export default function Output(props) {
  return (
    <div className="flex-grow border  bg-gray-800">
      <p className="flex text-center bg-gray-900 py-2 px-2 my-4 mx-2 rounded-xl shadow-lg shadow-gray-700 text-xl font-bold text-white">
        <span className="flex-grow">Output</span>
        <Download onClick={props.downloadCode}/>
      </p>
      <pre className="text-white px-4 py-2 text-lg">
        {props.output}
      </pre>
    </div>
  );
}
