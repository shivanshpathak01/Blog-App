import React from 'react'
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react'

function Editor() {
  return (
    <div className="editor-wrapper">
      <TinyMCEEditor
        apiKey={import.meta.env.VITE_TINY_MCE_API}
        init={{
          plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 
            'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed'
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        initialValue="Welcome to TinyMCE!"
      />
    </div>
  )
}

export default Editor
