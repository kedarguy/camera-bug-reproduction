import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/react";
import { Plugins, CameraResultType, CameraDirection } from "@capacitor/core";

import React from "react";
import "./Home.css";

const { Camera } = Plugins;

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
          onClick={async () => {
            console.log("clicked");
            try {
              const image = await Camera.getPhoto({
                quality: 60,
                allowEditing: false,
                width: 300,
                direction: CameraDirection.Front,
                resultType: CameraResultType.Base64
              });
              console.log("succesfuly got image", image);
            } catch (error) {
              console.log("error: ", error);
            }
          }}
        >
          Get Photo
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
