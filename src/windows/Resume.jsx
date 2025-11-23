import WindowWrapper from "#/hoc/WindowWrapper";
import { WindowControls } from "#/components";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <>
            <div className="window-header flex items-center justify-between p-2">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a href="public\files\resume.pdf" download="resume.pdf" className="cursor-pointer" title="Download resume">
                    <Download className="icon" />
                </a>
            </div>
            <div className="resume-pdf">
                <Document file="files/resume.pdf" >
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;

// export