import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; // Importamos la librería para renderizar Markdown

const MarkdownRenderer = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Función para cargar el archivo .md
    fetch(file)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error cargando el archivo .md:', error));
  }, [file]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
