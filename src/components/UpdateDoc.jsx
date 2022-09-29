// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "trix";
import "trix/dist/trix.css";
import { TrixEditor } from "react-trix";

// Models
import docsModel from "../models/docs";

// Styles
import "../App.css";

export default function UpdateDoc({ submitFunction, docs }) {
    const [getCurrentDoc, setCurrentDoc] = useState([]);

    function setEditorContent(content) {
        let element = document.querySelector("trix-editor");

        element.value = "";
        element.editor.setSelectedRange([0, 0]);
        element.editor.insertHTML(content);
    }


    async function fetchDoc() {

        let selectElement = document.querySelector('#select');
        let output = selectElement.options[selectElement.selectedIndex].value;
        let singleDocId = docs[output]._id;

        const singleDocs = await docsModel.getSingleDocs(singleDocId);

        setEditorContent(singleDocs.html);
        setCurrentDoc(singleDocs);
    };

    async function updateDocs() {
        let element = document.querySelector("trix-editor");

        let idDoc = getCurrentDoc._id
        let nameDoc = getCurrentDoc.name
        let htmlDoc = element.innerHTML
        let nameAndText = {
            name: nameDoc,
            html: htmlDoc
        }
        await docsModel.update(nameAndText, idDoc);

        submitFunction();
        alert(`Document ${nameDoc} was successfully saved!`)
    }

    function handleChangeName(event) {
        let newObject = {};
        newObject[event.target.name] = event.target.value;
        setCurrentDoc({ ...getCurrentDoc, ...newObject });
    }
    
    function button() {
        let btn = document.querySelector("button")
        btn.removeAttribute("hidden"); 
        document.querySelector(".title").disabled = false
    }

    function twoCalls() {
        fetchDoc()
        button()
    };

    return (
        <div className="container">
            <div className="wrapper-container">
                <Link className="link" to="/">Back to home</Link>
            </div>
            <div className="wrapper-container">
                <select id="select"
                    onChange={twoCalls} value="value"
                >
                    <option className="option" value="-99" key="0">{getCurrentDoc.name || "Select document"}</option>
                    {docs.map((doc, index) => <option id={doc._id} value={index} key={index}>{doc.name}</option>)}
                </select>
                <button className="nav-btn" onClick={updateDocs} hidden>Save updates</button>
            </div>
            <div className="wrapper-container">
                <h3>Document name:</h3>
                <input className="title" onChange={handleChangeName} disabled={true} name="name" value={getCurrentDoc.name || ""} />
            </div>
            <TrixEditor
                className="trix-content"
                autoFocus={true}
                name="html"
            />
        </div >
    );
}