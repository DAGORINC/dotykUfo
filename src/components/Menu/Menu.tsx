import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonItem,
  IonLabel,
  IonMenu,
} from '@ionic/react';

import { BsFileEarmarkPdf } from 'react-icons/bs'

import { useLocation } from 'react-router-dom';
import './Menu.css';
import { useEffect, useState } from 'react';
import IFactory from '../../interfaces/IFactory';
import FakeApiController from '../../fakeApi/FakeApi';
import IPdfFile from '../../interfaces/IPdfFile';
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

      <IonAccordionGroup>
        {
          factories.map((factory, index) => {
            return (
              <IonAccordion key={index}>
                <IonItem key={index} slot="header" color="light" >
                  <IonLabel>{factory.name}</IonLabel>
                </IonItem>
                <FilesItem 
                  factory={factory.name}
                />
              </IonAccordion>)
          })
        }
      </IonAccordionGroup>

    </IonMenu>
  );
};

export default Menu;
