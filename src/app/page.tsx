"use client";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import * as diff from "diff";

export default function Home() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [diffResult, setDiffResult] = useState<diff.Change[]>([]);

  const handleCompare = () => {
    const differences = diff.diffLines(leftText, rightText);
    setDiffResult(differences);
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Diff Checker</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Original Text</h2>
          <div className="h-[400px] border border-gray-300 rounded-lg overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage="text"
              value={leftText}
              onChange={(value) => setLeftText(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Modified Text</h2>
          <div className="h-[400px] border border-gray-300 rounded-lg overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage="text"
              value={rightText}
              onChange={(value) => setRightText(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={handleCompare}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
          Compare
        </button>
      </div>

      {diffResult.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Differences</h2>
          <div className="space-y-2">
            {diffResult.map((part, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  part.added
                    ? "bg-green-100 text-green-800"
                    : part.removed
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100"
                }`}>
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {part.value}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
