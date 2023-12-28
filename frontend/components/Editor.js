"use client"; // this registers <Editor> as a Client Component
import { getRandomUser } from "@/utils/randomuser";
import Link from 'next/link'
import { MdEdit, MdSave } from 'react-icons/md'
import publicUrl from '@/utils/publicUrl';
import React from "react";
import axios from "axios";
import EditorSidebar from "./EditorSidebar";
import EditorInfo from "./EditorInfo";
import EditorNav from "./EditorNav";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import * as Y from "yjs";
import { WebsocketProvider } from 'y-websocket';

// Our <Editor> component we can reuse later
export default function Editor({ data, id }) {
    //content is the doc where docId == id
    const content = data.content;
    const initData = content.map((block) => {
        return {
            id: `${block.id}`,
            type: `${block.type}`,
            content: `${block.content}`
        };
    });
    // console.log("initData", initData);
    const doc = new Y.Doc();
    const provider = new WebsocketProvider(`ws://localhost:1234`, `room-${id}`, doc);
    const editor = useBlockNote({
        initialContent: initData,
        collaboration: {
            provider,
            // Where to store BlockNote data in the Y.Doc:
            fragment: doc.getXmlFragment("document-store"),
            // Information (name and color) for this user:
            user: getRandomUser(),
        },
        onEditorContentChange: (editor) => {
            //To handkle changes
            console.log(provider)
            return;
        }
    });

    const handleSave = async () => {
        // const note = localStorage.getItem("editorContent");
        const res = axios.put(`${publicUrl()}/note/${id}`, {
            content: editor.topLevelBlocks,
        });
        // console.log(note);
        console.log("saved");
        console.log(editor.topLevelBlocks)
    };



    // Renders the editor instance using a React component.
    return (
        <div>
            <EditorNav handleSave={handleSave} />
            <div className="flex">
                <EditorSidebar active={data.docId} />
                <div className="w-8/12 ">
                    <div className="conatiner  mx-auto py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
                        <BlockNoteView editor={editor} theme={"light"} />
                    </div>
                </div>
                <EditorInfo tags={data.tags} category={data.category} />
            </div>
        </div>
    );
};