import { Editor } from "novel";
import React from "react";

const page = () => {
  return (
    <div>
      <Editor
        className="prose max-w-full"
        editorProps={{
          attributes: {
            class:
              "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
          },
        }}
      />
    </div>
  );
};

export default page;
