"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });
// import { generateHTML } from "@tiptap/react";
// import { defaultExtensions } from "@/lib/default-extensions";
// import UploadImagesPlugin from "@/ui/editor/plugins/upload-images";
// import UpdatedImage from "./updated-image";
// import { BlockNoteEditor } from "@blocknote/core";
// import {
//   BlockNoteView,
//   lightDefaultTheme,
//   useBlockNote,
// } from "@blocknote/react";
// import "@blocknote/core/style.css";

const page = () => {
  // let json: any;
  // if (typeof window !== "undefined" && window.localStorage) {
  //   json = localStorage.getItem("editor");
  //   json = JSON.parse(json);
  //   console.log("first", json);
  // }

  // const editor: BlockNoteEditor | null = useBlockNote({
  //   editable: false,
  //   // initialContent: json,
  // });

  let json: any;
  if (typeof window !== "undefined" && window.localStorage) {
    json = localStorage.getItem("editor");
    json = JSON.parse(json);
    // console.log("first", json);
  }
  return (
    <div className=" flex flex-col items-center p-24 w-full">
      <Editor content={json} isEditable={false} />
      {/* <BlockNoteView editor={editor} theme={lightDefaultTheme} /> */}
    </div>
  );
};

export default page;
