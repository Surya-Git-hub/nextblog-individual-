"use client";
import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const EditorBlock = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

const page:NextPage = () => {
  const [data, setData] = useState<OutputData>();

  return (
    <div className="container max-w-4xl">
    <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
    </div>
  );
};

export default page;
