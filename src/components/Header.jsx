import { Play, CodeXml } from "lucide-react";

export default function Header(props) {
  return (
    <div className="bg-pink-400 rounded-xl py-3 shadow-lg shadow-gray-700 px-4 my-4 mx-2">
      <div className="flex justify-between">
        <p className="flex gap-2 items-center font-bold text-xl"><CodeXml /> Side Code</p>
        <div className="flex gap-4">
          <select name="languages" className="border px-4 py-1 rounded font-semibold" onChange={props.selectLanguage}>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="bash">Bash</option>
          </select>
          <Play onClick={props.runCode} />
        </div>
      </div>
    </div>
  );
}
