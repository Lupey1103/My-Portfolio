import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

export default function Resume() {

    const [numPage, setNumPage] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPage}) {
        setNumPage(numPage);
        setPageNumber(1);
    }

  return (
    <div>
        <Document file="/Christian_Luperon_Resume_29-09-2022-02-30-30.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page height="1500" pageNumber={pageNumber} />
        </Document>
    </div>
  )
}
