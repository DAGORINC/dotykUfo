import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styles from './HomePage.module.css'
import { FC } from 'react';


interface HomePageProps {

}

const HomePage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='dark'>
            <IonTitle>Strona Startowa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='dark' className={styles.content}>
          <div className={styles.logoContainer}>
            <img src="/logo2.PNG" alt="Logo" className={styles.logo} />
          </div>
        </IonContent>
      </IonPage>
    );
  };

export default HomePage;
