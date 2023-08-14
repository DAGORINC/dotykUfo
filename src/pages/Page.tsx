import { IonContent, IonPage } from '@ionic/react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import filee from '../sample.pdf';
import styles from './Page.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pagee: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <IonPage>
      <IonContent>
        <center>
          <div style={{ height: '100vh', overflowY: 'scroll' }}>
            <Document file={filee} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                )
              )}
            </Document>
          </div>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default Pagee;
