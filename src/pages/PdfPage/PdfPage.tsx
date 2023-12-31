import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import styles from './PdfPage.module.css'
import { useParams } from 'react-router';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface IParams {
  fileName: string,
  factoryName: string,
}

const PdfPage: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const params = useParams<IParams>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }



  return (
    <IonPage>
      <IonToolbar color='dark'>
        <IonTitle>{`${params.factoryName}  ${params.fileName}`}</IonTitle>
      </IonToolbar>
      <IonContent>
        <center>
          <div className={styles.documentContainer} style={{ height: '100vh', overflowY: 'scroll' }}>
            <Document file={`/PdfFiles/${params.factoryName}/${params.fileName}.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    width={700}
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
