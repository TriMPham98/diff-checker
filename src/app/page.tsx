"use client";

import { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import * as diff from "diff";
import * as monaco from "monaco-editor";

export default function Home() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [diffResult, setDiffResult] = useState<diff.Change[]>([]);

  const leftEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );
  const rightEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    isLeft: boolean
  ) => {
    if (isLeft) {
      leftEditorRef.current = editor;
    } else {
      rightEditorRef.current = editor;
    }
  };

  const clearDecorations = () => {
    if (leftEditorRef.current) {
      leftEditorRef.current.deltaDecorations([], []);
    }
    if (rightEditorRef.current) {
      rightEditorRef.current.deltaDecorations([], []);
    }
  };

  const handleCompare = () => {
    clearDecorations();
    const differences = diff.diffLines(leftText, rightText);
    setDiffResult(differences);

    let leftLineNumber = 1;
    let rightLineNumber = 1;

    differences.forEach((part) => {
      const lines = part.value.split("\n").length - 1;

      if (part.removed && leftEditorRef.current) {
        leftEditorRef.current.deltaDecorations(
          [],
          [
            {
              range: new monaco.Range(
                leftLineNumber,
                1,
                leftLineNumber + lines,
                1
              ),
              options: {
                isWholeLine: true,
                className: "bg-red-200 bg-opacity-40",
              },
            },
          ]
        );
        leftLineNumber += lines;
      } else if (part.added && rightEditorRef.current) {
        rightEditorRef.current.deltaDecorations(
          [],
          [
            {
              range: new monaco.Range(
                rightLineNumber,
                1,
                rightLineNumber + lines,
                1
              ),
              options: {
                isWholeLine: true,
                className: "bg-green-200 bg-opacity-40",
              },
            },
          ]
        );
        rightLineNumber += lines;
      } else {
        leftLineNumber += lines;
        rightLineNumber += lines;
      }
    });
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
              onMount={(editor) => handleEditorDidMount(editor, true)}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
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
              onMount={(editor) => handleEditorDidMount(editor, false)}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
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
