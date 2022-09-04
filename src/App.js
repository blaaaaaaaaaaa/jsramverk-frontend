// import logo from './logo.svg';
import React, { useState } from 'react';
import { TrixEditor } from 'react-trix';
import './App.css';
import 'trix';
import "trix/dist/trix.css";

function App() {
  const [newHtml, setHtml] = useState("");

  const handlerChange = (html) => {
    setHtml(html);
  };
  const handlerSave = () => {
    console.log(newHtml);
  };

  return (
    <>
      <div className="App">
        <h1 className="editor-header">Text Editor</h1>
        <button type="button" className="trix-button" data-trix-attribute="save" title="Save" tabIndex="-1" onClick={handlerSave}>Save</button>
      </div>
        <div className='trix-container'>
          <TrixEditor
          className='trix-content'
          autoFocus={true}
          placeholder='Write something here'
          value=''
          onChange={handlerChange}
        />
      </div>
    </>
  );
}

export default App;
