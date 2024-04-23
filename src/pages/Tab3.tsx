import React, { useState } from 'react';
import { IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3 = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <h2>Click Counter</h2>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <h3>Clicks: {count}</h3>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton onClick={incrementCounter}>Click Me!</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Tab3;
