import { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumeportfolio from '../assets/resumeportfolio.pdf';

function ResumePage() {
  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile] = useState(resumeportfolio);

  return (
    <div className='pdf-container'>
      <div className='viewer'>
        {/* render this if we have a pdf file */}
        {pdfFile && (
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
            <Viewer
              defaultScale={2}
              fileUrl={resumeportfolio}
              plugins={[defaultLayoutPluginInstance]}
            ></Viewer>
          </Worker>
        )}
      </div>
    </div>
  );
}

export default ResumePage;
