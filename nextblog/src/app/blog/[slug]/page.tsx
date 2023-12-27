"use client";
import React, { useMemo } from "react";
import { generateHTML } from "@tiptap/react";
import { defaultExtensions } from "@/lib/default-extensions";
// import UploadImagesPlugin from "@/ui/editor/plugins/upload-images";
// import UpdatedImage from "./updated-image";

const page = () => {
  let json: any = localStorage.getItem("novel__content");
  json = JSON.parse(json);
  console.log("first", json);
  const output = useMemo(() => {
    return generateHTML(json, defaultExtensions);
  }, [json]);
  return (
    <div className=" flex flex-col items-center p-24 w-full">
      <div className="prose" dangerouslySetInnerHTML={{ __html: output }}></div>
    </div>
  );
};

export default page;
