import { OutputData } from "@editorjs/editorjs";
import React from "react";

const editorjsHtml = require("editorjs-html");
const EditorjsToHtml = editorjsHtml();

type Props = {
  data: OutputData;
};

type ParsedContent = string | JSX.Element;

const EditorJsRenderer = ({ data }: Props) => {
  const html = EditorjsToHtml.parse(data) as ParsedContent[];

  return (
    <div className="prose max-w-full" key={data.time}>
      {html.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
};

export default EditorJsRenderer;
