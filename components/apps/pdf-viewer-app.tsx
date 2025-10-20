"use client"

import { motion } from "framer-motion"
import { Document, Page, pdfjs } from "react-pdf"
import { useState, useEffect } from "react"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export function PDFViewerApp() {
  const [numPages, setNumPages] = useState<number>(0)
  const [pdfFile, setPdfFile] = useState<string>("/pdfs/Resume.pdf")
  const [windowWidth, setWindowWidth] = useState<number>(800)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-full overflow-y-auto bg-white p-8 text-black"
    >
      <div className="mx-auto max-w-4xl">
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
          loading={<div className="text-center">Loading PDF...</div>}
          error={<div className="text-center text-red-500">Failed to load PDF!</div>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              className="mb-4 mx-auto"
              width={Math.min(windowWidth - 64, 800)}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          ))}
        </Document>
      </div>
    </motion.div>
  )
      </div>
    </motion.div>
  )
      </div>
    </motion.div>      
      </div>
    </motion.div>
  )
}
