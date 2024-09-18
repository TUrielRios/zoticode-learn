// Lesson.jsx
import React, { useState } from 'react';
import CodeEditor from '../Components/CodeEditor/CodeEditor';
import styles from './Lesson.module.css';

const Lesson = () => {
  const [code, setCode] = useState({
    'index.html': '<!DOCTYPE html>\n<html>\n<head>\n<title>Preview</title>\n</head>\n<body>\n<h1>Hello, world!</h1>\n</body>\n</html>',
    'styles.css': 'body { font-family: Arial, sans-serif; }',
    'script.js': 'function saludo(){ return "Hola como estas?"; }\nsaludo();\n'
  });

  const [tasks] = useState([
    {
      id: 1,
      description: 'Crear una función que retorne "Hola como estas?"',
      expectedOutput: 'Hola como estas?',
      validator: (output) => output === 'Hola como estas?'
    }
  ]);

  const handleRunCode = (output) => {
    const isCorrect = tasks.every((task) => task.validator(output[0]));
  
    if (isCorrect) {
      alert("¡Bien hecho!");
    } else {
      alert("Incorrecto, sigue intentándolo.");
    }
  };
  
  return (
    <div className={styles.lessonContainer}>
      <div className={styles.readingSection}>
        <h2>Lección 1: Introducción a JavaScript</h2>
        <p>Aquí va el contenido de la lección...</p>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.description}</li>
          ))}
        </ul>
      </div>
      <div className={styles.editorSection}>
      <CodeEditor code={code} setCode={setCode} onRunCode={handleRunCode} />
      </div>
    </div>
  );
};

export default Lesson;
