import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `TakeNotes | ${title}`;
  }, [title]);
};

export { useDocumentTitle };
