import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonButton, IonAlert,
  IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
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

      <IonButton id="present-alert" expand="block">Quick Facts</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>

      <IonButton id="open-action-sheet" expand="block">Open action sheet</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    

    </IonCard>
  
      </IonContent>
    </IonPage>
  );
};

export default Profile;
