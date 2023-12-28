"use client";
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

export default function Editor({
  isEditable,
  content,
}: {
  isEditable: boolean;
  content: any;
}) {
  const { themeMode } = useTheme();

  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (e) => {
      localStorage.setItem("editor", JSON.stringify(e.topLevelBlocks));
    },
    initialContent: content,
    editable: isEditable,
  });

  return (
    <BlockNoteView
      className="w-full"
      editor={editor}
      theme={themeMode === "dark" ? "dark" : "light"}
    />
  );
}
