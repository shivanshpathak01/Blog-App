import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCEEditor = ({ onChange }) => {
  const editorRef = useRef(null);

  return (
    <Editor
      apiKey={import.meta.env.VITE_TINY_MCE_KEY}// Use an API key or leave it empty for basic usage
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue="<p>Start writing here...</p>"
      init={{
        height: 400,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
      }}
      onEditorChange={onChange}
    />
  );
};

export default TinyMCEEditor;
