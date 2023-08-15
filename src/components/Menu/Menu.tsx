import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonMenu,
  IonToolbar,
} from '@ionic/react';

import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import styles from './Menu.module.css';
import { useEffect, useState } from 'react';
import IFactory from '../../interfaces/IFactory';
import FakeApiController from '../../fakeApi/FakeApi';
import FilesItem from './FilesItem/FilesItem';


const Menu: React.FC = () => {
  const location = useLocation();

  const [factories, setFactories] = useState<IFactory[]>([])

  const getAllFactories = async () => {
    const factories = await FakeApiController.getAllFactories();

    setFactories(factories)
  }



  useEffect(() => {
    getAllFactories();
  }, [

  ])

  return (
    <IonMenu contentId="main" type="overlay">
      <IonToolbar>
        <Link to={'/'}>
          <IonImg src='/logo.PNG' />
        </Link>
      </IonToolbar>
      <IonContent className={styles.content}>

        <IonAccordionGroup >
          {
            factories.map((factory, index) => {
              return (
                <IonAccordion
                  key={index}
                  className={styles.accordion}
                >
                  <IonItem key={index} slot="header" color="dark" >
                    <IonLabel>{factory.name}</IonLabel>
                  </IonItem>
                  <FilesItem
                    factory={factory.name}
                  />
                </IonAccordion>)
            })
          }
        </IonAccordionGroup>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
