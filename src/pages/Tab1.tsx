import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

      
    <IonCard>
      <img alt="Profile of user" src="../src/assets/img/profile.avif" />
      <IonCardHeader>
        <IonCardTitle>Rica Lucino</IonCardTitle>
        <IonCardSubtitle>BSIT 3rd Year</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Quote: SOS, In need of patience</IonCardContent>
    </IonCard>
  
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
