"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const page = () => {
  let json: any;
  if (typeof window !== "undefined" && window.localStorage) {
    json = localStorage.getItem("editor");
    json = JSON.parse(json);
  }

  return (
    <div className=" flex flex-col items-center p-24 w-full">
      <Editor content={json} isEditable={false} />
    </div>
  );
};

export default page;
