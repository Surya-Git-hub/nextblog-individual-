"use client"; // this registers <Editor> as a Client Component
import {
  BlockNoteEditor,
  Block,
  InlineContentSchema,
  BlockSchema,
  StyleSchema,
} from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import useTheme from "@/context/theme";

// Our <Editor> component we can reuse later
export default function Editor({
  isEditable,
  content,
}: {
  isEditable: boolean;
  content: any;
}) {

    const { themeMode} = useTheme();
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (e) => {
      localStorage.setItem("editor", JSON.stringify(e.topLevelBlocks));
    },
    initialContent: content,
    editable: isEditable,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={themeMode==="dark"?"dark":"light"}/>;
}
