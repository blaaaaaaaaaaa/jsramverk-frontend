// React
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "trix";
import "trix/dist/trix.css";

// Components
import Header from "./components/Header";
import NewDoc from "./components/NewDoc";
import UpdateDoc from "./components/UpdateDoc";

// Models
import docsModel from "./models/docs";

// Styles
import "./App.css";

function App() {
  const [docs, setDocs] = useState([]);

  async function fetchDocs() {
    const allDocs = await docsModel.getAllDocs();

    setDocs(allDocs);
  }

  useEffect(() => {
    (async () => {
        await fetchDocs();
    })();
}, []);

  return (
    <div>
      <div className="App">
        <h1 className="editor-header">Text Editor</h1>
      </div>
        <div className='trix-container'>
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="docs/create" element={<NewDoc submitFunction={fetchDocs} />} />
                <Route path="docs/update" element={<UpdateDoc submitFunction={fetchDocs} docs={docs} />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
