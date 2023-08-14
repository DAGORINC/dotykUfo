import { IonContent, IonPage } from '@ionic/react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import styles from './Page.module.css'
import { useParams } from 'react-router';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface IParams {
    fileName: string,
}

const PdfPage: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const params = useParams<IParams>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  console.log(params.fileName);
  

  return (
    <IonPage>
      <IonContent>
        <center>
          <div style={{ height: '100vh', overflowY: 'scroll' }}>
            <Document file={`../../fakeApi/pdfFiles?${params.fileName}`} onLoadSuccess={onDocumentLoadSuccess}>
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

export default PdfPage;
