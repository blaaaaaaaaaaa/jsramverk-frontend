// React
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import NewDoc from "./components/NewDoc";
import UpdateDoc from "./components/UpdateDoc";

// Models
import docsModel from "./models/docs";

// Styles
import "./App.css";

export default function App() {
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
        <div className="trix-container">
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/create" element={<NewDoc submitFunction={fetchDocs} />} />
            <Route path="/update" element={<UpdateDoc submitFunction={fetchDocs} docs={docs} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
