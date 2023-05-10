import { useState } from 'react';

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
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
