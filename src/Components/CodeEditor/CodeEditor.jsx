// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import MonacoEditor from 'react-monaco-editor';
// import SplitPane from 'react-split-pane';
// import { Terminal } from 'xterm';
// import { FitAddon } from 'xterm-addon-fit';
// import styles from './CodeEditor.module.css';
// import 'xterm/css/xterm.css';

// const CodeEditor = () => {
//   const [files, setFiles] = useState({
//     'index.html': '<!DOCTYPE html>\n<html>\n<head>\n<title>Live Preview</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>',
//     'styles.css': 'body { font-family: Arial, sans-serif; background-color: #f0f0f0; }'
//   });
//   const [activeFile, setActiveFile] = useState('index.html');
//   const [output, setOutput] = useState('');
//   const terminalRef = useRef();
//   const terminalContainerRef = useRef();
//   const fitAddon = useRef(new FitAddon());

//   const initializeTerminal = useCallback(() => {
//     const terminal = new Terminal();
//     terminal.loadAddon(fitAddon.current);
//     terminal.open(terminalContainerRef.current);
//     fitAddon.current.fit();

//     terminal.writeln('Terminal activa...\n');
//     terminalRef.current = terminal;

//     // Ajustar el tamaño de la terminal al cambiar el tamaño de la ventana
//     window.addEventListener('resize', handleResize);
//     return () => {
//       terminal.dispose();
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleResize = () => {
//     if (fitAddon.current) {
//       fitAddon.current.fit();
//     }
//   };

//   useEffect(() => {
//     initializeTerminal();
//   }, [initializeTerminal]);

//   const handleCodeChange = (newCode) => {
//     setFiles((prevFiles) => ({
//       ...prevFiles,
//       [activeFile]: newCode,
//     }));
//   };

//   const handleFileChange = (file) => {
//     setActiveFile(file);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const htmlContent = files['index.html'];
//       const cssContent = `<style>${files['styles.css']}</style>`;
//       setOutput(htmlContent.replace('</head>', `${cssContent}</head>`));
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [files]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.editorSection}>
//         <div className={styles.editor}>
//           <div>
//             <button onClick={() => handleFileChange('index.html')}>index.html</button>
//             <button onClick={() => handleFileChange('styles.css')}>styles.css</button>
//           </div>
//           <MonacoEditor
//             width="100%"
//             height="calc(100% - 40px)"
//             language={activeFile.endsWith('.html') ? 'html' : 'css'}
//             theme="vs-dark"
//             value={files[activeFile]}
//             onChange={handleCodeChange}
//             options={{ automaticLayout: true, minimap: { enabled: false } }}
//           />
//         </div>
//         <div ref={terminalContainerRef} className={styles.terminal} />
//       </div>
//       <iframe
//         title="Preview"
//         srcDoc={output}
//         className={styles.preview}
//       />
//     </div>
//   );
// };

// export default CodeEditor;
