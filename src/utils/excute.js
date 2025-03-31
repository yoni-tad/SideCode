export default async function executeCode(language, code) {
  const response = await fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language: language,
      version: "*", // Uses the latest version
      files: [{ content: code }],
    }),
  });

  const data = await response.json();
  return data.run.output || data.run.stderr;
}
