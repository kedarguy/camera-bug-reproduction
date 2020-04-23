import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/react";
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera Bug Android reproduction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          onClick={() => {
            console.log("clicked");
          }}
        >
          Get Photo
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
