import React, { useState, useRef, useEffect } from 'react';
import styles from './Console.module.css';

const Console = ({ code, onRunCode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const iframeRef = useRef(null);

  const handleInputChange = (e) => setInput(e.target.value);

  const evaluateCode = (codeToEvaluate) => {
    try {
      const result = iframeRef.current.contentWindow.eval(codeToEvaluate);
      return result !== undefined ? result : 'undefined';
    } catch (error) {
      return String(error);
    }
  };

  const handleExecute = () => {
    const results = evaluateCode(input);
    const newOutputs = results.map((result, index) => ({ command: input.split(';')[index], result }));
    setOutput((prev) => [...prev, ...newOutputs]);
    setInput('');
  };

  const handleRunCode = () => {
    const result = evaluateCode(code);
    setOutput((prev) => [...prev, { command: code, result: String(result) }]);
    if (onRunCode) {
      onRunCode([result]);
    }
  };
  const handleClear = () => setOutput([]);

  useEffect(() => {
    const messageHandler = (event) => {
      if (event.data.command) {
        setOutput((prev) => [...prev, { command: event.data.command, result: String(event.data.result) }]);
      }
    };

    window.addEventListener('message', messageHandler);

    // Cleanup function para remover el listener cuando el componente se desmonte
    return () => window.removeEventListener('message', messageHandler);
  }, []);

  return (
    <div className={styles.consoleContainer}>
      <div className={styles.consoleOutput}>
        {output.map((entry, index) => (
          <div key={index}>
            <span>{entry.result}</span>
          </div>
        ))}
      </div>
      <input
        className={styles.consoleInput}
        value={input}
        onChange={handleInputChange}
        placeholder="Escribe un comando..."
      />
      <div className={styles.buttonContainer}>
        <button className={styles.submitButton} onClick={handleExecute}>
          Ejecutar
        </button>
        <button className={styles.playButton} onClick={handleRunCode}>
          Play
        </button>
        <button className={styles.clearButton} onClick={handleClear}>
          Limpiar
        </button>
      </div>
      {/* iframe para el contexto de ejecución seguro */}
      <iframe ref={iframeRef} style={{ display: 'none' }} title="sandbox" />
    </div>
  );
};

export default Console;
