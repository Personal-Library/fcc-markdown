import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import initialText from './defaultmd.js';
import gfm from 'remark-gfm';

const App = () => {
  const [text, setText] = useState(initialText);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div className="input wrapper">
        <textarea onChange={handleChange} value={text} id="editor"/>
      </div>
      <div className="output wrapper" id="preview">
        <ReactMarkdown source={text} plugins={[gfm]}/>
      </div>
    </div>
  );
};

export default App;