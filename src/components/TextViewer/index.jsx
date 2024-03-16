import React from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

export default function TextViewer({ content }) {
  if (content) {
    return <Viewer key={content} initialValue={content} />;
  }
}
