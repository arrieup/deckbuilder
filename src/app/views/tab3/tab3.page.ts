import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CardFormComponent } from "../../components/card/card-form/card-form.component";
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton, CardFormComponent],
})
export class Tab3Page {
  constructor() {}

  showHelloToast = async () => {
    await Toast.show({
      text: 'Hello!',
    });
  };

}