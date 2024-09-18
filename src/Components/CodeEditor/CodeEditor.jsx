import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import Console from '../Console/Console'
import styles from './CodeEditor.module.css';

const defaultFiles = {
  'index.html': '<!DOCTYPE html>\n<html>\n<head>\n<title>Preview</title>\n</head>\n<body>\n<h1>Hello, world!</h1>\n</body>\n</html>',
  'styles.css': 'body { font-family: Arial, sans-serif; }',
  'script.js': 'console.log("Hello, world!");',
};

function CodeEditor({ code, setCode, onRunCode }) {
  const [files, setFiles] = useState(defaultFiles);
  const [activeFile, setActiveFile] = useState('index.html');
  const [newFileName, setNewFileName] = useState('');

  const handleEditorChange = (value) => {
    setFiles({ ...files, [activeFile]: value });
  };

  const createFile = () => {
    if (newFileName && !files[newFileName]) {
      setFiles({ ...files, [newFileName]: '' });
      setActiveFile(newFileName);
      setNewFileName('');
    }
  };

  const deleteFile = (fileName) => {
    const updatedFiles = { ...files };
    delete updatedFiles[fileName];
    setFiles(updatedFiles);
    if (fileName === activeFile) {
      setActiveFile(Object.keys(updatedFiles)[0] || '');
    }
  };

  const resetToDefault = () => {
    setFiles(defaultFiles);
    setActiveFile('index.html');
  };

  const handleRunCode = (results) => {
    if (onRunCode) {
      onRunCode(results);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.fileList}>
        {Object.keys(files).map((fileName) => (
          <div key={fileName} className={styles.fileItem}>
            <button
              className={styles.fileButton}
              onClick={() => setActiveFile(fileName)}
            >
              {fileName}
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => deleteFile(fileName)}
            >
              &times;
            </button>
          </div>
        ))}
        <div className={styles.newFileContainer}>
          <input
            type="text"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
            placeholder="newfile.ext"
            className={styles.newFileInput}
          />
          <button onClick={createFile} className={styles.addButton}>+</button>
        </div>
        <button onClick={resetToDefault} className={styles.resetButton}>Reset to Default</button>
      </div>
      <div className={styles.editorAndConsoleSection}>
        <div className={styles.editorSection}>
          <MonacoEditor
            height="50vh"
            defaultLanguage={activeFile.endsWith('.js') ? 'javascript' : activeFile.endsWith('.css') ? 'css' : activeFile.endsWith('.html') ? 'html' : 'text'}
            theme="vs-dark"
            value={files[activeFile]}
            onChange={handleEditorChange}
            options={{
              selectOnLineNumbers: true,
              automaticLayout: true,
              wordWrap: 'on',
            }}
          />
          <div className={styles.previewSection}>
            <iframe
              className={styles.previewFrame}
              srcDoc={files['index.html']}
              title="Preview"
              sandbox="allow-scripts"
            />
          </div>
        </div>
        <Console code={files['script.js']} onRunCode={handleRunCode} />
      </div>
    </div>
  );
}

export default CodeEditor;
